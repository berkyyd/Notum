const STORAGE_KEY = "notum_mvp_state_v7";
const THEME_KEY = "notum_theme";
const PROGRAM_CATALOG_URL = "src/data/yokatlas-programs.json";

if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

const seed = {
  currentUserId: "u-student",
  cart: [],
  users: [
    {
      id: "u-student",
      name: "Sıla Yıldırım",
      email: "sila@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Boğaziçi Üniversitesi",
      department: "İşletme",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-seller",
      name: "Berkay Demircanlı",
      email: "berkay@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "İstanbul Teknik Üniversitesi",
      department: "Bilgisayar Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-admin",
      name: "Notum Admin",
      email: "admin@notum.test",
      password: "123456",
      role: "admin",
      university: "",
      department: "",
      emailVerified: true,
      eduVerified: false
    },
    {
      id: "u-mock-1",
      name: "Deniz Arslan",
      email: "deniz@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Orta Doğu Teknik Üniversitesi",
      department: "Makine Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-2",
      name: "Ece Kaya",
      email: "ece@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Hacettepe Üniversitesi",
      department: "Tıp",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-3",
      name: "Mert Aydın",
      email: "mert@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Ankara Üniversitesi",
      department: "Hukuk",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-4",
      name: "İrem Şahin",
      email: "irem@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Ege Üniversitesi",
      department: "Kimya",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-5",
      name: "Kerem Yılmaz",
      email: "kerem@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "İstanbul Teknik Üniversitesi",
      department: "Elektrik Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-6",
      name: "Selin Demir",
      email: "selin@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Marmara Üniversitesi",
      department: "Türkçe Öğretmenliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-7",
      name: "Can Özkan",
      email: "can@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Dokuz Eylül Üniversitesi",
      department: "İşletme",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-8",
      name: "Zeynep Koç",
      email: "zeynep@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Boğaziçi Üniversitesi",
      department: "İktisat",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-9",
      name: "Arda Çelik",
      email: "arda@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Abdullah Gül Üniversitesi",
      department: "Mimarlık",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-10",
      name: "Nehir Aksoy",
      email: "nehir@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "İstanbul Üniversitesi",
      department: "Psikoloji",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-11",
      name: "Emir Güneş",
      email: "emir@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Gazi Üniversitesi",
      department: "Endüstri Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-12",
      name: "Yağmur Polat",
      email: "yagmur@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Yıldız Teknik Üniversitesi",
      department: "Bilgisayar Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-13",
      name: "Bora Keskin",
      email: "bora@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Akdeniz Üniversitesi",
      department: "Turizm İşletmeciliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-14",
      name: "Elif Acar",
      email: "elif@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Çukurova Üniversitesi",
      department: "Hemşirelik",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-15",
      name: "Ozan Taş",
      email: "ozan@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Sakarya Üniversitesi",
      department: "Yazılım Mühendisliği",
      emailVerified: true,
      eduVerified: true
    }
  ],
  notes: [
    {
      id: "n-1",
      sellerId: "u-seller",
      title: "Algoritmalar Final Özeti ve Çıkmış Sorular",
      description:
        "Graf algoritmaları, karmaşıklık analizi, dinamik programlama ve finalde sorulan klasik soru tipleri için temiz bir çalışma notu.",
      university: "İstanbul Teknik Üniversitesi",
      faculty: "Bilgisayar ve Bilişim Fakültesi",
      department: "Bilgisayar Mühendisliği",
      course: "Algoritma Analizi",
      instructor: "Prof. Dr. Selin Arman",
      fileName: "algoritmalar-final.pdf",
      fileType: "PDF",
      price: 129,
      previewPages: 4,
      status: "approved",
      sales: 38,
      views: 248,
      createdAt: "2026-05-15",
      aiSummary:
        "Final odaklı, bol örnekli ve soru çözümlü algoritma notu. Özellikle graf ve dinamik programlama konularında hızlı tekrar sağlar.",
      watermarkTemplate: "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
      preview: [
        {
          title: "1. Karmaşıklık Analizi",
          body: "Big-O, algoritmanın giriş boyutu büyüdüğünde çalışma süresinin nasıl değiştiğini gösterir. Sabitler ve düşük dereceli terimler sadeleştirilir.",
          bullets: ["O(1): sabit zaman", "O(log n): ikili arama", "O(n log n): verimli sıralama", "O(n²): iç içe döngüler"],
          callout: "Sınav ipucu: Döngü sayısını önce sade ifadeye çevir, sonra baskın terimi seç."
        },
        {
          title: "2. Graf Algoritmaları",
          body: "BFS en kısa kenar sayısını, DFS ise bağlılık ve çevrim kontrolünü anlamak için kullanılır. Ağırlıklı graflarda Dijkstra tercih edilir.",
          bullets: ["BFS: kuyruk", "DFS: yığın veya özyineleme", "Dijkstra: negatif kenar yoksa", "Kruskal: minimum yayılan ağaç"],
          callout: "Çıkmış soru: Komşuluk listesinde BFS karmaşıklığı O(V + E)."
        },
        {
          title: "3. Dinamik Programlama",
          body: "Dinamik programlama, alt problemlerin tekrarlandığı durumlarda sonucu tablo veya memoization ile saklayarak çözümü hızlandırır.",
          bullets: ["Durum tanımı net olmalı", "Geçiş formülü kurulmalı", "Başlangıç değerleri unutulmamalı"],
          callout: "Sınav ipucu: Önce recursive çözümü yaz, sonra tabloya dönüştür."
        },
        {
          title: "4. Çıkmış Soru Taslağı",
          body: "Bir grafın DFS ve BFS dolaşım sırasını verilen başlangıç düğümüne göre yazınız. Aynı graf için en kısa yol ağacını belirtiniz.",
          bullets: ["Komşuları alfabetik sırayla gez", "Ziyaret edilen düğümü tekrar kuyruğa ekleme", "Her adımda kuyruk/yığın durumunu göster"],
          callout: "Puanın çoğu ara adımlardan gelir; sadece sonucu yazmak yetmez."
        }
      ]
    },
    {
      id: "n-2",
      sellerId: "u-seller",
      title: "Mikro İktisat Vize Ders Notu",
      description:
        "Talep, arz, esneklik, tüketici dengesi ve üretici teorisi konularını sade anlatımla toparlayan vize notu.",
      university: "Boğaziçi Üniversitesi",
      faculty: "İktisadi ve İdari Bilimler Fakültesi",
      department: "İktisat",
      course: "Mikro İktisat",
      instructor: "Doç. Dr. Mert Akın",
      fileName: "mikro-vize.docx",
      fileType: "DOCX",
      price: 89,
      previewPages: 3,
      status: "approved",
      sales: 61,
      views: 411,
      createdAt: "2026-04-20",
      aiSummary:
        "Vize öncesi hızlı tekrar için temel mikro iktisat kavramlarını pratik örneklerle özetler.",
      watermarkTemplate: "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
      preview: [
        {
          title: "1. Talep ve Arz Dengesi",
          body: "Piyasa dengesi, talep edilen miktarın arz edilen miktara eşit olduğu fiyat düzeyinde oluşur. Fiyat tavanı ve tabanı refah kayıpları yaratabilir.",
          bullets: ["Talep eğrisi genellikle negatif eğimlidir", "Arz eğrisi genellikle pozitif eğimlidir", "Denge dışı fiyatlarda kıtlık veya fazlalık oluşur"],
          callout: "Grafik sorularında eksenleri ve kayma yönünü mutlaka etiketle."
        },
        {
          title: "2. Esneklik",
          body: "Talebin fiyat esnekliği, fiyattaki yüzde değişime karşılık miktarın yüzde değişimini ölçer. Mutlak değer 1'den büyükse talep esnektir.",
          bullets: ["Tamamlayıcı mallarda çapraz esneklik negatif", "İkame mallarda çapraz esneklik pozitif", "Zorunlu mallarda esneklik düşük olabilir"],
          callout: "Toplam hasılat yorumu esneklik sorularında sık çıkar."
        },
        {
          title: "3. Tüketici Dengesi",
          body: "Tüketici dengesi, bütçe doğrusu ile en yüksek ulaşılabilir farksızlık eğrisinin teğet olduğu noktada oluşur.",
          bullets: ["MRS fiyat oranına eşitlenir", "Bütçe kısıtı bağlayıcıdır", "Gelir artışı bütçe doğrusunu dışa kaydırır"],
          callout: "Grafikte teğet noktayı ve bütçe doğrusunu ayrı ayrı etiketle."
        }
      ]
    },
    {
      id: "n-3",
      sellerId: "u-seller",
      title: "Hukuka Giriş Sunum Seti",
      description:
        "Normlar hiyerarşisi, hukuk dalları, yaptırım türleri ve temel kavramlar için sunum formatında kaynak.",
      university: "Ankara Üniversitesi",
      faculty: "Hukuk Fakültesi",
      department: "Hukuk",
      course: "Hukuka Giriş",
      instructor: "Prof. Dr. Nazlı Erdem",
      fileName: "hukuka-giris.pptx",
      fileType: "PPTX",
      price: 75,
      previewPages: 5,
      status: "approved",
      sales: 24,
      views: 176,
      createdAt: "2026-06-08",
      aiSummary:
        "Hukuka yeni başlayan öğrenciler için kavram haritası gibi çalışan, sunum tabanlı özet.",
      watermarkTemplate: "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
      preview: [
        {
          title: "Slayt 1: Hukuk Kuralı Nedir?",
          body: "Hukuk kuralları toplumsal düzeni sağlamak için devlet gücüyle desteklenen, genel ve soyut kurallardır.",
          bullets: ["Genellik", "Soyutluk", "Yaptırıma bağlanmış olma"],
          callout: "Ahlak, din ve görgü kurallarıyla farkı yaptırım türünden anlaşılır."
        },
        {
          title: "Slayt 2: Normlar Hiyerarşisi",
          body: "Alt norm, üst norma aykırı olamaz. Anayasa en üst normdur; kanun, yönetmelik ve bireysel işlemler onu takip eder.",
          bullets: ["Anayasa", "Kanun", "Cumhurbaşkanlığı kararnamesi", "Yönetmelik"],
          callout: "Sıralama sorularında üst norm denetimi mantığını kullan."
        },
        {
          title: "Slayt 3: Hukuk Dalları",
          body: "Hukuk, kamu hukuku ve özel hukuk olarak iki ana başlıkta incelenir. Taraflardan birinin devlet olduğu ilişkiler genellikle kamu hukukuna girer.",
          bullets: ["Anayasa hukuku", "İdare hukuku", "Borçlar hukuku", "Ticaret hukuku"],
          callout: "Ayrım yaparken tarafların eşit konumda olup olmadığına bak."
        },
        {
          title: "Slayt 4: Yaptırım Türleri",
          body: "Hukuk kurallarını diğer toplumsal kurallardan ayıran temel unsur devlet destekli yaptırımdır.",
          bullets: ["Ceza", "Tazminat", "Geçersizlik", "İptal"],
          callout: "Yaptırım örneklerini somut olayla eşleştirmek sınavda puan kazandırır."
        },
        {
          title: "Slayt 5: Mini Tekrar",
          body: "Temel kavramları hızlı tekrar etmek için norm, yaptırım, hak, borç ve sorumluluk başlıklarını birlikte düşün.",
          bullets: ["Kavram tanımı", "Örnek olay", "Uygulanacak kural", "Sonuç"],
          callout: "Kısa cevap sorularında tanım + örnek formatı kullan."
        }
      ]
    },
    {
      id: "n-4",
      sellerId: "u-seller",
      title: "Organik Kimya Reaksiyon Mekanizmaları",
      description:
        "SN1, SN2, E1, E2 ve aromatik yer değiştirme mekanizmaları için renkli tablo ve çözümlü soru seti.",
      university: "Ege Üniversitesi",
      faculty: "Fen Fakültesi",
      department: "Kimya",
      course: "Organik Kimya",
      instructor: "Doç. Dr. Elif Sönmez",
      fileName: "organik-kimya.pdf",
      fileType: "PDF",
      price: 149,
      previewPages: 4,
      status: "pending",
      sales: 0,
      views: 42,
      createdAt: "2026-06-24",
      aiSummary:
        "Reaksiyon mekanizmalarını tablo ve çözümlü sorularla pekiştiren kapsamlı bir çalışma paketi.",
      watermarkTemplate: "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
      preview: [
        {
          title: "1. SN1 ve SN2 Karşılaştırması",
          body: "SN1 iki basamaklıdır ve karbokatyon ara ürünü içerir. SN2 tek basamaklıdır ve güçlü nükleofil ile ilerler.",
          bullets: ["SN1: tersiyer substratlarda daha olası", "SN2: primer substratlarda daha hızlı", "Polar protik çözücü SN1'i destekler"],
          callout: "Mekanizma seçerken substrat, nükleofil ve çözücüyü birlikte değerlendir."
        },
        {
          title: "2. E1 ve E2 Mekanizmaları",
          body: "E1 karbokatyon üzerinden ilerlerken E2 tek basamaklıdır. Güçlü bazlar E2 mekanizmasını destekler.",
          bullets: ["E1: iki basamak", "E2: tek basamak", "Isı eliminasyonu artırabilir"],
          callout: "Ayrılacak hidrojen ve leaving group anti-periplanar ise E2 daha olasıdır."
        },
        {
          title: "3. Aromatik Yer Değiştirme",
          body: "Elektrofilik aromatik yer değiştirme reaksiyonlarında halka üzerindeki gruplar yönlendirme etkisi gösterir.",
          bullets: ["Aktifleştirici gruplar orto/para yönlendirir", "Deaktifleştirici gruplar meta yönlendirebilir", "Halojenler istisnadır"],
          callout: "Soru çözerken önce mevcut grubun yönlendirme etkisini işaretle."
        },
        {
          title: "4. Hızlı Karar Tablosu",
          body: "Substrat yapısı, nükleofil/baz gücü ve çözücü türü reaksiyon mekanizmasını belirleyen ana değişkenlerdir.",
          bullets: ["Primer + güçlü nükleofil: SN2", "Tersiyer + zayıf nükleofil: SN1/E1", "Güçlü baz + ısı: E2"],
          callout: "Tek ipucuna göre karar verme; üç değişkeni birlikte değerlendir."
        }
      ]
    }
  ],
  purchases: [
    {
      id: "p-1",
      buyerId: "u-student",
      noteId: "n-2",
      amount: 89,
      paymentStatus: "paid",
      createdAt: "2026-06-12",
      downloadToken: "DL-MOCK-1021"
    }
  ],
  reviews: [
    {
      id: "r-1",
      userId: "u-student",
      noteId: "n-2",
      rating: 5,
      comment: "Vize öncesi çok işime yaradı, tablolar net.",
      createdAt: "2026-06-13",
      likes: ["u-seller"],
      replies: [
        {
          id: "rr-1",
          userId: "u-seller",
          text: "Güle güle kullan, final için de ek tablo hazırlıyorum.",
          createdAt: "2026-06-14"
        }
      ]
    },
    {
      id: "r-2",
      userId: "u-student",
      noteId: "n-1",
      rating: 4,
      comment: "Çıkmış soru bölümü güzel, dinamik programlama kısmı biraz daha uzun olabilir.",
      createdAt: "2026-06-10",
      likes: [],
      replies: []
    }
  ],
  favorites: [{ userId: "u-student", noteId: "n-1" }],
  reports: [
    {
      id: "rep-1",
      reporterId: "u-student",
      noteId: "n-3",
      reason: "Kaynak bilgisi eksik olabilir.",
      status: "open",
      createdAt: "2026-06-18"
    }
  ],
  categories: [
    "İstanbul Teknik Üniversitesi|Bilgisayar ve Bilişim Fakültesi|Bilgisayar Mühendisliği|Algoritma Analizi",
    "Boğaziçi Üniversitesi|İktisadi ve İdari Bilimler Fakültesi|İktisat|Mikro İktisat",
    "Ankara Üniversitesi|Hukuk Fakültesi|Hukuk|Hukuka Giriş"
  ]
};

let state = loadState();
let route = routeFromLocation();
let filters = { query: "", university: "", department: "", course: "", instructor: "", price: "", sort: "new" };
let reviewSort = "new";
const officePreviewCache = new Map();
let theme = localStorage.getItem(THEME_KEY) || "light";
let profilePanel = "overview";
let profileDiscoverPage = 0;
let adminUserFilters = { query: "", university: "", department: "", role: "" };
let badgeModalUserId = null;
let programCatalog = [];

document.documentElement.dataset.theme = theme;

