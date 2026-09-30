# Project Initialization: ElysiaJS + Drizzle ORM + MySQL with Bun

## 1. Overview
Inisialisasi fondasi proyek backend API modern menggunakan **Bun** sebagai JavaScript runtime & package manager, **ElysiaJS** sebagai web framework, serta **Drizzle ORM** yang terhubung ke database **MySQL**.

---

## 2. Tech Stack
- **Runtime & Package Manager**: [Bun](https://bun.sh)
- **Web Framework**: [ElysiaJS](https://elysiajs.com)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Database Client / Driver**: `mysql2`
- **Database**: MySQL

---

## 3. High-Level Implementation Steps

### Phase 1: Inisialisasi Proyek & Lingkungan
- [ ] Inisialisasi proyek Bun baru di direktori root (`bun init`).
- [ ] Buat file konfigurasi environment (`.env` dan `.env.example`) untuk menyimpan konfigurasi port dan kredensial koneksi MySQL (`DATABASE_URL` atau host, user, password, database).
- [ ] Siapkan struktur direktori standar:
  - `src/` (source code utama)
  - `src/db/` (konfigurasi database & skema)
  - `src/routes/` atau `src/modules/` (endpoint routing)

### Phase 2: Instalasi Dependensi
- [ ] Install framework inti:
  - `elysia`
- [ ] Install dependensi database & ORM:
  - `drizzle-orm`
  - `mysql2`
- [ ] Install development dependencies:
  - `drizzle-kit` (CLI untuk migrasi dan inspeksi database)
  - `@types/bun` (opsional jika belum ada)

### Phase 3: Setup Drizzle ORM & MySQL
- [ ] Buat konfigurasi Drizzle (`drizzle.config.ts`) yang merujuk ke folder skema dan kredensial database MySQL.
- [ ] Buat modul koneksi database (`src/db/index.ts`):
  - Inisialisasi koneksi pool menggunakan `mysql2`.
  - Export instance Drizzle client untuk digunakan di seluruh aplikasi.
- [ ] Buat contoh skema awal (misal: tabel `users` atau health-check) di folder skema (`src/db/schema.ts`).
- [ ] Siapkan script npm/bun di `package.json` untuk menjalankan migrasi Drizzle (`generate`, `migrate`, atau `push`).

### Phase 4: Setup Server ElysiaJS
- [ ] Buat entry point aplikasi (`src/index.ts`).
- [ ] Inisialisasi instance ElysiaJS dan jalankan server pada port yang ditentukan (default: `3000`).
- [ ] Tambahkan endpoint dasar:
  - `GET /`: Health check / welcome message.
  - `GET /db-check`: Endpoint pengujian untuk memverifikasi query database via Drizzle berjalan lancar.

### Phase 5: Verifikasi & Validasi
- [ ] Pastikan script `dev` atau `start` pada `package.json` menggunakan `bun run`.
- [ ] Jalankan server secara lokal dan pastikan tidak ada error saat bootstrapping.
- [ ] Uji hit endpoint `/` dan endpoint uji koneksi database.

---

## 4. Acceptance Criteria
- [ ] Proyek berhasil dijalankan menggunakan perintah `bun dev` / `bun run src/index.ts`.
- [ ] Server ElysiaJS dapat menerima request HTTP dan memberikan response sukses.
- [ ] Drizzle ORM terkonfigurasi dengan benar dan dapat berkomunikasi dengan database MySQL.
- [ ] Struktur folder rapi, modular, dan siap untuk penambahan fitur lanjutan.
