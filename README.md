# Undangan Premium Lokal

Aplikasi web statis untuk membuat berbagai jenis undangan lokal langsung dari browser.

Repository ini sudah di-upgrade menjadi **generator undangan**, bukan hanya satu desain undangan.

## Fitur

- 50+ tipe undangan lokal:
  - Pernikahan, akad, resepsi, lamaran
  - Khitanan, aqiqah, ulang tahun, hajatan keluarga
  - Tahlilan, yasinan, doa kematian, doa 7/40/100/1000 hari
  - Maulid Nabi, Isra Mi'raj, halal bihalal, buka puasa bersama
  - Rapat desa, musyawarah desa, rapat RT/RW, gotong royong
  - Posyandu, sosialisasi, panen raya, lomba 17 Agustus
  - Rapat koperasi, arisan, reuni, karang taruna
  - Rapat sekolah, komite sekolah, perpisahan, pengambilan rapor
  - Pembukaan usaha, launching produk, pelatihan, seminar
- Model tampilan:
  - Undangan premium
  - Surat formal
  - Kartu ringkas
  - Amplop nama tamu
- Tema warna:
  - Emas, hijau, maroon, biru, ungu, hitam putih, floral, ocean
- Cetak / simpan PDF langsung dari browser.
- Cetak semua nama tamu sekaligus.
- Salin teks undangan untuk WhatsApp.
- Download dan import data JSON.
- Simpan draft otomatis di browser.
- Tidak memakai database dan tidak perlu server.

## Cara pakai

Buka `index.html` di browser, isi data acara, pilih jenis undangan, lalu cetak atau simpan PDF.

## GitHub Pages

Jika GitHub Pages aktif dari branch `main` folder `/root`, aplikasi dapat dibuka di:

```text
https://slee17an-spec.github.io/undangan-premium/
```

Kalau belum aktif:

1. Buka repository di GitHub.
2. Masuk ke **Settings**.
3. Pilih **Pages**.
4. Source: **Deploy from a branch**.
5. Branch: `main`, folder `/root`.
6. Klik **Save**.

## Catatan privasi

Data undangan disimpan di browser pengguna melalui `localStorage`. Data tidak dikirim ke server.
