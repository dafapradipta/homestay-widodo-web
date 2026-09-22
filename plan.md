PROJECT: Website Homestay Slamet Widodo — Astro, Performa Maksimal & SEO Kelas Kakap

## 0. SETUP AWAL (BACA DULU SEBELUM MULAI — WAJIB)
- Folder project ini (root, tempat plan.md dan gambar-homestay/ berada) BUKAN folder kosong, jadi `npm create astro@latest` akan menolak install di sini secara default dan malah membuat subfolder baru. JANGAN biarkan itu terjadi.
- Cara yang benar: jalankan `npm create astro@latest .` (dengan tanda titik di akhir, artinya "install di folder saat ini"), lalu saat diminta konfirmasi "folder not empty, continue?", pilih YES/lanjutkan.
- SEMUA file Astro (src/, public/, astro.config.mjs, package.json, tsconfig.json, dll) harus berada LANGSUNG di root folder ini, sejajar dengan plan.md dan gambar-homestay/. JANGAN buat subfolder project baru apapun namanya (jangan bikin folder seperti "zapping-zenith" atau nama random lainnya).
- Sebelum mulai, cek dulu isi folder root dengan `ls -la`. Kalau ternyata sudah ada folder project nyasar dari percobaan sebelumnya, pindahkan isinya ke root lalu hapus folder nyasar itu, baru lanjut.
- Setelah init selesai, verifikasi dengan `ls` bahwa `astro.config.mjs` dan `src/` ada di root, BUKAN di dalam subfolder.

## 1. TECH STACK & ARSITEKTUR
- Framework: Astro (output: "static", jangan pakai SSR kecuali perlu).
- Styling: Tailwind CSS (utility-first, ringan, gampang di-purge otomatis).
- Gunakan Astro Islands — JANGAN load JS di halaman yang gak butuh interaktivitas. Semua komponen default astro (.astro), cuma pakai client:* directive kalau benar-benar perlu (misal slider galeri, form booking WA).
- Navbar & transisi antar halaman WAJIB pakai Astro View Transitions API (`<ClientRouter />` di layout utama) supaya perpindahan antar halaman terasa instan tanpa reload/flash putih.
- Gambar: pakai `astro:assets` (komponen `<Image />`) untuk semua foto di folder `gambar-homestay/` — otomatis generate WebP/AVIF, lazy load, responsive srcset, dan width/height eksplisit biar gak ada layout shift (CLS).
- Font: load via `@font-face` self-hosted atau Google Fonts dengan `font-display: swap`, preload font utama di `<head>`.
- Target skor Lighthouse: Performance 95+, SEO 100, Accessibility 95+.

## 2. PERFORMA (NON-NEGOTIABLE)
- Zero render-blocking JS di atas fold.
- CSS di-inline untuk critical path, sisanya di-defer.
- Preload hero image (foto depan homestay), preconnect ke domain font/maps kalau dipakai.
- Semua gambar wajib punya `alt` deskriptif (bukan cuma "gambar1.jpg") — penting buat SEO gambar & aksesibilitas.
- Lazy-load semua section di bawah fold (gambar galeri, embed maps).
- Total JS bundle di halaman utama target < 50KB.

## 3. SEO KELAS KAKAP
- Setiap halaman: `<title>` unik + `<meta name="description">` yang natural mengandung keyword: "homestay Borobudur", "penginapan dekat Candi Borobudur", "homestay Punthuk Setumbu", "villa dekat Gereja Ayam Bukit Rhema", "kamar joglo Borobudur", dst — sebar sesuai konteks halaman, jangan keyword stuffing.
- Open Graph + Twitter Card meta lengkap (og:image pakai foto terbaik homestay).
- Structured Data JSON-LD schema.org type `LodgingBusiness` (atau `Hotel`) berisi: nama, alamat, geo coordinates (isi placeholder koordinat area Borobudur), amenityFeature (wifi, AC, air panas, dll), priceRange, image, hasMap.
- Tambahkan JSON-LD `FAQPage` untuk pertanyaan umum (jam check-in, apakah sedia sarapan, dekat wisata apa aja).
- Generate `sitemap.xml` otomatis (pakai `@astrojs/sitemap`) dan `robots.txt`.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, heading hierarchy H1 cuma satu per halaman, H2/H3 terstruktur rapi.
- URL slug rapi dan deskriptif: `/kamar/kamar-joglo`, `/lokasi-wisata`, dll — bukan `/page1`.
- Internal linking antar halaman (kamar → lokasi wisata → kontak).
- Canonical tag di setiap halaman.