function routeFromLocation() {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const page = parts[0] || "home";
  const id = parts[1] ? decodeURIComponent(parts[1]) : undefined;
  const simplePages = new Set(["home", "auth", "upload", "cart", "student", "seller", "admin", "profile"]);
  if (simplePages.has(page)) return { page };
  if (["detail", "edit", "user"].includes(page) && id) return { page, id };
  return { page: "home" };
}

function routeToHash(nextRoute) {
  if (!nextRoute || nextRoute.page === "home") return "#/";
  const id = nextRoute.id ? `/${encodeURIComponent(nextRoute.id)}` : "";
  return `#/${nextRoute.page}${id}`;
}

function navigate(nextRoute, options = {}) {
  route = nextRoute || { page: "home" };
  const nextHash = routeToHash(route);
  if (window.location.hash !== nextHash) {
    history[options.replace ? "replaceState" : "pushState"]({ route }, "", nextHash);
  }
  render();
}

window.addEventListener("popstate", () => {
  route = routeFromLocation();
  render();
});

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return normalizeState(saved ? JSON.parse(saved) : structuredClone(seed));
}

function normalizeState(nextState) {
  nextState.follows ||= [{ followerId: "u-student", followingId: "u-seller" }];
  seed.users
    .filter((seedUser) => seedUser.id.startsWith("u-mock-") && !nextState.users.some((user) => user.id === seedUser.id))
    .forEach((seedUser) => nextState.users.push(structuredClone(seedUser)));
  const sampleStudent = nextState.users.find((user) => user.id === "u-student");
  const sampleSeller = nextState.users.find((user) => user.id === "u-seller");
  if (sampleStudent) {
    sampleStudent.name = "Sıla Yıldırım";
    sampleStudent.email = "sila@ogr.edu.tr";
  }
  if (sampleSeller) {
    sampleSeller.name = "Berkay Demircanlı";
    sampleSeller.email = "berkay@ogr.edu.tr";
  }
  nextState.users.forEach((user) => {
    user.bio ||= user.role === "admin" ? "Notum moderasyon ekibi" : `${user.department || "Üniversite"} notlarını keşfediyor ve paylaşıyor.`;
    user.profileColor ||= user.id === "u-seller" ? "#30d5c8" : user.id === "u-admin" ? "#ffbe55" : "#ff5f8f";
    user.adminStats ||= {};
    user.badgeOverrides ||= [];
  });
  return nextState;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function id(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function currentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function money(value) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

function sellerName(note) {
  return state.users.find((user) => user.id === note.sellerId)?.name || "Satıcı";
}

function noteReviews(noteId) {
  return state.reviews.filter((review) => review.noteId === noteId);
}

function noteFavorites(noteId) {
  return state.favorites.filter((favorite) => favorite.noteId === noteId).length;
}

function rating(noteId) {
  const reviews = noteReviews(noteId);
  if (!reviews.length) return "Yeni";
  const avg = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return `${avg.toFixed(1)} ★`;
}

function hasPurchased(userId, noteId) {
  return state.purchases.some((purchase) => purchase.buyerId === userId && purchase.noteId === noteId);
}

function approvedNotes() {
  return state.notes.filter((note) => note.status === "approved" && !isSeedNote(note));
}

function isSeedNote(note) {
  return /^n-\d+$/.test(note.id || "") && !note.fileStored;
}

function unique(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "tr"));
}

