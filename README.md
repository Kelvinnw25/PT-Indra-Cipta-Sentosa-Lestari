# PT Indra Cipta Sentosa Lestari — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Single-page, smooth-scroll.

## Menjalankan
```bash
npm install
npm run dev      # buka http://localhost:3000
```
Build production: `npm run build && npm start`

## Struktur
- `lib/data.ts` — semua konten (divisi, klien, industri, kontak, URL gambar). Edit di sini.
- `components/` — Navbar, Hero, About, Divisions, Industries, Clients, Contact, Footer, Reveal.
- `app/` — layout (font + metadata), page (rakitan section), globals.css (animasi).

## Catatan
- Spesifikasi di Switch Board & Contractor Division masih CONTOH — ganti dengan data resmi.
- Gambar memakai Unsplash (bebas lisensi) sebagai placeholder. Ganti URL di `lib/data.ts`
  atau taruh foto asli di `public/` lalu pakai path `/namafile.jpg`.
- Logo klien sengaja teks, bukan gambar (perlu izin penggunaan logo).
