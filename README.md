# Atölye Çanta — E-Ticaret Sitesi

Next.js + Prisma ile kurulmuş, gerçek altyapıya sahip bir e-ticaret sitesi.
Çanta satışı üzerine kurgulanmıştır; ürün/kategori isimlerini kolayca değiştirebilirsin.

## İçindekiler
- Ürün listeleme, filtreleme, ürün detay sayfası
- Sepet (tarayıcıda saklanır)
- Ödeme akışı + **iyzico** entegrasyon noktası (API anahtarı eklenince aktifleşir)
- Sipariş oluşturma, stok düşümü
- Admin paneli: giriş, ürün ekle/sil, sipariş durumu güncelleme
- Veritabanı: Prisma ORM (geliştirmede SQLite, canlıda Postgres'e tek satırla geçilebilir)

## Kurulum (kendi bilgisayarında veya sunucunda)

```bash
# 1) Bağımlılıkları kur
npm install

# 2) Veritabanını oluştur
npx prisma generate
npm run db:push

# 3) Örnek ürünleri ve admin kullanıcısını yükle
npm run db:seed

# 4) Geliştirme sunucusunu başlat
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

**Admin paneli giriş:** `http://localhost:3000/admin/login`
E-posta: `admin@canta.com` — Şifre: `admin123`
(Canlıya almadan önce bu şifreyi değiştir — `prisma/seed.js` içinde veya veritabanından.)

## iyzico Ödeme Entegrasyonu

Şu an ödeme adımı **simülasyon modunda** çalışıyor (gerçek tahsilat yapılmaz), böylece
siteyi API anahtarı olmadan da baştan sona test edebilirsin.

Gerçek tahsilat almak için:
1. https://www.iyzico.com üzerinden bir mağaza hesabı aç, API anahtarlarını al.
2. `npm install iyzipay`
3. `.env` dosyasına `IYZICO_API_KEY` ve `IYZICO_SECRET_KEY` değerlerini ekle.
4. `lib/iyzico.js` içindeki yorum satırlı gerçek entegrasyon kodunu aç.

## Canlıya Alma (Production)

1. **Veritabanı:** `prisma/schema.prisma` içinde `provider = "sqlite"` satırını
   `provider = "postgresql"` yap. Supabase, Neon veya Vercel Postgres'ten ücretsiz
   bir veritabanı alıp `DATABASE_URL`'i `.env`'de güncelle.
2. **Hosting:** Projeyi GitHub'a yükleyip Vercel'e bağlaman en kolay yol (Next.js
   için native destek var). `vercel.com` üzerinden "Import Project" diyerek bağlayabilirsin.
3. **Domain:** Vercel panelinden kendi alan adını ekleyebilirsin.
4. **Görseller:** `public/images` altındaki placeholder SVG'leri gerçek ürün
   fotoğraflarınla değiştir.

## Klasör Yapısı

```
app/                  → Sayfalar ve API route'ları (Next.js App Router)
  admin/              → Yönetim paneli
  api/                → Backend API uç noktaları
  odeme/, sepet/, urun/  → Müşteri tarafı sayfaları
components/           → Tekrar kullanılabilir arayüz parçaları
lib/                  → Veritabanı bağlantısı, kimlik doğrulama, ödeme, yardımcılar
prisma/               → Veritabanı şeması ve örnek veri
```

## Notlar
- Fiyatlar veritabanında **kuruş** cinsinden saklanır (129900 = 1.299,00 TL),
  yuvarlama hatalarını önlemek için.
- Admin oturumu JWT + httpOnly cookie ile korunur; `JWT_SECRET`'i `.env`'de
  rastgele uzun bir değerle değiştirmeyi unutma.