async function loadProgramCatalog() {
  try {
    const response = await fetch(PROGRAM_CATALOG_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Program kataloğu yüklenemedi.");
    programCatalog = normalizeProgramCatalog(await response.json());
  } catch {
    programCatalog = [];
  }
  programCatalog = mergeProgramCatalog(programCatalog);
}

function normalizeProgramCatalog(items) {
  return (Array.isArray(items) ? items : [])
    .map((item) => ({
      source: item.source || "YOK Atlas",
      sourceTable: item.sourceTable || "",
      level: item.level || "lisans",
      programCode: String(item.programCode || "").trim(),
      university: String(item.university || "").trim(),
      city: String(item.city || "").trim(),
      universityType: String(item.universityType || "").trim(),
      faculty: String(item.faculty || "").trim(),
      unitType: String(item.unitType || "").trim(),
      department: String(item.department || item.program || "").trim(),
      program: String(item.program || item.department || "").trim(),
      educationType: String(item.educationType || "").trim(),
      language: String(item.language || "").trim()
    }))
    .filter((item) => item.university && item.department);
}

function mergeProgramCatalog(...groups) {
  const byKey = new Map();
  groups.flat().forEach((item) => {
    const normalized = normalizeProgramCatalog([item])[0];
    if (!normalized) return;
    const key = [normalized.university, normalized.faculty, normalized.department].join("|").toLocaleLowerCase("tr");
    if (!byKey.has(key)) byKey.set(key, normalized);
  });
  return [...byKey.values()].sort((a, b) =>
    [a.university, a.faculty, a.department].join("|").localeCompare([b.university, b.faculty, b.department].join("|"), "tr")
  );
}

function catalogValues(key) {
  return [...new Set(programCatalog.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "tr"));
}

function catalogDatalists() {
  return `
    <datalist id="university-options">${catalogValues("university").map((value) => `<option value="${escapeHtml(value)}"></option>`).join("")}</datalist>
    <datalist id="faculty-options">${catalogValues("faculty").map((value) => `<option value="${escapeHtml(value)}"></option>`).join("")}</datalist>
    <datalist id="department-options">${catalogValues("department").map((value) => `<option value="${escapeHtml(value)}"></option>`).join("")}</datalist>
  `;
}

function catalogValuesForSelection(key, selection = {}) {
  return [
    ...new Set(
      programCatalog
        .filter((item) => !selection.university || item.university === selection.university)
        .filter((item) => !selection.faculty || item.faculty === selection.faculty)
        .map((item) => item[key])
        .filter(Boolean)
    )
  ].sort((a, b) => a.localeCompare(b, "tr"));
}

function updateDatalist(idValue, values) {
  document.querySelectorAll(`#${idValue}`).forEach((list) => {
    list.innerHTML = values.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
  });
}

function bindCatalogInputs() {
  document.querySelectorAll('[data-action="upload"], [data-action="edit-note"], [data-action="profile"]').forEach((form) => {
    const university = form.elements.university;
    const faculty = form.elements.faculty;
    const department = form.elements.department;
    if (!university || !department) return;

    const refresh = () => {
      const selectedUniversity = university.value.trim();
      const selectedFaculty = faculty?.value.trim() || "";
      updateDatalist("faculty-options", catalogValuesForSelection("faculty", { university: selectedUniversity }));
      updateDatalist("department-options", catalogValuesForSelection("department", { university: selectedUniversity, faculty: selectedFaculty }));
    };

    const fillFacultyFromDepartment = () => {
      if (!faculty || faculty.value.trim()) return;
      const match = programCatalog.find((item) =>
        item.university === university.value.trim() && item.department === department.value.trim()
      );
      if (match) faculty.value = match.faculty;
    };

    university.addEventListener("input", refresh);
    faculty?.addEventListener("input", refresh);
    department.addEventListener("change", fillFacultyFromDepartment);
    refresh();
  });
}

function statusLabel(status) {
  return { pending: "Bekliyor", approved: "Onaylandı", rejected: "Reddedildi" }[status];
}

function roleName(role) {
  return { student: "Öğrenci", admin: "Admin" }[role] || role;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const user = currentUser();
  document.documentElement.dataset.theme = theme;
  document.getElementById("app").innerHTML = `
    <header class="topbar">
      <button class="brand" data-route="home" aria-label="Ana sayfa">
        <span class="brand-mark"><img src="src/notum-icon.png" alt="" aria-hidden="true" /></span>
      </button>
      <nav class="nav">
        <button data-route="home">Notlar</button>
        <button data-route="upload">Not Yükle</button>
        <button data-route="student">Panelim</button>
        <button data-route="seller">Satışlarım</button>
        ${user?.role === "admin" ? '<button data-route="admin">Admin</button>' : ""}
      </nav>
      <div class="session">
        <button class="theme-toggle" data-theme-toggle aria-label="Tema değiştir">
          <span>${theme === "dark" ? "☀" : "☾"}</span>
        </button>
        <button class="cart" data-route="cart">Sepet <span>${state.cart.length}</span></button>
        ${
          user
            ? `<button class="user-chip" data-route="profile">${escapeHtml(user.name)}<small>${roleName(user.role)}</small></button>`
            : '<button class="primary small" data-route="auth">Giriş</button>'
        }
      </div>
    </header>
    <main>${page()}</main>
  `;
  bindEvents();
}

function page() {
  if (route.page === "detail") return detailPage(route.id);
  if (route.page === "auth") return authPage();
  if (route.page === "upload") return uploadPage();
  if (route.page === "cart") return cartPage();
  if (route.page === "student") return studentPage();
  if (route.page === "seller") return sellerPage();
  if (route.page === "admin") return adminPage();
  if (route.page === "profile") return profileHubPage();
  if (route.page === "user") return route.id === currentUser()?.id ? profileHubPage() : publicProfilePage(route.id);
  if (route.page === "edit") return editNotePage(route.id);
  return homePage();
}

function homePage() {
  const notes = filteredNotes();
  const approved = approvedNotes();
  const totalSales = approved.reduce((sum, note) => sum + note.sales, 0);
  const averagePrice = approved.length ? Math.round(approved.reduce((sum, note) => sum + note.price, 0) / approved.length) : 0;
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Dersini seç, notunu bul, zaman kazan</p>
        <h1>Üniversite notları için canlı ve güvenli pazar yeri.</h1>
        <p class="hero-lead">En iyi özetleri, çıkmış soruları ve sunum setlerini tek akışta keşfet.</p>
      </div>
      <div class="hero-showcase" aria-hidden="true">
        <div class="showcase-card primary-showcase">
          ${heroTrendCard(notes[0])}
        </div>
        <div class="hero-metrics">
          <div><strong>${approved.length}</strong><span>aktif not</span></div>
          <div><strong>${totalSales}</strong><span>satış</span></div>
          <div><strong>${averagePrice} TL</strong><span>ortalama</span></div>
        </div>
      </div>
      ${heroStudentDiscovery()}
    </section>
    <section class="market-shell">
      <div class="market-toolbar">
        <form class="search-panel" data-action="search">
          <input name="query" value="${escapeHtml(filters.query)}" placeholder="Ders, hoca, bölüm veya not ara" />
          <select name="university">${selectOptions("Üniversite seç", catalogValues("university"), filters.university)}</select>
          <button class="primary" type="submit">Ara</button>
        </form>
      </div>
      <aside class="filters">
        <div class="filters-head">
          <h2>Filtreler</h2>
          <button class="ghost small" data-reset>Filtreleri temizle</button>
        </div>
        ${filterSelect("department", "Bölüm", catalogValues("department"))}
        ${filterSelect("course", "Ders", unique(state.notes, "course"))}
        ${filterSelect("instructor", "Hoca", unique(state.notes, "instructor"))}
        <label>Fiyat aralığı
          <select data-filter="price">${selectOptions("Tüm fiyatlar", ["0-100", "100-150", "150+"], filters.price)}</select>
        </label>
        <label>Sıralama
          <select data-filter="sort">
            <option value="new" ${filters.sort === "new" ? "selected" : ""}>En yeni notlar</option>
            <option value="best" ${filters.sort === "best" ? "selected" : ""}>En çok satanlar</option>
            <option value="rated" ${filters.sort === "rated" ? "selected" : ""}>En yüksek puanlılar</option>
          </select>
        </label>
      </aside>
      <section class="catalog">
        <div class="section-head">
          <div><h2>Yayındaki notlar</h2><p>${notes.length} onaylı materyal listeleniyor</p></div>
        </div>
        <div class="note-grid">${notes.map(noteCard).join("") || empty("Aradığın kriterlerde not bulunamadı.")}</div>
      </section>
    </section>
  `;
}

function heroTrendCard(note) {
  if (!note) {
    return `
      <span>Henüz trend yok</span>
      <strong>İlk notu sen yükle</strong>
      <small>Onaylı not geldiğinde burada gerçek trend gösterilecek.</small>
    `;
  }
  return `
    <span>Trend not</span>
    <strong>${escapeHtml(note.course)}</strong>
    <small>${money(note.price)} · ${note.sales || 0} satış</small>
  `;
}

function heroStudentDiscovery() {
  const students = state.users.filter((user) => user.role === "student");
  if (!students.length) return "";
  return `
    <div class="student-discovery">
      <img class="student-discovery-logo" src="src/son-logo-renk-degisti.png" alt="Notum" />
      <div class="student-carousel" data-student-carousel>
        <div class="student-carousel-stage" style="--student-count:${students.length}">
          ${students.map((user, index) => heroStudentCard(user, index, students.length)).join("")}
        </div>
      </div>
    </div>
  `;
}

function heroStudentCard(user, index, total) {
  const angle = Math.round((360 / Math.max(total, 1)) * index);
  const followers = followerCount(user);
  const following = followingCount(user);
  const notes = noteCount(user);
  return `
    <button class="student-profile-card" data-user-profile="${user.id}" data-student-card="${index}" style="--card-angle:${angle}deg">
      ${profileAvatar(user)}
      <strong>${escapeHtml(user.name)}</strong>
      <small>${escapeHtml(user.university || "Üniversite")}</small>
      <div class="student-card-stats">
        <span><b>${followers}</b><em>Takipçi</em></span>
        <span><b>${following}</b><em>Takip</em></span>
        <span><b>${notes}</b><em>Not</em></span>
      </div>
    </button>
  `;
}

function filteredNotes() {
  const query = filters.query.trim().toLocaleLowerCase("tr");
  let notes = approvedNotes().filter((note) => {
    const text = [note.title, note.description, note.university, note.department, note.course, note.instructor]
      .join(" ")
      .toLocaleLowerCase("tr");
    const priceOk =
      !filters.price ||
      (filters.price === "0-100" && note.price <= 100) ||
      (filters.price === "100-150" && note.price > 100 && note.price <= 150) ||
      (filters.price === "150+" && note.price > 150);
    return (
      (!query || text.includes(query)) &&
      (!filters.university || note.university === filters.university) &&
      (!filters.department || note.department === filters.department) &&
      (!filters.course || note.course === filters.course) &&
      (!filters.instructor || note.instructor === filters.instructor) &&
      priceOk
    );
  });
  if (filters.sort === "best") notes = notes.sort((a, b) => b.sales - a.sales);
  else if (filters.sort === "rated") notes = notes.sort((a, b) => numericRating(b.id) - numericRating(a.id));
  else notes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return notes;
}

function numericRating(noteId) {
  const reviews = noteReviews(noteId);
  return reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;
}

function sortedNoteReviews(noteId) {
  const reviews = [...noteReviews(noteId)];
  if (reviewSort === "liked") return reviews.sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0));
  if (reviewSort === "rated") return reviews.sort((a, b) => b.rating - a.rating);
  return reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function noteCard(note) {
  return `
    <article class="note-card">
      <button class="favorite ${isFavorite(note.id) ? "active" : ""}" data-favorite="${note.id}" aria-label="Favori">♡</button>
      <div class="file-badge">${note.fileType}</div>
      <h3>${escapeHtml(note.title)}</h3>
      <p>${escapeHtml(note.course)} · ${escapeHtml(note.department)}</p>
      <p class="muted">${escapeHtml(note.university)}</p>
      <p class="muted">Yüklendi: ${formatDate(note.createdAt)}</p>
      <div class="card-meta"><span>${rating(note.id)}</span><span>${note.sales} satış</span></div>
      <div class="card-meta"><span>${noteFavorites(note.id)} favori</span><span>${noteReviews(note.id).length} yorum</span></div>
      <div class="card-foot"><strong>${money(note.price)}</strong><small>${escapeHtml(sellerName(note))}</small></div>
      <button class="primary wide" data-detail="${note.id}">Detay</button>
    </article>
  `;
}

function detailPage(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return empty("Not bulunamadı.");
  const user = currentUser();
  const purchased = user && hasPurchased(user.id, note.id);
  const reviews = noteReviews(note.id);
  const sortedReviews = sortedNoteReviews(note.id);
  return `
    <section class="detail-layout">
      <div class="preview">
        <div class="preview-head">
          <span class="file-badge">${note.fileType}</span>
          <div><strong>Önizleme</strong><small>Satıcının seçtiği ${getPreviewPages(note).length} sayfa gösteriliyor</small></div>
        </div>
        <div class="preview-pages ${hasOriginalFile(note) && note.fileType === "PDF" ? "pdf-detail-pages" : ""}">${previewPages(note).join("")}</div>
        <div class="copyright">
          <strong>Telif uyarısı</strong>
          <p>Yükleyen kullanıcı bu materyalin kendi hazırladığı özgün not olduğunu kabul eder. Şüpheli içerikler bildirilebilir.</p>
        </div>
      </div>
      <aside class="detail-panel">
        <button class="back" data-route="home">← Listeye dön</button>
        <h1>${escapeHtml(note.title)}</h1>
        <p>${escapeHtml(note.description)}</p>
        <dl>
          <div><dt>Üniversite</dt><dd>${escapeHtml(note.university)}</dd></div>
          <div><dt>Fakülte</dt><dd>${escapeHtml(note.faculty)}</dd></div>
          <div><dt>Bölüm</dt><dd>${escapeHtml(note.department)}</dd></div>
          <div><dt>Ders</dt><dd>${escapeHtml(note.course)}</dd></div>
          <div><dt>Hoca</dt><dd>${escapeHtml(note.instructor)}</dd></div>
          <div><dt>Satıcı</dt><dd>${escapeHtml(sellerName(note))}</dd></div>
          <div><dt>Yüklenme</dt><dd>${formatDate(note.createdAt)}</dd></div>
        </dl>
        ${sellerMini(note)}
        ${detailStats(note)}
        <div class="ai-box"><strong>AI kısa açıklama</strong><p>${escapeHtml(note.aiSummary)}</p></div>
        <div class="price-line"><span>${rating(note.id)}</span><strong>${money(note.price)}</strong></div>
        ${hasOriginalFile(note) ? `<div class="original-file">Orijinal dosya: <strong>${escapeHtml(note.fileName)}</strong></div>` : fallbackFormatSelect(note)}
        ${
          purchased
            ? `<button class="primary wide" data-download="${note.id}">${hasOriginalFile(note) ? "Orijinal dosyayı indir" : "Dosyayı indir"}</button>`
            : `<button class="primary wide" data-add-cart="${note.id}">Sepete ekle</button>`
        }
        <button class="ghost wide" data-report="${note.id}">Şikayet et</button>
      </aside>
    </section>
    <section class="content-band">
      <div class="section-head">
        <div><h2>Yorumlar</h2><p>Sadece satın alan öğrenciler yorum yapabilir.</p></div>
        <select data-review-sort>
          <option value="new" ${reviewSort === "new" ? "selected" : ""}>En yeni</option>
          <option value="liked" ${reviewSort === "liked" ? "selected" : ""}>En beğenilen</option>
          <option value="rated" ${reviewSort === "rated" ? "selected" : ""}>En yüksek puan</option>
        </select>
      </div>
      ${purchased ? reviewForm(note.id) : ""}
      <div class="reviews">${sortedReviews.map(reviewItem).join("") || empty("Bu not için henüz yorum yok.")}</div>
    </section>
  `;
}

function detailStats(note) {
  return `<div class="detail-stats">
    <div><span>Görüntülenme</span><strong>${note.views || 0}</strong></div>
    <div><span>Favori</span><strong>${noteFavorites(note.id)}</strong></div>
    <div><span>Satış</span><strong>${note.sales}</strong></div>
    <div><span>Yorum</span><strong>${noteReviews(note.id).length}</strong></div>
  </div>`;
}

function sellerMini(note) {
  const seller = state.users.find((user) => user.id === note.sellerId);
  const sellerNotes = state.notes.filter((item) => item.sellerId === note.sellerId);
  const sellerSales = sellerNotes.reduce((sum, item) => sum + item.sales, 0);
  const allReviews = sellerNotes.flatMap((item) => noteReviews(item.id));
  const avg = allReviews.length ? (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1) : "Yeni";
  return `<div class="seller-mini">
    <strong>${escapeHtml(seller?.name || "Satıcı")}</strong>
    <span>${sellerNotes.length} not · ${sellerSales} satış · ${avg}${avg === "Yeni" ? "" : " ★"}</span>
  </div>`;
}

function previewPages(note) {
  if (hasOriginalFile(note) && note.fileType === "PDF") return realPdfPreviewPages(note);
  const pages = getPreviewPages(note);
  return pages.map(
    (page, index) => `
      <article class="note-preview-page">
        <div class="page-number">Sayfa ${index + 1}</div>
        <h2>${escapeHtml(page.title)}</h2>
        <p>${escapeHtml(page.body)}</p>
        <ul>${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <div class="preview-callout">${escapeHtml(page.callout)}</div>
        <div class="watermark">Notum önizleme</div>
      </article>
    `
  );
}

function realPdfPreviewPages(note) {
  const pages = (note.selectedPreviewPages?.length ? note.selectedPreviewPages : [1, 2, 3]).slice(0, 5);
  return pages
    .map(
      (page) => `
        <article class="note-preview-page real-pdf-page" data-real-pdf-preview="${note.id}" data-page="${page}">
          <span class="page-number">Sayfa ${page}</span>
          <div class="real-pdf-loading">PDF sayfası yükleniyor...</div>
        </article>
      `
    );
}

function getPreviewPages(note) {
  const pages = Array.isArray(note.preview) && note.preview.length ? note.preview : autoPreviewPages(note);
  return pages.slice(0, 5);
}

function autoPreviewPages(note) {
  return [
    {
      title: `${note.course}: Genel Bakış`,
      body: note.description,
      bullets: ["Ana kavramlar", "Sınavda çıkabilecek başlıklar", "Hızlı tekrar notları"],
      callout: note.aiSummary
    },
    {
      title: "Örnek Çalışma Sayfası",
      body: `${note.instructor} ders anlatımına uygun şekilde hazırlanmış örnek konu akışı ve kısa açıklamalar.`,
      bullets: ["Konu tanımı", "Kritik formül veya kavram", "Mini örnek"],
      callout: "Satıcı özel önizleme koymazsa sistem ilk 3 sayfayı otomatik kullanır."
    },
    {
      title: "Soru ve Tekrar Alanı",
      body: "Tam dosyada çözümlü sorular, ek tablolar ve sınav öncesi kontrol listesi yer alır.",
      bullets: ["Kendini test et", "Eksik konuları işaretle", "Satın alma sonrası tam dosyayı indir"],
      callout: "Bu otomatik önizleme tam içeriğin kısa bir temsilidir."
    }
  ];
}

function reviewForm(noteId) {
  return `
    <form class="inline-form" data-action="review" data-note="${noteId}">
      <select name="rating">
        <option value="5">5 yıldız</option>
        <option value="4">4 yıldız</option>
        <option value="3">3 yıldız</option>
        <option value="2">2 yıldız</option>
        <option value="1">1 yıldız</option>
      </select>
      <input name="comment" placeholder="Yorumun" required />
      <button class="primary" type="submit">Yorum yap</button>
    </form>
  `;
}

function reviewItem(review) {
  const user = state.users.find((item) => item.id === review.userId);
  const current = currentUser();
  const liked = current && review.likes?.includes(current.id);
  const ownReview = current && review.userId === current.id;
  return `<article class="review">
    <div class="review-head">
      <strong>${review.rating} ★ · ${escapeHtml(user?.name || "Öğrenci")}</strong>
      <small>${formatDate(review.createdAt)}</small>
    </div>
    <p>${escapeHtml(review.comment)}</p>
    <div class="review-actions">
      <button class="ghost small ${liked ? "active-action" : ""}" data-like-review="${review.id}">Beğen · ${review.likes?.length || 0}</button>
      ${ownReview ? `<button class="danger small" data-delete-review="${review.id}">Sil</button>` : ""}
    </div>
    <div class="review-replies">${(review.replies || []).map(replyItem).join("")}</div>
    ${current ? replyForm(review.id) : ""}
  </article>`;
}

function replyItem(reply) {
  const user = state.users.find((item) => item.id === reply.userId);
  return `<div class="review-reply"><strong>${escapeHtml(user?.name || "Kullanıcı")}</strong><span>${formatDate(reply.createdAt)}</span><p>${escapeHtml(reply.text)}</p></div>`;
}

function replyForm(reviewId) {
  return `<form class="reply-form" data-action="reply" data-review="${reviewId}">
    <input name="reply" placeholder="Yanıt yaz" required />
    <button class="primary small" type="submit">Yanıtla</button>
  </form>`;
}

function authPage() {
  return `
    <section class="auth-grid">
      <form class="panel" data-action="login">
        <h1>Giriş yap</h1>
        <label>E-posta<input name="email" type="email" value="sila@ogr.edu.tr" required /></label>
        <label>Şifre<input name="password" type="password" value="123456" required /></label>
        <button class="primary wide" type="submit">Giriş</button>
      </form>
      <form class="panel" data-action="register">
        <h1>Kayıt ol</h1>
        <label>Ad soyad<input name="name" required /></label>
        <label>E-posta<input name="email" type="email" required /></label>
        <label>Şifre<input name="password" type="password" minlength="6" required /></label>
        <button class="primary wide" type="submit">Hesap oluştur</button>
      </form>
    </section>
  `;
}

function uploadPage() {
  const user = currentUser();
  if (!user) return authPage();
  return `
    <section class="form-page">
      <form class="panel wide-panel upload-studio" data-action="upload">
        <div class="section-head">
          <div><h1>Not yükle</h1><p>Dosyanı ekle, bilgileri doldur ve seçtiğin önizlemeyle yayına hazırla.</p></div>
          <span class="pill">Akıllı açıklama</span>
        </div>
        <div class="upload-steps">
          <div><strong>Dosyanı seç</strong><span>PDF, DOCX, PPTX veya TXT dosyanı ekle.</span></div>
          <div><strong>Bilgileri doldur</strong><span>Ders, hoca, bölüm ve fiyat bilgilerini yaz.</span></div>
          <div><strong>Önizlemeyi belirle</strong><span>Dosya sayfalarından gösterilecek alanları seç.</span></div>
        </div>
        <div class="form-grid">
          <label>Başlık<input name="title" required /></label>
          <label>Fiyat<input name="price" type="number" min="1" value="99" required /></label>
          <label>Üniversite<input name="university" list="university-options" value="${escapeHtml(user.university || "")}" required /></label>
          <label>Fakülte<input name="faculty" list="faculty-options" required /></label>
          <label>Bölüm<input name="department" list="department-options" value="${escapeHtml(user.department || "")}" required /></label>
          <label>Ders adı<input name="course" required /></label>
          <label>Hoca adı<input name="instructor" required /></label>
          <label class="full file-drop">Not dosyası
            <input name="noteFile" type="file" accept=".pdf,.docx,.pptx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain" required />
            <span>PDF, DOCX, PPTX veya TXT dosyanı bırak. Önizleme alanı dosyaya göre hazırlanır.</span>
          </label>
          <label>Toplam sayfa/slayt
            <input name="pageCount" type="number" min="1" max="300" placeholder="Dosyadan hesaplanır" readonly />
          </label>
          <label class="full">Açıklama<textarea name="description" rows="4" required></textarea></label>
          <input name="selectedPreviewPages" type="hidden" value="" />
          <div class="full preview-picker" data-preview-picker>
            <div class="preview-picker-head">
              <div><strong>Önizleme sayfaları</strong><small>Sayfaların sağ üstündeki kutudan en fazla 5 sayfa seç. Seçim yapmazsan ilk 3 sayfa otomatik kullanılır.</small></div>
              <span data-preview-count>0/5</span>
            </div>
            <div class="source-viewer" data-source-viewer>Dosya seçildiğinde burada sayfalar açılır.</div>
          </div>
        </div>
        ${catalogDatalists()}
        <div class="form-actions">
          <label class="check"><input name="copyright" type="checkbox" required /> Bu materyali kendim hazırladım ve telif sorumluluğunu kabul ediyorum.</label>
          <button class="ghost" type="button" data-ai-fill>AI kısa açıklama oluştur</button>
          <button class="primary" type="submit">Notu yayınla</button>
        </div>
      </form>
    </section>
  `;
}

function editNotePage(noteId) {
  const user = currentUser();
  if (!user) return authPage();
  const note = state.notes.find((item) => item.id === noteId && item.sellerId === user.id);
  if (!note) return `<section class="dashboard">${empty("Düzenlenecek not bulunamadı.")}</section>`;
  const selected = (note.selectedPreviewPages?.length ? note.selectedPreviewPages : [1, 2, 3]).join(",");
  return `
    <section class="form-page">
      <form class="panel wide-panel upload-studio" data-action="edit-note" data-note="${note.id}">
        <div class="section-head">
          <div><h1>Notu düzenle</h1><p>Bilgileri, fiyatı, açıklamayı ve önizleme vitrininini güncelle.</p></div>
          <button class="ghost" type="button" data-route="seller">Satışlara dön</button>
        </div>
        <div class="form-grid">
          <label>Başlık<input name="title" value="${escapeHtml(note.title)}" required /></label>
          <label>Fiyat<input name="price" type="number" min="1" value="${note.price}" required /></label>
          <label>Üniversite<input name="university" list="university-options" value="${escapeHtml(note.university)}" required /></label>
          <label>Fakülte<input name="faculty" list="faculty-options" value="${escapeHtml(note.faculty || "")}" required /></label>
          <label>Bölüm<input name="department" list="department-options" value="${escapeHtml(note.department)}" required /></label>
          <label>Ders adı<input name="course" value="${escapeHtml(note.course)}" required /></label>
          <label>Hoca adı<input name="instructor" value="${escapeHtml(note.instructor)}" required /></label>
          <label>Toplam sayfa/slayt
            <input name="pageCount" type="number" min="1" max="300" value="${note.pageCount || getPreviewPages(note).length}" readonly />
          </label>
          <label class="full">Açıklama<textarea name="description" rows="4" required>${escapeHtml(note.description)}</textarea></label>
          <label class="full file-drop">Dosyayı değiştir
            <input name="noteFile" type="file" accept=".pdf,.docx,.pptx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain" />
            <span>Boş bırakırsan mevcut dosya korunur. Yeni dosya seçersen sayfa/slayt sayısı otomatik güncellenir.</span>
          </label>
          <input name="selectedPreviewPages" type="hidden" value="${escapeHtml(selected)}" />
          <div class="full preview-picker" data-preview-picker>
            <div class="preview-picker-head">
              <div><strong>Önizleme sayfaları</strong><small>Mevcut dosyanın sayfalarından en fazla 5 tanesini seç. Yeni dosya seçersen liste otomatik yenilenir.</small></div>
              <span data-preview-count>${selectedPreviewNumbers(selected).length}/5</span>
            </div>
            <div class="source-viewer" data-source-viewer>
              ${storedSourceViewerMarkup(note)}
            </div>
          </div>
        </div>
        ${catalogDatalists()}
        <div class="form-actions">
          <button class="ghost" type="button" data-ai-fill>AI kısa açıklama oluştur</button>
          <button class="primary" type="submit">Değişiklikleri kaydet</button>
        </div>
      </form>
    </section>
  `;
}

function storedSourceViewerMarkup(note) {
  const pageCount = Math.max(1, Math.min(300, Number(note.pageCount) || getPreviewPages(note).length || 1));
  const selected = (note.selectedPreviewPages?.length ? note.selectedPreviewPages : [1, 2, 3]).filter((page) => page <= pageCount).slice(0, 5);
  const type = hasOriginalFile(note) ? note.fileType : "NOTE";
  return sourceViewerMarkup({ name: note.fileName || note.title }, pageCount, selected, type, note.id);
}

async function hydrateStoredEditPreview() {
  const form = document.querySelector('[data-action="edit-note"]');
  if (!form) return;
  const note = state.notes.find((item) => item.id === form.dataset.note);
  const viewer = form.querySelector("[data-source-viewer]");
  if (!note || !viewer) return;
  bindPreviewToggles(form, viewer);
  if (!note.fileStored && !note.fileData) return;
  const dataUrl = await getUploadedFile(note.id);
  if (!dataUrl) return;
  if (note.fileType === "PDF") {
    if (!window.pdfjsLib) return;
    const pdf = await window.pdfjsLib.getDocument({ data: dataUrlToBytes(dataUrl) }).promise;
    for (const slot of viewer.querySelectorAll("[data-pdf-page]")) {
      await renderPdfPageToSlot(pdf, Number(slot.dataset.pdfPage), slot, 1.1);
    }
    return;
  }
  if (["DOCX", "PPTX", "TXT"].includes(note.fileType)) {
    const file = dataUrlToFile(dataUrl, note.fileName || "notum-file", note.fileMime || mimeForFileType(note.fileType));
    await renderOfficeUploadPages(file, viewer, note.fileType);
  }
}

function cartPage() {
  const items = state.cart.map((noteId) => state.notes.find((note) => note.id === noteId)).filter(Boolean);
  const total = items.reduce((sum, note) => sum + note.price, 0);
  return `
    <section class="dashboard">
      <div class="section-head"><div><h1>Sepet</h1><p>Satın almak istediğin notları buradan tamamla.</p></div></div>
      <div class="panel">
        ${items.map(cartItem).join("") || empty("Sepet boş.")}
        <div class="total"><span>Toplam</span><strong>${money(total)}</strong></div>
        <button class="primary wide" data-checkout ${items.length ? "" : "disabled"}>Ödemeyi tamamla</button>
      </div>
    </section>
  `;
}

function cartItem(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.university)}</small></div><span>${money(note.price)}</span><button class="icon-btn" data-remove-cart="${note.id}">×</button></div>`;
}

function studentPage() {
  const user = currentUser();
  if (!user) return authPage();
  const purchased = state.purchases.filter((purchase) => purchase.buyerId === user.id).map((purchase) => state.notes.find((note) => note.id === purchase.noteId)).filter(Boolean);
  const favs = state.favorites.filter((favorite) => favorite.userId === user.id).map((favorite) => state.notes.find((note) => note.id === favorite.noteId)).filter(Boolean);
  const myReviews = state.reviews.filter((review) => review.userId === user.id);
  return `
    <section class="dashboard">
      ${stats([
        { label: "Satın aldığım", value: purchased.length, target: "student-purchases" },
        { label: "Favoriler", value: favs.length, target: "student-favorites" },
        { label: "Yorumlarım", value: myReviews.length, target: "student-reviews" }
      ])}
      <div class="columns">
        <div class="panel scroll-target" id="student-purchases"><h2>Satın aldığım notlar</h2>${purchased.map(ownedItem).join("") || empty("Henüz satın alma yok.")}</div>
        <div class="panel scroll-target" id="student-favorites"><h2>Favoriler</h2>${favs.map(simpleNoteRow).join("") || empty("Favori listen boş.")}</div>
      </div>
      <div class="panel scroll-target" id="student-reviews"><h2>Yorumlarım</h2>${myReviews.map(studentReviewRow).join("") || empty("Henüz yorum yapmadın.")}</div>
    </section>
  `;
}

function ownedItem(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.course)}</small></div><button class="primary small" data-download="${note.id}">İndir</button></div>`;
}

function studentReviewRowLegacy(review) {
  const note = state.notes.find((item) => item.id === review.noteId);
  return `<div class="row"><div><strong>${review.rating} ★ · ${escapeHtml(note?.title || "Not")}</strong><small>${escapeHtml(review.comment)}</small></div><button class="ghost small" data-detail="${review.noteId}">Aç</button></div>`;
}

function studentReviewRow(review) {
  const note = state.notes.find((item) => item.id === review.noteId);
  const ownReview = currentUser()?.id === review.userId;
  return `<div class="row"><div><strong>${review.rating} ★ · ${escapeHtml(note?.title || "Not")}</strong><small>${escapeHtml(review.comment)}</small></div><button class="ghost small" data-detail="${review.noteId}">Ac</button>${ownReview ? `<button class="danger small" data-delete-review="${review.id}">Sil</button>` : ""}</div>`;
}

function sellerPage() {
  const user = currentUser();
  if (!user) return authPage();
  const notes = state.notes.filter((note) => note.sellerId === user.id);
  const sales = notes.reduce((sum, note) => sum + note.sales, 0);
  const earnings = notes.reduce((sum, note) => sum + note.sales * note.price * 0.8, 0);
  return `
    <section class="dashboard">
      ${stats([{ label: "Yüklediğim not", value: notes.length }, { label: "Satış sayısı", value: sales }, { label: "Toplam kazanç", value: money(earnings) }])}
      <div class="panel scroll-target" id="seller-notes">
        <div class="section-head"><div><h1>Satışlarım</h1><p>Yüklediğin notlar, satışların ve kazanç özetin.</p></div></div>
        ${notes.map(sellerRow).join("") || empty("Henüz not yüklemedin.")}
      </div>
      <div class="panel scroll-target seller-earnings" id="seller-earnings">
        <h2>Kazanç özeti</h2>
        <div class="detail-stats">
          <div><span>Brüt satış</span><strong>${money(notes.reduce((sum, note) => sum + note.sales * note.price, 0))}</strong></div>
          <div><span>Tahmini payın</span><strong>${money(earnings)}</strong></div>
          <div><span>Komisyon</span><strong>%20</strong></div>
          <div><span>Toplam satış</span><strong>${sales}</strong></div>
        </div>
      </div>
    </section>
  `;
}

function sellerRow(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${statusLabel(note.status)} · ${note.sales} satış</small></div><span>${money(note.price)}</span><button class="ghost small" data-edit-note="${note.id}">Düzenle</button><button class="danger small" data-delete-note="${note.id}">Sil</button></div>`;
}

