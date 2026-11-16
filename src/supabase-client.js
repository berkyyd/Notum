(function () {
  const config = window.NOTUM_SUPABASE || {};
  const isConfigured = Boolean(config.url && config.anonKey && window.supabase);
  const client = isConfigured
    ? (window.__NOTUM_SUPABASE_CLIENT__ ?? (window.__NOTUM_SUPABASE_CLIENT__ = window.supabase.createClient(config.url, config.anonKey)))
    : null;
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
      queryNumber: row.query_number || "",
      referenceCode: row.reference_code || "",
      receiptPath: row.receipt_path || "",
      receiptCheckStatus: row.receipt_check_status || "not_checked",
      receiptDetectedReference: row.receipt_detected_reference || "",
      receiptDetectedAmount: row.receipt_detected_amount === null ? null : Number(row.receipt_detected_amount),
      receiptDetectedDescription: row.receipt_detected_description || "",
      isMock: Boolean(row.is_mock),
      reviewedAt: row.reviewed_at || "",
      downloadToken: row.download_token,
      createdAt: row.created_at || today()
    };
  }

  function sellerPaymentProfileFromRow(row) {
    return {
      userId: row.user_id,
      bankName: row.bank_name || "",
      iban: row.iban || "",
      accountHolder: row.account_holder || ""
    };
  }

  function sellerPayoutFromRow(row) {
    return {
      id: row.id,
      sellerId: row.seller_id,
      amount: Number(row.amount || 0),
      purchaseIds: row.purchase_ids || [],
      paidAt: row.paid_at || today(),
      adminNote: row.admin_note || ""
    };
  }

  function platformSettingsFromRow(row) {
    return {
      bankName: row.bank_name || "",
      iban: row.iban || "",
      accountHolder: row.account_holder || "",
      payoutWeekday: row.payout_weekday || "Friday",
      mockPaymentsEnabled: Boolean(row.mock_payments_enabled)
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
    if (existing.data) {
      const emailVerified = Boolean(authUser.email_confirmed_at);
      const eduVerified = Boolean(emailVerified && isStudentEmail(authUser.email));
      if (
        existing.data.email_verified !== emailVerified
        || existing.data.edu_verified !== eduVerified
      ) {
        const { error } = await client
          .from("profiles")
          .update({ email_verified: emailVerified, edu_verified: eduVerified })
          .eq("id", authUser.id);
        if (error) throw error;
      }
      return profileFromRow({
        ...existing.data,
        email_verified: emailVerified,
        edu_verified: eduVerified
      });
    }

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
    const emptyResult = Promise.resolve({ data: [], error: null });
    const paymentSettingsResult = authUser
      ? client.from("platform_settings").select("*").eq("id", true).maybeSingle()
      : Promise.resolve({ data: null, error: null });

    const [profiles, notes, purchases, reviews, favorites, reports, follows, sellerPaymentProfiles, platformSettings, sellerPayouts, sellerSalesSummary] = await Promise.all([
      client.from("profiles").select("*"),
      client.from("notes").select("*").order("created_at", { ascending: false }),
      authUser ? client.from("purchases").select("*") : emptyResult,
      client.from("reviews").select("*"),
      client.from("favorites").select("*"),
      client.from("reports").select("*"),
      client.from("follows").select("*"),
      authUser ? client.from("seller_payment_profiles").select("*") : emptyResult,
      paymentSettingsResult,
      authUser ? client.from("seller_payouts").select("*") : emptyResult,
      authUser ? client.from("seller_sales_summary").select("*") : emptyResult
    ]);

    [profiles, notes, purchases, reviews, favorites, reports, follows, sellerPaymentProfiles, platformSettings, sellerPayouts, sellerSalesSummary].forEach((result) => {
      if (result.error) throw result.error;
    });

    const remoteUsers = profiles.data.map(profileFromRow);
    const remoteNotes = notes.data.map(noteFromRow);
    const next = {
      ...baseState,
      currentUserId: authUser?.id || null,
      users: mergeById(baseState.users || [], remoteUsers),
      notes: mergeById(baseState.notes || [], remoteNotes),
      purchases: purchases.data.map(purchaseFromRow),
      reviews: mergeById(baseState.reviews || [], reviews.data.map(reviewFromRow)),
      favorites: mergeComposite(baseState.favorites || [], favorites.data.map((row) => ({ userId: row.user_id, noteId: row.note_id, createdAt: row.created_at || today() })), ["userId", "noteId"]),
      reports: mergeById(baseState.reports || [], reports.data.map(reportFromRow)),
      follows: mergeComposite(baseState.follows || [], follows.data.map((row) => ({ followerId: row.follower_id, followingId: row.following_id, createdAt: row.created_at || today() })), ["followerId", "followingId"]),
      sellerPaymentProfiles: sellerPaymentProfiles.data.map(sellerPaymentProfileFromRow),
      platformSettings: platformSettings.data ? platformSettingsFromRow(platformSettings.data) : {
        bankName: "",
        iban: "",
        accountHolder: "",
        payoutWeekday: "Friday",
        mockPaymentsEnabled: false
      },
      sellerPayouts: sellerPayouts.data.map(sellerPayoutFromRow),
      sellerSalesSummaries: sellerSalesSummary.data.map((row) => ({
        sellerId: row.seller_id,
        noteId: row.note_id,
        salesCount: Number(row.sales_count || 0),
        grossSales: Number(row.gross_sales || 0),
        dueAmount: Number(row.due_amount || 0)
      }))
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

  async function saveSellerPaymentDetails(details) {
    const authUser = await currentAuthUser();
    if (!authUser) throw new Error("Ödeme bilgilerini kaydetmek için giriş yapın.");
    await upsert("seller_payment_profiles", [{
      user_id: authUser.id,
      bank_name: details.bankName || "",
      iban: details.iban || "",
      account_holder: details.accountHolder || ""
    }], "user_id");
  }

  async function updatePlatformSettings(settings) {
    const { data, error } = await client
      .from("platform_settings")
      .update({
        bank_name: settings.bankName || "",
        iban: settings.iban || "",
        account_holder: settings.accountHolder || "",
        payout_weekday: settings.payoutWeekday || "Friday",
        mock_payments_enabled: Boolean(settings.mockPaymentsEnabled)
      })
      .eq("id", true)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    if (!data) throw new Error("Ödeme ayarları kaydedilemedi; admin yetkisini kontrol edin.");
    return platformSettingsFromRow(data);
  }

  async function createPurchase(purchase) {
    const { data, error } = await client.from("purchases").insert({
      id: purchase.id,
      buyer_id: purchase.buyerId,
      note_id: purchase.noteId,
      amount: purchase.amount,
      payment_status: "pending_payment",
      is_mock: Boolean(purchase.isMock),
      download_token: purchase.downloadToken
    }).select("*").single();
    if (error) throw error;
    return purchaseFromRow(data);
  }

  async function verifyPaymentQuery(purchaseId, queryNumber) {
    if (!client) throw new Error("Gmail doğrulaması için Supabase bağlantısı gerekli.");
    const { data, error: sessionError } = await client.auth.getSession();
    if (sessionError) throw sessionError;
    const accessToken = data.session?.access_token;
    if (!accessToken) throw new Error("Ödeme doğrulaması için tekrar giriş yapın.");

    const response = await fetch("/api/payments/verify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ purchaseId, queryNumber })
    });
    const result = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(result?.error || "Ödeme sorgusu doğrulanamadı.");
    }
    return result;
  }

  async function uploadPaymentReceipt(purchaseId, file, receiptCheck, previousReceiptPath = "") {
    const authUser = await currentAuthUser();
    if (!authUser) throw new Error("Dekont göndermek için giriş yapın.");
    if (!(file instanceof File) || !["application/pdf", "image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      throw new Error("Dekont PDF, JPG, PNG veya WEBP olmalı.");
    }
    if (file.size > 8 * 1024 * 1024) throw new Error("Dekont dosyası en fazla 8 MB olabilir.");
    const path = `${authUser.id}/${purchaseId}/${crypto.randomUUID()}-${file.name.replace(/[^\w.-]/g, "_")}`;
    const { error: uploadError } = await client.storage.from("payment-receipts").upload(path, file, {
      contentType: file.type,
      upsert: false
    });
    if (uploadError) throw uploadError;
    const { data, error } = await client.from("purchases")
      .update({
        receipt_path: path,
        payment_status: "pending_review",
        receipt_check_status: receiptCheck.status,
        receipt_detected_reference: receiptCheck.detectedReference || null,
        receipt_detected_amount: receiptCheck.detectedAmount,
        receipt_detected_description: receiptCheck.detectedDescription || null
      })
      .eq("id", purchaseId)
      .select("*")
      .single();
    if (error) {
      const { error: cleanupError } = await client.storage.from("payment-receipts").remove([path]);
      if (cleanupError) console.error("Failed to clean up an unlinked payment receipt", { purchaseId, path, cleanupError });
      throw error;
    }
    if (previousReceiptPath && !previousReceiptPath.startsWith("local/") && previousReceiptPath !== path) {
      const { error: cleanupError } = await client.storage.from("payment-receipts").remove([previousReceiptPath]);
      if (cleanupError) console.error("Failed to clean up a replaced payment receipt", { purchaseId, previousReceiptPath, cleanupError });
    }
    return purchaseFromRow(data);
  }

  async function getPaymentReceiptUrl(purchaseId, receiptPath) {
    if (!receiptPath) throw new Error("Bu sipariş için dekont bulunmuyor.");
    const { data, error } = await client.storage.from("payment-receipts").createSignedUrl(receiptPath, 300);
    if (error) throw error;
    return data.signedUrl;
  }

  async function reviewPurchase(purchaseId, paymentStatus) {
    if (!["paid", "mock_paid", "rejected"].includes(paymentStatus)) {
      throw new Error("Geçersiz ödeme kararı.");
    }
    const { data: current, error: currentError } = await client.from("purchases")
      .select("id,is_mock,payment_status")
      .eq("id", purchaseId)
      .single();
    if (currentError) throw currentError;
    if (current.is_mock && paymentStatus === "paid") {
      throw new Error("Mock siparişler gerçek ödeme olarak işaretlenemez.");
    }
    if (!current.is_mock && paymentStatus === "mock_paid") {
      throw new Error("Gerçek sipariş mock ödeme olarak işaretlenemez.");
    }
    const { data, error } = await client.from("purchases")
      .update({ payment_status: paymentStatus, reviewed_at: new Date().toISOString() })
      .eq("id", purchaseId)
      .eq("payment_status", "pending_review")
      .select("*")
      .maybeSingle();
    if (error) throw error;
    if (!data) throw new Error("Sipariş incelenemedi; başka bir admin daha önce işlem yapmış olabilir.");
    return purchaseFromRow(data);
  }

  async function recordSellerPayout(sellerId, purchaseIds) {
    const { data, error } = await client.rpc("record_seller_payout", {
      p_seller_id: sellerId,
      p_purchase_ids: purchaseIds
    });
    if (error) throw error;
    return sellerPayoutFromRow(data);
  }

  async function updateNoteStatus(noteId, status) {
    if (!client) return false;
    if (!["pending", "approved", "rejected"].includes(status)) {
      throw new Error("Geçersiz not durumu.");
    }
    const { data, error } = await client
      .from("notes")
      .update({ status })
      .eq("id", noteId)
      .select("id,status")
      .maybeSingle();
    if (error) throw error;
    if (!data) {
      throw new Error("Not durumu Supabase'e kaydedilemedi. Admin yetkisini ve notes güncelleme RLS policy'sini kontrol edin.");
    }
    return true;
  }

  async function deleteNote(noteId) {
    if (!client || !noteId) return false;
    const { data, error } = await client
      .from("notes")
      .delete()
      .eq("id", noteId)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!data) {
      throw new Error("Not Supabase'den silinemedi. Yetki ve notes delete policy'sini kontrol edin.");
    }
    return true;
  }

  async function pushState(state) {
    const authUser = await currentAuthUser();
    if (!authUser) return;
    const remoteUsers = (state.users || []).filter((user) => user.id === authUser.id).map((user) => profileToRow(user, authUser));
    const remoteNotes = (state.notes || []).filter(isRemoteNote).filter((note) => note.sellerId === authUser.id).map(noteToRow);
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

  async function register({ name, email, password, legalAcceptances = [] }, baseState) {
    if (!client) return null;
    if (!isStudentEmail(email)) {
      throw new Error("Kayit icin edu uzantili ogrenci e-postasi kullanmalisin.");
    }
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          legal_acceptances: legalAcceptances.map((item) => ({
            document_key: item.documentKey,
            version: item.version,
            accepted_at: item.acceptedAt
          }))
        },
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

  async function recordLegalAcceptances(records) {
    if (!client || !records.length) return;
    const authUser = await currentAuthUser();
    if (!authUser) throw new Error("Onayları kaydetmek için oturum açmanız gerekiyor.");
    const rows = records.map((record) => ({
      user_id: authUser.id,
      document_key: record.documentKey,
      version: record.version,
      accepted_at: record.acceptedAt
    }));
    const { error } = await client.from("legal_acceptances").insert(rows);
    if (error) throw error;
  }

  async function logout() {
    if (client) await client.auth.signOut();
  }

  async function saveUploadedFile(noteId, dataUrl) {
    if (!client) return false;
    const authUser = await currentAuthUser();
    if (!authUser) {
      throw new Error("Supabase oturumu aktif değil. Lütfen tekrar giriş yapın.");
    }
    // Ensure Storage RLS can see the user's current email verification state.
    await ensureProfile(authUser);
    const blob = dataUrlToBlob(dataUrl);
    const { error } = await client.storage.from("note-files").upload(`${noteId}/original`, blob, {
      contentType: blob.type || "application/octet-stream",
      upsert: true
    });
    if (error) {
      console.error("Storage upload failed", {
        noteId,
        authUserId: authUser.id,
        email: authUser.email,
        error
      });
      if (error.message?.toLowerCase().includes("row-level security") || error.message?.toLowerCase().includes("policy")) {
        throw new Error("Supabase storage policy reddetti. Kullanıcı oturumu ve verified profile kontrol edilmeli.");
      }
      throw error;
    }
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
    isAuthenticated: async () => Boolean(await currentAuthUser()),
    loadState,
    saveState,
    saveStateNow,
    saveProfile,
    saveSellerPaymentDetails,
    updatePlatformSettings,
    createPurchase,
    verifyPaymentQuery,
    uploadPaymentReceipt,
    getPaymentReceiptUrl,
    reviewPurchase,
    recordSellerPayout,
    updateNoteStatus,
    deleteNote,
    login,
    register,
    recordLegalAcceptances,
    logout,
    saveUploadedFile,
    getUploadedFile,
    loadProgramCatalog
  };
})();
