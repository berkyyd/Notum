const STORAGE_KEY = "notum_mvp_state_v7";
const THEME_KEY = "notum_theme";
const PROGRAM_CATALOG_URL = "src/data/yokatlas-programs.json";
const LEGAL_VERSION = "2026-11-16-draft-1";

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
      faculty: "İktisadi ve İdari Bilimler Fakültesi",
      department: "İktisat",
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
      faculty: "Bilgisayar ve Bilişim Fakültesi",
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
      university: "İstanbul Teknik Üniversitesi",
      faculty: "Bilgisayar ve Bilişim Fakültesi",
      department: "Bilgisayar Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-2",
      name: "Ece Kaya",
      email: "ece@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Boğaziçi Üniversitesi",
      faculty: "İktisadi ve İdari Bilimler Fakültesi",
      department: "İktisat",
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
      faculty: "Hukuk Fakültesi",
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
      faculty: "Fen Fakültesi",
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
      faculty: "Bilgisayar ve Bilişim Fakültesi",
      department: "Bilgisayar Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-6",
      name: "Selin Demir",
      email: "selin@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Ankara Üniversitesi",
      faculty: "Hukuk Fakültesi",
      department: "Hukuk",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-7",
      name: "Can Özkan",
      email: "can@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Boğaziçi Üniversitesi",
      faculty: "İktisadi ve İdari Bilimler Fakültesi",
      department: "İktisat",
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
      faculty: "İktisadi ve İdari Bilimler Fakültesi",
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
      university: "İstanbul Teknik Üniversitesi",
      faculty: "Bilgisayar ve Bilişim Fakültesi",
      department: "Bilgisayar Mühendisliği",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-10",
      name: "Nehir Aksoy",
      email: "nehir@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Ege Üniversitesi",
      faculty: "Fen Fakültesi",
      department: "Kimya",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-11",
      name: "Emir Güneş",
      email: "emir@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Boğaziçi Üniversitesi",
      faculty: "İktisadi ve İdari Bilimler Fakültesi",
      department: "İktisat",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-12",
      name: "Yağmur Polat",
      email: "yagmur@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "İstanbul Teknik Üniversitesi",
      faculty: "Bilgisayar ve Bilişim Fakültesi",
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
      university: "Ankara Üniversitesi",
      faculty: "Hukuk Fakültesi",
      department: "Hukuk",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-14",
      name: "Elif Acar",
      email: "elif@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "Ege Üniversitesi",
      faculty: "Fen Fakültesi",
      department: "Kimya",
      emailVerified: true,
      eduVerified: true
    },
    {
      id: "u-mock-15",
      name: "Ozan Taş",
      email: "ozan@ogr.edu.tr",
      password: "123456",
      role: "student",
      university: "İstanbul Teknik Üniversitesi",
      faculty: "Bilgisayar ve Bilişim Fakültesi",
      department: "Bilgisayar Mühendisliği",
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
const storedOfficePreviewCache = new Map();
let theme = localStorage.getItem(THEME_KEY) || "light";
let profilePanel = "overview";
let profileDiscoverPage = 0;
let marketInsightIndex = { note: 0 };
let homeCommunityIndex = 0;
let adminUserFilters = { query: "", university: "", department: "", role: "", sort: "new" };
let badgeModalUserId = null;
let avatarModalUserId = null;
let programCatalog = [];

document.documentElement.dataset.theme = theme;

function routeFromLocation() {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const page = parts[0] || "home";
  const id = parts[1] ? decodeURIComponent(parts[1]) : undefined;
  const simplePages = new Set(["home", "notes", "auth", "upload", "cart", "student", "seller", "admin", "profile"]);
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
  avatarModalUserId = null;
  const nextHash = routeToHash(route);
  if (window.location.hash !== nextHash) {
    history[options.replace ? "replaceState" : "pushState"]({ route }, "", nextHash);
  }
  render();
}

window.addEventListener("popstate", () => {
  route = routeFromLocation();
  avatarModalUserId = null;
  render();
});
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return normalizeState(saved ? JSON.parse(saved) : structuredClone(seed));
}

function normalizeState(nextState) {
  nextState.legalAcceptances ||= [];
  nextState.follows ||= [{ followerId: "u-student", followingId: "u-seller" }];
  nextState.purchases ||= [];
  nextState.sellerSalesSummaries ||= [];
  nextState.sellerPaymentProfiles ||= [];
  nextState.sellerPayouts ||= [];
  nextState.platformSettings ||= {
    bankName: "Notum Demo Bankası",
    iban: "TR00 0000 0000 0000 0000 0000 00",
    accountHolder: "Notum Test Hesabı",
    payoutWeekday: "Friday",
    mockPaymentsEnabled: true
  };
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
  const demoAcademicById = new Map(seed.users.map((user) => [user.id, {
    university: user.university || "",
    faculty: user.faculty || "",
    department: user.department || ""
  }]));
  nextState.users.forEach((user) => {
    const demoAcademic = demoAcademicById.get(user.id);
    if (demoAcademic && user.role !== "admin") {
      user.university = demoAcademic.university;
      user.faculty = demoAcademic.faculty;
      user.department = demoAcademic.department;
      user.bio = `${user.department || "Üniversite"} materyallerini keşfediyor ve paylaşıyor.`;
    }
  });
  nextState.users.forEach((user) => {
    user.bio ||= user.role === "admin" ? "Notum moderasyon ekibi" : `${user.department || "Üniversite"} notlarını keşfediyor ve paylaşıyor.`;
    user.profileColor ||= user.id === "u-seller" ? "#30d5c8" : user.id === "u-admin" ? "#ffbe55" : "#ff5f8f";
    user.avatarData ||= "";
    user.adminStats ||= {};
    user.badgeOverrides ||= [];
  });
  nextState.notes.forEach((note) => {
    note.materialType = "note";
  });
  return nextState;
}

