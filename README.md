# Demo Coffe — Sastro's Coffee

Website landing page untuk **Sastro's Coffee**, kedai kopi di Yogyakarta. Website ini dibuat dengan HTML, CSS, dan JavaScript vanilla, dengan fokus pada tampilan yang bersih, pengalaman mobile, dan dasar SEO on-page.

## Fitur

- Desain responsif untuk desktop, tablet, dan mobile.
- Hero section dengan foto interior kedai sebagai background.
- Bagian menu untuk menampilkan produk unggulan.
- Bagian lokasi dengan Google Maps embed dan tautan untuk membuka Google Maps.
- Tombol kontak yang dapat membuka aplikasi telepon pada perangkat yang mendukung.
- Navigasi mobile dengan tombol hamburger, dukungan tombol `Escape`, dan atribut aksesibilitas.
- Metadata dasar SEO, Open Graph, dan structured data `CafeOrCoffeeShop`.
- Gambar menu memiliki teks alternatif (`alt`) yang deskriptif.
- Gambar menggunakan format WebP untuk membantu mengurangi ukuran aset.

## Teknologi

- HTML5
- CSS3
- JavaScript vanilla
- Google Maps Embed
- WebP untuk aset gambar

Tidak diperlukan framework atau proses build untuk menjalankan website ini.

## Struktur proyek

```text
demo-coffe/
├── main.html
├── style.css
├── script.js
├── README.md
└── picture/
    ├── sastro-coffee-hero.webp
    ├── es-kopi-sastro.webp
    ├── frappuccino-hazelnut.webp
    ├── nasi-goreng.webp
    ├── coffee-beer.webp
    └── kopi-vietnam-drip.webp
```

## Menjalankan secara lokal

### Opsi 1: Visual Studio Code

1. Buka folder proyek di Visual Studio Code.
2. Pasang ekstensi **Live Server** jika belum tersedia.
3. Klik kanan `main.html`, lalu pilih **Open with Live Server**.

### Opsi 2: Python

Pastikan Python sudah terpasang. Dari terminal, jalankan perintah berikut di folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000/main.html` di browser.

> Website ini memakai nama file `main.html` sebagai halaman utama. Untuk hosting statis yang mengharuskan file `index.html` sebagai entry point, ubah nama `main.html` menjadi `index.html` atau sesuaikan konfigurasi hosting.

## Mengubah konten

### Mengganti gambar hero

Ganti file `picture/sastro-coffee-hero.webp` dengan gambar baru yang memiliki nama dan path sama agar referensi di HTML tetap bekerja. Jika nama file diubah, perbarui atribut `src` pada elemen `.hero-background` di `main.html`.

Untuk hasil yang baik, gunakan gambar lebar, kompres ukurannya, dan pastikan fokus gambar tetap terlihat di layar kecil. Properti `object-position` pada `.hero-background` di `style.css` dapat disesuaikan untuk mengatur titik fokus gambar.

### Mengubah menu

Edit bagian `menu-section` di `main.html`. Setiap item menu memakai elemen `<article class="menu-card">` dan sebuah elemen `<img>`. Saat mengganti gambar, perbarui:

- `src` agar sesuai dengan lokasi file gambar.
- `alt` untuk mendeskripsikan isi gambar secara spesifik.
- Judul dan deskripsi menu agar sesuai dengan produk sebenarnya.

### Mengubah warna dan tampilan

Warna inti ditentukan oleh custom properties di bagian `:root` pada `style.css`. Mengubah variabel di sana lebih konsisten daripada mengganti nilai warna satu per satu di seluruh stylesheet.

### Mengubah kontak dan lokasi

Perbarui nomor telepon di tautan `tel:` pada bagian kontak dan properti `telephone` di structured data JSON-LD. Jika lokasi kedai berbeda, sesuaikan juga tautan Google Maps, iframe peta, teks lokasi, dan informasi lokasi dalam structured data.

## SEO dan aksesibilitas

Website sudah memiliki title, meta description, pengaturan bahasa dokumen, heading utama, metadata Open Graph, structured data, dan teks alternatif gambar. Hal-hal ini merupakan fondasi SEO, bukan jaminan posisi tertentu di hasil pencarian.

Sebelum dipublikasikan:

1. Pastikan nama bisnis, nomor telepon, lokasi, dan menu sesuai dengan informasi yang benar.
2. Tambahkan domain asli ke konfigurasi SEO jika diperlukan, termasuk canonical URL dan `og:url`.
3. Uji halaman dengan Google Search Console dan alat pengujian structured data setelah website tersedia secara publik.
4. Periksa performa, kontras warna, navigasi keyboard, dan tampilan mobile pada perangkat nyata.

## Deployment

Karena proyek ini berupa website statis, file dapat di-host di layanan seperti GitHub Pages, Netlify, atau Cloudflare Pages tanpa backend. Pastikan file entry point sesuai dengan ketentuan layanan hosting dan semua path aset tetap valid.

## Lisensi

Belum ada lisensi yang ditetapkan. Tambahkan file `LICENSE` jika proyek ini akan dibagikan atau digunakan oleh pihak lain.