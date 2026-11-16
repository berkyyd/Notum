# Notum

Türkiye'deki üniversite öğrencileri için ders notu alım-satım platformu.

## Yasal metinler ve yayın öncesi koşullar

`legal.html`, KVKK aydınlatma, kullanım koşulları, satıcı sözleşmesi, alıcı bilgilendirmesi ve yerel depolama
metinlerinin taslaklarını içerir. İşletenin resmi işletme/adres/vergi bilgileri ve destek/iade süreci henüz
tamamlanmadığı için bu belgeler yayına hazır veya hukuki danışmanlık yerine geçen metinler değildir.
Pazaryeri ödemeleri işletme sahibinin şahsi hesabına alınıyorsa gerçek satıştan önce iş modeli, vergi/fatura,
tüketici ve ödeme mevzuatı bir hukukçu ve mali müşavirle doğrulanmalıdır.

Onay kayıtlarının Supabase'te tutulması için `supabase/schema.sql` dosyasındaki `legal_acceptances` tablosu ve
kayıt tetikleyicisi de kurulmalıdır. Güncellenmiş şema uygulanmadan yeni sürümü gerçek kullanıcılarla
kullanmaya başlamayın.

## Çalıştırma

Gmail ile ödeme doğrulaması için siteyi aşağıdaki yerel sunucu üzerinden açın; `index.html` dosyasını doğrudan açınca sunucu API'si çalışmaz.

İsteğe bağlı yerel sunucu:

```bash
npm start
```

Ardından tarayıcıda `http://localhost:4173` adresini açın.

## Hazır Demo Hesaplar

Bu hesaplar sadece yerel demo içindir.
Supabase bağlantısı yapılandırılmışsa bu demo hesapları kullanılamaz; gerçek Supabase Auth hesabıyla giriş yapın.

- Öğrenci: `sila@ogr.edu.tr` / `123456`
- Satıcı: `berkay@ogr.edu.tr` / `123456`
- Admin: `admin@notum.test` / `123456`

## Gmail ile otomatik ödeme doğrulama

Öğrenci siparişindeki sorgu numarasını gönderince yerel sunucu, oturumunu ve sipariş sahipliğini doğrular; Gmail'de o günün VakıfBank bildirimlerini arar. Sorgu numarası ve tutar birlikte eşleşirse sipariş `paid` olur ve not indirilebilir. Eşleşme yoksa sipariş reddedilir ve numara tekrar gönderilebilir. Gmail ve Supabase servis sırları yalnızca sunucuda kalır.

İş akışı:

1. Supabase SQL Editor'da `supabase/schema.sql` dosyasını çalıştırarak `query_number` alanı ve ilgili indeksi ekle.
2. `.env` içinde Google OAuth (`gmail.readonly` kapsamı), `GMAIL_ACCOUNT`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` ve `SUPABASE_SERVICE_ROLE_KEY` ayarlarının bulunduğunu doğrula. Servis rolü anahtarını tarayıcı koduna koyma.
3. `npm start` ile siteyi sunucu üzerinden aç. Formdan sorgu numarası gönderildiğinde Gmail kontrolü sunucuda otomatik yapılır.

Gmail okuma ve eşleştirmeyi terminalde salt-okunur denemek için:

```bash
node scripts/gmail-payment-verifier.js --dry-run --date 2026-10-29
node scripts/gmail-payment-verifier.js --purchase-id p-123 --query-number 853729444111 --amount 250 --date 2026-10-29 --dry-run
```

## Kapsam

- Kayıt/giriş, roller ve `.edu.tr` doğrulama etiketi
- Not yükleme, admin onayı, düzenleme ve silme
- Not listeleme, filtreleme, sıralama ve detay sayfası
- Not içerikleri ve gerçekçi önizleme kartları
- Satıcının seçtiği en fazla 5 özel önizleme sayfası
- Önizleme girilmezse otomatik 3 sayfa üretimi
- PDF, DOC, DOCX, PPT, PPTX ve TXT dosya yükleme
- Sepet, banka havalesi ve Gmail tabanlı sorgu numarası doğrulama
- Satıcı IBAN bilgileri, mock satışlar dahil beklenen komisyon sonrası kazanç ve haftalık ödeme takibi
- Sorgu numarası ile bankadaki e-posta eşleşmesi sonrası notun indirilebilir hale gelmesi
- Satın alınan notlar, favoriler ve yorumlar
- Kullanıcının kendi yorumunu silebilmesi
- Satıcı paneli ve admin paneli
- Telif uyarısı, şikayet, filigran ve akıllı açıklama yapısı
- Koyu/açık tema desteği

## Veri Modeli

Uygulama yerel veri saklama için `localStorage` kullanır. Supabase kurulum ve ödeme akışı yönergeleri `SUPABASE.md`, veritabanı şeması ise `supabase/schema.sql` içindedir. Supabase ile ödeme özelliklerini açmadan önce schema SQL'ini Supabase SQL Editor'da çalıştırın.

## Program Kataloğu

Üniversite, fakülte/yüksekokul ve bölüm seçimleri `src/data/yokatlas-programs.json` dosyasından okunur. Notum bu katalogla arama/filtreleme alanlarını, not yükleme formunu ve profil eğitim bilgilerini besler.

Bu dosya YÖK/ÖSYM `tablo3` ve `tablo4` Excel tabloları birleştirilerek üretilir; meslek yüksekokulları da aynı üniversite altında fakültelerle birlikte yer alır. YÖK Atlas verisi güncellendiğinde veritabanı gerekmeden bu JSON dosyasını yenilemek yeterlidir. Uygulama katalog dosyasını okuyamazsa mevcut notlardaki üniversite/fakülte/bölüm bilgilerini yedek liste olarak kullanır.

Katalog dönüştürücü: `scripts/build-yokatlas-catalog.py`
