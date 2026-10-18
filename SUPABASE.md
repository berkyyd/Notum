# Notum Supabase Kurulumu

Supabase baglantisi bosken uygulama yerel demo modunda calisir. Yeni Supabase projenle calismasi icin:

1. Supabase panelinde `SQL Editor` ac ve `supabase/schema.sql` dosyasinin tamamini calistir.
   Mevcut bir projede Storage RLS hatasi aliyorsan, bu dosyadaki guncel policy'leri uygulamak icin SQL dosyasini tekrar calistir.
2. `Authentication > Providers > Email` bolumunde Email provider'i acik tut.
3. `Authentication > URL Configuration` icinde site URL olarak yerelde `http://localhost:4173`, yayinda kendi domainini ekle.
4. `Project Settings > API` sayfasindan `Project URL` ve `anon public` key degerlerini al.
5. `src/supabase-config.js` dosyasina bu iki degeri yaz:

```js
window.NOTUM_SUPABASE = {
  url: "https://PROJE_REF.supabase.co",
  anonKey: "SUPABASE_ANON_KEY"
};
```

6. `Project Settings > API` sayfasindan `service_role` key degerini sadece yerel terminalde kullanarak katalogu yukle:

```powershell
$env:SUPABASE_SERVICE_ROLE_KEY="SERVICE_ROLE_KEY"
npm run import:supabase-catalog
```

PowerShell `npm` komutunu engellerse ayni komutu `npm.cmd run import:supabase-catalog` olarak calistir.

7. Uygulamayi `npm start` ile ac. Yeni kayitlarda Supabase Auth kullanilir; kullanici e-posta dogrulamasi yapmadan oturum aktif olmaz.
8. Kayit icin `@` sonrasinda `edu` domain parcasi olan e-posta gerekir. Ornek: `ogr.edu.tr`, `university.edu`, `mail.school.edu.tr`. Admin hesabi istisnadir ve `bdemircanli15@gmail.com` olabilir.
9. Not dosyalari `note-files` Storage bucket'ina gider.
10. Not kayitlari ilk etapta `pending` durumunda olusur; admin kullanici `approved` yaptiginda vitrinde gorunur.
11. Bu surumun odeme tablolari, RLS kurallari, dekont OCR on-kontrol alanlari ve `payment-receipts` private Storage bucket'i icin `supabase/schema.sql` dosyasinin tamamini Supabase SQL Editor'da tekrar calistir. Eski `purchases` kayitlari korunur; yeni odeme alanlari eklenir.
12. Admin hesabiyla girip Admin > Dekont kontrolu bolumunden alici banka adi, hesap sahibi ve IBAN'i kaydet. Varsayilan satici havale gunu Cuma'dir ve bu ekrandan degistirilebilir.
13. Saticilar Profil > Odeme bilgileri bolumunden kendi banka/IBAN bilgilerini kaydeder. Bu bilgiler herkese acik profil tablosunda tutulmaz; sadece hesap sahibi ve admin gorebilir.
14. Test icin admin tarafinda "Mock odemeleri test icin etkinlestir" secenegini acin. Sepette mock secenegini isaretleyin. Panelim'de "Dogru ornek dekont" ve "Yanlis ornek dekont" butonlari referans/tutar eslesmesinin iki sonucunu da gercek OCR hattinda test eder; ayni mock sipariste dekontu degistirerek her iki sonucu da art arda deneyebilirsiniz. Mock satislar saticinin tahmini net kazanc ve beklenen odeme toplamlarinda gorunur; gercek banka havalesi degildir ve adminin gercek havale olarak kaydettigi tutara katilmaz. Gercek havale akisina gecince mock ayarini kapatin.
15. Gercek sipariste alici, her siparis icin olusan referans kodunu havale aciklamasina yazar ve PDF/JPG/PNG/WEBP dekontu yukler. Tarayici PDF metnini okur; taranmis PDF veya gorsellerde Turkce/Ingilizce OCR ile aciklama, referans ve tutar alanlarini okumaya calisir. Okunan aciklama, OCR'in buldugu tutar ve siparis tutari aliciya ve admin inceleme ekranina gosterilir; referans ve tutar eslesirse "Dekont bilgileri eslesti", eslesmezse "Hatali dekont" on-kontrol mesaji gorunur. Dekont dosyasi OCR icin dis servise gonderilmez; OCR kodu ve dil modelleri CDN'den indirilir. OCR eslesmesi odemenin bankaya gectigini kanitlamaz ve dosyalar degistirilebilir; nihai onay adminindir. Eslesmeyen/okunamayan dekontlar da admin incelemesine gidebilir. Onaylaninca not indirmeye acilir. Satici odemeleri otomatik banka transferi degildir; admin odeme gununde havaleyi disaridan yaptiktan sonra yalnizca gercek havale tutarini admin panelinde kaydeder.

Admin yapmak icin Supabase `Table Editor > profiles` icinde ilgili kullanicinin `role` alanini `admin` yap.
Supabase admin girisi yerel `admin@notum.test` demo hesabindan ayri bir Auth hesabidir. Sifrenizi unuttuysaniz `Authentication > Users` icinde admin kullanicisini bulun ve sifre kurtarma e-postasi gonderin. Admin kullanici e-postasina erisemiyorsaniz, proje sahibi olarak Supabase Dashboard veya guvenli bir yonetim ortami uzerinden Auth sifresini sifirlayin; `service_role` anahtarini tarayiciya koymayin.

Odeme akisinin ozeti: `purchases` tablosunda odeme durumu, tekil referans kodu, dekont Storage yolu ve guvenilir odeme dogrulamasi olmayan OCR on-kontrol sonucu tutulur; dekont dosyalari herkese acik olmayan `payment-receipts` bucket'indadir. `seller_payment_profiles` IBAN'i gizli tutar, `platform_settings` aliciya gosterilecek hesap ve haftalik odeme gununu saklar, `seller_payouts` yalnizca gerceklestirilmis gercek satici havalelerini kaydeder. Bu ozellikler icin ek bir servis anahtari veya dis odeme saglayicisi gerekmez; SQL kurulumu gerekir. Banka havalesinin hesaba gectigini admin dekonttan bagimsiz olarak kontrol etmelidir.