function adminPage() {
  const user = currentUser();
  if (user?.role !== "admin") return `<section class="dashboard">${empty("Bu alan yalnızca admin hesabına açık.")}</section>`;
  return `
    <section class="dashboard admin">
      ${stats([{ label: "Kullanıcı", value: state.users.length }, { label: "Onay bekleyen", value: state.notes.filter((n) => n.status === "pending").length }, { label: "Satış", value: state.purchases.length }, { label: "Şikayet", value: state.reports.filter((r) => r.status === "open").length }])}
      <div class="columns">
        <div class="panel"><h2>Not onay sistemi</h2>${state.notes.map(adminNoteRow).join("")}</div>
        ${adminUsersPanel()}
      </div>
      <div class="panel"><h2>Şikayet edilen içerikler</h2>${state.reports.map(reportRow).join("") || empty("Açık şikayet yok.")}</div>
    </section>
  `;
}

function adminUsersPanel() {
  const users = adminFilteredUsers();
  return `
    <div class="panel admin-users-panel">
      <div class="section-head compact-head">
        <div><h2>Kullanıcılar</h2><p>${users.length} kullanıcı listeleniyor</p></div>
        <button class="danger small" type="button" data-admin-bulk-delete>Seçilenleri sil</button>
      </div>
      <form class="admin-user-tools" data-action="admin-user-filter">
        <input name="query" value="${escapeHtml(adminUserFilters.query)}" placeholder="İsim veya e-posta ara" />
        <select name="university">${selectOptions("Tüm üniversiteler", unique(state.users, "university"), adminUserFilters.university)}</select>
        <select name="department">${selectOptions("Tüm bölümler", unique(state.users, "department"), adminUserFilters.department)}</select>
        <select name="role">
          <option value="">Tüm roller</option>
          <option value="student" ${adminUserFilters.role === "student" ? "selected" : ""}>Öğrenci</option>
          <option value="admin" ${adminUserFilters.role === "admin" ? "selected" : ""}>Admin</option>
        </select>
        <button class="primary small" type="submit">Ara</button>
        <button class="ghost small" type="button" data-admin-user-reset>Temizle</button>
      </form>
      <label class="check admin-select-all"><input type="checkbox" data-admin-select-all /> Listedekileri seç</label>
      <div class="panel-scroll admin-user-list">${users.map(userRow).join("") || empty("Bu filtrelerde kullanıcı bulunamadı.")}</div>
    </div>
  `;
}

function adminFilteredUsers() {
  const query = adminUserFilters.query.trim().toLocaleLowerCase("tr");
  return state.users.filter((user) => {
    const text = [user.name, user.email, user.university, user.department].join(" ").toLocaleLowerCase("tr");
    return (
      (!query || text.includes(query)) &&
      (!adminUserFilters.university || user.university === adminUserFilters.university) &&
      (!adminUserFilters.department || user.department === adminUserFilters.department) &&
      (!adminUserFilters.role || user.role === adminUserFilters.role)
    );
  });
}

function adminNoteRow(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(sellerName(note))} · ${statusLabel(note.status)}</small></div><button class="primary small" data-approve="${note.id}">Onayla</button><button class="danger small" data-reject="${note.id}">Reddet</button><button class="danger small" data-admin-delete-note="${note.id}">Sil</button></div>`;
}

function userRow(user) {
  const isCurrent = user.id === currentUser()?.id;
  return `<div class="admin-user-block">
    <div class="row admin-user-row"><label class="admin-user-pick"><input type="checkbox" data-admin-user-select="${user.id}" ${isCurrent ? "disabled" : ""} /></label><div><strong>${escapeHtml(user.name)}</strong><small>${roleName(user.role)} · ${escapeHtml(user.email)} · ${escapeHtml(user.university || "Üniversite yok")} · ${escapeHtml(user.department || "Bölüm yok")}</small></div><button class="danger small" data-admin-delete-user="${user.id}" ${isCurrent ? "disabled" : ""}>Sil</button></div>
    <details class="admin-power">
      <summary>Yetkiler ve rozetler</summary>
      <form class="admin-power-grid" data-action="admin-power" data-user="${user.id}">
        <label>Takipçi<input name="followers" type="number" min="0" value="${escapeHtml(user.adminStats?.followers ?? "")}" placeholder="${followerUsers(user.id).length}" /></label>
        <label>Takip edilen<input name="following" type="number" min="0" value="${escapeHtml(user.adminStats?.following ?? "")}" placeholder="${followingUsers(user.id).length}" /></label>
        <label>Not sayısı<input name="notes" type="number" min="0" value="${escapeHtml(user.adminStats?.notes ?? "")}" placeholder="${state.notes.filter((note) => note.sellerId === user.id).length}" /></label>
        <label>Rozetler<select name="badges" multiple>${adminBadgeOptions(user)}</select></label>
        <button class="primary small" type="submit">Kaydet</button>
        <button class="ghost small" type="button" data-admin-power-clear="${user.id}">Sıfırla</button>
      </form>
    </details>
  </div>`;
}

function adminBadgeOptions(user) {
  const selected = new Set(user.badgeOverrides || []);
  const options = [{ id: "all", name: "Tüm rozetler" }, ...allUserBadges({ ...user, badgeOverrides: [] }).map((badge) => ({ id: badge.id, name: badge.name }))];
  return options.map((option) => `<option value="${option.id}" ${selected.has(option.id) ? "selected" : ""}>${escapeHtml(option.name)}</option>`).join("");
}

function reportRow(report) {
  const note = state.notes.find((item) => item.id === report.noteId);
  return `<div class="row"><div><strong>${escapeHtml(note?.title || "Not")}</strong><small>${escapeHtml(report.reason)} · ${report.status}</small></div><button class="ghost small" data-close-report="${report.id}">Kapat</button><button class="danger small" data-delete-report="${report.id}">Sil</button></div>`;
}

function profilePage() {
  const user = currentUser();
  if (!user) return authPage();
  return `
    <section class="dashboard">
      <form class="panel wide-panel" data-action="profile">
        <h1>Profil bilgileri</h1>
        <div class="form-grid">
          <label>Ad soyad<input name="name" value="${escapeHtml(user.name)}" required /></label>
          <label>E-posta<input name="email" value="${escapeHtml(user.email)}" required /></label>
          <label>Üniversite<input name="university" list="university-options" value="${escapeHtml(user.university || "")}" /></label>
          <label>Bölüm<input name="department" list="department-options" value="${escapeHtml(user.department || "")}" /></label>
        </div>
        ${catalogDatalists()}
        <p class="muted">${user.emailVerified ? "E-posta doğrulandı." : "E-posta doğrulaması bekliyor."} ${user.eduVerified ? ".edu.tr öğrenci doğrulaması aktif." : ".edu.tr doğrulaması opsiyonel."}</p>
        <button class="primary" type="submit">Kaydet</button>
        <button class="ghost" type="button" data-logout>Çıkış yap</button>
      </form>
    </section>
  `;
}

function profileHubPage() {
  const user = currentUser();
  if (!user) return authPage();
  const followers = followerUsers(user.id);
  const following = followingUsers(user.id);
  return `
    <section class="dashboard">
      <div class="profile-hero panel">
        ${profileAvatar(user)}
        <div>
          <h1>${escapeHtml(user.name)}</h1>
          <p>${escapeHtml(user.bio || "")}</p>
          <div class="profile-stats">
            <span>${followerCount(user)} takipçi</span>
            <span>${followingCount(user)} takip</span>
            <span>${noteCount(user)} not</span>
          </div>
        </div>
      </div>
      <form class="panel wide-panel" data-action="profile">
        <h2>Profil bilgileri</h2>
        <div class="form-grid">
          <label>Ad soyad<input name="name" value="${escapeHtml(user.name)}" required /></label>
          <label>E-posta<input name="email" value="${escapeHtml(user.email)}" required /></label>
          <label>Üniversite<input name="university" list="university-options" value="${escapeHtml(user.university || "")}" /></label>
          <label>Bölüm<input name="department" list="department-options" value="${escapeHtml(user.department || "")}" /></label>
          <label class="full">Profil yazısı<textarea name="bio" rows="3">${escapeHtml(user.bio || "")}</textarea></label>
        </div>
        ${catalogDatalists()}
        <p class="muted">${user.emailVerified ? "E-posta doğrulandı." : "E-posta doğrulaması bekliyor."} ${user.eduVerified ? ".edu.tr öğrenci doğrulaması aktif." : ".edu.tr doğrulaması opsiyonel."}</p>
        <button class="primary" type="submit">Kaydet</button>
        <button class="ghost" type="button" data-logout>Çıkış yap</button>
      </form>
      <div class="columns">
        <div class="panel"><h2>Takip ettiklerin</h2>${following.map(userMiniCard).join("") || empty("Henüz kimseyi takip etmiyorsun.")}</div>
        <div class="panel"><h2>Öğrenci keşfi</h2>${state.users.filter((item) => item.id !== user.id && item.role === "student").map(userMiniCard).join("") || empty("Keşfedilecek öğrenci yok.")}</div>
      </div>
    </section>
  `;
}

function publicProfilePage(userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user) return `<section class="dashboard">${empty("Profil bulunamadı.")}</section>`;
  const notes = state.notes.filter((note) => note.sellerId === user.id && note.status === "approved");
  const reviews = state.reviews.filter((review) => review.userId === user.id);
  return `
    <section class="dashboard">
      <div class="profile-hero panel">
        ${profileAvatar(user)}
        <div>
          <h1>${escapeHtml(user.name)}</h1>
          <p>${escapeHtml(user.bio || "")}</p>
          <div class="profile-stats">
            <span>${followerCount(user)} takipçi</span>
            <span>${followingCount(user)} takip</span>
            <span>${noteCount(user)} not</span>
          </div>
        </div>
        ${followButton(user.id)}
      </div>
      <div class="columns">
        <div class="panel"><h2>Yüklediği notlar</h2>${notes.map(simpleNoteRow).join("") || empty("Henüz yayında notu yok.")}</div>
        <div class="panel"><h2>Yorumları</h2>${reviews.map(studentReviewRow).join("") || empty("Henüz yorum yazmamış.")}</div>
      </div>
    </section>
  `;
}

function profileAvatar(user) {
  const initials = user.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toLocaleUpperCase("tr");
  return `<div class="profile-avatar" style="--avatar-color:${escapeHtml(user.profileColor || "#5b5ff7")}">${escapeHtml(initials)}</div>`;
}

function userMiniCard(user) {
  return `<div class="user-mini-card">
    ${profileAvatar(user)}
    <div><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(user.university || "Üniversite")} · ${followerCount(user)} takipçi</small></div>
    <button class="ghost small" data-user-profile="${user.id}">Profil</button>
    ${followButton(user.id)}
  </div>`;
}

function followButton(userId) {
  const user = currentUser();
  if (!user || user.id === userId) return "";
  const following = isFollowing(user.id, userId);
  return `<button class="${following ? "ghost" : "primary"} small" data-follow="${userId}">${following ? "Takipten çık" : "Takip et"}</button>`;
}

function followerUsers(userId) {
  return state.follows.filter((follow) => follow.followingId === userId).map((follow) => state.users.find((user) => user.id === follow.followerId)).filter(Boolean);
}

function followingUsers(userId) {
  return state.follows.filter((follow) => follow.followerId === userId).map((follow) => state.users.find((user) => user.id === follow.followingId)).filter(Boolean);
}

function followerCount(user) {
  return Number.isFinite(Number(user.adminStats?.followers)) ? Number(user.adminStats.followers) : followerUsers(user.id).length;
}