## 4. DESAIN / UI (Tema: homestay Jawa asri, hangat, alami)
- Palet warna: terinspirasi dari suasana rumah joglo & alam — terracotta/coklat kayu hangat (#8B4A2B, #A0522D), krem/ivory hangat (#F5EDE0, #FAF6EE) sebagai base, hijau daun sebagai aksen alami (#4A6741, #6B8E4E), dan aksen emas pudar/gold muted untuk sentuhan premium (#C9A86A). Hindari warna neon/flat digital — semua harus terasa earthy & organik.
- Tipografi: heading pakai serif elegan-hangat (misal Fraunces, Playfair Display, atau Lora) untuk kesan homey-premium, body text pakai sans-serif modern yang enak dibaca (Inter, Plus Jakarta Sans, atau Manrope).
- Navbar sticky, transparan di atas hero lalu solid saat scroll, transisi halus (bukan reload).
- Hero section full-width pakai foto depan homestay (yang lo kasih), dengan overlay gradient halus + headline + CTA "Booking via WhatsApp".
- Card kamar dengan hover effect halus (scale/shadow), badge harga jelas.
- Galeri foto pakai grid modern (masonry atau bento-grid), klik buka lightbox ringan (client:visible island).
- Micro-interactions halus: fade-in on scroll (pakai CSS + Intersection Observer kecil, tanpa library berat).
- Fully responsive, mobile-first (mayoritas visitor dari HP).
- Dark mode TIDAK perlu — fokus tema hangat terang.

## 5. STRUKTUR HALAMAN
1. **Home (/)** — Hero, ringkasan homestay, highlight 3 tipe kamar + kamar joglo, fasilitas unggulan, lokasi wisata terdekat, testimoni (placeholder), CTA booking, peta lokasi.
2. **/kamar** — Detail semua kamar (lihat data di bawah), tab atau card per tipe kamar dengan galeri foto masing-masing.
3. **/fasilitas** — List lengkap fasilitas umum & unik (metik buah, sarapan gratis, dll).
4. **/lokasi-wisata** — List + jarak ke tempat wisata sekitar, mini map.
5. **/galeri** — Semua foto homestay dari folder `gambar-homestay/`.
6. **/kontak** — Nomor WA (klik langsung chat), alamat, embed Google Maps, form simple (opsional).
- Footer di semua halaman: alamat singkat, jam operasional, link WA, sosmed (placeholder), copyright.

## 6. DATA KONTEN (WAJIB DIPAKAI PERSIS)

### Nama: Homestay Slamet Widodo

### Kamar Utama (3 kamar, di rumah utama)
1. **Kamar 1** — Rp299.000/malam
   - 2 kasur (besar & kecil)
   - Air panas, WiFi, TV, AC, kamar mandi dalam (WC jongkok)
2. **Kamar 2** — Rp199.000/malam
   - 1 kasur besar
   - Air panas, WiFi, TV, AC, kamar mandi dalam (WC duduk)
3. **Kamar 3** — Rp299.000/malam
   - 2 kasur (besar & kecil)
   - Air panas, WiFi, TV, AC, kamar mandi dalam (WC duduk)

### Kamar Joglo (7 kamar, di rumah hunian tradisional Joglo) — Rp99.000/kamar/malam
- 1 kasur ukuran 120cm per kamar
- WiFi tersedia, TIDAK ada TV
- Kamar mandi terpisah dari kamar (shared bathroom)

### Fasilitas & Nilai Tambah
- Lokasi dekat masjid (persis depan homestay)
- Sarapan gratis 1x + kopi
- Bisa metik buah & belajar berkebun bareng owner (musiman, termasuk alpukat)
- Udara sejuk, lingkungan asri & tenang
- Ruang tamu Joglo bisa dipakai untuk meeting/pertemuan
- Dekat Indomaret (±1.3 km) dan Gajah Mart (±450 m)
- Layanan antar-jemput & tour dengan supir (opsional, kemungkinan biaya tambahan — tulis "hubungi kami untuk info")
- Smoking area di depan kamar
- Akses jalan lebar, muat mobil masuk
- Parkir luas untuk mobil & motor

### Wisata Terdekat
- Candi Borobudur
- Punthuk Setumbu
- Gereja Ayam (Bukit Rhema)
- Pemandian Air Panas Candi Umbul (Tempuran)
- Borobudur Land
- (dan wisata sekitar lainnya)

## 7. ASET GAMBAR
- Semua foto ada di folder lokal `gambar-homestay/` — import lewat `astro:assets`, generate ukuran optimal per breakpoint, kompresi otomatis.
- Pakai foto depan homestay sebagai hero utama.
- Kelompokkan foto kamar per tipe kamar kalau filename memungkinkan, kalau tidak jelas, taruh semua di galeri umum + minta konfirmasi mana yang mana.

## 8. CTA & KONVERSI
- Tombol "Chat via WhatsApp" floating (sticky) di semua halaman, mengarah ke `https://wa.me/[NOMOR_WA]?text=Halo%2C%20saya%20mau%20tanya%20ketersediaan%20kamar%20di%20Homestay%20Slamet%20Widodo` (nomor WA taruh sebagai variabel/konstanta yang gampang diganti).
- Setiap card kamar ada tombol booking langsung ke WA dengan pesan pre-filled sesuai tipe kamar.

## 9. OUTPUT YANG DIHARAPKAN
- Struktur folder Astro rapi (components/, layouts/, pages/, data/ untuk konten kamar & fasilitas dalam bentuk JSON/TS biar gampang diedit).
- Semua teks bisa diedit gampang tanpa bongkar komponen (pisahkan data dari markup).
- Sertakan file `astro.config.mjs` dengan integrasi sitemap & tailwind sudah terpasang.
- Setelah setiap tahap besar selesai (init, tailwind, layout, tiap halaman), jalankan `ls` untuk konfirmasi struktur folder tetap benar (tidak ada subfolder nyasar) sebelum lanjut ke tahap berikutnya.