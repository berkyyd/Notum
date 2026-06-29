# Notum

Türkiye'deki üniversite öğrencileri için ders notu alım-satım platformu.

## Çalıştırma

En kolay yol: `index.html` dosyasını tarayıcıda açın.

İsteğe bağlı yerel sunucu:

```bash
npm start
```

Ardından tarayıcıda `http://localhost:4173` adresini açın.

## Hazır Demo Hesaplar

Bu hesaplar sadece yerel demo içindir.

- Öğrenci: `sila@ogr.edu.tr` / `123456`
- Satıcı: `berkay@ogr.edu.tr` / `123456`
- Admin: `admin@notum.test` / `123456`

## Kapsam

- Kayıt/giriş, roller ve `.edu.tr` doğrulama etiketi
- Not yükleme, admin onayı, düzenleme ve silme
- Not listeleme, filtreleme, sıralama ve detay sayfası
- Not içerikleri ve gerçekçi önizleme kartları
- Satıcının seçtiği en fazla 5 özel önizleme sayfası
- Önizleme girilmezse otomatik 3 sayfa üretimi
- PDF, DOC, DOCX, PPT, PPTX ve TXT dosya yükleme
- Satın alan kullanıcının yüklenen orijinal dosyayı indirmesi
- Yükleme sırasında küçük önizleme/seçim arayüzü
- PDF yüklemede sayfa sayısını dosyadan okuma
- Dosyası olmayan notlarda PDF, DOCX, PPTX ve TXT çıktıları üretme
- Sepet ve ödeme akışı
- Satın alınan notlar, favoriler ve yorumlar
- Kullanıcının kendi yorumunu silebilmesi
- Satıcı paneli ve admin paneli
- Telif uyarısı, şikayet, filigran ve akıllı açıklama yapısı
- Koyu/açık tema desteği

## Veri Modeli

Uygulama yerel veri saklama için `localStorage` kullanır. İlişkisel veritabanı taslağı `src/schema.sql` içindedir.

## Program Kataloğu

Üniversite, fakülte/yüksekokul ve bölüm seçimleri `src/data/yokatlas-programs.json` dosyasından okunur. Notum bu katalogla arama/filtreleme alanlarını, not yükleme formunu ve profil eğitim bilgilerini besler.

Bu dosya YÖK/ÖSYM `tablo3` ve `tablo4` Excel tabloları birleştirilerek üretilir; meslek yüksekokulları da aynı üniversite altında fakültelerle birlikte yer alır. YÖK Atlas verisi güncellendiğinde veritabanı gerekmeden bu JSON dosyasını yenilemek yeterlidir. Uygulama katalog dosyasını okuyamazsa mevcut notlardaki üniversite/fakülte/bölüm bilgilerini yedek liste olarak kullanır.

Katalog dönüştürücü: `scripts/build-yokatlas-catalog.py`