function followingCount(user) {
  return Number.isFinite(Number(user.adminStats?.following)) ? Number(user.adminStats.following) : followingUsers(user.id).length;
}

function noteCount(user) {
  return Number.isFinite(Number(user.adminStats?.notes)) ? Number(user.adminStats.notes) : state.notes.filter((note) => note.sellerId === user.id).length;
}

function discoverUsers(userId) {
  if (!userId) return [];
  return state.users.filter((user) => user.role === "student" && user.id !== userId && !isFollowing(userId, user.id));
}

function isFollowing(followerId, followingId) {
  return state.follows.some((follow) => follow.followerId === followerId && follow.followingId === followingId);
}

function toggleFollow(userId) {
  const user = currentUser();
  if (!user || user.id === userId) return;
  state.follows = isFollowing(user.id, userId)
    ? state.follows.filter((follow) => !(follow.followerId === user.id && follow.followingId === userId))
    : [...state.follows, { followerId: user.id, followingId: userId }];
  profileDiscoverPage = 0;
  saveState();
  render();
}

function profileHubPage() {
  const user = currentUser();
  if (!user) return authPage();
  const followers = followerUsers(user.id);
  const following = followingUsers(user.id);
  const notes = state.notes.filter((note) => note.sellerId === user.id);
  const discover = discoverUsers(user.id);
  return `
    <section class="dashboard profile-page">
      <div class="profile-cover panel">
        <button class="profile-main" data-user-profile="${user.id}">
          ${profileAvatar(user)}
          <span>
            <strong>${escapeHtml(user.name)}</strong>
            <small>${escapeHtml(user.university || "Üniversite")} · ${escapeHtml(user.department || "Bölüm")}</small>
          </span>
        </button>
        <p>${escapeHtml(user.bio || "")}</p>
        <div class="profile-actions">
          <button class="ghost" data-profile-panel="edit">Profili düzenle</button>
          <button class="ghost" data-profile-panel="followers">${followerCount(user)} takipçi</button>
          <button class="ghost" data-profile-panel="following">${followingCount(user)} takip edilen</button>
          <span class="profile-stat-pill">${noteCount(user)} not</span>
          <button class="ghost" type="button" data-logout>Çıkış yap</button>
        </div>
        ${badgeShelf(user)}
      </div>
      ${badgeModalUserId === user.id ? badgeModal(user) : ""}
      ${profilePanelContent(user, followers, following)}
      ${badgeRoadmapPanel(user)}
      <div class="columns">
        <div class="panel"><h2>Notların</h2>${notes.map(simpleNoteRow).join("") || empty("Henüz not yüklemedin.")}</div>
        ${profileDiscoverPanel(discover)}
      </div>
    </section>
  `;
}

function profileDiscoverPanel(users) {
  const perPage = 5;
  const totalPages = Math.max(1, Math.ceil(users.length / perPage));
  profileDiscoverPage = Math.min(profileDiscoverPage, totalPages - 1);
  const start = profileDiscoverPage * perPage;
  const pageUsers = users.slice(start, start + perPage);
  const rangeText = users.length ? `${start + 1}-${Math.min(start + perPage, users.length)} / ${users.length}` : "";
  return `
    <div class="panel paged-panel">
      <div class="section-head compact-head">
        <div><h2>Öğrenci keşfi</h2><p>${rangeText}</p></div>
        ${users.length > perPage ? `<div class="pager"><button class="ghost small" data-discover-page="-1" ${profileDiscoverPage === 0 ? "disabled" : ""}>Önceki</button><button class="ghost small" data-discover-page="1" ${profileDiscoverPage >= totalPages - 1 ? "disabled" : ""}>Sonraki</button></div>` : ""}
      </div>
      <div class="panel-scroll">${pageUsers.map(userMiniCard).join("") || empty("Takip etmediğin öğrenci kalmadı.")}</div>
    </div>
  `;
}

function profilePanelContent(user, followers, following) {
  if (profilePanel === "edit") {
    return `
      <form class="panel wide-panel profile-edit-panel" data-action="profile">
        <div class="section-head"><div><h2>Profili düzenle</h2><p>Profil kartında görünen bilgileri güncelle.</p></div></div>
        <div class="form-grid">
          <label>Ad soyad<input name="name" value="${escapeHtml(user.name)}" required /></label>
          <label>E-posta<input name="email" value="${escapeHtml(user.email)}" required /></label>
          <label>Üniversite<input name="university" value="${escapeHtml(user.university || "")}" /></label>
          <label>Bölüm<input name="department" value="${escapeHtml(user.department || "")}" /></label>
          <label class="full">Profil yazısı<textarea name="bio" rows="3">${escapeHtml(user.bio || "")}</textarea></label>
        </div>
        <button class="primary" type="submit">Kaydet</button>
      </form>
    `;
  }
  if (profilePanel === "followers") {
    return `<div class="panel profile-list-panel"><div class="section-head"><div><h2>Takipçiler</h2><p>Seni takip eden öğrenciler.</p></div></div>${followers.map(userMiniCard).join("") || empty("Henüz takipçin yok.")}</div>`;
  }
  if (profilePanel === "following") {
    return `<div class="panel profile-list-panel"><div class="section-head"><div><h2>Takip edilenler</h2><p>Takip ettiğin öğrenciler.</p></div></div>${following.map(userMiniCard).join("") || empty("Henüz kimseyi takip etmiyorsun.")}</div>`;
  }
  return "";
}

function publicProfilePage(userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user) return `<section class="dashboard">${empty("Profil bulunamadı.")}</section>`;
  const notes = state.notes.filter((note) => note.sellerId === user.id && note.status === "approved");
  const followers = followerUsers(user.id);
  const following = followingUsers(user.id);
  return `
    <section class="dashboard profile-page">
      <div class="profile-cover panel">
        <button class="profile-main" data-user-profile="${user.id}">
          ${profileAvatar(user)}
          <span>
            <strong>${escapeHtml(user.name)}</strong>
            <small>${escapeHtml(user.university || "Üniversite")} · ${escapeHtml(user.department || "Bölüm")}</small>
          </span>
        </button>
        <p>${escapeHtml(user.bio || "")}</p>
        <div class="profile-actions">
          <button class="profile-stat-pill" data-profile-panel="followers">${followerCount(user)} takipçi</button>
          <button class="profile-stat-pill" data-profile-panel="following">${followingCount(user)} takip edilen</button>
          <span class="profile-stat-pill">${noteCount(user)} not</span>
          ${followButton(user.id)}
        </div>
        ${badgeShelf(user)}
      </div>
      ${badgeModalUserId === user.id ? badgeModal(user) : ""}
      ${publicProfilePanelContent(user, notes, followers, following)}
      <div class="panel" id="public-notes"><h2>Yüklediği notlar</h2>${notes.map(simpleNoteRow).join("") || empty("Henüz yayında notu yok.")}</div>
    </section>
  `;
}

function publicProfilePanelContent(user, notes, followers, following) {
  if (profilePanel === "followers") {
    return `<div class="panel profile-list-panel"><div class="section-head"><div><h2>Takipçiler</h2><p>${escapeHtml(user.name)} kişisini takip edenler.</p></div></div>${followers.map(userMiniCard).join("") || empty("Henüz takipçisi yok.")}</div>`;
  }
  if (profilePanel === "following") {
    return `<div class="panel profile-list-panel"><div class="section-head"><div><h2>Takip edilenler</h2><p>${escapeHtml(user.name)} tarafından takip edilenler.</p></div></div>${following.map(userMiniCard).join("") || empty("Henüz kimseyi takip etmiyor.")}</div>`;
  }
  return "";
}

function userBadges(user) {
  const earned = allUserBadges(user).filter((badge) => badge.earned);
  return earned.length ? earned : [allUserBadges(user)[0]];
}

function allUserBadges(user) {
  const forceAll = user.id === "u-student" || user.badgeOverrides?.includes("all");
  const overrides = new Set(user.badgeOverrides || []);
  const notes = state.notes.filter((note) => note.sellerId === user.id);
  const approved = notes.filter((note) => note.status === "approved");
  const sales = approved.reduce((sum, note) => sum + (note.sales || 0), 0);
  const reviews = approved.flatMap((note) => noteReviews(note.id));
  const avgRating = reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;
  const purchases = state.purchases.filter((purchase) => purchase.buyerId === user.id).length;
  const userReviews = state.reviews.filter((review) => review.userId === user.id).length;
  const followers = followerCount(user);
  const following = followingCount(user);
  const totalNotes = noteCount(user);
  const reports = state.reports.filter((report) => report.reporterId === user.id || notes.some((note) => note.id === report.noteId));

  return [
    { id: "verified", icon: "✓", name: "Doğrulanmış", description: ".edu.tr veya e-posta doğrulaması aktif.", earned: forceAll || overrides.has("verified") || user.eduVerified || user.emailVerified },
    { id: "first-note", icon: "✦", name: "İlk Not", description: "İlk notunu yükledi.", earned: forceAll || overrides.has("first-note") || totalNotes >= 1 },
    { id: "producer", icon: "◆", name: "Üretken", description: "En az 5 not yükledi.", earned: forceAll || overrides.has("producer") || totalNotes >= 5 },
    { id: "popular", icon: "★", name: "Popüler", description: "Notları toplam 25 satışa ulaştı.", earned: forceAll || overrides.has("popular") || sales >= 25 },
    { id: "quality", icon: "♛", name: "Kaliteli İçerik", description: "En az 3 yorumda ortalama 4.5+ puan aldı.", earned: forceAll || overrides.has("quality") || (reviews.length >= 3 && avgRating >= 4.5) },
    { id: "supporter", icon: "♡", name: "Destekçi", description: "En az 5 yorum yazarak topluluğa katkı verdi.", earned: forceAll || overrides.has("supporter") || userReviews >= 5 },
    { id: "trusted-buyer", icon: "◈", name: "Güvenilir Alıcı", description: "En az 3 satın alma yaptı.", earned: forceAll || overrides.has("trusted-buyer") || purchases >= 3 },
    { id: "networker", icon: "∞", name: "Bağ Kurucu", description: "En az 5 öğrenciyi takip ediyor.", earned: forceAll || overrides.has("networker") || following >= 5 },
    { id: "followed", icon: "↑", name: "Takip Ediliyor", description: "En az 5 takipçiye ulaştı.", earned: forceAll || overrides.has("followed") || followers >= 5 },
    { id: "clean", icon: "◇", name: "Temiz Profil", description: "Hakkında açık şikayet bulunmuyor.", earned: forceAll || overrides.has("clean") || reports.every((report) => report.status !== "open") }
  ];
}

function badgeShelf(user) {
  const badges = userBadges(user);
  const visible = badges.slice(0, 5);
  const extra = badges.length - visible.length;
  return `
    <div class="badge-shelf" aria-label="Rozetler">
      ${visible.map(badgePill).join("")}
      ${extra > 0 ? `<button class="badge-pill badge-more" data-badge-modal="${user.id}" title="Tüm rozetleri göster">+${extra}</button>` : ""}
    </div>
  `;
}

function badgePill(badge) {
  return `<span class="badge-pill badge-${badge.id}" tabindex="0" title="${escapeHtml(`${badge.name}: ${badge.description}`)}"><b>${escapeHtml(badge.icon)}</b><em>${escapeHtml(badge.name)}</em></span>`;
}

function badgeModal(user) {
  const badges = allUserBadges(user);
  return `
    <div class="badge-modal-backdrop" data-badge-close>
      <div class="badge-modal" role="dialog" aria-modal="true" aria-label="Tüm rozetler">
        <div class="section-head compact-head">
          <div><h2>Rozetler</h2><p>${escapeHtml(user.name)} için tüm rozetler ve şartları.</p></div>
          <button class="ghost small" data-badge-close>Kapat</button>
        </div>
        <div class="badge-grid">${badges.map(badgeCard).join("")}</div>
      </div>
    </div>
  `;
}

function badgeRoadmapPanel(user) {
  const badges = allUserBadges(user);
  return `
    <div class="panel badge-roadmap">
      <div class="section-head compact-head">
        <div><h2>Rozetler</h2><p>Kazanılanlar ve alınabilecek rozet şartları.</p></div>
        <button class="ghost small" data-badge-modal="${user.id}">Tümünü gör</button>
      </div>
      <div class="badge-roadmap-grid">${badges.map(badgeCard).join("")}</div>
    </div>
  `;
}

function badgeCard(badge) {
  return `<div class="badge-card badge-${badge.id} ${badge.earned ? "earned" : "locked"}">${badgePill(badge)}<strong>${escapeHtml(badge.name)}</strong><p>${escapeHtml(badge.description)}</p><span>${badge.earned ? "Alındı" : "Alınabilir"}</span></div>`;
}

function userMiniCard(user) {
  return `<div class="user-mini-card">
    <button class="user-mini-main" data-user-profile="${user.id}">
      ${profileAvatar(user)}
      <span><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(user.university || "Üniversite")} · ${followerUsers(user.id).length} takipçi</small></span>
    </button>
    ${followButton(user.id)}
  </div>`;
}

function stats(items) {
  return `<div class="stats">${items.map((item) => {
    const target = item.target || statTarget(item.label);
    const content = `<span>${item.label}</span><strong>${item.value}</strong>`;
    return target ? `<button type="button" data-jump="${target}">${content}</button>` : `<div>${content}</div>`;
  }).join("")}</div>`;
}

function statTarget(label) {
  const text = String(label).toLocaleLowerCase("tr");
  if (text.includes("satın")) return "student-purchases";
  if (text.includes("favori")) return "student-favorites";
  if (text.includes("yorum")) return "student-reviews";
  if (text.includes("yükledi") || text.includes("satış say")) return "seller-notes";
  if (text.includes("kazanç")) return "seller-earnings";
  return "";
}

