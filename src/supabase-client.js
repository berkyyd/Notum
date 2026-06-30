(function () {
  const config = window.NOTUM_SUPABASE || {};
  const isConfigured = Boolean(config.url && config.anonKey && window.supabase);
  const client = isConfigured ? window.supabase.createClient(config.url, config.anonKey) : null;
  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  let saveTimer = null;

  const today = () => new Date().toISOString().slice(0, 10);
  const isRemoteUserId = (value) => UUID_RE.test(String(value || ""));
  const isRemoteNote = (note) => note && (!note.sellerId || isRemoteUserId(note.sellerId));
  const isStudentEmail = (email) => /(^|\.)edu(\.|$)/i.test(String(email || "").trim().split("@")[1] || "");
  const isAdminEmail = (email) => String(email || "").trim().toLocaleLowerCase("tr") === "bdemircanli15@gmail.com";

  function profileFromRow(row) {
    return {
      id: row.id,
      name: row.name || row.email || "Notum kullanicisi",
      email: row.email || "",
      role: row.role || "student",
      university: row.university || "",
      faculty: row.faculty || "",
      department: row.department || "",
      bio: row.bio || "",
      profileColor: row.profile_color || "",
      avatarData: row.avatar_data || "",
      emailVerified: Boolean(row.email_verified),
      eduVerified: Boolean(row.edu_verified),
      adminStats: row.admin_stats || {},
      badgeOverrides: row.badge_overrides || [],
      createdAt: row.created_at
    };
  }

  function noteFromRow(row) {
    return {
      id: row.id,
      sellerId: row.seller_id,
      title: row.title,
      description: row.description,
      university: row.university,
      faculty: row.faculty,
      department: row.department,
      course: row.course,
      instructor: row.instructor,
      fileName: row.file_name,
      fileType: row.file_type,
      fileMime: row.file_mime,
      fileStored: Boolean(row.file_path),
      filePath: row.file_path || "",
      pageCount: row.page_count || 1,
      selectedPreviewPages: row.selected_preview_pages || [],
      price: Number(row.price || 0),
      previewPages: row.preview_pages || 3,
      status: row.status || "pending",
      rejectionReason: row.rejection_reason || "",
      aiSummary: row.ai_summary || "",
      watermarkTemplate: row.watermark_template || "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
      preview: row.preview || [],
      sales: row.sales || 0,
      views: row.views || 0,
      createdAt: row.created_at || today(),
      updatedAt: row.updated_at || row.created_at || today()
    };
  }

  function purchaseFromRow(row) {
    return {
      id: row.id,
      buyerId: row.buyer_id,
      noteId: row.note_id,
      amount: Number(row.amount || 0),
      paymentStatus: row.payment_status,
      downloadToken: row.download_token,
      createdAt: row.created_at || today()
    };
  }

  function reviewFromRow(row) {
    return {
      id: row.id,
      userId: row.user_id,
      noteId: row.note_id,
      rating: row.rating,
      comment: row.comment,
      likes: row.likes || [],
      replies: row.replies || [],
      createdAt: row.created_at || today()
    };
  }

  function reportFromRow(row) {
    return {
      id: row.id,
      reporterId: row.reporter_id,
      noteId: row.note_id,
      reason: row.reason,
      status: row.status,
      createdAt: row.created_at || today()
    };
  }

  function profileToRow(user, authUser) {
    const email = user.email || authUser?.email || "";
    const emailVerified = Boolean(user.emailVerified || authUser?.email_confirmed_at);
    return {
      id: user.id,
      name: user.name || email,
      email,
      role: user.role || "student",
      university: user.university || "",
      faculty: user.faculty || "",
      department: user.department || "",
      bio: user.bio || "",
      profile_color: user.profileColor || "",
      avatar_data: user.avatarData || "",
      email_verified: emailVerified,
      edu_verified: Boolean(emailVerified && isStudentEmail(email)),
      admin_stats: user.adminStats || {},
      badge_overrides: user.badgeOverrides || []
    };
  }

  function noteToRow(note) {
    return {
      id: note.id,
      seller_id: note.sellerId,
      title: note.title,
      description: note.description,
      university: note.university,
      faculty: note.faculty || "",
      department: note.department,
      course: note.course,
      instructor: note.instructor,
      file_name: note.fileName,
      file_type: note.fileType,
      file_mime: note.fileMime || "",
      file_path: note.filePath || (note.fileStored ? `${note.id}/original` : ""),
      page_count: note.pageCount || 1,
      selected_preview_pages: note.selectedPreviewPages || [],
      price: note.price,
      preview_pages: note.previewPages || 3,
      status: note.status || "pending",
      rejection_reason: note.rejectionReason || "",
      ai_summary: note.aiSummary || "",
      watermark_template: note.watermarkTemplate || "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
      preview: note.preview || [],
      sales: note.sales || 0,
      views: note.views || 0
    };
  }

  async function currentAuthUser() {
    if (!client) return null;
    const { data } = await client.auth.getUser();
    return data?.user || null;
  }

  async function ensureProfile(authUser, extras = {}) {
    if (!authUser) return null;
    const existing = await client.from("profiles").select("*").eq("id", authUser.id).maybeSingle();
    if (existing.error) throw existing.error;
    if (existing.data) return profileFromRow(existing.data);

    const profile = {
      id: authUser.id,
      name: extras.name || authUser.user_metadata?.name || authUser.email,
      email: authUser.email,
      role: extras.role || (isAdminEmail(authUser.email) ? "admin" : "student"),
      university: extras.university || "",
      faculty: extras.faculty || "",
      department: extras.department || "",
      emailVerified: Boolean(authUser.email_confirmed_at),
      eduVerified: Boolean(authUser.email_confirmed_at && isStudentEmail(authUser.email))
    };
    const row = profileToRow(profile, authUser);
    const { error } = await client.from("profiles").insert(row);
    if (error) throw error;
    return profileFromRow(row);
  }

  async function loadState(baseState) {
    if (!client) return baseState;
    const authUser = await currentAuthUser();
    if (authUser) await ensureProfile(authUser);

    const [profiles, notes, purchases, reviews, favorites, reports, follows] = await Promise.all([
      client.from("profiles").select("*"),
      client.from("notes").select("*").order("created_at", { ascending: false }),
      client.from("purchases").select("*"),
      client.from("reviews").select("*"),
      client.from("favorites").select("*"),
      client.from("reports").select("*"),
      client.from("follows").select("*")
    ]);

    [profiles, notes, purchases, reviews, favorites, reports, follows].forEach((result) => {
      if (result.error) throw result.error;
    });

    const remoteUsers = profiles.data.map(profileFromRow);
    const remoteNotes = notes.data.map(noteFromRow);
    const next = {
      ...baseState,
      currentUserId: authUser?.id || null,
      users: mergeById(baseState.users || [], remoteUsers),
      notes: mergeById(baseState.notes || [], remoteNotes),
      purchases: mergeById(baseState.purchases || [], purchases.data.map(purchaseFromRow)),
      reviews: mergeById(baseState.reviews || [], reviews.data.map(reviewFromRow)),
      favorites: mergeComposite(baseState.favorites || [], favorites.data.map((row) => ({ userId: row.user_id, noteId: row.note_id, createdAt: row.created_at || today() })), ["userId", "noteId"]),
      reports: mergeById(baseState.reports || [], reports.data.map(reportFromRow)),
      follows: mergeComposite(baseState.follows || [], follows.data.map((row) => ({ followerId: row.follower_id, followingId: row.following_id, createdAt: row.created_at || today() })), ["followerId", "followingId"])
    };
    return next;
  }

  function mergeById(localItems, remoteItems) {
    const byId = new Map(localItems.map((item) => [item.id, item]));
    remoteItems.forEach((item) => byId.set(item.id, item));
    return [...byId.values()];
  }

  function mergeComposite(localItems, remoteItems, keys) {
    const keyFor = (item) => keys.map((key) => item[key]).join("|");
    const byKey = new Map(localItems.map((item) => [keyFor(item), item]));
    remoteItems.forEach((item) => byKey.set(keyFor(item), item));
    return [...byKey.values()];
  }

  function saveState(state) {
    if (!client) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => pushState(state).catch((error) => console.warn("Supabase sync failed", error)), 500);
  }

  async function saveStateNow(state) {
    if (!client) return;
    clearTimeout(saveTimer);
    await pushState(state);
  }

  async function saveProfile(user) {
    if (!client || !user) return;
    const authUser = await currentAuthUser();
    if (!authUser || user.id !== authUser.id) return;
    await upsert("profiles", [profileToRow(user, authUser)], "id");
  }

  async function pushState(state) {
    const authUser = await currentAuthUser();
    if (!authUser) return;
    const remoteUsers = (state.users || []).filter((user) => user.id === authUser.id).map((user) => profileToRow(user, authUser));
    const remoteNotes = (state.notes || []).filter(isRemoteNote).filter((note) => note.sellerId === authUser.id).map(noteToRow);
    const remotePurchases = (state.purchases || []).filter((item) => item.buyerId === authUser.id).map((item) => ({
      id: item.id,
      buyer_id: item.buyerId,
      note_id: item.noteId,
      amount: item.amount,
      payment_status: item.paymentStatus,
      download_token: item.downloadToken
    }));
    const remoteReviews = (state.reviews || []).filter((item) => item.userId === authUser.id).map((item) => ({
      id: item.id,
      user_id: item.userId,
      note_id: item.noteId,
      rating: item.rating,
      comment: item.comment,
      likes: item.likes || [],
      replies: item.replies || []
    }));
    const remoteFavorites = (state.favorites || []).filter((item) => item.userId === authUser.id).map((item) => ({
      user_id: item.userId,
      note_id: item.noteId
    }));
    const remoteReports = (state.reports || []).filter((item) => item.reporterId === authUser.id).map((item) => ({
      id: item.id,
      reporter_id: item.reporterId,
      note_id: item.noteId,
      reason: item.reason,
      status: item.status || "open"
    }));
    const remoteFollows = (state.follows || []).filter((item) => item.followerId === authUser.id && isRemoteUserId(item.followingId)).map((item) => ({
      follower_id: item.followerId,
      following_id: item.followingId
    }));

    await upsert("profiles", remoteUsers, "id");
    await upsert("notes", remoteNotes, "id");
    await upsert("purchases", remotePurchases, "id");
    await upsert("reviews", remoteReviews, "id");
    await upsert("favorites", remoteFavorites, "user_id,note_id");
    await upsert("reports", remoteReports, "id");
    await upsert("follows", remoteFollows, "follower_id,following_id");
  }

  async function upsert(table, rows, onConflict) {
    if (!rows.length) return;
    const { error } = await client.from(table).upsert(rows, { onConflict });
    if (error) throw error;
  }

  async function login(email, password, baseState) {
    if (!client) return null;
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    await ensureProfile(data.user);
    return loadState(baseState);
  }

  async function register({ name, email, password }, baseState) {
    if (!client) return null;
    if (!isStudentEmail(email)) {
      throw new Error("Kayit icin edu uzantili ogrenci e-postasi kullanmalisin.");
    }
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}${window.location.pathname}#/auth`
      }
    });
    if (error) throw error;
    if (data.user && data.session) {
      await ensureProfile(data.user, { name });
      return loadState(baseState);
    }
    return { ...baseState, currentUserId: null, pendingEmailVerification: email };
  }

  async function logout() {
    if (client) await client.auth.signOut();
  }

  async function saveUploadedFile(noteId, dataUrl) {
    if (!client) return false;
    const blob = dataUrlToBlob(dataUrl);
    const { error } = await client.storage.from("note-files").upload(`${noteId}/original`, blob, {
      contentType: blob.type || "application/octet-stream",
      upsert: true
    });
    if (error) throw error;
    return true;
  }

  async function getUploadedFile(noteId) {
    if (!client) return null;
    const { data, error } = await client.storage.from("note-files").download(`${noteId}/original`);
    if (error || !data) return null;
    return blobToDataUrl(data);
  }

  async function loadProgramCatalog() {
    if (!client) return [];
    const rows = [];
    const pageSize = 1000;
    for (let from = 0; ; from += pageSize) {
      const { data, error } = await client
        .from("categories")
        .select("source,source_table,level,program_code,university,city,university_type,faculty,unit_type,department,program,education_type,language")
        .order("university", { ascending: true })
        .order("faculty", { ascending: true })
        .order("department", { ascending: true })
        .range(from, from + pageSize - 1);
      if (error) {
        console.warn("Supabase catalog load failed", error);
        return [];
      }
      rows.push(...(data || []));
      if (!data || data.length < pageSize) break;
    }
    return rows.map((item) => ({
      source: item.source,
      sourceTable: item.source_table,
      level: item.level,
      programCode: item.program_code,
      university: item.university,
      city: item.city,
      universityType: item.university_type,
      faculty: item.faculty,
      unitType: item.unit_type,
      department: item.department,
      program: item.program,
      educationType: item.education_type,
      language: item.language
    }));
  }

  function dataUrlToBlob(dataUrl) {
    const [header, base64] = dataUrl.split(",");
    const mime = header.match(/data:(.*?);base64/)?.[1] || "application/octet-stream";
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return new Blob([bytes], { type: mime });
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  window.NotumSupabase = {
    isConfigured,
    loadState,
    saveState,
    saveStateNow,
    saveProfile,
    login,
    register,
    logout,
    saveUploadedFile,
    getUploadedFile,
    loadProgramCatalog
  };
})();
