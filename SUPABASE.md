# Notum Supabase Kurulumu

Supabase baglantisi bosken uygulama yerel demo modunda calisir. Yeni Supabase projenle calismasi icin:

1. Supabase panelinde `SQL Editor` ac ve `supabase/schema.sql` dosyasinin tamamini calistir.
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

Admin yapmak icin Supabase `Table Editor > profiles` icinde ilgili kullanicinin `role` alanini `admin` yap.