function simpleNoteRow(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.course)}</small></div><button class="ghost small" data-detail="${note.id}">Aç</button></div>`;
}

function filterSelect(key, label, values) {
  return `<label>${label}<select data-filter="${key}">${selectOptions(`Tüm ${label.toLocaleLowerCase("tr")}`, values, filters[key])}</select></label>`;
}

function fallbackFormatSelect(note) {
  return `<label class="download-format">İndirme formatı
    <select data-download-format="${note.id}">
      <option value="${note.fileType}">Notun formatı: ${note.fileType}</option>
      <option value="PDF">PDF</option>
      <option value="DOCX">DOCX</option>
      <option value="PPTX">PPTX</option>
      <option value="TXT">TXT</option>
    </select>
  </label>`;
}

function selectOptions(placeholder, values, selected) {
  return `<option value="">${placeholder}</option>${values.map((value) => `<option value="${escapeHtml(value)}" ${selected === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}`;
}

function empty(text) {
  return `<div class="empty">${text}</div>`;
}

function isFavorite(noteId) {
  const user = currentUser();
  return !!user && state.favorites.some((favorite) => favorite.userId === user.id && favorite.noteId === noteId);
}

function hasOriginalFile(note) {
  return Boolean(note.fileData || note.fileStored);
}

function bindEvents() {
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, theme);
    render();
  });
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.route === "profile") profilePanel = "overview";
      navigate({ page: button.dataset.route });
    });
  });
  document.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const note = state.notes.find((item) => item.id === button.dataset.detail);
      if (note) {
        note.views = (note.views || 0) + 1;
        saveState();
      }
      navigate({ page: "detail", id: button.dataset.detail });
    });
  });
  document.querySelectorAll("[data-filter]").forEach((field) => {
    field.addEventListener("change", () => {
      filters[field.dataset.filter] = field.value;
      render();
    });
  });
  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    filters = { query: "", university: "", department: "", course: "", instructor: "", price: "", sort: "new" };
    render();
  });
  document.querySelector('[data-action="search"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    filters.query = data.get("query");
    filters.university = data.get("university");
    render();
  });
  document.querySelector('[data-action="admin-user-filter"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    adminUserFilters = {
      query: data.get("query") || "",
      university: data.get("university") || "",
      department: data.get("department") || "",
      role: data.get("role") || ""
    };
    render();
  });
  document.querySelectorAll('[data-action="admin-power"]').forEach((form) => {
    form.addEventListener("submit", saveAdminPower);
  });
  document.querySelector('[data-action="login"]')?.addEventListener("submit", login);
  document.querySelector('[data-action="register"]')?.addEventListener("submit", register);
  document.querySelector('[data-action="upload"]')?.addEventListener("submit", upload);
  document.querySelector('[data-action="edit-note"]')?.addEventListener("submit", saveEditedNote);
  document.querySelectorAll('[data-action="upload"] input[name="noteFile"], [data-action="edit-note"] input[name="noteFile"]').forEach((input) => {
    input.addEventListener("change", setupPreviewPicker);
  });
  document.querySelector('[data-action="profile"]')?.addEventListener("submit", saveProfile);
  bindCatalogInputs();
  document.querySelector('[data-action="review"]')?.addEventListener("submit", addReview);
  document.querySelectorAll('[data-action="reply"]').forEach((form) => form.addEventListener("submit", addReply));
  document.querySelector("[data-review-sort]")?.addEventListener("change", (event) => {
    reviewSort = event.currentTarget.value;
    render();
  });
  document.querySelector("[data-ai-fill]")?.addEventListener("click", fillAiSummary);
  document.querySelector("[data-checkout]")?.addEventListener("click", checkout);
  document.querySelector("[data-logout]")?.addEventListener("click", logout);
  bindClick("[data-user-profile]", (button) => {
    if (button.closest("[data-student-carousel]")?.dataset.suppressClick === "true") return;
    openUserProfile(button.dataset.userProfile);
  });
  bindClick("[data-follow]", (button) => toggleFollow(button.dataset.follow));
  bindClick("[data-profile-panel]", (button) => {
    profilePanel = profilePanel === button.dataset.profilePanel ? "overview" : button.dataset.profilePanel;
    render();
  });
  bindClick("[data-badge-modal]", (button) => {
    badgeModalUserId = button.dataset.badgeModal;
    render();
  });
  bindClick("[data-badge-close]", () => {
    badgeModalUserId = null;
    render();
  });
  document.querySelector(".badge-modal")?.addEventListener("click", (event) => event.stopPropagation());
  bindClick("[data-discover-page]", (button) => {
    profileDiscoverPage = Math.max(0, profileDiscoverPage + Number(button.dataset.discoverPage));
    render();
  });
  bindClick("[data-add-cart]", (button) => addToCart(button.dataset.addCart));
  bindClick("[data-remove-cart]", (button) => removeFromCart(button.dataset.removeCart));
  bindClick("[data-favorite]", (button) => toggleFavorite(button.dataset.favorite));
  bindClick("[data-download]", (button) => downloadNote(button.dataset.download));
  bindClick("[data-like-review]", (button) => toggleReviewLike(button.dataset.likeReview));
  bindClick("[data-delete-review]", (button) => deleteReview(button.dataset.deleteReview));
  bindClick("[data-report]", (button) => reportNote(button.dataset.report));
  bindClick("[data-approve]", (button) => moderateNote(button.dataset.approve, "approved"));
  bindClick("[data-reject]", (button) => moderateNote(button.dataset.reject, "rejected"));
  bindClick("[data-delete-note]", (button) => deleteNote(button.dataset.deleteNote));
  bindClick("[data-admin-delete-note]", (button) => adminDeleteNote(button.dataset.adminDeleteNote));
  bindClick("[data-admin-delete-user]", (button) => adminDeleteUser(button.dataset.adminDeleteUser));
  bindClick("[data-admin-user-reset]", () => {
    adminUserFilters = { query: "", university: "", department: "", role: "" };
    render();
  });
  bindClick("[data-admin-power-clear]", (button) => {
    const user = state.users.find((item) => item.id === button.dataset.adminPowerClear);
    if (!user) return;
    user.adminStats = {};
    user.badgeOverrides = [];
    saveState();
    render();
  });
  bindClick("[data-admin-bulk-delete]", adminBulkDeleteUsers);
  document.querySelector("[data-admin-select-all]")?.addEventListener("change", (event) => {
    document.querySelectorAll("[data-admin-user-select]:not(:disabled)").forEach((checkbox) => {
      checkbox.checked = event.currentTarget.checked;
    });
  });
  bindClick("[data-edit-note]", (button) => {
    navigate({ page: "edit", id: button.dataset.editNote });
  });
  bindClick("[data-jump]", (button) => {
    document.getElementById(button.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  bindClick("[data-close-report]", (button) => closeReport(button.dataset.closeReport));
  bindClick("[data-delete-report]", (button) => deleteReport(button.dataset.deleteReport));
  bindStudentCarousel();
  hydrateRealPdfPreviews();
  hydrateStoredEditPreview();
}

function bindClick(selector, handler) {
  document.querySelectorAll(selector).forEach((button) => button.addEventListener("click", () => handler(button)));
}

function openUserProfile(userId) {
  if (!userId) return;
  profilePanel = "overview";
  navigate(userId === currentUser()?.id ? { page: "profile" } : { page: "user", id: userId });
}

function bindStudentCarousel() {
  const carousel = document.querySelector("[data-student-carousel]");
  if (!carousel) return;
  const stage = carousel.querySelector(".student-carousel-stage");
  if (!stage) return;
  let rotation = -12;
  let startX = 0;
  let lastX = 0;
  let dragging = false;
  let pressedProfileId = "";
  let resumeTimer = null;
  let lastFrame = performance.now();
  const render = () => {
    stage.style.setProperty("--carousel-rotation", `${rotation}deg`);
  };
  const setPaused = (paused) => {
    carousel.dataset.paused = paused ? "true" : "false";
  };
  const tick = (time) => {
    if (!document.body.contains(carousel)) return;
    const delta = time - lastFrame;
    lastFrame = time;
    if (!dragging && carousel.dataset.paused !== "true") {
      rotation += delta * 0.006;
      render();
    }
    requestAnimationFrame(tick);
  };
  render();
  setPaused(false);
  requestAnimationFrame(tick);
  carousel.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    dragging = true;
    pressedProfileId = event.target.closest("[data-user-profile]")?.dataset.userProfile || "";
    setPaused(true);
    clearTimeout(resumeTimer);
    startX = event.clientX;
    lastX = event.clientX;
    carousel.classList.add("dragging");
    carousel.setPointerCapture(event.pointerId);
  });
  carousel.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - lastX;
    lastX = event.clientX;
    rotation += dx * 0.34;
    render();
  });
  carousel.addEventListener("pointerup", (event) => {
    if (!dragging) return;
    const distance = event.clientX - startX;
    dragging = false;
    carousel.classList.remove("dragging");
    if (Math.abs(distance) > 48) {
      carousel.dataset.suppressClick = "true";
      setTimeout(() => delete carousel.dataset.suppressClick, 80);
    } else if (pressedProfileId) {
      event.preventDefault();
      openUserProfile(pressedProfileId);
    }
    pressedProfileId = "";
    resumeTimer = setTimeout(() => setPaused(false), 1100);
  });
  carousel.addEventListener("pointercancel", () => {
    dragging = false;
    pressedProfileId = "";
    carousel.classList.remove("dragging");
    resumeTimer = setTimeout(() => setPaused(false), 800);
  });
}

async function hydrateRealPdfPreviews() {
  const cards = [...document.querySelectorAll("[data-real-pdf-preview]")];
  if (!cards.length) return;
  const cache = new Map();
  for (const card of cards) {
    const noteId = card.dataset.realPdfPreview;
    const page = card.dataset.page;
    if (!cache.has(noteId)) cache.set(noteId, await getUploadedFile(noteId));
    const dataUrl = cache.get(noteId);
    if (!dataUrl) {
      card.innerHTML += `<div class="real-pdf-loading">Orijinal PDF tarayıcı deposunda bulunamadı.</div>`;
      continue;
    }
    card.innerHTML = `
      <span class="page-number">Sayfa ${page}</span>
      <div class="pdf-canvas-slot" data-detail-pdf-slot>Sayfa yükleniyor...</div>
      <div class="watermark">Notum önizleme</div>
    `;
    await renderStoredPdfPage(dataUrl, Number(page), card.querySelector("[data-detail-pdf-slot]"));
  }
}

async function renderStoredPdfPage(dataUrl, pageNumber, slot) {
  if (!window.pdfjsLib) {
    slot.textContent = "PDF sayfasını göstermek için internet bağlantısı gerekiyor.";
    return;
  }
  const pdf = await window.pdfjsLib.getDocument({ data: dataUrlToBytes(dataUrl) }).promise;
  await renderPdfPageToSlot(pdf, pageNumber, slot, 1.6);
}

async function setupPreviewPicker(event) {
  const form = event?.currentTarget?.form || document.querySelector('[data-action="upload"], [data-action="edit-note"]');
  if (!form) return;
  const file = form.elements.noteFile.files?.[0];
  const viewer = form.querySelector("[data-source-viewer]");
  const hidden = form.elements.selectedPreviewPages;
  const counter = form.querySelector("[data-preview-count]");

  if (!file) {
    if (form.dataset.action !== "upload") return;
    viewer.textContent = "Dosya seçildiğinde burada sayfalar açılır.";
    hidden.value = "";
    counter.textContent = "0/5";
    form.elements.pageCount.value = "";
    return;
  }

  const fileType = detectFileType(file.name);
  let pageCount = 1;
  if (fileType === "PDF") pageCount = await countPdfPages(file, pageCount);
  if (["DOCX", "PPTX", "TXT"].includes(fileType)) {
    const pages = await extractPreviewPagesFromFile(file, fileType);
    pageCount = Math.max(1, pages.length);
  }
  form.elements.pageCount.value = pageCount;
  const previous = selectedPreviewNumbers(hidden.value).filter((page) => page <= pageCount).slice(0, 5);
  hidden.value = previous.join(",");
  viewer.innerHTML = sourceViewerMarkup(file, pageCount, previous);
  counter.textContent = `${previous.length}/5`;
  if (fileType === "PDF") await renderUploadPdfPages(file, viewer, pageCount);
  if (["DOCX", "PPTX", "TXT"].includes(fileType)) renderOfficeUploadPages(file, viewer, fileType);

  viewer.querySelectorAll("[data-preview-toggle]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const page = Number(checkbox.dataset.previewToggle);
      const selected = selectedPreviewNumbers(hidden.value);
      const exists = selected.includes(page);
      if (checkbox.checked && !exists && selected.length >= 5) {
        alert("En fazla 5 önizleme sayfası seçebilirsin.");
        checkbox.checked = false;
        return;
      }
      const next = checkbox.checked
        ? [...selected, page].sort((a, b) => a - b)
        : selected.filter((item) => item !== page);
      hidden.value = next.join(",");
      counter.textContent = `${next.length}/5`;
      form.querySelector("[data-selected-pages]").textContent = selectedPagesText(next);
      viewer.querySelectorAll(".upload-page-card").forEach((card) => {
        const input = card.querySelector("[data-preview-toggle]");
        card.classList.toggle("active", next.includes(Number(input.dataset.previewToggle)));
      });
    });
  });
}

function sourceViewerMarkup(file, pageCount, selected, forcedType = "", noteId = "") {
  const type = forcedType || detectFileType(file.name);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return `
    <div class="selected-pages-line">Seçilenler: <strong data-selected-pages>${selectedPagesText(selected)}</strong></div>
    <div class="pdf-page-list">
      ${pages.map((page) => uploadPreviewPageMarkup(type, file.name, page, selected.includes(page), noteId)).join("")}
    </div>
  `;
}

function bindPreviewToggles(form, viewer) {
  const hidden = form.elements.selectedPreviewPages;
  const counter = form.querySelector("[data-preview-count]");
  viewer.querySelectorAll("[data-preview-toggle]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const page = Number(checkbox.dataset.previewToggle);
      const selected = selectedPreviewNumbers(hidden.value);
      const exists = selected.includes(page);
      if (checkbox.checked && !exists && selected.length >= 5) {
        alert("En fazla 5 önizleme sayfası seçebilirsin.");
        checkbox.checked = false;
        return;
      }
      const next = checkbox.checked
        ? [...selected, page].sort((a, b) => a - b)
        : selected.filter((item) => item !== page);
      hidden.value = next.join(",");
      counter.textContent = `${next.length}/5`;
      form.querySelector("[data-selected-pages]").textContent = selectedPagesText(next);
      viewer.querySelectorAll(".upload-page-card").forEach((card) => {
        const input = card.querySelector("[data-preview-toggle]");
        card.classList.toggle("active", next.includes(Number(input.dataset.previewToggle)));
      });
    });
  });
}

function uploadPreviewPageMarkup(type, fileName, page, active, noteId = "") {
  const body =
    type === "PDF"
      ? `<div class="pdf-canvas-slot" data-pdf-page="${page}">Sayfa yükleniyor...</div>`
      : ["DOCX", "PPTX", "TXT"].includes(type)
        ? `<div class="office-page-slot" data-office-page="${page}">İçerik yükleniyor...</div>`
      : storedPreviewPlaceholder(noteId, fileName, page);
  return `
    <article class="upload-page-card ${active ? "active" : ""}">
      <label class="preview-check" title="Önizleme olarak seç">
        <input type="checkbox" data-preview-toggle="${page}" ${active ? "checked" : ""} />
      </label>
      <span class="upload-page-number">Sayfa ${page}</span>
      ${body}
    </article>
  `;
}

function storedPreviewPlaceholder(noteId, fileName, page) {
  const note = noteId ? state.notes.find((item) => item.id === noteId) : null;
  const preview = note ? getPreviewPages(note)[page - 1] : null;
  return preview
    ? `<div class="file-preview-placeholder"><strong>${escapeHtml(preview.title)}</strong><p>${escapeHtml(preview.body)}</p></div>`
    : `<div class="file-preview-placeholder"><strong>${escapeHtml(fileName)}</strong><p>${page}. sayfa/slayt</p></div>`;
}

function selectedPagesText(selected) {
  return selected.length ? selected.map((page) => `Sayfa ${page}`).join(", ") : "Seçilmedi, ilk 3 sayfa otomatik";
}

async function renderUploadPdfPages(file, viewer, pageCount) {
  if (!window.pdfjsLib) {
    viewer.querySelectorAll("[data-pdf-page]").forEach((slot) => {
      slot.textContent = "PDF sayfalarını göstermek için internet bağlantısı gerekiyor.";
    });
    return;
  }
  const pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  for (let pageNumber = 1; pageNumber <= Math.min(pageCount, pdf.numPages); pageNumber += 1) {
    const slot = viewer.querySelector(`[data-pdf-page="${pageNumber}"]`);
    if (!slot) continue;
    await renderPdfPageToSlot(pdf, pageNumber, slot, 1.1);
  }
}

