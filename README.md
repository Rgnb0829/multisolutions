# Fimosa Multi-Solution — Company Profile Website

> **Proyek ini adalah situs web profil perusahaan untuk divisi Fimosa Multi-Solution. Fimosa Multi-Solution memosisikan dirinya sebagai divisi hibrida dari Fimosa Company, yang menawarkan layanan di segmen "Software House" dan "Creative Studio".**

---

## Struktur Proyek

```
/Multisolutions
  /client          ← Vue 3 + Vite (Frontend)
  /server          ← Node.js + Express (Backend API)
  package.json     ← Top-level scripts (opsional, jalankan manual)
  README.md
```

## Identitas Divisi

| Atribut | Nilai |
|---|---|
| **Nama Divisi** | Fimosa Multi-Solution (MS) |
| **Perusahaan Induk** | Fimosa Company |
| **Operasi Di Bawah** | Fimosa Technology Indonesia |
| **Layanan Utama** | Software House + Creative Studio |
| **Segmen Pasar** | Korporasi, Pemerintah, Startup |

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | Vue 3, Vite, Vue Router 4, Axios |
| Backend | Node.js, Express.js |
| Penyimpanan | JSON file (in-memory ready, DB-ready routing) |
| Styling | Vanilla CSS (Design System custom) |

---

## Cara Menjalankan

### 1. Install Dependensi Backend
```bash
cd server
npm install
```

### 2. Install Dependensi Frontend
```bash
cd client
npm install
```

### 3. Jalankan Backend
```bash
cd server
npm run dev
# Server berjalan di http://localhost:3001
```

### 4. Jalankan Frontend (terminal baru)
```bash
cd client
npm run dev
# App berjalan di http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/health` | Health check server |
| GET | `/api/contact` | Ambil semua submission kontak |
| POST | `/api/contact` | Kirim pesan form kontak |

### Contoh POST `/api/contact`
```json
{
  "name": "Budi Santoso",
  "email": "budi@perusahaan.com",
  "subject": "Konsultasi ERP",
  "message": "Kami membutuhkan sistem ERP untuk 200 karyawan..."
}
```

---

## Halaman

| Halaman | Route | Deskripsi |
|---|---|---|
| Home | `/` | About Us + profile singkat Fimosa Company |
| Services | `/services` | Software House & Creative Studio |
| Contact | `/contact` | Form kontak + peta lokasi kantor |

---

## Catatan Pengembangan

- Data kontak disimpan di `server/data/contacts.json`
- Untuk koneksi database nyata, ganti logika di `server/controllers/contactController.js`
- Peta menggunakan Google Maps Embed (Jakarta sebagai titik demo)
- Semua teks verbatim dari spesifikasi telah dimasukkan di halaman yang relevan

---

*© Fimosa Multi-Solution. All Rights Reserved. A Division of Fimosa Company.*