function normalizeDemoCatalogFields() {
  if (!programCatalog.length) return;
  const demoPlans = [
    ["u-student", "BOĞAZİÇİ", "İktisat"],
    ["u-seller", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"],
    ["u-mock-1", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"],
    ["u-mock-2", "BOĞAZİÇİ", "İktisat"],
    ["u-mock-3", "ANKARA ÜNİVERSİTESİ", "Hukuk"],
    ["u-mock-4", "EGE ÜNİVERSİTESİ", "Kimya"],
    ["u-mock-5", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"],
    ["u-mock-6", "ANKARA ÜNİVERSİTESİ", "Hukuk"],
    ["u-mock-7", "BOĞAZİÇİ", "İktisat"],
    ["u-mock-8", "BOĞAZİÇİ", "İktisat"],
    ["u-mock-9", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"],
    ["u-mock-10", "EGE ÜNİVERSİTESİ", "Kimya"],
    ["u-mock-11", "BOĞAZİÇİ", "İktisat"],
    ["u-mock-12", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"],
    ["u-mock-13", "ANKARA ÜNİVERSİTESİ", "Hukuk"],
    ["u-mock-14", "EGE ÜNİVERSİTESİ", "Kimya"],
    ["u-mock-15", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"]
  ];
  demoPlans.forEach(([userId, university, department]) => {
    const user = state.users.find((item) => item.id === userId);
    const match = catalogMatch(university, department);
    if (!user || !match) return;
    applyCatalogFields(user, match);
    user.bio = `${user.department || "Üniversite"} materyallerini keşfediyor ve paylaşıyor.`;
  });

  const notePlans = [
    ["n-1", "İSTANBUL TEKNİK", "Bilgisayar Mühendisliği"],
    ["n-2", "BOĞAZİÇİ", "İktisat"],
    ["n-3", "ANKARA ÜNİVERSİTESİ", "Hukuk"],
    ["n-4", "EGE ÜNİVERSİTESİ", "Kimya"]
  ];
  notePlans.forEach(([noteId, university, department]) => {
    const note = state.notes.find((item) => item.id === noteId);
    const match = catalogMatch(university, department);
    if (note && match) applyCatalogFields(note, match);
  });
  repairPlaceholderAcademicFields();
  saveState();
}

function repairPlaceholderAcademicFields() {
  const fallback = catalogMatch("İSTANBUL TEKNİK", "Bilgisayar Mühendisliği") || programCatalog[0];
  if (!fallback) return;
  state.users.forEach((user) => {
    if (user.role === "admin") return;
    if (hasPlaceholderAcademicValue(user)) {
      applyCatalogFields(user, fallback);
      user.bio = `${user.department || "Üniversite"} materyallerini keşfediyor ve paylaşıyor.`;
    }
  });
  state.notes.forEach((note) => {
    if (hasPlaceholderAcademicValue(note)) applyCatalogFields(note, fallback);
  });
}

function hasPlaceholderAcademicValue(item) {
  const values = [item.university, item.faculty, item.department].map(normalizeCatalogText);
  return values.some((value) => !value || value === "universite" || value.includes("demo") || value.includes("test"));
}

function catalogMatch(university, department) {
  const normalizedUniversity = normalizeCatalogText(university);
  const normalized = normalizeCatalogText(department);
  return (
    programCatalog.find((item) => normalizeCatalogText(item.university).includes(normalizedUniversity) && normalizeCatalogText(item.department) === normalized) ||
    programCatalog.find((item) => normalizeCatalogText(item.university).includes(normalizedUniversity) && normalizeCatalogText(item.department).includes(normalized)) ||
    programCatalog.find((item) => normalizeCatalogText(item.university).includes(normalizedUniversity)) ||
    programCatalog.find((item) => normalizeCatalogText(item.department) === normalized) ||
    programCatalog.find((item) => normalizeCatalogText(item.department).includes(normalized))
  );
}

function normalizeCatalogText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/\s+/g, " ")
    .trim();
}

function applyCatalogFields(target, catalogItem) {
  target.university = catalogItem.university;
  target.faculty = catalogItem.faculty;
  target.department = catalogItem.department;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.NotumSupabase?.saveState(state);
}

function makeLegalAcceptanceRecords(userId, documentKeys) {
  const acceptedAt = new Date().toISOString();
  return documentKeys.map((documentKey) => ({
    id: id("legal"),
    userId,
    documentKey,
    version: LEGAL_VERSION,
    acceptedAt
  }));
}

async function saveLegalAcceptances(user, documentKeys) {
  const records = makeLegalAcceptanceRecords(user.id, documentKeys);
  if (window.NotumSupabase?.isConfigured) {
    await window.NotumSupabase.recordLegalAcceptances(records);
  } else {
    state.legalAcceptances.push(...records);
    saveState();
  }
}

function id(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function currentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function isStudentEmail(email) {
  const domain = String(email || "").trim().toLocaleLowerCase("tr").split("@")[1] || "";
  return /(^|\.)edu(\.|$)/i.test(domain);
}

function isAdminEmail(email) {
  return String(email || "").trim().toLocaleLowerCase("tr") === "bdemircanli15@gmail.com";
}

function canUseProfileEmail(email, role = "student") {
  return isStudentEmail(email) || (role === "admin" && isAdminEmail(email));
}

function money(value) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(value);
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
  return state.purchases.some((purchase) =>
    purchase.buyerId === userId
    && purchase.noteId === noteId
    && ["paid", "mock_paid"].includes(purchase.paymentStatus)
  );
}

function confirmedPurchases(noteId) {
  return state.purchases.filter((purchase) =>
    purchase.noteId === noteId
    && ["paid", "mock_paid"].includes(purchase.paymentStatus)
  );
}

function noteSalesCount(note) {
  const summary = state.sellerSalesSummaries.find((item) => item.noteId === note.id);
  return Math.max(Number(note.sales) || 0, confirmedPurchases(note.id).length, Number(summary?.salesCount || 0));
}

function noteGrossSales(note) {
  const summary = state.sellerSalesSummaries.find((item) => item.noteId === note.id);
  if (summary) return Number(summary.grossSales || 0);
  return confirmedPurchases(note.id).reduce((sum, purchase) => sum + Number(purchase.amount || 0), 0);
}

function sellerPayoutAmounts(sellerId) {
  const completedPurchases = state.purchases.filter((purchase) =>
    ["paid", "mock_paid"].includes(purchase.paymentStatus)
    && state.notes.some((note) => note.id === purchase.noteId && note.sellerId === sellerId)
  );
  const paidOutIds = new Set(state.sellerPayouts
    .filter((payout) => payout.sellerId === sellerId)
    .flatMap((payout) => payout.purchaseIds || []));
  const duePurchases = completedPurchases.filter((purchase) => purchase.paymentStatus === "paid" && !paidOutIds.has(purchase.id));
  const expectedDuePurchases = completedPurchases.filter((purchase) => !paidOutIds.has(purchase.id));
  const summaries = state.sellerSalesSummaries.filter((item) => item.sellerId === sellerId);
  return {
    duePurchases,
    due: summaries.length
      ? summaries.reduce((sum, item) => sum + Number(item.dueAmount || 0), 0)
      : expectedDuePurchases.reduce((sum, purchase) => sum + Number(purchase.amount || 0) * 0.8, 0),
    actualDue: duePurchases.reduce((sum, purchase) => sum + Number(purchase.amount || 0) * 0.8, 0),
    paid: state.sellerPayouts
      .filter((payout) => payout.sellerId === sellerId)
      .reduce((sum, payout) => sum + Number(payout.amount || 0), 0)
  };
}

function approvedNotes() {
  return state.notes.filter((note) => note.status === "approved" && !isSeedNote(note));
}

function isSeedNote(note) {
  return /^n-\d+$/.test(note.id || "") && !note.fileStored;
}

function materialType(note) {
  return "note";
}

function isBook(note) {
  return false;
}

function materialLabel(note) {
  return "Not";
}

function unique(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "tr"));
}

async function loadProgramCatalog() {
  try {
    const supabaseCatalog = await window.NotumSupabase?.loadProgramCatalog?.();
    if (supabaseCatalog?.length) {
      programCatalog = normalizeProgramCatalog(supabaseCatalog);
      programCatalog = mergeProgramCatalog(programCatalog);
      return;
    }
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
  const avatarModalUser = avatarModalUserId ? state.users.find((item) => item.id === avatarModalUserId) : null;
  document.documentElement.dataset.theme = theme;
  const navButton = (page, label) => `<button class="${route.page === page ? "active" : ""}" data-route="${page}">${label}</button>`;
  document.getElementById("app").innerHTML = `
    <header class="topbar">
      <button class="brand" data-route="home" aria-label="Ana sayfa">
        <span class="brand-mark"><img src="src/notum-icon.png" alt="" aria-hidden="true" /></span>
      </button>
      <nav class="nav">
        ${navButton("home", "Anasayfa")}
        ${navButton("notes", "Notlar")}
        ${navButton("upload", "Not Yükle")}
        ${navButton("student", "Panelim")}
        ${navButton("seller", "Satışlarım")}
        ${user?.role === "admin" ? navButton("admin", "Admin") : ""}
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
    ${legalFooter()}
    ${avatarModalUser ? avatarModal(avatarModalUser) : ""}
  `;
  bindEvents();
  if (route.page === "notes") updateNoteSearchResults();
}

function legalFooter() {
  return `
    <footer class="legal-footer">
      <div class="legal-footer-main">
        <a class="legal-footer-brand" href="#/" aria-label="Notum ana sayfa">
          <img src="src/notum-icon.png" alt="" />
          <span><strong>Notum</strong><small>Öğrenciler için bilgi paylaşım alanı</small></span>
        </a>
        <p>Notlarını keşfet, birikimini paylaş ve öğrenci topluluğuna katkı sağla.</p>
        <span class="legal-footer-copyright">© ${new Date().getFullYear()} Notum</span>
      </div>
      <div class="legal-footer-column">
        <h2>Yasal bilgiler</h2>
        <a href="legal.html#privacy">KVKK Aydınlatma</a>
        <a href="legal.html#terms">Kullanım Koşulları</a>
        <a href="legal.html#seller">Satıcı Sözleşmesi</a>
        <a href="legal.html#buyer">Alıcı Bilgilendirmesi</a>
        <a href="legal.html#distance-sale">Mesafeli Satış Sözleşmesi</a>
        <a href="legal.html#cookies">Çerez ve Yerel Depolama</a>
      </div>
      <div class="legal-footer-column legal-footer-contact">
        <h2>İletişim</h2>
        <p>Destek ve başvuruların için bize e-posta gönderebilirsin.</p>
        <a class="legal-footer-email" href="mailto:bdemircanli15@gmail.com">
          <span aria-hidden="true">✉</span> bdemircanli15@gmail.com
        </a>
      </div>
    </footer>
  `;
}

function page() {
  if (route.page === "detail") return detailPage(route.id);
  if (route.page === "notes") return notesPage();
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
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="hero-kicker">Notum <span>·</span> Üniversite notları</p>
        <h1>Kampüsten bilgi,<br /><span>tek tıkla.</span></h1>
        <p class="hero-lead">Dersine gerçekten çalışan öğrencilerin notlarını keşfet. Kendi birikimini paylaş, emeğin kazanca dönüşsün.</p>
        <div class="hero-actions">
          <button class="primary" data-route="notes">Notları keşfet <span aria-hidden="true">↗</span></button>
          <button class="hero-secondary" data-route="upload">Notunu paylaş <span aria-hidden="true">＋</span></button>
        </div>
        <div class="hero-proof"><span class="hero-proof-mark">✦</span> Öğrencilerin emeği, öğrencilerin geleceği</div>
      </div>
      ${heroCommunityCarousel()}
    </section>
    <section class="home-intro">
      <div>
        <h2>Paylaş, keşfet, kazan.</h2>
        <p>Öğrenciler kendi hazırladığı notları yükler; diğer öğrenciler bölüm, ders, hoca ve üniversiteye göre kolayca arar.</p>
      </div>
      <div class="home-intro-grid">
        <article><strong>Güvenli katalog</strong><span>Onay, şikayet ve yorum akışıyla daha temiz bir pazar.</span></article>
        <article><strong>Akıllı filtreler</strong><span>Notlarda aynı arama deneyimi.</span></article>
        <article><strong>Öğrenci odaklı</strong><span>Satıcı profili, favori, sepet ve satış paneli tek yerde.</span></article>
      </div>
    </section>
  `;
}

function notesPage() {
  const notes = filteredNotes("note");
  const allNotes = approvedNotes().filter((note) => materialType(note) === "note");
  const approved = approvedNotes();
  return `
    <section class="market-hero compact-market-hero">
      <p class="eyebrow">Notlar</p>
      ${marketInsightCarousel("note", approved)}
    </section>
    <section class="market-shell">
      <div class="market-toolbar">
        <form class="search-panel" data-action="search" data-market-type="note">
          <input name="query" value="${escapeHtml(filters.query)}" placeholder="Ders, hoca, bölüm veya not ara" />
          <button class="primary" type="submit">Ara</button>
        </form>
      </div>
      <aside class="filters">
        <div class="filters-head">
          <h2>Filtreler</h2>
          <button class="ghost small" data-reset>Filtreleri temizle</button>
        </div>
        ${filterSelect("university", "Üniversite", catalogValues("university"))}
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
          <div><h2>Yayındaki notlar</h2><p data-note-result-count>${notes.length} onaylı materyal listeleniyor</p></div>
        </div>
        <div class="note-grid">${allNotes.map(noteCard).join("")}<div class="note-search-empty empty" ${notes.length ? "hidden" : ""}>Aradığın kriterlerde not bulunamadı.</div></div>
      </section>
    </section>
  `;
}

function marketInsightCarousel(type, items) {
  const insights = marketInsights(type, items);
  const activeIndex = Math.min(marketInsightIndex[type] || 0, insights.length - 1);
  marketInsightIndex[type] = activeIndex;
  return `
    <div class="market-insight" data-market-insight="${type}">
      <div class="market-insight-window">
        <div class="market-insight-track" data-market-track style="transform: translateX(-${activeIndex * 100}%);">
          ${insights
            .map(
              (insight, index) => `
                <article class="market-insight-card ${index === activeIndex ? "active" : ""}" style="--insight-a:${insight.colorA}; --insight-b:${insight.colorB};">
                  <div class="insight-orbit" aria-hidden="true"><span>${escapeHtml(insight.icon)}</span></div>
                  <div class="insight-copy">
                    <span>${escapeHtml(insight.kicker)}</span>
                    <strong>${escapeHtml(insight.title)}</strong>
                    <p>${escapeHtml(insight.text)}</p>
                  </div>
                  <div class="insight-stat"><b>${escapeHtml(insight.stat)}</b><small>${escapeHtml(insight.statLabel)}</small></div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="market-dots" aria-label="Not bilgi kartları">
        ${insights
          .map(
            (_, index) => `
              <button class="${index === activeIndex ? "active" : ""}" data-market-dot="${type}" data-market-index="${index}" aria-label="${index + 1}. bilgi kartı"></button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function setMarketInsight(type, nextIndex) {
  const root = document.querySelector(`[data-market-insight="${type}"]`);
  if (!root) return;
  const cards = [...root.querySelectorAll(".market-insight-card")];
  if (!cards.length) return;
  const index = ((nextIndex % cards.length) + cards.length) % cards.length;
  marketInsightIndex[type] = index;
  root.querySelector("[data-market-track]").style.transform = `translateX(-${index * 100}%)`;
  cards.forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === index));
  root.querySelectorAll("[data-market-dot]").forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
}

function marketInsights(type, items) {
  const label = "not";
  const plural = "notlar";
  const latest = [...items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const topSeller = [...items].sort((a, b) => (b.sales || 0) - (a.sales || 0))[0];
  const mostReviewed = [...items].sort((a, b) => noteReviews(b.id).length - noteReviews(a.id).length)[0];
  const mostFavorited = [...items].sort((a, b) => noteFavorites(b.id) - noteFavorites(a.id))[0];
  const mostViewed = [...items].sort((a, b) => (b.views || 0) - (a.views || 0))[0];
  const university = topMarketValue(items, "university");
  const department = topMarketValue(items, "department");
  const newestText = latest
    ? `${latest.university} içinden ${latest.title} yayına alındı.`
    : `Henüz yayında ${label} yok. İlk ilanı sen yükleyebilirsin.`;
  return [
    {
      kicker: "Son yüklenen",
      icon: "↗",
      colorA: "#5b5ff7",
      colorB: "#30d5c8",
      title: latest?.title || `İlk ${label} bekleniyor`,
      text: newestText,
      stat: latest ? formatDate(latest.createdAt).split(" ").slice(0, 2).join(" ") : "Yeni",
      statLabel: "ilan"
    },
    {
      kicker: "En çok satın alınan",
      icon: "₺",
      colorA: "#ff5f8f",
      colorB: "#ffbe55",
      title: topSeller?.title || `Satış bekleyen ${plural}`,
      text: topSeller ? `${topSeller.sales || 0} satışla ${topSeller.university} öğrencilerinin radarında.` : `Satış verisi oluşunca burada en hareketli ${label} görünecek.`,
      stat: String(topSeller?.sales || 0),
      statLabel: "satış"
    },
    {
      kicker: "En çok yorum alan",
      icon: "★",
      colorA: "#8b5cf6",
      colorB: "#38bdf8",
      title: mostReviewed && noteReviews(mostReviewed.id).length ? mostReviewed.title : "Yorum bekleniyor",
      text: mostReviewed && noteReviews(mostReviewed.id).length
        ? `${noteReviews(mostReviewed.id).length} yorum ve ${rating(mostReviewed.id)} değerlendirme ile öne çıkıyor.`
        : `Maalesef şu an yorum yok. İlk yorum geldiğinde en çok konuşulan ${label} burada görünecek.`,
      stat: String(mostReviewed ? noteReviews(mostReviewed.id).length : 0),
      statLabel: "yorum"
    },
    {
      kicker: "En çok favorilenen",
      icon: "♡",
      colorA: "#ef4444",
      colorB: "#f97316",
      title: mostFavorited?.title || "Favori listeleri boş",
      text: mostFavorited ? `${noteFavorites(mostFavorited.id)} favoriyle öğrencilerin daha sonra bakmak için ayırdığı ${label}.` : `Favorilere eklenen ${plural} burada öne çıkar.`,
      stat: String(mostFavorited ? noteFavorites(mostFavorited.id) : 0),
      statLabel: "favori"
    },
    {
      kicker: "En hareketli üniversite",
      icon: "⌂",
      colorA: "#0f766e",
      colorB: "#84cc16",
      title: university?.name || "Üniversite verisi bekleniyor",
      text: university ? `${university.count} aktif ${label} ile katalogda en görünür üniversite.` : `Üniversiteye göre ilanlar arttıkça bu alan güncellenir.`,
      stat: String(university?.count || 0),
      statLabel: label
    },
    {
      kicker: "En yoğun bölüm",
      icon: "◇",
      colorA: "#2563eb",
      colorB: "#a855f7",
      title: department?.name || "Bölüm verisi bekleniyor",
      text: department ? `${department.count} aktif ${label} ile en dolu bölüm vitrini.` : `Bölüm bazlı yoğunluk oluşunca bu kart değişir.`,
      stat: String(department?.count || 0),
      statLabel: label
    },
    {
      kicker: "En çok görüntülenen",
      icon: "◉",
      colorA: "#db2777",
      colorB: "#06b6d4",
      title: mostViewed?.title || "Görüntülenme bekleniyor",
      text: mostViewed ? `${mostViewed.views || 0} görüntülenmeyle şu an en çok incelenen ${label}.` : `Öğrenciler detay sayfalarını gezdikçe bu alan hareketlenir.`,
      stat: String(mostViewed?.views || 0),
      statLabel: "görüntü"
    }
  ];
}

function topMarketValue(items, key) {
  const counts = items.reduce((map, item) => {
    const value = item[key];
    if (!value) return map;
    map.set(value, (map.get(value) || 0) + 1);
    return map;
  }, new Map());
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "tr"))[0];
}

function heroCommunityCarousel() {
  const notes = approvedNotes()
    .sort((a, b) => noteSalesCount(b) - noteSalesCount(a) || new Date(b.createdAt) - new Date(a.createdAt));
  const students = state.users
    .filter((user) => user.role === "student")
    .sort((a, b) => materialCount(b) - materialCount(a) || a.name.localeCompare(b.name, "tr"));
  const slides = [];
  const count = Math.max(notes.length, students.length);
  for (let index = 0; index < count && slides.length < 8; index += 1) {
    if (notes[index]) slides.push({ type: "note", note: notes[index] });
    if (students[index]) slides.push({ type: "student", user: students[index] });
  }
  if (!slides.length) return "";
  const activeIndex = Math.min(homeCommunityIndex, slides.length - 1);
  homeCommunityIndex = activeIndex;
  return `
    <section class="home-community" data-home-carousel aria-label="Öğrenci notları ve profilleri">
      <div class="home-community-heading"><span><i></i> KAMPÜSTEN SEÇKİLER</span><strong>Bir sonraki favorin burada.</strong></div>
      <div class="home-community-window">
        <div class="home-community-track" data-home-track style="transform:translateX(-${activeIndex * 100}%);">
          ${slides.map((slide, index) => heroCommunitySlide(slide, index)).join("")}
        </div>
      </div>
      <div class="home-community-controls">
        <div class="home-community-dots" aria-label="Seçkiler arasında gezin">
          ${slides.map((_, index) => `<button class="${index === activeIndex ? "active" : ""}" data-home-dot="${index}" aria-label="${index + 1}. seçki"></button>`).join("")}
        </div>
        <div class="home-community-arrows">
          <button type="button" data-home-prev aria-label="Önceki seçki">←</button>
          <button type="button" data-home-next aria-label="Sonraki seçki">→</button>
        </div>
      </div>
    </section>
  `;
}

function heroCommunitySlide(slide, index) {
  if (slide.type === "note") {
    const note = slide.note;
    const author = state.users.find((user) => user.id === note.sellerId);
    return `
      <article class="home-feed-card note-feed-card" style="--feed-index:${index}">
        <button class="home-feed-main" data-detail="${note.id}" aria-label="${escapeHtml(note.title)} notunu görüntüle">
          <span class="feed-card-top"><span class="feed-file">${escapeHtml(note.fileType || "NOT")}</span><span class="feed-rating">${rating(note.id)} <i>★</i></span></span>
          <span class="feed-paper-art" aria-hidden="true"><i></i><i></i><i></i><i></i><b>${escapeHtml((note.course || "DERS").slice(0, 1))}</b></span>
          <span class="feed-note-copy"><small>${escapeHtml(note.course || note.department || "Ders notu")}</small><strong>${escapeHtml(note.title)}</strong><span>${escapeHtml(note.university)}</span></span>
          <span class="feed-note-footer"><b>${money(note.price)}</b><span>Notu incele <i>↗</i></span></span>
        </button>
        ${author ? `<button class="feed-author" data-user-profile="${author.id}">${profileAvatar(author)}<span><small>ÖĞRENCİ NOTU</small><strong>${escapeHtml(author.name)}</strong></span><i>↗</i></button>` : ""}
      </article>
    `;
  }
  const user = slide.user;
  return `
    <article class="home-feed-card student-feed-card" style="--feed-index:${index}">
      <button class="student-feed-main" data-user-profile="${user.id}" aria-label="${escapeHtml(user.name)} profilini görüntüle">
        <span class="student-feed-glow" aria-hidden="true"></span>
        <span class="student-feed-label"><i></i> TOPLULUKTAN</span>
        ${profileAvatar(user)}
        <strong>${escapeHtml(user.name)}</strong>
        <span class="student-feed-university">${escapeHtml(user.university || "Üniversite öğrencisi")}</span>
        <span class="student-feed-stat"><b>${materialCount(user)}</b> paylaşılan not <i>↗</i></span>
      </button>
    </article>
  `;
}

function filteredNotes(type = "note") {
  const query = filters.query.trim().toLocaleLowerCase("tr");
  let notes = approvedNotes().filter((note) => materialType(note) === type).filter((note) => {
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
  if (filters.sort === "best") notes = notes.sort((a, b) => noteSalesCount(b) - noteSalesCount(a));
  else if (filters.sort === "rated") notes = notes.sort((a, b) => numericRating(b.id) - numericRating(a.id));
  else notes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return notes;
}

function updateNoteSearchResults() {
  const visibleNoteIds = new Set(filteredNotes().map((note) => note.id));
  const count = document.querySelector("[data-note-result-count]");
  const grid = document.querySelector(".note-grid");
  if (!grid) return;
  let visibleCount = 0;
  grid.querySelectorAll(".note-card[data-note-id]").forEach((card) => {
    const isVisible = visibleNoteIds.has(card.dataset.noteId);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });
  if (count) count.textContent = `${visibleCount} onaylı materyal listeleniyor`;
  const emptyMessage = grid.querySelector(".note-search-empty");
  if (emptyMessage) emptyMessage.hidden = visibleCount > 0;
}

function updateAdminUserSearchResults() {
  const list = document.querySelector(".admin-user-list");
  if (!list) return;
  const query = adminUserFilters.query.trim().toLocaleLowerCase("tr");
  let visibleCount = 0;
  list.querySelectorAll(".admin-user-block").forEach((block) => {
    const matches = !query || block.dataset.userSearch.toLocaleLowerCase("tr").includes(query);
    block.hidden = !matches;
    if (matches) visibleCount += 1;
  });
  const count = document.querySelector("[data-admin-user-count]");
  if (count) count.textContent = String(visibleCount);
  const emptyMessage = list.querySelector("[data-admin-search-empty]");
  if (emptyMessage) emptyMessage.hidden = visibleCount !== 0 || !query;
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
    <article class="note-card" data-note-id="${escapeHtml(note.id)}">
      <button class="favorite ${isFavorite(note.id) ? "active" : ""}" data-favorite="${note.id}" aria-pressed="${isFavorite(note.id)}" aria-label="${isFavorite(note.id) ? "Favorilerden kaldır" : "Favorilere ekle"}">${isFavorite(note.id) ? "♥" : "♡"}</button>
      <div class="file-badge">${note.fileType}</div>
      <h3>${escapeHtml(note.title)}</h3>
      <p>${escapeHtml(note.course)} · ${escapeHtml(note.department)}</p>
      <p class="muted">${escapeHtml(note.university)}</p>
      <p class="muted">Yüklendi: ${formatDate(note.createdAt)}</p>
      <div class="card-meta"><span>${rating(note.id)}</span><span>${noteSalesCount(note)} satış</span></div>
      <div class="card-meta"><span>${noteFavorites(note.id)} favori</span><span>${noteReviews(note.id).length} yorum</span></div>
      <div class="card-foot"><strong>${money(note.price)}</strong><small>${escapeHtml(sellerName(note))}</small></div>
      <button class="primary wide" data-detail="${note.id}">Detay</button>
    </article>
  `;
}

function detailPage(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return empty("Materyal bulunamadı.");
  const user = currentUser();
  const purchased = user && hasPurchased(user.id, note.id);
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
        <button class="back" data-route="notes">← Listeye dön</button>
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
    <div><span>Satış</span><strong>${noteSalesCount(note)}</strong></div>
    <div><span>Yorum</span><strong>${noteReviews(note.id).length}</strong></div>
  </div>`;
}

function sellerMini(note) {
  const seller = state.users.find((user) => user.id === note.sellerId);
  const sellerNotes = state.notes.filter((item) => item.sellerId === note.sellerId);
  const sellerSales = sellerNotes.reduce((sum, item) => sum + noteSalesCount(item), 0);
  const allReviews = sellerNotes.flatMap((item) => noteReviews(item.id));
  const avg = allReviews.length ? (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1) : "Yeni";
  return `<div class="seller-mini">
    <strong>${escapeHtml(seller?.name || "Satıcı")}</strong>
    <span>${sellerNotes.length} materyal · ${sellerSales} satış · ${avg}${avg === "Yeni" ? "" : " ★"}</span>
  </div>`;
}

function previewPages(note) {
  if (hasOriginalFile(note) && note.fileType === "PDF") return realPdfPreviewPages(note);
  if (hasOriginalFile(note) && ["DOCX", "PPTX", "TXT"].includes(note.fileType)) return realOfficePreviewPages(note);
  const pages = getPreviewPages(note);
  return pages.map(
    (page, index) => page.plainText
      ? `
      <article class="note-preview-page document-preview-page">
        <div class="page-number">Sayfa ${note.selectedPreviewPages?.[index] || index + 1}</div>
        <div class="preview-document-text">${escapeHtml(page.body)}</div>
        <div class="document-continuation">… Sayfanın devamı var; tamamı satın alınca görüntülenir.</div>
        <div class="watermark">Notum önizleme</div>
      </article>
    `
      : `
      <article class="note-preview-page">
        <div class="page-number">Sayfa ${index + 1}</div>
        <h2>${escapeHtml(page.title)}</h2>
        <p>${escapeHtml(page.body)}</p>
        <ul>${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        ${page.callout ? `<div class="preview-callout">${escapeHtml(page.callout)}</div>` : ""}
        <div class="watermark">Notum önizleme</div>
      </article>
    `
  );
}

function realOfficePreviewPages(note) {
  const pages = (note.selectedPreviewPages?.length ? note.selectedPreviewPages : [1, 2, 3]).slice(0, 5);
  return pages.map((page) => `
    <article class="note-preview-page document-preview-page" data-office-preview="${note.id}" data-page="${page}">
      <div class="page-number">Sayfa ${page}</div>
      <div class="real-pdf-loading">Belge sayfası yükleniyor...</div>
    </article>
  `);
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
      <form class="panel" data-action="login" autocomplete="on">
        <h1>Giriş yap</h1>
        <label>E-posta<input name="email" type="email" autocomplete="username" required /></label>
        <label>Şifre<input name="password" type="password" autocomplete="current-password" required /></label>
        <button class="primary wide" type="submit">Giriş</button>
      </form>
      <form class="panel" data-action="register" autocomplete="off">
        <h1>Kayıt ol</h1>
        <label>Ad soyad<input name="name" autocomplete="off" required /></label>
        <label>E-posta<input name="email" type="email" autocomplete="off" required /></label>
        <label>Şifre<input name="password" type="password" autocomplete="new-password" minlength="6" required /></label>
        <label class="check legal-consent"><input name="privacyAcknowledgement" type="checkbox" required /> <span><a href="legal.html#privacy" target="_blank" rel="noopener">KVKK Aydınlatma Metni</a>'ni okudum.</span></label>
        <label class="check legal-consent"><input name="termsAcceptance" type="checkbox" required /> <span><a href="legal.html#terms" target="_blank" rel="noopener">Kullanım Koşulları</a>'nı okudum ve kabul ediyorum.</span></label>
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
          <div><h1>Not yükle</h1><p>Not dosyanı ekle, bilgileri doldur ve satışa hazırla.</p></div>
          <span class="pill">Akıllı açıklama</span>
        </div>
        <div class="upload-steps">
          <div><strong>Bilgileri doldur</strong><span>Ders, hoca, bölüm ve fiyat bilgilerini yaz.</span></div>
          <div><strong>Dosyayı ekle</strong><span>PDF, DOCX, PPTX veya TXT dosyanı yükle.</span></div>
          <div><strong>Görünümü hazırla</strong><span>Önizleme alanını ve dosya bilgilerini hazırla.</span></div>
        </div>
        <div class="form-grid">
          <label>Başlık<input name="title" required /></label>
          <label>Fiyat<input name="price" type="number" min="1" value="99" required /></label>
          <label>Üniversite<input name="university" list="university-options" value="${escapeHtml(user.university || "")}" required /></label>
          <label>Fakülte<input name="faculty" list="faculty-options" required /></label>
          <label>Bölüm<input name="department" list="department-options" value="${escapeHtml(user.department || "")}" required /></label>
          <label>Ders adı<input name="course" required /></label>
          <label><span data-instructor-label>Hoca adı</span><input name="instructor" required /></label>
          <label class="full file-drop" data-note-upload-only>Not dosyası
            <input name="noteFile" type="file" accept=".pdf,.docx,.pptx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain" required />
            <span>PDF, DOCX, PPTX veya TXT dosyanı bırak. Önizleme alanı dosyaya göre hazırlanır.</span>
          </label>
          <label>Toplam sayfa/slayt
            <input name="pageCount" type="number" min="1" max="300" placeholder="Dosyadan hesaplanır" readonly />
          </label>
          <label class="full">Açıklama<textarea name="description" rows="4" required></textarea></label>
          <input name="selectedPreviewPages" type="hidden" value="" />
          <div class="full preview-picker" data-preview-picker data-note-upload-only>
            <div class="preview-picker-head">
              <div><strong>Önizleme sayfaları</strong><small>Sayfaların sağ üstündeki kutudan en fazla 5 sayfa seç. Seçim yapmazsan ilk 3 sayfa otomatik kullanılır.</small></div>
              <span data-preview-count>0/5</span>
            </div>
            <div class="source-viewer" data-source-viewer>Dosya seçildiğinde burada sayfalar açılır.</div>
          </div>
        </div>
        ${catalogDatalists()}
        <div class="form-actions">
          <label class="check"><input name="copyright" type="checkbox" required /> Bu materyali paylaşma/satma sorumluluğunu kabul ediyorum.</label>
          <label class="check legal-consent"><input name="sellerTermsAcceptance" type="checkbox" required /> <span><a href="legal.html#seller" target="_blank" rel="noopener">Satıcı Sözleşmesi</a>'ni okudum ve kabul ediyorum.</span></label>
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
  const settings = state.platformSettings || {};
  const hasBankDetails = settings.bankName && settings.iban && settings.accountHolder;
  const isMockEnabled = Boolean(settings.mockPaymentsEnabled);
  return `
    <section class="dashboard">
      <div class="section-head"><div><h1>Sepet</h1><p>Satın almak istediğin materyalleri buradan tamamla.</p></div></div>
      <div class="panel">
        ${items.map(cartItem).join("") || empty("Sepet boş.")}
        <div class="total"><span>Toplam</span><strong>${money(total)}</strong></div>
        ${hasBankDetails ? `
          <section class="checkout-bank-details">
            <h2>Havale / EFT bilgileri</h2>
            <dl class="payment-instructions">
              <div><dt>Banka</dt><dd>${escapeHtml(settings.bankName)}</dd></div>
              <div><dt>Hesap sahibi</dt><dd>${escapeHtml(settings.accountHolder)}</dd></div>
              <div><dt>IBAN</dt><dd class="iban-value">${escapeHtml(settings.iban)}</dd></div>
            </dl>
          </section>
        ` : `<p class="muted">Admin henüz alıcı banka bilgilerini tanımlamadı. Ödeme talimatı oluşturulamaz.</p>`}
        ${isMockEnabled ? `<label class="check mock-payment-choice"><input type="checkbox" data-mock-payment /> Mock ödeme ile test et <small>Bu test gerçek satış veya banka transferi değildir.</small></label>` : ""}
        <div class="checkout-legal">
          <label class="check legal-consent"><input type="checkbox" data-legal-checkout="buyer-information" required /> <span><a href="legal.html#buyer" target="_blank" rel="noopener">Alıcı Ön Bilgilendirmesi</a>'ni ve listelenen ürün/satıcı bilgilerini okudum.</span></label>
          <label class="check legal-consent"><input type="checkbox" data-legal-checkout="distance-sale" required /> <span><a href="legal.html#distance-sale" target="_blank" rel="noopener">Mesafeli Satış Sözleşmesi</a>'ni okudum ve kabul ediyorum.</span></label>
          <label class="check legal-consent"><input type="checkbox" data-legal-checkout="digital-content" required /> <span>Dijital içeriğin ödeme doğrulandıktan sonra hemen sunulmasını talep ediyorum. Cayma hakkına ilişkin bilgiyi <a href="legal.html#buyer" target="_blank" rel="noopener">alıcı bilgilendirmesinde</a> okudum.</span></label>
          <p class="legal-draft-note">Yasal metinler taslaktır; işletme ve satıcı bilgileri tamamlanıp uzman incelemesi yapılmadan gerçek satışa açılmamalıdır.</p>
        </div>
        <button class="primary wide" data-checkout ${items.length && (hasBankDetails || isMockEnabled) ? "" : "disabled"}>Ödeme talimatlarını oluştur</button>
      </div>
    </section>
  `;
}

function cartItem(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.university)} · Satıcı: ${escapeHtml(sellerName(note))}</small></div><span>${money(note.price)}</span><button class="icon-btn" data-remove-cart="${note.id}">×</button></div>`;
}

function studentPage() {
  const user = currentUser();
  if (!user) return authPage();
  const userPurchases = state.purchases.filter((purchase) => purchase.buyerId === user.id);
  const purchased = userPurchases
    .filter((purchase) => ["paid", "mock_paid"].includes(purchase.paymentStatus))
    .map((purchase) => state.notes.find((note) => note.id === purchase.noteId))
    .filter(Boolean);
  const awaiting = userPurchases.filter((purchase) => !["paid", "mock_paid", "refunded"].includes(purchase.paymentStatus));
  const favs = state.favorites.filter((favorite) => favorite.userId === user.id).map((favorite) => state.notes.find((note) => note.id === favorite.noteId)).filter(Boolean);
  const myReviews = state.reviews.filter((review) => review.userId === user.id);
  return `
    <section class="dashboard student-dashboard">
      ${stats([
        { label: "Satın aldığım", value: purchased.length, target: "student-purchases" },
        { label: "Favoriler", value: favs.length, target: "student-favorites" },
        { label: "Yorumlarım", value: myReviews.length, target: "student-reviews" }
      ])}
      ${awaiting.length ? `      <div class="panel payment-orders"><h2>Ödeme durumları</h2>${awaiting.map((purchase) => paymentOrderCard(purchase)).join("")}</div>` : ""}
      <div class="columns">
        <div class="panel scroll-target" id="student-purchases"><h2>Satın aldığım materyaller</h2>${purchased.map(ownedItem).join("") || empty("Henüz satın alma yok.")}</div>
        <div class="panel scroll-target" id="student-favorites"><h2>Favoriler</h2>${favs.map(simpleNoteRow).join("") || empty("Favori listen boş.")}</div>
      </div>
      <div class="panel scroll-target" id="student-reviews"><h2>Yorumlarım</h2>${myReviews.map(studentReviewRow).join("") || empty("Henüz yorum yapmadın.")}</div>
    </section>
  `;
}

function paymentOrderCard(purchase) {
  const note = state.notes.find((item) => item.id === purchase.noteId);
  const settings = state.platformSettings || {};
  const needsReceipt = ["pending_payment", "rejected"].includes(purchase.paymentStatus);
  const canRetestMock = purchase.isMock && purchase.paymentStatus === "pending_review";
  const receiptForm = `
    <form class="receipt-upload" data-action="bank-query" data-purchase="${purchase.id}">
      <label>
        Sorgu numarası
        <div class="field-with-info">
          <input name="queryNumber" type="text" placeholder="Örnek: 232119312345" required maxlength="40" value="${escapeHtml(purchase.queryNumber || "")}" />
          <span class="info-tooltip" role="img" aria-label="Sorgu numarasının yeri" title="Ödeme yaptıktan sonra VakıfBank'tan gelen FAST Anlık Ödeme Bilgilendirmesi e-postasını aç. E-posta içindeki “Sorgu No” veya “Sorgu Numarası” alanındaki değeri buraya yaz.">i</span>
        </div>
      </label>
      <button class="primary small" type="submit">Sorgu numarasını gönder</button>
    </form>
  `;
  return `
    <article class="payment-order">
      <div class="section-head compact-head">
        <div><h3>${escapeHtml(note?.title || "Not")}</h3><p>${purchase.isMock ? `<span class="pill">MOCK TEST</span> ` : ""}${paymentStatusLabel(purchase.paymentStatus)}</p></div>
        <strong>${money(purchase.amount)}</strong>
      </div>
      <dl class="payment-instructions">
        ${purchase.isMock ? `<div><dt>Test modu</dt><dd>Gerçek havale değildir; doğru/yanlış örneklerle OCR'ı deneyebilirsin.</dd></div>` : `
          <div><dt>Banka</dt><dd>${escapeHtml(settings.bankName || "Henüz belirtilmedi")}</dd></div>
          <div><dt>Hesap sahibi</dt><dd>${escapeHtml(settings.accountHolder || "Henüz belirtilmedi")}</dd></div>
          <div><dt>IBAN</dt><dd class="iban-value">${escapeHtml(settings.iban || "Henüz belirtilmedi")}</dd></div>
        `}
      </dl>
      ${needsReceipt
        ? receiptForm
        : `${purchase.paymentStatus === "pending_review" ? receiptCheckSummary(purchase) : `<p class="payment-waiting">Ödeme durumu güncellendi.</p>`}`
      }
      ${canRetestMock ? `<p class="muted">İki sonucu da aynı siparişte deneyebilirsin; yeni test dekontu öncekinin yerini alır.</p>${receiptForm}` : ""}
    </article>
  `;
}

function paymentStatusLabel(status) {
  return ({
    pending_payment: "Ödeme bekleniyor",
    pending_review: "Gmail doğrulaması bekleniyor",
    paid: "Ödeme onaylandı",
    mock_paid: "Mock test onaylandı",
    rejected: "Sorgu numarası reddedildi",
    refunded: "İade edildi"
  })[status] || "Bilinmeyen durum";
}

function receiptCheckLabel(purchase) {
  const labels = {
    matched: "Dekont bilgileri eşleşti",
    mismatch: "Hatalı dekont: kontrol bilgileri eşleşmedi",
    unreadable: "dekonttan bilgi okunamadı",
    not_checked: "otomatik kontrol yapılmadı"
  };
  if (purchase.receiptCheckStatus === "matched") return `${labels.matched} (sorgu numarası ve tutar)`;
  if (purchase.receiptCheckStatus === "mismatch") {
    const amountMatched = purchase.receiptDetectedAmount !== null
      && purchase.receiptDetectedAmount !== undefined
      && Math.round(Number(purchase.receiptDetectedAmount) * 100) === Math.round(Number(purchase.amount) * 100);
    return `${labels.mismatch}: ${[
      purchase.queryNumber ? "" : "sorgu numarası eşleşmedi",
      amountMatched ? "" : "tutar eşleşmedi"
    ].filter(Boolean).join(", ") || "bilgiler okunamadı"}`;
  }
  return labels[purchase.receiptCheckStatus] || labels.not_checked;
}

function receiptCheckSummary(purchase, adminView = false) {
  const explanation = purchase.receiptDetectedDescription
    ? escapeHtml(purchase.receiptDetectedDescription)
    : "Açıklama alanı okunamadı.";
  const detectedAmount = purchase.receiptDetectedAmount !== null
    && purchase.receiptDetectedAmount !== undefined
    && Number.isFinite(Number(purchase.receiptDetectedAmount))
    ? money(purchase.receiptDetectedAmount)
    : "Tutar okunamadı.";
  const detectedQueryNumber = purchase.queryNumber;
  const recognizedQueryNumber = detectedQueryNumber
    ? escapeHtml(detectedQueryNumber)
    : "Sorgu numarası okunamadı.";
  const trustDisclaimer = adminView
    ? "Bu sonuç kullanıcı tarayıcısındaki OCR ön kontrolüdür; değiştirilebilir ve gerçek havale kanıtı değildir."
    : "OCR ön kontrolüdür; son karar admin tarafından verilir.";
  return `
    <div class="receipt-precheck">
      <strong>${escapeHtml(receiptCheckLabel(purchase))}</strong>
      <dl class="payment-instructions">
        <div><dt>Okunan açıklama</dt><dd>${explanation}</dd></div>
        <div><dt>Okunan sorgu numarası</dt><dd>${recognizedQueryNumber}</dd></div>
        <div><dt>Okunan tutar</dt><dd>${detectedAmount}</dd></div>
        <div><dt>Sipariş tutarı</dt><dd>${money(purchase.amount)}</dd></div>
      </dl>
      <small>${trustDisclaimer}</small>
    </div>
  `;
}

function ownedItem(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.course)} · ${materialLabel(note)}</small></div><button class="primary small" data-download="${note.id}">İndir</button></div>`;
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
  const sales = notes.reduce((sum, note) => sum + noteSalesCount(note), 0);
  const earnings = notes.reduce((sum, note) => sum + noteGrossSales(note) * 0.8, 0);
  const payout = sellerPayoutAmounts(user.id);
  const paymentProfile = state.sellerPaymentProfiles.find((item) => item.userId === user.id);
  const payouts = state.sellerPayouts.filter((item) => item.sellerId === user.id);
  const weekday = state.platformSettings?.payoutWeekday || "Friday";
  return `
    <section class="dashboard">
      ${stats([{ label: "Yüklediğim materyal", value: notes.length }, { label: "Satış sayısı", value: sales }, { label: "Toplam net kazanç", value: money(earnings) }])}
      <div class="panel scroll-target" id="seller-notes">
        <div class="section-head">
          <div><h1>Satışlarım</h1><p>Yüklediğin materyaller, onaylanan satışların ve kazanç özetin.</p></div>
          <button class="ghost" type="button" data-open-seller-payment>${paymentProfile?.iban ? "Banka / IBAN bilgilerini düzenle" : "Banka / IBAN bilgilerini ekle"}</button>
        </div>
        ${notes.map(sellerRow).join("") || empty("Henüz not yüklemedin.")}
      </div>
      <div class="panel scroll-target seller-earnings" id="seller-earnings">
        <h2>Kazanç özeti</h2>
        <div class="detail-stats">
          <div><span>Brüt tamamlanan satışlar</span><strong>${money(notes.reduce((sum, note) => sum + noteGrossSales(note), 0))}</strong></div>
          <div><span>Toplam net payın (mock dahil)</span><strong>${money(earnings)}</strong></div>
          <div><span>Beklenen ödeme (mock dahil)</span><strong>${money(payout.due)}</strong></div>
          <div><span>Ödenmiş</span><strong>${money(payout.paid)}</strong></div>
          <div><span>Komisyon</span><strong>%20</strong></div>
          <div><span>Havale günü</span><strong>Her ${weekdayName(weekday)}</strong></div>
        </div>
        <p class="muted">Mock onayları beklenen kazanca dahildir; gerçek havale yapılmadığından bankaya ödenecek gerçek tutar değildir. Satıcı ödemeleri haftalık olarak yapılır.</p>
        <h3>Ödeme hesabı</h3>
        ${paymentProfile?.iban ? `<p>${escapeHtml(paymentProfile.bankName)} · ${escapeHtml(paymentProfile.accountHolder)} · ${escapeHtml(paymentProfile.iban)}</p>` : `<p class="muted">Ödeme alabilmek için IBAN bilgilerini ekle.</p>`}
        <h3>Ödeme geçmişi</h3>
        ${payouts.map((item) => `<div class="row"><span>${formatDate(item.paidAt)}</span><strong>${money(item.amount)}</strong></div>`).join("") || empty("Henüz satıcı ödemesi kaydedilmedi.")}
      </div>
    </section>
  `;
}

function sellerRow(note) {
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${materialLabel(note)} · ${statusLabel(note.status)} · ${noteSalesCount(note)} satış</small></div><span>${money(note.price)}</span><button class="ghost small" data-edit-note="${note.id}">Düzenle</button><button class="danger small" data-delete-note="${note.id}">Sil</button></div>`;
}

function adminPage() {
  const user = currentUser();
  if (user?.role !== "admin") return `<section class="dashboard">${empty("Bu alan yalnızca admin hesabına açık.")}</section>`;
  const pendingNotes = state.notes.filter((note) => note.status === "pending");
  const approvedNotes = state.notes.filter((note) => note.status === "approved");
  const rejectedNotes = state.notes.filter((note) => note.status === "rejected");
  const confirmedSales = state.purchases.filter((purchase) => ["paid", "mock_paid"].includes(purchase.paymentStatus)).length;
  return `
    <section class="dashboard admin">
      ${stats([{ label: "Kullanıcı", value: state.users.length }, { label: "Onay bekleyen", value: pendingNotes.length }, { label: "Tamamlanan alışveriş", value: confirmedSales }, { label: "Şikayet", value: state.reports.filter((r) => r.status === "open").length }])}
      ${adminNoteSection("Onay bekleyen notlar", "pending", pendingNotes, "Onay bekleyen not yok.")}
      <div class="columns">
        ${adminNoteSection("Onaylanan notlar", "approved", approvedNotes, "Onaylanmış not yok.")}
        ${adminNoteSection("Reddedilen notlar", "rejected", rejectedNotes, "Reddedilmiş not yok.")}
      </div>
      ${adminPaymentsPanel()}
      ${adminSellerPayoutsPanel()}
      ${adminUsersPanel()}
      <div class="panel"><h2>Şikayet edilen içerikler</h2>${state.reports.map(reportRow).join("") || empty("Açık şikayet yok.")}</div>
    </section>
  `;
}

function adminPaymentsPanel() {
  const waiting = state.purchases.filter((purchase) => purchase.paymentStatus === "pending_review");
  const reviewed = state.purchases.filter((purchase) => ["paid", "mock_paid", "rejected"].includes(purchase.paymentStatus));
  const settings = state.platformSettings || {};
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return `
    <div class="panel admin-payment-panel">
      <div class="section-head"><div><h2>Ödeme kontrolü</h2><p>${waiting.length} ödeme incelenmeyi bekliyor.</p></div></div>
      <div class="admin-payment-list">${waiting.map(adminPaymentRow).join("") || empty("İncelenmeyi bekleyen dekont yok.")}</div>
      <details class="admin-payment-history">
        <summary>İşlem geçmişi (${reviewed.length})</summary>
        ${reviewed.map(adminPaymentHistoryRow).join("") || empty("Henüz ödeme kararı alınmadı.")}
      </details>
      <form class="admin-payment-settings" data-action="platform-settings">
        <h3>Alıcıların ödeme yapacağı hesap</h3>
        <div class="form-grid">
          <label>Banka adı<input name="bankName" value="${escapeHtml(settings.bankName || "")}" required /></label>
          <label>Hesap sahibi<input name="accountHolder" value="${escapeHtml(settings.accountHolder || "")}" required /></label>
          <label class="full">IBAN<input name="iban" value="${escapeHtml(settings.iban || "")}" autocapitalize="characters" required /></label>
          <label>Haftalık satıcı ödeme günü
            <select name="payoutWeekday">${weekdays.map((day) => `<option value="${day}" ${settings.payoutWeekday === day ? "selected" : ""}>${weekdayName(day)}</option>`).join("")}</select>
          </label>
          <label class="check mock-setting"><input name="mockPaymentsEnabled" type="checkbox" ${settings.mockPaymentsEnabled ? "checked" : ""} /> Mock ödemeleri test için etkinleştir</label>
        </div>
        <p class="muted">Mock siparişler “MOCK” etiketi taşır ve tahmini satıcı kazancında görünür; gerçek havale değildir, banka ödemesi olarak kaydedilemez. Satıcı havaleleri uygulama tarafından otomatik yapılmaz.</p>
        <button class="primary" type="submit">Ödeme ayarlarını kaydet</button>
      </form>
    </div>
  `;
}

function adminPaymentRow(purchase) {
  const note = state.notes.find((item) => item.id === purchase.noteId);
  const buyer = state.users.find((item) => item.id === purchase.buyerId);
  return `
    <article class="admin-payment-row">
      <div class="section-head compact-head">
        <div><h3>${escapeHtml(note?.title || "Not bulunamadı")}</h3><p>${escapeHtml(buyer?.name || "Alıcı")} · ${escapeHtml(buyer?.email || "")} · ${purchase.isMock ? `<span class="pill">MOCK TEST</span>` : "Gerçek havale"}</p></div>
        <strong>${money(purchase.amount)}</strong>
      </div>
      <dl class="payment-instructions">
        ${purchase.queryNumber ? `<div><dt>Sorgu numarası</dt><dd><strong>${escapeHtml(purchase.queryNumber)}</strong></dd></div>` : ""}
        <div><dt>Satıcı</dt><dd>${escapeHtml(note ? sellerName(note) : "Satıcı bulunamadı")}</dd></div>
        <div><dt>Oluşturuldu</dt><dd>${formatDate(purchase.createdAt)}</dd></div>
      </dl>
      ${receiptCheckSummary(purchase, true)}
      <div class="admin-payment-actions">
        <button class="ghost small" type="button" data-view-receipt="${purchase.id}">Dekontu görüntüle</button>
        <button class="primary small" type="button" data-approve-payment="${purchase.id}">${purchase.isMock ? "Mock olarak onayla" : "Ödemeyi onayla"}</button>
        <button class="danger small" type="button" data-reject-payment="${purchase.id}">Reddet</button>
      </div>
    </article>
  `;
}

function adminPaymentHistoryRow(purchase) {
  const note = state.notes.find((item) => item.id === purchase.noteId);
  const buyer = state.users.find((item) => item.id === purchase.buyerId);
  return `<div class="row"><div><strong>${escapeHtml(note?.title || "Not")} ${purchase.isMock ? `<span class="pill">MOCK</span>` : ""}</strong><small>${escapeHtml(buyer?.email || "")} · ${purchase.queryNumber ? `Sorgu no: ${escapeHtml(purchase.queryNumber)} · ` : ""}${paymentStatusLabel(purchase.paymentStatus)}</small></div><span>${money(purchase.amount)}</span></div>`;
}

function adminSellerPayoutsPanel() {
  const sellers = state.users.filter((user) => user.role !== "admin").map((user) => ({
    user,
    ...sellerPayoutAmounts(user.id),
    profile: state.sellerPaymentProfiles.find((item) => item.userId === user.id),
    completedSales: state.notes
      .filter((note) => note.sellerId === user.id)
      .reduce((sum, note) => sum + noteSalesCount(note), 0)
  })).filter((item) => item.completedSales || item.duePurchases.length || item.paid > 0);
  return `
    <div class="panel admin-payout-panel">
      <div class="section-head"><div><h2>Satıcı ödemeleri</h2><p>Her satışta %20 komisyon düşülür. “Ödeme yapıldı” yalnız banka havalesini tamamladıktan sonra işaretle.</p></div></div>
      ${sellers.map(({ user, duePurchases, due, actualDue, paid, profile, completedSales }) => `
        <article class="admin-payout-row">
          <div><strong>${escapeHtml(user.name)}</strong><small>${escapeHtml(user.email)} · ${completedSales} tamamlanan alışveriş (mock testler dahil) · Ödeme günü: ${weekdayName(state.platformSettings?.payoutWeekday || "Friday")}</small></div>
          <div class="admin-payout-bank">${profile?.iban ? `${escapeHtml(profile.bankName)} · ${escapeHtml(profile.accountHolder)} · ${escapeHtml(profile.iban)}` : "Satıcı ödeme bilgilerini henüz eklemedi."}</div>
          <div class="admin-payout-numbers"><span>Beklenen ödeme (mock dahil): <strong>${money(due)}</strong></span><span>Gerçek havale tutarı: <strong>${money(actualDue)}</strong></span><span>Ödenmiş: <strong>${money(paid)}</strong></span></div>
          <button class="primary small" type="button" data-record-payout="${user.id}" ${duePurchases.length && actualDue > 0 && profile?.iban ? "" : "disabled"}>Gerçek havaleyi kaydet</button>
        </article>
      `).join("") || empty("Onaylanmış satıcı kazancı bulunmuyor.")}
    </div>
  `;
}

function weekdayName(day) {
  return ({
    Monday: "Pazartesi",
    Tuesday: "Salı",
    Wednesday: "Çarşamba",
    Thursday: "Perşembe",
    Friday: "Cuma",
    Saturday: "Cumartesi",
    Sunday: "Pazar"
  })[day] || "Cuma";
}

function adminNoteSection(title, status, notes, emptyMessage) {
  return `
    <div class="panel admin-note-section" data-note-drop="${status}">
      <h2>${title} <span class="admin-note-count">${notes.length}</span></h2>
      <div class="admin-note-list">${notes.map(adminNoteRow).join("") || empty(emptyMessage)}</div>
    </div>
  `;
}

function adminUsersPanel() {
  const users = adminFilteredUsers();
  return `
    <div class="panel admin-users-panel">
      <div class="section-head compact-head">
        <div><h2>Kullanıcılar</h2><p><span data-admin-user-count>${users.length}</span> kullanıcı listeleniyor</p></div>
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
        <select name="sort">
          <option value="new" ${adminUserFilters.sort === "new" ? "selected" : ""}>Yeniden eskiye</option>
          <option value="old" ${adminUserFilters.sort === "old" ? "selected" : ""}>Eskiden yeniye</option>
          <option value="az" ${adminUserFilters.sort === "az" ? "selected" : ""}>A-Z</option>
          <option value="za" ${adminUserFilters.sort === "za" ? "selected" : ""}>Z-A</option>
        </select>
        <button class="primary small" type="submit">Ara</button>
        <button class="ghost small" type="button" data-admin-user-reset>Temizle</button>
      </form>
      <label class="check admin-select-all"><input type="checkbox" data-admin-select-all /> Listedekileri seç</label>
      <div class="panel-scroll admin-user-list">
        ${users.map(userRow).join("") || empty("Bu filtrelerde kullanıcı bulunamadı.")}
        <div class="empty admin-search-empty" data-admin-search-empty hidden>Bu aramada kullanıcı bulunamadı.</div>
      </div>
    </div>
  `;
}

function adminFilteredUsers() {
  const query = adminUserFilters.query.trim().toLocaleLowerCase("tr");
  const createdValue = (user) => {
    const value = Date.parse(user.createdAt || user.created_at || "");
    return Number.isFinite(value) ? value : 0;
  };
  const nameValue = (user) => `${user.name || ""} ${user.email || ""}`;
  return state.users.filter((user) => {
    const text = [user.name, user.email, user.university, user.department].join(" ").toLocaleLowerCase("tr");
    return (
      (!query || text.includes(query)) &&
      (!adminUserFilters.university || user.university === adminUserFilters.university) &&
      (!adminUserFilters.department || user.department === adminUserFilters.department) &&
      (!adminUserFilters.role || user.role === adminUserFilters.role)
    );
  }).sort((a, b) => {
    if (adminUserFilters.sort === "az") return nameValue(a).localeCompare(nameValue(b), "tr");
    if (adminUserFilters.sort === "za") return nameValue(b).localeCompare(nameValue(a), "tr");
    if (adminUserFilters.sort === "old") return createdValue(a) - createdValue(b) || nameValue(a).localeCompare(nameValue(b), "tr");
    return createdValue(b) - createdValue(a) || nameValue(a).localeCompare(nameValue(b), "tr");
  });
}

function adminNoteRow(note) {
  const statusActions = note.status === "pending"
    ? `<button class="primary small" data-approve="${note.id}">Onayla</button><button class="danger small" data-reject="${note.id}">Reddet</button>`
    : note.status === "approved"
      ? `<button class="danger small" data-reject="${note.id}">Reddet</button>`
      : `<button class="primary small" data-approve="${note.id}">Onayla</button>`;
  return `<div class="row admin-note-row" draggable="true" data-admin-note="${note.id}"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(sellerName(note))} · ${statusLabel(note.status)} · Sürükleyerek durumu değiştir</small></div>${statusActions}<button class="danger small" data-admin-delete-note="${note.id}">Sil</button></div>`;
}

function userRow(user) {
  const isCurrent = user.id === currentUser()?.id;
  return `<div class="admin-user-block" data-user-search="${escapeHtml([user.name, user.email, user.university, user.department].join(" "))}">
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

function profileHubPageLegacyBasic() {
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

function publicProfilePageLegacyBasic(userId) {
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

function profileAvatarLegacy(user) {
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
  return Number.isFinite(Number(user.adminStats?.notes))
    ? Number(user.adminStats.notes)
    : state.notes.filter((note) => note.sellerId === user.id).length;
}

function materialCount(user) {
  return noteCount(user);
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

function profileHubPageLegacyCover() {
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
          <button class="ghost" data-profile-panel="payment">Ödeme bilgileri</button>
          <button class="ghost" data-profile-panel="followers">${followerCount(user)} takipçi</button>
          <button class="ghost" data-profile-panel="following">${followingCount(user)} takip edilen</button>
          <span class="profile-stat-pill">${noteCount(user)} not</span>
          <button class="ghost" type="button" data-logout>Çıkış yap</button>
        </div>
        ${badgeShelf(user)}
      </div>
      ${avatarModalUserId === user.id ? avatarModal(user) : ""}
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

function profilePanelContentLegacy(user, followers, following) {
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
        <div class="profile-edit-actions">
          <button class="primary" type="submit">Kaydet</button>
          <button class="ghost" type="button" data-profile-cancel>İptal</button>
        </div>
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

function publicProfilePageLegacyCover(userId) {
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
      ${avatarModalUserId === user.id ? avatarModal(user) : ""}
      ${avatarModalUserId === user.id ? avatarModal(user) : ""}
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

function profileAvatar(user, previewable = false) {
  const initials = user.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toLocaleUpperCase("tr");
  return `<div class="profile-avatar ${previewable ? "profile-avatar-preview" : ""}" ${previewable ? `data-avatar-view="${user.id}" title="Profil fotoğrafını büyüt"` : ""} style="--avatar-color:${escapeHtml(user.profileColor || "#5b5ff7")}">${user.avatarData ? `<img src="${escapeHtml(user.avatarData)}" alt="" />` : escapeHtml(initials)}</div>`;
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
        <div class="profile-main-wrap">
          <div class="profile-main">
            ${profileAvatar(user, true)}
            <span>
              <strong>${escapeHtml(user.name)}</strong>
              <small>${escapeHtml(user.university || "Üniversite")} · ${escapeHtml(user.department || "Bölüm")}</small>
              <span class="profile-inline-stats">
                <button class="profile-stat-pill" data-profile-panel="followers">${followerCount(user)} takip&ccedil;i</button>
                <button class="profile-stat-pill" data-profile-panel="following">${followingCount(user)} takip edilen</button>
                <span class="profile-stat-pill">${noteCount(user)} not</span>
              </span>
            </span>
          </div>
          <p>${escapeHtml(user.bio || "")}</p>
          <button class="ghost profile-edit-shortcut" data-profile-panel="edit">Profili d&uuml;zenle</button>
        </div>
        <div class="profile-side">
          ${badgeShelf(user)}
          <div class="profile-actions">
            <button class="ghost" data-profile-panel="edit">Profili düzenle</button>
            <button class="ghost" data-profile-panel="payment">Ödeme bilgileri</button>
            <button class="ghost" data-profile-panel="followers">${followerCount(user)} takipçi</button>
            <button class="ghost" data-profile-panel="following">${followingCount(user)} takip edilen</button>
            <span class="profile-stat-pill">${noteCount(user)} not</span>
            <button class="ghost" type="button" data-logout>Çıkış yap</button>
          </div>
        </div>
      </div>
      ${badgeModalUserId === user.id ? badgeModal(user) : ""}
      ${profilePanelContent(user, followers, following)}
      ${badgeRoadmapPanel(user)}
      <div class="columns">
        <div class="panel"><h2>Notların</h2>${notes.map(simpleNoteRow).join("") || empty("Henüz not yüklemedin.")}</div>
      </div>
      <div class="columns">
        ${profileDiscoverPanel(discover)}
      </div>
    </section>
  `;
}

function profilePanelContent(user, followers, following) {
  if (profilePanel === "payment") {
    const details = state.sellerPaymentProfiles.find((item) => item.userId === user.id) || {};
    return `
      <form class="panel wide-panel profile-edit-panel" data-action="seller-payment-profile">
        <div class="section-head"><div><h2>Satıcı ödeme bilgileri</h2><p>IBAN yalnızca sen ve admin tarafından görüntülenebilir; herkese açık profilinde gösterilmez.</p></div></div>
        <div class="form-grid">
          <label>Banka adı<input name="bankName" value="${escapeHtml(details.bankName || "")}" autocomplete="off" required /></label>
          <label>Hesap sahibi ad soyad<input name="accountHolder" value="${escapeHtml(details.accountHolder || "")}" autocomplete="name" required /></label>
          <label class="full">IBAN<input name="iban" value="${escapeHtml(details.iban || "")}" autocomplete="off" autocapitalize="characters" required /></label>
        </div>
        <div class="profile-edit-actions">
          <button class="primary" type="submit">Ödeme bilgilerini kaydet</button>
          <button class="ghost" type="button" data-profile-cancel>İptal</button>
        </div>
      </form>
    `;
  }
  if (profilePanel === "edit") {
    return `
      <form class="panel wide-panel profile-edit-panel" data-action="profile">
        <div class="section-head"><div><h2>Profili düzenle</h2><p>Profil kartında görünen bilgileri güncelle.</p></div></div>
        <div class="avatar-edit-row">
          ${profileAvatar(user)}
          <label class="avatar-file">Profil fotoğrafı
            <input name="avatar" type="file" accept="image/*" />
          </label>
          ${user.avatarData ? `<label class="check avatar-remove"><input name="removeAvatar" type="checkbox" /> Profil fotoğrafını kaldır</label>` : ""}
        </div>
        <div class="form-grid">
          <label>Ad soyad<input name="name" value="${escapeHtml(user.name)}" required /></label>
          <label>E-posta<input name="email" value="${escapeHtml(user.email)}" required /></label>
          <label>Üniversite<input name="university" value="${escapeHtml(user.university || "")}" /></label>
          <label>Bölüm<input name="department" value="${escapeHtml(user.department || "")}" /></label>
          <label class="full">Profil yazısı<textarea name="bio" rows="3">${escapeHtml(user.bio || "")}</textarea></label>
        </div>
        <div class="profile-edit-actions">
          <button class="primary" type="submit">Kaydet</button>
          <button class="ghost" type="button" data-profile-cancel>İptal</button>
        </div>
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
        <div class="profile-main-wrap">
          <div class="profile-main">
            ${profileAvatar(user, true)}
            <span>
              <strong>${escapeHtml(user.name)}</strong>
              <small>${escapeHtml(user.university || "Üniversite")} · ${escapeHtml(user.department || "Bölüm")}</small>
              <span class="profile-inline-stats">
                <button class="profile-stat-pill" data-profile-panel="followers">${followerCount(user)} takip&ccedil;i</button>
                <button class="profile-stat-pill" data-profile-panel="following">${followingCount(user)} takip edilen</button>
                <span class="profile-stat-pill">${noteCount(user)} not</span>
              </span>
            </span>
          </div>
          <p>${escapeHtml(user.bio || "")}</p>
        </div>
        <div class="profile-side">
          ${badgeShelf(user)}
          <div class="profile-actions">
            <button class="profile-stat-pill" data-profile-panel="followers">${followerCount(user)} takipçi</button>
            <button class="profile-stat-pill" data-profile-panel="following">${followingCount(user)} takip edilen</button>
            <span class="profile-stat-pill">${noteCount(user)} not</span>
            ${followButton(user.id)}
          </div>
        </div>
      </div>
      ${badgeModalUserId === user.id ? badgeModal(user) : ""}
      ${publicProfilePanelContent(user, notes, followers, following)}
      <div class="columns">
        <div class="panel" id="public-notes"><h2>Yüklediği notlar</h2>${notes.map(simpleNoteRow).join("") || empty("Henüz yayında notu yok.")}</div>
      </div>
    </section>
  `;
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
  const sales = approved.reduce((sum, note) => sum + noteSalesCount(note), 0);
  const reviews = approved.flatMap((note) => noteReviews(note.id));
  const avgRating = reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;
  const purchases = state.purchases.filter((purchase) => purchase.buyerId === user.id && ["paid", "mock_paid"].includes(purchase.paymentStatus)).length;
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

function avatarModal(user) {
  return `
    <div class="avatar-modal-backdrop" data-avatar-close>
      <div class="avatar-modal" role="dialog" aria-modal="true" aria-label="Profil fotoğrafı">
        <button class="ghost small" data-avatar-close>Kapat</button>
        <div class="avatar-modal-frame">${profileAvatar(user)}</div>
        <strong>${escapeHtml(user.name)}</strong>
      </div>
    </div>
  `;
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
  return `<div class="row"><div><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.course)} · ${materialLabel(note)}</small></div><button class="primary small" data-download="${note.id}">İndir</button></div>`;
}

function filterSelect(key, label, values) {
  return `<label>${label}<select data-filter="${key}">${selectOptions(`Tüm ${label.toLocaleLowerCase("tr")}`, values, filters[key])}</select></label>`;
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
  document.querySelector("[data-open-seller-payment]")?.addEventListener("click", () => {
    profilePanel = "payment";
    navigate({ page: "profile" });
  });
  document.querySelectorAll('[data-action="search"] input[name="query"]').forEach((input) => {
    input.addEventListener("input", () => {
      filters.query = input.value;
      updateNoteSearchResults();
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
      if (route.page === "notes") updateNoteSearchResults();
      else render();
    });
  });
  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    filters = { query: "", university: "", department: "", course: "", instructor: "", price: "", sort: "new" };
    render();
  });
  document.querySelector('[data-action="search"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    filters.query = data.get("query") || "";
    updateNoteSearchResults();
  });
  document.querySelector('[data-action="admin-user-filter"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    adminUserFilters = {
      query: data.get("query") || "",
      university: data.get("university") || "",
      department: data.get("department") || "",
      role: data.get("role") || "",
      sort: data.get("sort") || "new"
    };
    render();
  });
  document.querySelector('[data-action="admin-user-filter"] input[name="query"]')?.addEventListener("input", (event) => {
    adminUserFilters.query = event.currentTarget.value;
    updateAdminUserSearchResults();
  });
  document.querySelectorAll('[data-action="admin-power"]').forEach((form) => {
    form.addEventListener("submit", saveAdminPower);
  });
  document.querySelector('[data-action="login"]')?.addEventListener("submit", login);
  document.querySelector('[data-action="register"]')?.addEventListener("submit", register);
  document.querySelector('[data-action="upload"]')?.addEventListener("submit", upload);
  document.querySelector('[data-action="edit-note"]')?.addEventListener("submit", saveEditedNote);
  bindMaterialUploadMode();
  document.querySelectorAll('[data-action="upload"] input[name="noteFile"], [data-action="edit-note"] input[name="noteFile"]').forEach((input) => {
    input.addEventListener("change", setupPreviewPicker);
  });
  document.querySelector('[data-action="profile"]')?.addEventListener("submit", saveProfile);
  document.querySelector('[data-action="seller-payment-profile"]')?.addEventListener("submit", saveSellerPaymentProfile);
  document.querySelector('[data-action="platform-settings"]')?.addEventListener("submit", savePlatformSettings);
  document.querySelectorAll('[data-action="receipt"], [data-action="bank-query"]').forEach((form) => form.addEventListener("submit", submitPaymentReceipt));
  bindClick("[data-profile-cancel]", () => {
    profilePanel = "overview";
    render();
  });
  bindCatalogInputs();
  document.querySelector('[data-action="review"]')?.addEventListener("submit", addReview);
  document.querySelectorAll('[data-action="reply"]').forEach((form) => form.addEventListener("submit", addReply));
  document.querySelector("[data-review-sort]")?.addEventListener("change", (event) => {
    reviewSort = event.currentTarget.value;
    render();
  });
  document.querySelector("[data-ai-fill]")?.addEventListener("click", fillAiSummary);
  document.querySelector("[data-checkout]")?.addEventListener("click", checkout);
  bindClick("[data-mock-receipt]", createMockReceipt);
  bindClick("[data-view-receipt]", viewPaymentReceipt);
  bindClick("[data-approve-payment]", (button) => reviewPayment(button.dataset.approvePayment, "approve"));
  bindClick("[data-reject-payment]", (button) => reviewPayment(button.dataset.rejectPayment, "reject"));
  bindClick("[data-record-payout]", (button) => recordSellerPayout(button.dataset.recordPayout));
  document.querySelector("[data-logout]")?.addEventListener("click", logout);
  bindClick("[data-user-profile]", (button) => openUserProfile(button.dataset.userProfile));
  bindClick("[data-follow]", (button) => toggleFollow(button.dataset.follow));
  bindClick("[data-market-dot]", (button) => {
    setMarketInsight(button.dataset.marketDot, Number(button.dataset.marketIndex) || 0);
  });
  bindClick("[data-home-dot]", (button) => setHomeCommunitySlide(Number(button.dataset.homeDot) || 0));
  bindClick("[data-home-prev]", () => setHomeCommunitySlide(homeCommunityIndex - 1));
  bindClick("[data-home-next]", () => setHomeCommunitySlide(homeCommunityIndex + 1));
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
  bindClick("[data-avatar-view]", (button) => {
    avatarModalUserId = button.dataset.avatarView;
    render();
  });
  bindClick("[data-avatar-close]", () => {
    avatarModalUserId = null;
    render();
  });
  document.querySelector(".badge-modal")?.addEventListener("click", (event) => event.stopPropagation());
  document.querySelector(".avatar-modal")?.addEventListener("click", (event) => event.stopPropagation());
  bindClick("[data-discover-page]", (button) => {
    profileDiscoverPage = Math.max(0, profileDiscoverPage + Number(button.dataset.discoverPage));
    render();
  });
  bindClick("[data-add-cart]", (button) => addToCart(button.dataset.addCart));
  bindClick("[data-remove-cart]", (button) => removeFromCart(button.dataset.removeCart));
  bindClick("[data-favorite]", toggleFavorite);
  bindClick("[data-download]", (button) => downloadNote(button.dataset.download));
  bindClick("[data-like-review]", (button) => toggleReviewLike(button.dataset.likeReview));
  bindClick("[data-delete-review]", (button) => deleteReview(button.dataset.deleteReview));
  bindClick("[data-report]", (button) => reportNote(button.dataset.report));
  bindClick("[data-approve]", (button) => moderateNote(button.dataset.approve, "approved"));
  bindClick("[data-reject]", (button) => moderateNote(button.dataset.reject, "rejected"));
  document.querySelectorAll("[data-admin-note]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", row.dataset.adminNote);
      event.dataTransfer.effectAllowed = "move";
      row.classList.add("dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("dragging"));
  });
  document.querySelectorAll("[data-note-drop]").forEach((section) => {
    section.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      section.classList.add("drag-over");
    });
    section.addEventListener("dragleave", (event) => {
      if (!section.contains(event.relatedTarget)) section.classList.remove("drag-over");
    });
    section.addEventListener("drop", (event) => {
      event.preventDefault();
      section.classList.remove("drag-over");
      const noteId = event.dataTransfer.getData("text/plain");
      const note = state.notes.find((item) => item.id === noteId);
      if (note && note.status !== section.dataset.noteDrop) {
        moderateNote(noteId, section.dataset.noteDrop);
      }
    });
  });
  bindClick("[data-delete-note]", (button) => deleteNote(button.dataset.deleteNote));
  bindClick("[data-admin-delete-note]", (button) => adminDeleteNote(button.dataset.adminDeleteNote));
  bindClick("[data-admin-delete-user]", (button) => adminDeleteUser(button.dataset.adminDeleteUser));
  bindClick("[data-admin-user-reset]", () => {
    adminUserFilters = { query: "", university: "", department: "", role: "", sort: "new" };
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
  markDocumentPreviewOverflow();
  hydrateRealPdfPreviews();
  hydrateOfficePreviews();
  hydrateStoredEditPreview();
}

function bindMaterialUploadMode() {
  // Upload is intentionally notes-only.
}

function bindClick(selector, handler) {
  document.querySelectorAll(selector).forEach((button) => button.addEventListener("click", () => handler(button)));
}

function openUserProfile(userId) {
  if (!userId) return;
  profilePanel = "overview";
  navigate(userId === currentUser()?.id ? { page: "profile" } : { page: "user", id: userId });
}

function setHomeCommunitySlide(nextIndex) {
  const root = document.querySelector("[data-home-carousel]");
  if (!root) return;
  const slides = root.querySelectorAll(".home-feed-card");
  if (!slides.length) return;
  homeCommunityIndex = (nextIndex + slides.length) % slides.length;
  root.querySelector("[data-home-track]").style.transform = `translateX(-${homeCommunityIndex * 100}%)`;
  root.querySelectorAll("[data-home-dot]").forEach((dot, index) => {
    dot.classList.toggle("active", index === homeCommunityIndex);
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

async function hydrateOfficePreviews() {
  const cards = [...document.querySelectorAll("[data-office-preview]")];
  if (!cards.length) return;
  for (const card of cards) {
    const noteId = card.dataset.officePreview;
    const pageNumber = Number(card.dataset.page);
    const note = state.notes.find((item) => item.id === noteId);
    if (!note) continue;
    if (!storedOfficePreviewCache.has(noteId)) {
      storedOfficePreviewCache.set(noteId, (async () => {
        const dataUrl = await getUploadedFile(noteId);
        return dataUrl
          ? extractPreviewPagesFromFile(
              dataUrlToFile(dataUrl, note.fileName || "notum-file", note.fileMime || mimeForFileType(note.fileType)),
              note.fileType
            )
          : [];
      })());
    }
    const page = (await storedOfficePreviewCache.get(noteId))[pageNumber - 1];
    if (!page) {
      card.querySelector(".real-pdf-loading").textContent = "Belge sayfası yüklenemedi.";
      continue;
    }
    card.innerHTML = `
      <div class="page-number">Sayfa ${pageNumber}</div>
      <div class="preview-document-text">${escapeHtml(page.body)}</div>
      <div class="document-continuation">… Sayfanın devamı var; tamamı satın alınca görüntülenir.</div>
      <div class="watermark">Notum önizleme</div>
    `;
    markDocumentPreviewOverflow(card);
  }
}

function markDocumentPreviewOverflow(root = document) {
  const cards = [
    ...(root.matches?.(".document-preview-page") ? [root] : []),
    ...root.querySelectorAll(".document-preview-page")
  ];
  cards.forEach((card) => {
    const text = card.querySelector(".preview-document-text");
    const continuation = card.querySelector(".document-continuation");
    const hasOverflow = text && text.scrollHeight > text.clientHeight + 1;
    card.classList.toggle("has-continuation", Boolean(hasOverflow));
    if (continuation) continuation.hidden = !hasOverflow;
  });
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
  if (["DOCX", "PPTX", "TXT"].includes(fileType)) await renderOfficeUploadPages(file, viewer, fileType);

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
      ${["DOCX", "PPTX", "TXT"].includes(type) ? `<div class="upload-document-continuation" hidden>… Sayfanın devamı var</div>` : ""}
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
    slot.innerHTML = page.plainText
      ? `<div class="preview-document-text">${escapeHtml(page.body)}</div>`
      : `<strong>${escapeHtml(page.title)}</strong><p>${escapeHtml(page.body)}</p>${page.bullets.length ? `<ul>${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}`;
    const continuation = slot.parentElement.querySelector(".upload-document-continuation");
    const text = slot.querySelector(".preview-document-text");
    if (continuation) continuation.hidden = !text || text.scrollHeight <= text.clientHeight + 1;
  });
}

async function extractPreviewPagesFromFile(file, type = detectFileType(file.name)) {
  const key = `${file.name}-${file.size}-${file.lastModified}-${type}`;
  if (officePreviewCache.has(key)) return officePreviewCache.get(key);
  let pages = [];
  if (type === "TXT") pages = textToPreviewPages(await file.text());
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
  const pages = [[]];
  let hasPageBreaks = false;
  const appendNodeText = (node, paragraph) => {
    if (node.nodeType === Node.TEXT_NODE) {
      paragraph.push(node.textContent || "");
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const name = node.localName;
    if (name === "lastRenderedPageBreak" || (name === "br" && node.getAttribute("type") === "page")) {
      pages[pages.length - 1].push(paragraph.join(""));
      paragraph.length = 0;
      pages.push([]);
      hasPageBreaks = true;
      return;
    }
    if (name === "br") {
      paragraph.push("\n");
      return;
    }
    if (name === "tab") {
      paragraph.push("\t");
      return;
    }
    node.childNodes.forEach((child) => appendNodeText(child, paragraph));
  };

  [...doc.getElementsByTagName("w:p")].forEach((element) => {
    const paragraph = [];
    element.childNodes.forEach((child) => appendNodeText(child, paragraph));
    const text = paragraph.join("").trim();
    if (text) pages[pages.length - 1].push(text);
  });

  const textPages = hasPageBreaks
    ? pages.flatMap((paragraphs) => paginateDocumentParagraphs(paragraphs))
    : paginateDocumentParagraphs(pages[0]);
  return textPages.map((body) => ({ title: "", body, bullets: [], plainText: true }));
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
      title: "",
      body: texts.join("\n\n") || `Slayt ${index + 1}`,
      bullets: [],
      plainText: true
    });
  }
  return pages;
}

function textToPreviewPages(text) {
  return paginateDocumentParagraphs(text.split(/\r?\n/))
    .map((body) => ({ title: "", body, bullets: [], plainText: true }));
}

function paginateDocumentParagraphs(paragraphs) {
  const maxColumns = 52;
  const maxLinesPerPage = 47;
  const pages = [];
  let page = [];
  let usedLines = 0;

  paragraphs.map((paragraph) => String(paragraph || "").trim()).filter(Boolean).forEach((paragraph) => {
    const lines = wrapText(paragraph, maxColumns);
    let offset = 0;
    while (offset < lines.length) {
      if (usedLines === maxLinesPerPage) {
        pages.push(page.join("\n\n"));
        page = [];
        usedLines = 0;
      }
      const remaining = maxLinesPerPage - usedLines;
      const part = lines.slice(offset, offset + remaining);
      page.push(part.join("\n"));
      usedLines += part.length;
      offset += part.length;
      if (offset < lines.length) {
        pages.push(page.join("\n\n"));
        page = [];
        usedLines = 0;
      }
    }
  });
  if (page.length) pages.push(page.join("\n\n"));
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

async function hydrateSupabaseState() {
  if (!window.NotumSupabase?.isConfigured) return;
  try {
    state = normalizeState(await window.NotumSupabase.loadState(state));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Supabase load failed", error);
    alert("Supabase baglantisi kurulamadı. Uygulama yerel demo verisiyle acildi.");
  }
}

async function login(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get("email").trim();
  const password = data.get("password");

  if (window.NotumSupabase?.isConfigured) {
    if (email.toLocaleLowerCase("tr") === "admin@notum.test") {
      alert("admin@notum.test yalnızca yerel demo hesabıdır. Supabase admin hesabının e-postası ve şifresiyle giriş yapın.");
      return;
    }
    try {
      state = normalizeState(await window.NotumSupabase.login(email, password, state));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      navigate({ page: "home" });
    } catch (error) {
      alert(error.message || "E-posta veya sifre hatali.");
    }
    return;
  }

  const localUser = state.users.find((item) => item.email === email && item.password === password);
  if (localUser) {
    state.currentUserId = localUser.id;
    saveState();
    navigate({ page: "home" });
    return;
  }

  alert("E-posta veya şifre hatalı.");
}

async function register(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get("email").trim();
  if (!isStudentEmail(email)) {
    alert("Kayit icin @ sonrasinda edu uzantili bir ogrenci e-postasi kullanmalisin.");
    return;
  }
  if (window.NotumSupabase?.isConfigured) {
    try {
      const nextState = await window.NotumSupabase.register(
        {
          name: data.get("name").trim(),
          email,
          password: data.get("password"),
          legalAcceptances: makeLegalAcceptanceRecords("", ["privacy_notice", "terms_of_use"])
        },
        state
      );
      state = normalizeState(nextState);
      if (currentUser()) {
        state.legalAcceptances.push(...makeLegalAcceptanceRecords(currentUser().id, ["privacy_notice", "terms_of_use"]));
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      if (nextState.pendingEmailVerification) {
        alert("Hesap olustu. Giris yapmadan once e-postana gelen dogrulama linkine tikla.");
        navigate({ page: "auth" });
        return;
      }
      navigate({ page: "home" });
    } catch (error) {
      alert(error.message || "Hesap olusturulamadi.");
    }
    return;
  }
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
  state.legalAcceptances.push(...makeLegalAcceptanceRecords(user.id, ["privacy_notice", "terms_of_use"]));
  saveState();
  navigate({ page: "home" });
}

async function upload(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();
  const form = event?.currentTarget instanceof HTMLFormElement
    ? event.currentTarget
    : event?.target instanceof HTMLFormElement
      ? event.target
      : document.querySelector('[data-action="upload"]');

  if (!(form instanceof HTMLFormElement)) {
    console.warn("Upload çagrisi form olmadan yapildi.", event);
    return;
  }

  const user = currentUser();
  if (window.NotumSupabase?.isConfigured && !user?.eduVerified) {
    alert("Materyal yuklemek icin dogrulanmis .edu.tr ogrenci e-postasi gerekiyor.");
    return;
  }
  if (window.NotumSupabase?.isConfigured && !(await window.NotumSupabase.isAuthenticated?.())) {
    alert("Supabase oturumu aktif değil. Lütfen tekrar giriş yapın.");
    return;
  }
  const data = new FormData(form);
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
  try {
    await saveLegalAcceptances(user, ["seller_agreement"]);
  } catch (error) {
    alert(error.message || "Satıcı sözleşmesi onayı kaydedilemedi. Not yayınlanmadı.");
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
    materialType: "note",
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
    status: window.NotumSupabase?.isConfigured ? "pending" : "approved",
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
  if (event && typeof event.preventDefault === "function") event.preventDefault();
  const form = event?.currentTarget instanceof HTMLFormElement
    ? event.currentTarget
    : event?.target instanceof HTMLFormElement
      ? event.target
      : document.querySelector('[data-action="edit-note"]');
  if (!(form instanceof HTMLFormElement)) {
    console.warn("Edit note çağrısı form olmadan yapildi.", event);
    return;
  }
  const user = currentUser();
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
    storedOfficePreviewCache.delete(note.id);
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

async function checkout() {
  const user = currentUser();
  if (!user) {
    navigate({ page: "auth" });
    return;
  }
  const checkoutConsents = [...document.querySelectorAll("[data-legal-checkout]")];
  if (checkoutConsents.some((checkbox) => !checkbox.checked)) {
    alert("Devam etmek için alıcı bilgilendirmesi ve dijital içeriğe ilişkin onayları vermen gerekiyor.");
    return;
  }
  const isMock = Boolean(document.querySelector("[data-mock-payment]")?.checked);
  if (isMock && !state.platformSettings?.mockPaymentsEnabled) {
    alert("Mock ödemeler şu anda admin tarafından kapalı.");
    return;
  }
  const settings = state.platformSettings || {};
  if (!isMock && !(settings.bankName && settings.iban && settings.accountHolder)) {
    alert("Gerçek ödeme siparişi için adminin banka bilgilerini tamamlaması gerekiyor.");
    return;
  }
  const noteIds = [...state.cart];
  const existingOrder = state.purchases.find((purchase) =>
    purchase.buyerId === user.id && noteIds.includes(purchase.noteId)
  );
  if (existingOrder) {
    alert("Bu not için zaten bir sipariş var. Panelim bölümünden ödeme durumunu veya dekontu kontrol et.");
    navigate({ page: "student" });
    return;
  }
  try {
    await saveLegalAcceptances(user, ["buyer_preinfo", "distance_sale_contract", "digital_content_immediate"]);
  } catch (error) {
    alert(error.message || "Alıcı onayları kaydedilemedi. Sipariş oluşturulmadı.");
    return;
  }
  const createdNoteIds = [];
  const skippedNoteIds = [];
  try {
    for (const noteId of noteIds) {
      const note = state.notes.find((item) => item.id === noteId);
      if (!note || note.status !== "approved") {
        skippedNoteIds.push(noteId);
        continue;
      }
      const purchaseId = id("p");
      const purchase = {
        id: purchaseId,
        buyerId: user.id,
        noteId,
        amount: note.price,
        paymentStatus: "pending_payment",
        receiptPath: "",
        isMock,
        createdAt: new Date().toISOString(),
        downloadToken: `DL-${crypto.randomUUID().replace(/-/g, "").slice(0, 10).toUpperCase()}`
      };
      const saved = window.NotumSupabase?.isConfigured
        ? await window.NotumSupabase.createPurchase(purchase)
        : purchase;
      state.purchases.push(saved);
      createdNoteIds.push(noteId);
    }
  } catch (error) {
    if (window.NotumSupabase?.isConfigured) {
      try {
        state = normalizeState(await window.NotumSupabase.loadState(state));
      } catch (refreshError) {
        console.error("Failed to refresh purchases after checkout error", refreshError);
      }
    }
    state.cart = state.cart.filter((noteId) => !createdNoteIds.includes(noteId) && !skippedNoteIds.includes(noteId));
    saveState();
    alert(error.message || "Sipariş oluşturulamadı. Ödeme ayarlarını ve Supabase şemasını kontrol edin.");
    if (createdNoteIds.length) navigate({ page: "student" });
    return;
  }
  state.cart = state.cart.filter((noteId) => !createdNoteIds.includes(noteId));
  saveState();
  navigate({ page: "student" });
}

async function submitPaymentReceipt(event) {
  event.preventDefault();
  const purchaseId = event.currentTarget.dataset.purchase;
  const formData = new FormData(event.currentTarget);
  const queryNumber = String(formData.get("queryNumber") || "").trim();
  const purchase = state.purchases.find((item) => item.id === purchaseId);
  const canRetry = purchase && ["pending_payment", "rejected"].includes(purchase.paymentStatus);
  if (!purchase || !canRetry) {
    alert("Bu sipariş şu anda sorgu numarası kabul etmiyor.");
    return;
  }
  const normalizedQuery = queryNumber.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  if (!normalizedQuery) {
    alert("Sorgu numarası boş olamaz.");
    return;
  }

  const submitButton = event.currentTarget.querySelector('[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Gmail kontrol ediliyor…";
  }

  try {
    const verification = await window.NotumSupabase?.verifyPaymentQuery?.(purchaseId, normalizedQuery);
    if (!verification) {
      throw new Error("Gmail ile ödeme kontrolü için siteye Supabase hesabınızla giriş yapın.");
    }
    const updated = {
      ...purchase,
      queryNumber: normalizedQuery,
      paymentStatus: verification.paymentStatus,
      receiptCheckStatus: verification.matched ? "matched" : "mismatch",
      receiptDetectedReference: normalizedQuery,
      receiptDetectedAmount: verification.detectedAmount ?? null,
      receiptDetectedDescription: verification.matched
        ? "Sorgu numarası ve tutar VakıfBank e-postasıyla eşleşti."
        : "Bugün gelen VakıfBank e-postalarında aynı sorgu numarası ve tutar bulunamadı.",
      reviewedAt: verification.matched ? new Date().toISOString() : ""
    };
    if (verification.matched) applyConfirmedPurchaseLocally(updated);
    state.purchases = state.purchases.map((item) => item.id === purchaseId ? updated : item);
    saveState();
    render();
    alert(verification.matched
      ? "Ödeme doğrulandı. Not artık indirilebilir."
      : "Bugünkü VakıfBank maillerinde sorgu numarası ve tutar eşleşmedi. E-postadaki numarayı kontrol edip tekrar deneyin.");
  } catch (error) {
    console.error("Payment query submission failed", { purchaseId, error });
    alert(error.message || "Sorgu numarası kaydedilemedi.");
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Sorgu numarasını gönder";
    }
  }
}

async function sendPaymentReceipt(purchaseId, file, submitButton) {
  const purchase = state.purchases.find((item) => item.id === purchaseId);
  const canReplaceMockReceipt = purchase?.isMock && purchase.paymentStatus === "pending_review";
  if (!purchase || (!["pending_payment", "rejected"].includes(purchase.paymentStatus) && !canReplaceMockReceipt)) {
    alert("Bu sipariş şu anda dekont kabul etmiyor.");
    return;
  }
  if (!(file instanceof File) || !["application/pdf", "image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    alert("Dekont PDF, JPG, PNG veya WEBP olmalı.");
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    alert("Dekont dosyası en fazla 8 MB olabilir.");
    return;
  }
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Dekont taranıyor…";
  }
  try {
    const receiptCheck = await analyzeReceipt(file, purchase);
    let updated;
    if (window.NotumSupabase?.isConfigured) {
      updated = await window.NotumSupabase.uploadPaymentReceipt(purchase.id, file, receiptCheck, purchase.receiptPath);
    } else {
      await storeLocalPaymentReceipt(purchase.id, file);
      updated = {
        ...purchase,
        receiptPath: `local/${purchase.id}`,
        paymentStatus: "pending_review",
        receiptCheckStatus: receiptCheck.status,
        receiptDetectedReference: receiptCheck.detectedReference,
        receiptDetectedAmount: receiptCheck.detectedAmount,
        receiptDetectedDescription: receiptCheck.detectedDescription
      };
    }
    state.purchases = state.purchases.map((item) => item.id === updated.id ? updated : item);
    saveState();
    render();
  } catch (error) {
    console.error("Payment receipt upload failed", { purchaseId, error });
    alert(error.message || "Dekont gönderilemedi.");
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Dekontu kontrol et ve gönder";
    }
  }
}

async function analyzeReceipt(file, purchase) {
  let pdfText = "";
  let pdfTextCheck = null;
  let pdf = null;
  if (file.type === "application/pdf") {
    if (!window.pdfjsLib) throw new Error("PDF kontrol aracı yüklenemedi. Sayfayı yenileyip tekrar deneyin.");
    pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      pdfText += `${pdfTextLines(content.items)}\n`;
    }
    if (pdfText.trim()) {
      pdfTextCheck = receiptTextCheck(pdfText, purchase);
      if (pdfTextCheck.status === "matched" && pdfTextCheck.detectedDescription) return pdfTextCheck;
    }
  }

  if (!window.Tesseract?.createWorker) {
    if (pdfTextCheck) return pdfTextCheck;
    throw new Error("Tarayıcı OCR aracı yüklenemedi. Sayfayı yenileyip tekrar deneyin.");
  }
  const worker = await window.Tesseract.createWorker("tur+eng");
  try {
    if (pdf) {
      let ocrText = "";
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const context = canvas.getContext("2d", { alpha: false });
        if (!context) throw new Error("PDF sayfası OCR için hazırlanamadı.");
        await page.render({ canvasContext: context, viewport }).promise;
        const result = await worker.recognize(canvas);
        ocrText += `\n${result.data.text}`;
        canvas.width = 0;
        canvas.height = 0;
      }
      const ocrCheck = receiptTextCheck(ocrText, purchase);
      if (ocrCheck.status === "matched" && ocrCheck.detectedDescription) return ocrCheck;
      return pdfTextCheck ? mergeReceiptChecks(pdfTextCheck, ocrCheck, purchase) : ocrCheck;
    } else {
      const result = await worker.recognize(file);
      return receiptTextCheck(result.data.text, purchase);
    }
  } finally {
    await worker.terminate();
  }
}

function mergeReceiptChecks(textCheck, ocrCheck, purchase) {
  const reference = [ocrCheck.detectedReference, textCheck.detectedReference]
    .find((value) => normalizeReceiptReference(value) === normalizeReceiptReference(purchase.referenceCode))
    || ocrCheck.detectedReference
    || textCheck.detectedReference
    || "";
  const amount = [ocrCheck.detectedAmount, textCheck.detectedAmount]
    .find((value) => value !== null && value !== undefined
      && Math.round(Number(value) * 100) === Math.round(Number(purchase.amount) * 100))
    ?? ocrCheck.detectedAmount
    ?? textCheck.detectedAmount
    ?? null;
  const referenceMatched = normalizeReceiptReference(reference) === normalizeReceiptReference(purchase.referenceCode);
  const amountMatched = amount !== null && Math.round(Number(amount) * 100) === Math.round(Number(purchase.amount) * 100);
  return {
    status: referenceMatched && amountMatched ? "matched" : reference || amount !== null ? "mismatch" : "unreadable",
    detectedReference: reference,
    detectedAmount: amount,
    detectedDescription: ocrCheck.detectedDescription || textCheck.detectedDescription
  };
}

function receiptTextCheck(text, purchase) {
  const normalized = normalizeReceiptReference(text);
  const reference = normalizeReceiptReference(purchase.referenceCode || "");
  const referenceMatched = Boolean(reference && normalized.includes(reference));
  const amountCents = Math.round(Number(purchase.amount) * 100);
  const amounts = receiptAmounts(text);
  const detectedAmount = amounts.find((amount) => amount === amountCents);
  const detectedReference = referenceMatched
    ? purchase.referenceCode
    : text.match(/NTM[\s._-]*\d{8}[\s._-]*[A-Z0-9]{12,20}/i)?.[0]?.trim() || "";
  return {
    status: referenceMatched && detectedAmount !== undefined ? "matched" : text.trim() ? "mismatch" : "unreadable",
    detectedReference,
    detectedAmount: detectedAmount !== undefined ? detectedAmount / 100 : amounts.length ? amounts[0] / 100 : null,
    detectedDescription: receiptDescription(text)
  };
}

function pdfTextLines(items) {
  const rows = [];
  items
    .filter((item) => "str" in item && item.str.trim())
    .sort((first, second) => second.transform[5] - first.transform[5] || first.transform[4] - second.transform[4])
    .forEach((item) => {
      const y = item.transform[5];
      let row = rows.find((candidate) => Math.abs(candidate.y - y) < 3);
      if (!row) {
        row = { y, parts: [] };
        rows.push(row);
      }
      row.parts.push({ x: item.transform[4], text: item.str.trim() });
    });
  return rows
    .sort((first, second) => second.y - first.y)
    .map((row) => row.parts.sort((first, second) => first.x - second.x).map((part) => part.text).join(" "))
    .join("\n");
}

function receiptDescription(text) {
  const lines = String(text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const labelPattern = /(?:işlem|islem|transfer|eft|havale|ödeme|odeme)?\s*(?:açıklama(?:sı)?|aciklama(?:si)?|description)\s*[:\-]?\s*(.*)$/iu;
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(labelPattern);
    if (!match) continue;
    const description = match[1].trim() || lines[index + 1] || "";
    return description.slice(0, 500);
  }
  return "";
}

function normalizeReceiptReference(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function receiptAmounts(text) {
  const values = new Map();
  const numberPattern = /\d{1,3}(?:[., ]\d{3})*[.,]\d{2}|\d{1,3}(?:[., ]\d{3})+|\d+(?:[.,]\d{2})|\d+/g;
  for (const match of String(text || "").matchAll(numberPattern)) {
    const token = match[0].replace(/\s/g, "");
    const lastComma = token.lastIndexOf(",");
    const lastDot = token.lastIndexOf(".");
    let normalized = token;
    if (lastComma >= 0 && lastDot >= 0) {
      const decimalSeparator = lastComma > lastDot ? "," : ".";
      normalized = decimalSeparator === ","
        ? token.replace(/\./g, "").replace(",", ".")
        : token.replace(/,/g, "");
    } else if (lastComma >= 0 || lastDot >= 0) {
      const separator = lastComma >= 0 ? "," : ".";
      const digitsAfterSeparator = token.length - token.lastIndexOf(separator) - 1;
      normalized = digitsAfterSeparator === 2
        ? token.replace(separator, ".")
        : token.replace(/[,.]/g, "");
    }
    const amount = Number(normalized);
    if (Number.isFinite(amount) && amount >= 0) {
      const context = String(text).slice(Math.max(0, match.index - 24), match.index + match[0].length + 16);
      const score = (/(?:₺|\bTRY\b|\bTL\b)/i.test(context) ? 4 : 0)
        + (/(?:tutar|amount|toplam|transfer|gönderilen|miktar)/i.test(context) ? 2 : 0)
        + (/[,.]\d{2}$/.test(token) ? 1 : 0);
      const cents = Math.round(amount * 100);
      values.set(cents, Math.max(values.get(cents) || 0, score));
    }
  }
  return [...values.entries()].sort((first, second) => second[1] - first[1]).map(([amount]) => amount);
}

async function createMockReceipt(button) {
  const purchase = state.purchases.find((item) => item.id === button.dataset.mockReceipt);
  if (!purchase?.isMock || !state.platformSettings?.mockPaymentsEnabled) {
    alert("Mock dekont yalnızca mock test siparişinde oluşturulabilir.");
    return;
  }
  if (!window.jspdf?.jsPDF) {
    alert("Örnek dekont oluşturulamadı. PDF aracı yüklenmemiş.");
    return;
  }
  const file = createMockReceiptFile(purchase, button.dataset.mockResult);
  await sendPaymentReceipt(purchase.id, file);
}

function createMockReceiptFile(purchase, result) {
  const isCorrect = result === "correct";
  const wrongReference = purchase.referenceCode.replace(/([A-F0-9])$/i, (last) => (last === "0" ? "1" : "0"));
  const displayedReference = isCorrect ? purchase.referenceCode : wrongReference;
  const displayedAmount = isCorrect ? Number(purchase.amount) : Number(purchase.amount) + 1;
  const description = isCorrect
    ? `${purchase.referenceCode} Notum siparis odemesi`
    : `${wrongReference} Baska siparis icin odeme`;
  const pdf = new window.jspdf.jsPDF();
  pdf.setFontSize(18);
  pdf.text("NOTUM MOCK TEST - BANKA DEKONTU DEGILDIR", 18, 24);
  pdf.setFontSize(12);
  pdf.text(`Description: ${description}`, 18, 44);
  pdf.text(`Referans: ${displayedReference}`, 18, 58);
  pdf.text(`Tutar: ${displayedAmount.toFixed(2)} TRY`, 18, 72);
  pdf.text(isCorrect ? "Test türü: dogru referans ve tutar" : "Test türü: hatali referans ve tutar", 18, 88);
  const testName = isCorrect ? "DOGRU" : "YANLIS";
  return new File([pdf.output("blob")], `${purchase.referenceCode}-MOCK-${testName}.pdf`, { type: "application/pdf" });
}

async function viewPaymentReceipt(button) {
  const purchase = state.purchases.find((item) => item.id === button.dataset.viewReceipt);
  if (!purchase?.receiptPath) {
    alert("Bu sipariş için dekont bulunmuyor.");
    return;
  }
  const receiptWindow = window.open("about:blank", "_blank");
  if (!receiptWindow) {
    alert("Dekontu görüntülemek için açılır pencereye izin verin.");
    return;
  }
  receiptWindow.opener = null;
  try {
    let url;
    if (purchase.receiptPath.startsWith("local/")) {
      const file = await getLocalPaymentReceipt(purchase.id);
      if (!file) throw new Error("Yerel dekont dosyası bulunamadı.");
      url = URL.createObjectURL(file);
      receiptWindow.location.href = url;
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } else {
      url = await window.NotumSupabase.getPaymentReceiptUrl(purchase.id, purchase.receiptPath);
      receiptWindow.location.href = url;
    }
  } catch (error) {
    receiptWindow.close();
    alert(error.message || "Dekont açılamadı.");
  }
}

async function reviewPayment(purchaseId, decision) {
  const purchase = state.purchases.find((item) => item.id === purchaseId);
  if (!purchase || purchase.paymentStatus !== "pending_review") return;
  if (decision === "approve" && purchase.isMock && !state.platformSettings?.mockPaymentsEnabled) {
    alert("Mock ödeme ayarı kapalı. Bu sipariş onaylanamaz.");
    return;
  }
  if (decision === "approve") {
    const amount = money(purchase.amount);
    const message = purchase.isMock
      ? `Bu sipariş MOCK TEST'tir; gerçek ödeme değildir. ${amount} tutarını mock olarak onaylamak istiyor musun?`
      : `Bu ${amount} tutarındaki ödemeyi onaylamak istiyor musun? Onaydan sonra not indirilebilir olacak.`;
    if (!confirm(message)) return;
  }
  if (decision === "reject" && !confirm("Bu dekontu reddetmek istiyor musun?")) return;
  const paymentStatus = decision === "reject" ? "rejected" : purchase.isMock ? "mock_paid" : "paid";
  try {
    const updated = window.NotumSupabase?.isConfigured
      ? await window.NotumSupabase.reviewPurchase(purchase.id, paymentStatus)
      : { ...purchase, paymentStatus, reviewedAt: new Date().toISOString() };
    if (["paid", "mock_paid"].includes(updated.paymentStatus) && !["paid", "mock_paid"].includes(purchase.paymentStatus)) {
      applyConfirmedPurchaseLocally(updated);
    }
    state.purchases = state.purchases.map((item) => item.id === updated.id ? updated : item);
    saveState();
    render();
  } catch (error) {
    alert(error.message || "Ödeme durumu güncellenemedi.");
  }
}

function applyConfirmedPurchaseLocally(updated) {
  const note = state.notes.find((item) => item.id === updated.noteId);
  if (note) note.sales = Math.max(Number(note.sales) || 0, confirmedPurchases(note.id).length + 1);

  const sellerId = note?.sellerId;
  if (!sellerId) return;
  const summary = state.sellerSalesSummaries.find((item) => item.noteId === note.id);
  if (summary) {
    summary.salesCount = Math.max(Number(summary.salesCount) || 0, confirmedPurchases(note.id).length + 1);
    summary.grossSales = (Number(summary.grossSales) || 0) + Number(updated.amount || 0);
    summary.dueAmount = (Number(summary.dueAmount) || 0) + Number(updated.amount || 0) * 0.8;
    return;
  }
  state.sellerSalesSummaries.push({
    sellerId,
    noteId: note.id,
    salesCount: confirmedPurchases(note.id).length + 1,
    grossSales: Number(updated.amount || 0),
    dueAmount: Number(updated.amount || 0) * 0.8
  });
}

async function saveSellerPaymentProfile(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user) return;
  const data = new FormData(event.currentTarget);
  const details = {
    userId: user.id,
    bankName: String(data.get("bankName") || "").trim(),
    accountHolder: String(data.get("accountHolder") || "").trim(),
    iban: String(data.get("iban") || "").replace(/\s+/g, "").toUpperCase()
  };
  if (details.iban.length < 15 || details.iban.length > 34) {
    alert("IBAN uzunluğunu kontrol edin.");
    return;
  }
  try {
    await window.NotumSupabase?.saveSellerPaymentDetails?.(details);
    state.sellerPaymentProfiles = [
      ...state.sellerPaymentProfiles.filter((item) => item.userId !== user.id),
      details
    ];
    saveState();
    profilePanel = "overview";
    render();
  } catch (error) {
    alert(error.message || "Ödeme bilgileri kaydedilemedi.");
  }
}

async function savePlatformSettings(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const settings = {
    bankName: String(data.get("bankName") || "").trim(),
    accountHolder: String(data.get("accountHolder") || "").trim(),
    iban: String(data.get("iban") || "").replace(/\s+/g, "").toUpperCase(),
    payoutWeekday: String(data.get("payoutWeekday") || "Friday"),
    mockPaymentsEnabled: data.get("mockPaymentsEnabled") === "on"
  };
  if (settings.iban.length < 15 || settings.iban.length > 34) {
    alert("IBAN uzunluğunu kontrol edin.");
    return;
  }
  try {
    if (window.NotumSupabase?.isConfigured) {
      Object.assign(settings, await window.NotumSupabase.updatePlatformSettings(settings));
    }
    state.platformSettings = settings;
    saveState();
    alert("Ödeme ayarları kaydedildi.");
    render();
  } catch (error) {
    alert(error.message || "Ödeme ayarları kaydedilemedi.");
  }
}

async function recordSellerPayout(sellerId) {
  const { duePurchases, actualDue } = sellerPayoutAmounts(sellerId);
  if (!duePurchases.length || actualDue <= 0) {
    alert("Bu satıcı için ödenecek tutar bulunmuyor.");
    return;
  }
  const user = state.users.find((item) => item.id === sellerId);
  if (!confirm(`${user?.name || "Satıcı"} için ${money(actualDue)} tutarındaki GERÇEK havaleyi yaptın mı? Mock satışlar bu tutara dahil değildir.`)) return;
  try {
    const payout = window.NotumSupabase?.isConfigured
      ? await window.NotumSupabase.recordSellerPayout(sellerId, duePurchases.map((purchase) => purchase.id))
      : {
        id: id("pay"),
        sellerId,
        amount: Math.round(actualDue * 100) / 100,
        purchaseIds: duePurchases.map((purchase) => purchase.id),
        paidAt: new Date().toISOString(),
        adminNote: ""
      };
    state.sellerPayouts.push(payout);
    for (const summary of state.sellerSalesSummaries.filter((item) => item.sellerId === sellerId)) {
      const includedAmount = duePurchases
        .filter((purchase) => purchase.noteId === summary.noteId)
        .reduce((sum, purchase) => sum + Number(purchase.amount || 0) * 0.8, 0);
      summary.dueAmount = Math.max(0, Number(summary.dueAmount || 0) - includedAmount);
    }
    saveState();
    render();
  } catch (error) {
    alert(error.message || "Satıcı ödemesi kaydedilemedi.");
  }
}
function toggleFavorite(button) {
  const user = currentUser();
  if (!user) return;
  const noteId = button.dataset.favorite;
  const exists = isFavorite(noteId);
  state.favorites = exists
    ? state.favorites.filter((favorite) => !(favorite.userId === user.id && favorite.noteId === noteId))
    : [...state.favorites, { userId: user.id, noteId }];
  const isNowFavorite = !exists;
  button.classList.toggle("active", isNowFavorite);
  button.textContent = isNowFavorite ? "♥" : "♡";
  button.setAttribute("aria-pressed", String(isNowFavorite));
  button.setAttribute("aria-label", isNowFavorite ? "Favorilerden kaldır" : "Favorilere ekle");
  saveState();
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
  const purchase = state.purchases.find((item) =>
    item.buyerId === user?.id
    && item.noteId === noteId
    && ["paid", "mock_paid"].includes(item.paymentStatus)
  );
  if (!user || !purchase) {
    alert("Notu indirmek için admin tarafından onaylanmış bir ödeme gerekir.");
    return;
  }
  if (hasOriginalFile(note)) {
    const dataUrl = note.fileData || (await getUploadedFile(note.id));
    if (!dataUrl) {
      alert("Orijinal dosya tarayıcı deposunda bulunamadı. Notu tekrar yüklemeyi deneyebilirsin.");
      return;
    }
    downloadDataUrl(note.fileName, dataUrl);
    return;
  }

  await downloadGeneratedFile(note, "", "PDF", "notum-dosya");
}

function selectedDownloadFormat() {
  return "PDF";
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

async function storeLocalPaymentReceipt(purchaseId, file) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(file, `receipt:${purchaseId}`);
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

async function getLocalPaymentReceipt(purchaseId) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const request = tx.objectStore("files").get(`receipt:${purchaseId}`);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
  });
}

async function saveUploadedFile(noteId, dataUrl) {
  if (window.NotumSupabase?.isConfigured) {
    const saved = await window.NotumSupabase.saveUploadedFile(noteId, dataUrl);
    if (saved) return;
  }
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
  if (window.NotumSupabase?.isConfigured) {
    const remoteFile = await window.NotumSupabase.getUploadedFile(noteId);
    if (remoteFile) return remoteFile;
  }
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
  if (!window.jspdf?.jsPDF) {
    throw new Error("PDF üretimi için jsPDF yüklenemedi.");
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  const pushBlock = (lines, options = {}) => {
    const { size = 11, bold = false, color = [28, 34, 40] } = options;
    if (!lines.length) return;
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    lines.forEach((line) => {
      if (y > pageHeight - margin - size) {
        doc.addPage();
        y = margin;
      }
      const wrapped = doc.splitTextToSize(line || "", maxWidth);
      wrapped.forEach((part) => {
        if (y > pageHeight - margin - size) {
          doc.addPage();
          y = margin;
        }
        doc.text(part, margin, y);
        y += size * 1.35;
      });
    });
    y += 10;
  };

  pushBlock([note.title], { size: 20, bold: true, color: [36, 48, 47] });
  pushBlock([
    `Ders: ${note.course}`,
    `Üniversite: ${note.university}`,
    `Hoca: ${note.instructor}`,
    `Satıcı: ${sellerName(note)}`
  ], { size: 10, color: [76, 90, 98] });

  const pages = downloadPages(note);
  pages.forEach((page, index) => {
    pushBlock([`Sayfa ${index + 1}`], { size: 12, bold: true, color: [194, 106, 58] });
    pushBlock([page.title], { size: 16, bold: true, color: [36, 48, 47] });
    pushBlock(doc.splitTextToSize(page.body || "", maxWidth), { size: 11, color: [28, 34, 40] });
    if (page.bullets && page.bullets.length) {
      page.bullets.forEach((item) => {
        pushBlock([`• ${item}`], { size: 11, color: [28, 34, 40] });
      });
    }
    if (page.callout) {
      pushBlock([page.callout], { size: 11, bold: true, color: [26, 79, 74] });
    }
  });

  if (watermark) {
    doc.setTextColor(36, 48, 47);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text(watermark, pageWidth / 2, pageHeight / 2, { angle: -28, align: "center" });
  }

  return doc.output("blob");
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

async function moderateNote(noteId, status) {
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return;
  if (window.NotumSupabase?.isConfigured) {
    try {
      await window.NotumSupabase.updateNoteStatus(noteId, status);
    } catch (error) {
      console.error("Not durumu Supabase'e kaydedilemedi", { noteId, status, error });
      alert(error.message || "Not durumu kaydedilemedi. Lütfen tekrar deneyin.");
      return;
    }
  }
  note.status = status;
  saveState();
  render();
}

async function deleteNote(noteId) {
  if (!confirm("Bu not silinsin mi?")) return;
  try {
    if (window.NotumSupabase?.isConfigured) {
      await window.NotumSupabase.deleteNote?.(noteId);
    }
  } catch (error) {
    console.error("Not silme Supabase hatası", error);
    alert(error.message || "Not silinemedi. Lütfen tekrar deneyin.");
    return;
  }
  removeNote(noteId);
  saveState();
  render();
}

async function adminDeleteNote(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return;
  if (!confirm(`"${note.title}" notu silinsin mi? Bu işlem notun yorumlarını, favorilerini, satın alma kayıtlarını ve şikayetlerini de kaldırır.`)) return;
  try {
    if (window.NotumSupabase?.isConfigured) {
      await window.NotumSupabase.deleteNote?.(noteId);
    }
  } catch (error) {
    console.error("Admin not silme Supabase hatası", error);
    alert(error.message || "Not silinemedi. Lütfen tekrar deneyin.");
    return;
  }
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

function readProfileImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function saveProfile(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user) return;
  const data = new FormData(event.currentTarget);
  const email = data.get("email").trim();
  if (!canUseProfileEmail(email, user?.role)) {
    alert("Admin disindaki hesaplarda edu uzantili ogrenci e-postasi kullanilmali.");
    return;
  }
  const updatedUser = {
    ...user,
    name: data.get("name").trim(),
    email,
    university: data.get("university").trim(),
    department: data.get("department").trim(),
    bio: data.get("bio")?.trim() || user.bio
  };
  const avatar = data.get("avatar");
  if (data.get("removeAvatar")) updatedUser.avatarData = "";
  if (avatar instanceof File && avatar.size) updatedUser.avatarData = await readProfileImage(avatar);
  updatedUser.eduVerified = isStudentEmail(updatedUser.email) && updatedUser.emailVerified;
  try {
    await window.NotumSupabase?.saveProfile?.(updatedUser);
  } catch (error) {
    alert(error.message || "Profil Supabase'e kaydedilemedi.");
    return;
  }
  Object.assign(user, updatedUser);
  profilePanel = "overview";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

async function logout() {
  if (window.NotumSupabase?.isConfigured) await window.NotumSupabase.logout();
  state.currentUserId = null;
  state.cart = [];
  saveState();
  navigate({ page: "home" });
}

hydrateSupabaseState()
  .finally(() => {
    render();
    loadProgramCatalog().finally(() => {
      normalizeDemoCatalogFields();
      render();
    });
  });