async function renderOfficeUploadPages(file, viewer, type) {
  const pages = await extractPreviewPagesFromFile(file, type);
  pages.forEach((page, index) => {
    const slot = viewer.querySelector(`[data-office-page="${index + 1}"]`);
    if (!slot) return;
    slot.innerHTML = `<strong>${escapeHtml(page.title)}</strong><p>${escapeHtml(page.body)}</p>${page.bullets.length ? `<ul>${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}`;
  });
}

async function extractPreviewPagesFromFile(file, type = detectFileType(file.name)) {
  const key = `${file.name}-${file.size}-${file.lastModified}-${type}`;
  if (officePreviewCache.has(key)) return officePreviewCache.get(key);
  let pages = [];
  if (type === "TXT") pages = textToPreviewPages(await file.text(), "Sayfa");
  if (type === "DOCX") pages = await docxToPreviewPages(file);
  if (type === "PPTX") pages = await pptxToPreviewPages(file);
  if (!pages.length) pages = [{ title: file.name, body: "Bu dosya için tarayıcıda önizleme üretilemedi.", bullets: [] }];
  officePreviewCache.set(key, pages);
  return pages;
}

async function docxToPreviewPages(file) {
  if (!window.JSZip) return [];
  const zip = await window.JSZip.loadAsync(await file.arrayBuffer());
  const xml = await zip.file("word/document.xml")?.async("text");
  if (!xml) return [];
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const paragraphs = [...doc.getElementsByTagName("w:p")]
    .map((p) => [...p.getElementsByTagName("w:t")].map((t) => t.textContent).join(""))
    .map((text) => text.trim())
    .filter(Boolean);
  return chunkTextBlocks(paragraphs, "Sayfa", 9);
}

async function pptxToPreviewPages(file) {
  if (!window.JSZip) return [];
  const zip = await window.JSZip.loadAsync(await file.arrayBuffer());
  const slideFiles = Object.keys(zip.files)
    .filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name))
    .sort((a, b) => Number(a.match(/slide(\d+)/)?.[1] || 0) - Number(b.match(/slide(\d+)/)?.[1] || 0));
  const pages = [];
  for (const [index, name] of slideFiles.entries()) {
    const xml = await zip.file(name).async("text");
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    const texts = [...doc.getElementsByTagName("a:t")].map((node) => node.textContent.trim()).filter(Boolean);
    pages.push({
      title: texts[0] || `Slayt ${index + 1}`,
      body: texts.slice(1, 4).join(" · ") || "Slayt içeriği",
      bullets: texts.slice(4, 10)
    });
  }
  return pages;
}

function textToPreviewPages(text, label) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return chunkTextBlocks(lines, label, 12);
}

function chunkTextBlocks(lines, label, size) {
  const pages = [];
  for (let i = 0; i < lines.length; i += size) {
    const part = lines.slice(i, i + size);
    pages.push({
      title: part[0] || `${label} ${pages.length + 1}`,
      body: part.slice(1, 3).join(" ") || part[0] || "",
      bullets: part.slice(3, size)
    });
  }
  return pages;
}

async function renderPdfPageToSlot(pdf, pageNumber, slot, scale) {
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { alpha: false });
  const outputScale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  canvas.className = "rendered-pdf-canvas";
  const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
  context.save();
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
  await page.render({ canvasContext: context, viewport, transform }).promise;
  slot.innerHTML = "";
  if (slot.closest(".real-pdf-page")) {
    const image = document.createElement("img");
    image.className = "rendered-pdf-canvas";
    image.alt = `PDF sayfa ${pageNumber}`;
    image.src = canvas.toDataURL("image/png");
    slot.appendChild(image);
  } else {
    slot.appendChild(canvas);
  }
}

function selectedPreviewNumbers(value) {
  return String(value || "")
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isInteger(item) && item > 0)
    .slice(0, 5);
}

async function countPdfPages(file, fallback) {
  try {
    if (window.pdfjsLib) {
      const pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      return Math.max(1, Math.min(300, pdf.numPages || fallback || 1));
    }
    const text = await readFileAsText(file);
    const matches = text.match(/\/Type\s*\/Page\b/g);
    return Math.max(1, Math.min(300, matches?.length || fallback || 1));
  } catch {
    return Math.max(1, Math.min(300, fallback || 1));
  }
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

function login(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const user = state.users.find((item) => item.email === data.get("email") && item.password === data.get("password"));
  if (!user) return alert("E-posta veya şifre hatalı.");
  state.currentUserId = user.id;
  saveState();
  navigate({ page: "home" });
}

function register(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get("email").trim();
  if (state.users.some((user) => user.email === email)) return alert("Bu e-posta zaten kayıtlı.");
  const user = {
    id: id("u"),
    name: data.get("name").trim(),
    email,
    password: data.get("password"),
    role: "student",
    university: "",
    department: "",
    emailVerified: true,
    eduVerified: email.endsWith(".edu.tr")
  };
  state.users.push(user);
  state.currentUserId = user.id;
  saveState();
  navigate({ page: "home" });
}

async function upload(event) {
  event.preventDefault();
  const user = currentUser();
  const data = new FormData(event.currentTarget);
  const file = data.get("noteFile");
  if (!(file instanceof File) || !file.name) {
    alert("Lütfen PDF, DOCX, PPTX veya TXT formatında bir not dosyası seç.");
    return;
  }
  const fileType = detectFileType(file.name);
  if (!["PDF", "DOCX", "PPTX", "TXT"].includes(fileType)) {
    alert("Desteklenen dosya tipleri: PDF, DOCX, PPTX, TXT.");
    return;
  }
  const title = data.get("title").trim();
  const description = data.get("description").trim();
  let pageCount = Math.max(1, Math.min(300, Number(data.get("pageCount")) || 1));
  if (fileType === "PDF") pageCount = await countPdfPages(file, pageCount);
  if (["DOCX", "PPTX", "TXT"].includes(fileType)) {
    pageCount = Math.max(1, (await extractPreviewPagesFromFile(file, fileType)).length);
  }
  const selectedPages = selectedPreviewNumbers(data.get("selectedPreviewPages"));
  const previewNumbers = selectedPages.length ? selectedPages : [1, 2, 3].filter((page) => page <= pageCount);
  const extractedPreviewPages = ["DOCX", "PPTX", "TXT"].includes(fileType) ? await extractPreviewPagesFromFile(file, fileType) : [];
  const noteId = id("n");
  const fileData = await readFileAsDataUrl(file);
  await saveUploadedFile(noteId, fileData);
  state.notes.unshift({
    id: noteId,
    sellerId: user.id,
    title,
    description,
    university: data.get("university").trim(),
    faculty: data.get("faculty").trim(),
    department: data.get("department").trim(),
    course: data.get("course").trim(),
    instructor: data.get("instructor").trim(),
    fileName: file.name,
    fileType,
    fileMime: file.type || mimeForFileType(fileType),
    fileStored: true,
    pageCount,
    selectedPreviewPages: previewNumbers,
    price: Number(data.get("price")),
    previewPages: 5,
    status: "approved",
    sales: 0,
    views: 1,
    createdAt: new Date().toISOString().slice(0, 10),
    aiSummary: suggestSummary(title, description),
    watermarkTemplate: "Notum | {buyerName} | {buyerEmail} | {purchaseId}",
    preview: extractedPreviewPages.length
      ? previewNumbers.map((pageNumber) => extractedPreviewPages[pageNumber - 1]).filter(Boolean).slice(0, 5)
      : buildFilePreviewPages(previewNumbers, title, description)
  });
  saveState();
  navigate({ page: "detail", id: noteId });
}

async function saveEditedNote(event) {
  event.preventDefault();
  const user = currentUser();
  const form = event.currentTarget;
  const note = state.notes.find((item) => item.id === form.dataset.note && item.sellerId === user?.id);
  if (!note) return alert("Bu not düzenlenemedi.");

  const data = new FormData(form);
  const file = data.get("noteFile");
  const hasNewFile = file instanceof File && Boolean(file.name);
  let fileType = note.fileType;
  let pageCount = Math.max(1, Math.min(300, Number(data.get("pageCount")) || note.pageCount || 1));
  let extractedPreviewPages = [];

  if (hasNewFile) {
    fileType = detectFileType(file.name);
    if (!["PDF", "DOCX", "PPTX", "TXT"].includes(fileType)) {
      alert("Desteklenen dosya tipleri: PDF, DOCX, PPTX, TXT.");
      return;
    }
    if (fileType === "PDF") pageCount = await countPdfPages(file, pageCount);
    if (["DOCX", "PPTX", "TXT"].includes(fileType)) {
      extractedPreviewPages = await extractPreviewPagesFromFile(file, fileType);
      pageCount = Math.max(1, extractedPreviewPages.length);
    }
    await saveUploadedFile(note.id, await readFileAsDataUrl(file));
    note.fileName = file.name;
    note.fileType = fileType;
    note.fileMime = file.type || mimeForFileType(fileType);
    note.fileStored = true;
  }

  const title = data.get("title").trim();
  const description = data.get("description").trim();
  const selectedPages = selectedPreviewNumbers(data.get("selectedPreviewPages"));
  const previewNumbers = selectedPages.length ? selectedPages : [1, 2, 3].filter((page) => page <= pageCount);

  note.title = title;
  note.description = description;
  note.university = data.get("university").trim();
  note.faculty = data.get("faculty").trim();
  note.department = data.get("department").trim();
  note.course = data.get("course").trim();
  note.instructor = data.get("instructor").trim();
  note.price = Number(data.get("price"));
  note.pageCount = pageCount;
  note.selectedPreviewPages = previewNumbers;
  note.aiSummary = suggestSummary(title, description);
  note.status = "pending";
  const storedPreviewPages = hasNewFile ? [] : await extractStoredPreviewPages(note);
  note.preview = extractedPreviewPages.length
    ? previewNumbers.map((pageNumber) => extractedPreviewPages[pageNumber - 1]).filter(Boolean).slice(0, 5)
    : storedPreviewPages.length
      ? previewNumbers.map((pageNumber) => storedPreviewPages[pageNumber - 1]).filter(Boolean).slice(0, 5)
      : buildFilePreviewPages(previewNumbers, title, description);

  saveState();
  navigate({ page: "seller" });
}

async function extractStoredPreviewPages(note) {
  if (!["DOCX", "PPTX", "TXT"].includes(note.fileType) || !hasOriginalFile(note)) return getPreviewPages(note);
  const dataUrl = await getUploadedFile(note.id);
  if (!dataUrl) return getPreviewPages(note);
  const file = dataUrlToFile(dataUrl, note.fileName || "notum-file", note.fileMime || mimeForFileType(note.fileType));
  return extractPreviewPagesFromFile(file, note.fileType);
}

function fillAiSummary() {
  const form = document.querySelector('[data-action="upload"], [data-action="edit-note"]');
  const title = form.elements.title.value || "Bu not";
  form.elements.description.value = suggestSummary(title, form.elements.description.value);
}

function suggestSummary(title, text) {
  const base = text?.trim() || title;
  return `${base.slice(0, 120)}${base.length > 120 ? "..." : ""} Sınav öncesi hızlı tekrar ve konu pekiştirme için hazırlanmış kısa açıklama.`;
}

function parsePreviewText(value, title, description) {
  const blocks = String(value || "")
    .split("---")
    .map((block) => block.trim())
    .filter(Boolean)
    .slice(0, 5);

  if (!blocks.length) return [];

  return blocks.map((block, index) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const pageTitle = lines[0] || `${title} Önizleme ${index + 1}`;
    const bodyLines = lines.slice(1);
    return {
      title: pageTitle,
      body: bodyLines[0] || description,
      bullets: bodyLines.slice(1, 4).length ? bodyLines.slice(1, 4) : ["Satıcının seçtiği önizleme sayfası", "Tam dosya satın alma sonrası açılır"],
      callout: "Bu sayfa satıcı tarafından önizleme için seçildi."
    };
  });
}

function buildFilePreviewPages(pageNumbers, title, description) {
  return pageNumbers.slice(0, 5).map((pageNumber) => ({
    title: `Seçilen önizleme sayfası ${pageNumber}`,
    body: `${title} dosyasından satıcı tarafından önizleme için seçilen sayfa/slayt ${pageNumber}.`,
    bullets: [
      `Orijinal dosyada ${pageNumber}. sayfa/slayt`,
      "Tam içerik satın alma sonrası orijinal dosya olarak indirilir",
      description
    ],
    callout: "Bu önizleme satıcının seçtiği sayfa numarasına göre oluşturuldu."
  }));
}

function addToCart(noteId) {
  const user = currentUser();
  if (!user) {
    navigate({ page: "auth" });
    return;
  }
  if (!state.cart.includes(noteId) && !hasPurchased(user.id, noteId)) state.cart.push(noteId);
  saveState();
  navigate({ page: "cart" });
}

function removeFromCart(noteId) {
  state.cart = state.cart.filter((item) => item !== noteId);
  saveState();
  render();
}

function checkout() {
  const user = currentUser();
  if (!user) {
    navigate({ page: "auth" });
    return;
  }
  state.cart.forEach((noteId) => {
    const note = state.notes.find((item) => item.id === noteId);
    if (!note || hasPurchased(user.id, noteId)) return;
    state.purchases.push({
      id: id("p"),
      buyerId: user.id,
      noteId,
      amount: note.price,
      paymentStatus: "paid",
      createdAt: new Date().toISOString().slice(0, 10),
      downloadToken: `DL-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    });
    note.sales += 1;
  });
  state.cart = [];
  saveState();
  navigate({ page: "student" });
}

function toggleFavorite(noteId) {
  const user = currentUser();
  if (!user) return;
  const exists = isFavorite(noteId);
  state.favorites = exists
    ? state.favorites.filter((favorite) => !(favorite.userId === user.id && favorite.noteId === noteId))
    : [...state.favorites, { userId: user.id, noteId }];
  saveState();
  render();
}

function addReview(event) {
  event.preventDefault();
  const user = currentUser();
  const noteId = event.currentTarget.dataset.note;
  if (!hasPurchased(user.id, noteId)) return alert("Yorum için önce satın almalısın.");
  const data = new FormData(event.currentTarget);
  state.reviews.push({
    id: id("r"),
    userId: user.id,
    noteId,
    rating: Number(data.get("rating")),
    comment: data.get("comment").trim(),
    createdAt: new Date().toISOString().slice(0, 10),
    likes: [],
    replies: []
  });
  saveState();
  render();
}

function toggleReviewLike(reviewId) {
  const user = currentUser();
  if (!user) return;
  const review = state.reviews.find((item) => item.id === reviewId);
  if (!review) return;
  review.likes ||= [];
  review.likes = review.likes.includes(user.id) ? review.likes.filter((idValue) => idValue !== user.id) : [...review.likes, user.id];
  saveState();
  render();
}

function deleteReview(reviewId) {
  const user = currentUser();
  if (!user) return;
  const review = state.reviews.find((item) => item.id === reviewId);
  if (!review || review.userId !== user.id) return;
  if (!confirm("Yorum silinsin mi?")) return;
  state.reviews = state.reviews.filter((item) => item.id !== reviewId);
  saveState();
  render();
}

function addReply(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user) return;
  const review = state.reviews.find((item) => item.id === event.currentTarget.dataset.review);
  if (!review) return;
  const data = new FormData(event.currentTarget);
  const text = data.get("reply").trim();
  if (!text) return;
  review.replies ||= [];
  review.replies.push({
    id: id("rr"),
    userId: user.id,
    text,
    createdAt: new Date().toISOString().slice(0, 10)
  });
  saveState();
  render();
}

async function downloadNote(noteId) {
  const user = currentUser();
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return;
  if (hasOriginalFile(note)) {
    const dataUrl = note.fileData || (await getUploadedFile(note.id));
    if (!dataUrl) {
      alert("Orijinal dosya tarayıcı deposunda bulunamadı. Notu tekrar yüklemeyi deneyebilirsin.");
      return;
    }
    downloadDataUrl(note.fileName, dataUrl);
    return;
  }
  const purchase = state.purchases.find((item) => item.buyerId === user.id && item.noteId === noteId);
  const watermark = `Notum | ${user.name} | ${user.email} | ${purchase?.id || "preview"}`;
  const format = selectedDownloadFormat(note.id, note.fileType);
  await downloadGeneratedFile(note, watermark, format, "notum-dosya");
}

function selectedDownloadFormat(noteId, fallback) {
  return document.querySelector(`[data-download-format="${noteId}"]`)?.value || fallback || "PDF";
}

async function downloadGeneratedFile(note, watermark, format, suffix) {
  const normalized = String(format || "PDF").toUpperCase();
  const fileBase = `${slugify(note.title)}-${suffix}`;
  if (normalized === "PDF") {
    downloadBlob(`${fileBase}.pdf`, await buildPdfBlob(note, watermark), "application/pdf");
    return;
  }

  if (normalized === "DOCX") {
    downloadBlob(
      `${fileBase}.docx`,
      buildDocxBlob(note, watermark),
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    return;
  }

  if (normalized === "PPTX" || normalized === "PPT" || normalized === "PPF") {
    downloadBlob(
      `${fileBase}.pptx`,
      buildPptxBlob(note, watermark),
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    );
    return;
  }

  downloadBlob(`${fileBase}.txt`, buildPlainTextDownload(note, watermark), "text/plain;charset=utf-8");
}

function downloadBlob(fileName, content, type) {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function downloadDataUrl(fileName, dataUrl) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function dataUrlToBlob(dataUrl) {
  const [header, base64] = dataUrl.split(",");
  const mime = header.match(/data:(.*?);base64/)?.[1] || "application/octet-stream";
  return new Blob([base64ToBytes(base64)], { type: mime });
}

function dataUrlToFile(dataUrl, fileName, mime) {
  return new File([dataUrlToBlob(dataUrl)], fileName, { type: mime || dataUrlToBlob(dataUrl).type });
}

function dataUrlToBytes(dataUrl) {
  return base64ToBytes(dataUrl.split(",")[1]);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function openFileDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("notum_files", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("files");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveUploadedFile(noteId, dataUrl) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(dataUrl, noteId);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function getUploadedFile(noteId) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const request = tx.objectStore("files").get(noteId);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
  });
}

function detectFileType(fileName) {
  const ext = fileName.split(".").pop()?.toUpperCase() || "";
  return ext === "PPF" ? "PPTX" : ext;
}

function mimeForFileType(fileType) {
  return {
    PDF: "application/pdf",
    DOC: "application/msword",
    DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    PPT: "application/vnd.ms-powerpoint",
    PPTX: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    TXT: "text/plain"
  }[fileType] || "application/octet-stream";
}

function buildPlainTextDownload(note, watermark) {
  const pages = getPreviewPages(note);
  const sections = pages
    .map(
      (page, index) => `
SAYFA ${index + 1}: ${page.title}
${page.body}

Maddeler:
${page.bullets.map((item) => `- ${item}`).join("\n")}

Not: ${page.callout}
`
    )
    .join("\n");

  return `NOTUM NOT DOSYASI
Başlık: ${note.title}
Ders: ${note.course}
Üniversite: ${note.university}
Hoca: ${note.instructor}
Satıcı: ${sellerName(note)}

Filigran: ${watermark}

Bu dosya indirilebilir çalışma içeriğidir.

${sections}

Tam Dosya Bölümü
- Konu anlatımı genişletilmiş örneklerle devam eder.
- Çözümlü sorular, sınav ipuçları ve tekrar listeleri bulunur.
- Gerçek ödeme entegrasyonu geldiğinde bu alan yüklenen orijinal dosyadan servis edilir.
`;
}

function buildDocxBlob(note, watermark) {
  const pages = downloadPages(note);
  const paragraphs = pages
    .map(
      (page, index) => `
        ${docxParagraph(`Sayfa ${index + 1}`, "Heading2")}
        ${docxParagraph(page.title, "Heading1")}
        ${docxParagraph(page.body)}
        ${page.bullets.map((item) => docxParagraph(`• ${item}`)).join("")}
        ${docxParagraph(page.callout)}
      `
    )
    .join("");

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${docxParagraph("Notum Not Dosyası", "Title")}
    ${docxParagraph(note.title, "Heading1")}
    ${docxParagraph(`Ders: ${note.course}`)}
    ${docxParagraph(`Üniversite: ${note.university}`)}
    ${docxParagraph(`Hoca: ${note.instructor}`)}
    ${docxParagraph(`Satıcı: ${sellerName(note)}`)}
    ${docxParagraph(`Filigran: ${watermark}`)}
    ${paragraphs}
    <w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr>
  </w:body>
</w:document>`;

  return zipBlob({
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
    "word/document.xml": documentXml
  }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
}

function docxParagraph(text, style) {
  return `<w:p>${style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : ""}<w:r><w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r></w:p>`;
}

function buildPptxBlob(note, watermark) {
  const slides = downloadPages(note);
  const slideFiles = {};
  const relItems = [];
  const slideIds = [];

  slides.forEach((page, index) => {
    const slideNo = index + 1;
    const relId = `rId${slideNo}`;
    relItems.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${slideNo}.xml"/>`);
    slideIds.push(`<p:sldId id="${256 + slideNo}" r:id="${relId}"/>`);
    slideFiles[`ppt/slides/slide${slideNo}.xml`] = pptSlideXml(page, slideNo, watermark);
  });

  return zipBlob({
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>${slides.map((_, index) => `<Override PartName="/ppt/slides/slide${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join("")}</Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/></Relationships>`,
    "ppt/presentation.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:sldSz cx="12192000" cy="6858000"/><p:sldIdLst>${slideIds.join("")}</p:sldIdLst></p:presentation>`,
    "ppt/_rels/presentation.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relItems.join("")}</Relationships>`,
    ...slideFiles
  }, "application/vnd.openxmlformats-officedocument.presentationml.presentation");
}

function pptSlideXml(page, slideNo, watermark) {
  const bulletText = page.bullets.map((item) => `• ${item}`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld><p:spTree>
    <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/>
    ${pptTextBox(2, `Sayfa ${slideNo}`, 600000, 280000, 2200000, 420000, 1800, "C26A3A")}
    ${pptTextBox(3, page.title, 600000, 780000, 10600000, 900000, 3200, "24302F")}
    ${pptTextBox(4, `${page.body}\n\n${bulletText}\n\n${page.callout}`, 600000, 1800000, 10600000, 3400000, 1700, "24302F")}
    ${pptTextBox(5, watermark, 1800000, 2850000, 8600000, 900000, 3600, "D1D5DB", -1800000)}
  </p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>`;
}

function pptTextBox(idValue, text, x, y, cx, cy, size, color, rotation = 0) {
  return `<p:sp><p:nvSpPr><p:cNvPr id="${idValue}" name="Text ${idValue}"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm rot="${rotation}"><a:off x="${x}" y="${y}"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/></p:spPr><p:txBody><a:bodyPr wrap="square"/><a:lstStyle/>${String(text).split("\n").map((line) => `<a:p><a:r><a:rPr lang="tr-TR" sz="${size}"><a:solidFill><a:srgbClr val="${color}"/></a:solidFill></a:rPr><a:t>${xmlEscape(line)}</a:t></a:r></a:p>`).join("")}</p:txBody></p:sp>`;
}

async function buildPdfBlob(note, watermark) {
  const pages = downloadPages(note);
  const images = [];
  for (let index = 0; index < pages.length; index += 1) {
    images.push(await renderPageJpeg(pages[index], index, watermark));
  }
  return new Blob([buildImagePdf(images)], { type: "application/pdf" });
}

function downloadPages(note) {
  return [
    {
      title: note.title,
      body: `${note.description}\n\nDers: ${note.course}\nÜniversite: ${note.university}\nHoca: ${note.instructor}\nSatıcı: ${sellerName(note)}`,
      bullets: ["Notum not dosyası"],
      callout: "Bu çıktı Notum için oluşturulmuş indirilebilir dosyadır."
    },
    ...getPreviewPages(note)
  ];
}

async function renderPageJpeg(page, index, watermark) {
  const width = 1240;
  const height = 1754;
  const svg = pageSvg(page, index, watermark, width, height);
  const image = await loadSvgImage(svg);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
  return {
    width,
    height,
    data: base64ToBytes(dataUrl.split(",")[1])
  };
}

function pageSvg(page, index, watermark, width, height) {
  const bodyLines = wrapText(page.body, 78).slice(0, 12);
  const bullets = page.bullets.flatMap((item) => wrapText(`• ${item}`, 72)).slice(0, 10);
  const yStart = 300;
  const textLines = [
    ...bodyLines.map((line, lineIndex) => ({ text: line, y: yStart + lineIndex * 42, size: 28, color: "#24302f" })),
    ...bullets.map((line, lineIndex) => ({ text: line, y: yStart + bodyLines.length * 42 + 58 + lineIndex * 40, size: 27, color: "#24302f" }))
  ];
  const calloutY = Math.min(1320, yStart + bodyLines.length * 42 + bullets.length * 40 + 110);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#f3efe6"/>
    <rect x="74" y="70" width="1092" height="1610" rx="26" fill="#fffdf8" stroke="#ddd3c1" stroke-width="3"/>
    <text x="110" y="150" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#c26a3a">Sayfa ${index + 1}</text>
    <text x="110" y="235" font-family="Arial, sans-serif" font-size="52" font-weight="800" fill="#24302f">${svgEscape(page.title)}</text>
    ${textLines.map((line) => `<text x="110" y="${line.y}" font-family="Arial, sans-serif" font-size="${line.size}" fill="${line.color}">${svgEscape(line.text)}</text>`).join("")}
    <rect x="110" y="${calloutY}" width="1018" height="150" rx="18" fill="#dceee8"/>
    ${wrapText(page.callout, 76).slice(0, 3).map((line, lineIndex) => `<text x="140" y="${calloutY + 55 + lineIndex * 38}" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#214f4a">${svgEscape(line)}</text>`).join("")}
    <text x="620" y="900" text-anchor="middle" font-family="Arial, sans-serif" font-size="108" font-weight="900" fill="#24302f" opacity=".14" transform="rotate(-28 620 900)">${svgEscape(watermark)}</text>
  </svg>`;
}

function loadSvgImage(svg) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("PDF sayfası oluşturulamadı."));
    };
    image.src = url;
  });
}

function buildImagePdf(images) {
  const encoder = new TextEncoder();
  const chunks = [];
  const offsets = [0];
  let length = 0;
  const pushText = (text) => {
    const bytes = encoder.encode(text);
    chunks.push(bytes);
    length += bytes.length;
  };
  const pushBytes = (bytes) => {
    chunks.push(bytes);
    length += bytes.length;
  };

  const objects = [];
  const addObject = (parts) => {
    objects.push(parts);
    return objects.length;
  };
  const pageIds = [];

  images.forEach((image) => {
    const imageId = addObject([`<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.data.length} >>\nstream\n`, image.data, "\nendstream"]);
    const stream = `q\n595 0 0 842 0 0 cm\n/Im1 Do\nQ`;
    const contentId = addObject([`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`]);
    const pageId = addObject([`<< /Type /Page /Parent 0 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im1 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`]);
    pageIds.push(pageId);
  });

  const pagesId = addObject([`<< /Type /Pages /Kids [${pageIds.map((pageId) => `${pageId} 0 R`).join(" ")}] /Count ${pageIds.length} >>`]);
  pageIds.forEach((pageId) => {
    objects[pageId - 1][0] = objects[pageId - 1][0].replace("/Parent 0 0 R", `/Parent ${pagesId} 0 R`);
  });
  const catalogId = addObject([`<< /Type /Catalog /Pages ${pagesId} 0 R >>`]);

  pushText("%PDF-1.4\n");
  objects.forEach((parts, index) => {
    offsets.push(length);
    pushText(`${index + 1} 0 obj\n`);
    parts.forEach((part) => (typeof part === "string" ? pushText(part) : pushBytes(part)));
    pushText("\nendobj\n");
  });
  const xref = length;
  pushText(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`);
  offsets.slice(1).forEach((offset) => pushText(`${String(offset).padStart(10, "0")} 00000 n \n`));
  pushText(`trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`);
  return concatBytes(chunks, length);
}

function wrapText(text, max) {
  const words = String(text || "").split(/\s+/);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    if ((current + " " + word).trim().length > max) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  });
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function zipBlob(files, type) {
  const encoder = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;
  const push = (bytes) => {
    chunks.push(bytes);
    offset += bytes.length;
  };

  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = typeof content === "string" ? encoder.encode(content) : content;
    const crc = crc32(data);
    const local = concatBytes([
      u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), nameBytes
    ]);
    const centralHeader = concatBytes([
      u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameBytes
    ]);
    push(local);
    push(data);
    central.push(centralHeader);
  });

  const centralOffset = offset;
  central.forEach(push);
  const centralSize = offset - centralOffset;
  push(concatBytes([u32(0x06054b50), u16(0), u16(0), u16(central.length), u16(central.length), u32(centralSize), u32(centralOffset), u16(0)]));
  return new Blob(chunks, { type });
}

function crc32(bytes) {
  let crc = -1;
  for (const byte of bytes) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ byte) & 255];
  }
  return (crc ^ -1) >>> 0;
}

const CRC_TABLE = Array.from({ length: 256 }, (_, index) => {
  let c = index;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function u16(value) {
  return new Uint8Array([value & 255, (value >>> 8) & 255]);
}

function u32(value) {
  return new Uint8Array([value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255]);
}

function concatBytes(parts, knownLength) {
  const total = knownLength ?? parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let cursor = 0;
  parts.forEach((part) => {
    out.set(part, cursor);
    cursor += part.length;
  });
  return out;
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function xmlEscape(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

function svgEscape(value) {
  return xmlEscape(value);
}

function slugify(value) {
  return value
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function reportNote(noteId) {
  const user = currentUser();
  if (!user) return;
  const reason = prompt("Şikayet nedeni", "Telif veya hatalı içerik şüphesi taşıyorum.");
  if (!reason) return;
  state.reports.push({ id: id("rep"), reporterId: user.id, noteId, reason, status: "open", createdAt: new Date().toISOString().slice(0, 10) });
  saveState();
  alert("Şikayet admin paneline iletildi.");
}

function moderateNote(noteId, status) {
  const note = state.notes.find((item) => item.id === noteId);
  if (note) note.status = status;
  saveState();
  render();
}

function deleteNote(noteId) {
  if (!confirm("Bu not silinsin mi?")) return;
  removeNote(noteId);
  saveState();
  render();
}

function adminDeleteNote(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return;
  if (!confirm(`"${note.title}" notu silinsin mi? Bu işlem notun yorumlarını, favorilerini, satın alma kayıtlarını ve şikayetlerini de kaldırır.`)) return;
  removeNote(noteId);
  saveState();
  render();
}

function adminDeleteUser(userId) {
  const admin = currentUser();
  if (admin?.role !== "admin") return;
  if (admin.id === userId) return alert("Kendi admin hesabını silemezsin.");
  const user = state.users.find((item) => item.id === userId);
  if (!user) return;
  if (!confirm(`${user.name} kullanıcısı silinsin mi? Kullanıcının yüklediği notlar ve ilişkili kayıtlar da kaldırılır.`)) return;
  removeUser(userId, admin.id);
  saveState();
  render();
}

function adminBulkDeleteUsers() {
  const admin = currentUser();
  if (admin?.role !== "admin") return;
  const userIds = [...document.querySelectorAll("[data-admin-user-select]:checked")]
    .map((checkbox) => checkbox.dataset.adminUserSelect)
    .filter((userId) => userId && userId !== admin.id);
  if (!userIds.length) return alert("Silmek için en az bir kullanıcı seç.");
  if (!confirm(`${userIds.length} kullanıcı silinsin mi? Bu kullanıcıların notları ve ilişkili kayıtları da kaldırılır.`)) return;
  userIds.forEach((userId) => removeUser(userId, admin.id));
  saveState();
  render();
}

function saveAdminPower(event) {
  event.preventDefault();
  const admin = currentUser();
  if (admin?.role !== "admin") return;
  const form = event.currentTarget;
  const user = state.users.find((item) => item.id === form.dataset.user);
  if (!user) return;
  const data = new FormData(form);
  const numericValue = (key) => {
    const value = data.get(key);
    return value === "" || value === null ? undefined : Math.max(0, Number(value) || 0);
  };
  user.adminStats = {};
  ["followers", "following", "notes"].forEach((key) => {
    const value = numericValue(key);
    if (value !== undefined) user.adminStats[key] = value;
  });
  user.badgeOverrides = data.getAll("badges");
  saveState();
  render();
}

function removeUser(userId, fallbackUserId) {
  state.notes.filter((note) => note.sellerId === userId).map((note) => note.id).forEach(removeNote);
  state.users = state.users.filter((item) => item.id !== userId);
  state.purchases = state.purchases.filter((purchase) => purchase.buyerId !== userId);
  state.reviews = state.reviews
    .filter((review) => review.userId !== userId)
    .map((review) => ({
      ...review,
      likes: (review.likes || []).filter((idValue) => idValue !== userId),
      replies: (review.replies || []).filter((reply) => reply.userId !== userId)
    }));
  state.favorites = state.favorites.filter((favorite) => favorite.userId !== userId);
  state.reports = state.reports.filter((report) => report.reporterId !== userId);
  state.follows = (state.follows || []).filter((follow) => follow.followerId !== userId && follow.followingId !== userId);
  if (state.currentUserId === userId) state.currentUserId = fallbackUserId || null;
}

function removeNote(noteId) {
  state.notes = state.notes.filter((note) => note.id !== noteId);
  state.cart = state.cart.filter((idValue) => idValue !== noteId);
  state.purchases = state.purchases.filter((purchase) => purchase.noteId !== noteId);
  state.reviews = state.reviews.filter((review) => review.noteId !== noteId);
  state.favorites = state.favorites.filter((favorite) => favorite.noteId !== noteId);
  state.reports = state.reports.filter((report) => report.noteId !== noteId);
}

function editNote(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  const title = prompt("Başlık", note.title);
  if (!title) return;
  note.title = title;
  note.status = "pending";
  saveState();
  render();
}

function closeReport(reportId) {
  const report = state.reports.find((item) => item.id === reportId);
  if (report) report.status = "closed";
  saveState();
  render();
}

function deleteReport(reportId) {
  const report = state.reports.find((item) => item.id === reportId);
  if (!report) return;
  if (!confirm("Bu şikayet kaydı silinsin mi?")) return;
  state.reports = state.reports.filter((item) => item.id !== reportId);
  saveState();
  render();
}

function saveProfile(event) {
  event.preventDefault();
  const user = currentUser();
  const data = new FormData(event.currentTarget);
  user.name = data.get("name").trim();
  user.email = data.get("email").trim();
  user.university = data.get("university").trim();
  user.department = data.get("department").trim();
  user.bio = data.get("bio")?.trim() || user.bio;
  user.eduVerified = user.email.endsWith(".edu.tr");
  saveState();
  render();
}

function logout() {
  state.currentUserId = null;
  state.cart = [];
  saveState();
  navigate({ page: "home" });
}

loadProgramCatalog().finally(render);
