# LMS Platform

Modern learning management system, dibangun bertahap dalam 8 tahap. Repo ini saat ini berada di **Tahap 1 — Foundation**: setup project Next.js 14 dengan struktur clean dan dependencies production-ready. Belum ada fitur fungsional.

## Tech Stack

| Layer            | Pilihan                                          |
| ---------------- | ------------------------------------------------ |
| Framework        | Next.js 14 (App Router, src/, TypeScript)        |
| Styling          | Tailwind CSS 3 + shadcn/ui (style: default, base color: slate) |
| Database         | PostgreSQL via Prisma 5                          |
| State / Data     | Zustand · TanStack Query (`@tanstack/react-query`) |
| Validasi         | Zod                                              |
| Animasi          | Framer Motion                                    |
| Icons            | Lucide React                                     |
| Theme            | `next-themes` (dark / light / system)            |
| Toast            | Sonner                                           |
| Lint / Format    | ESLint (next config) + Prettier + tailwind plugin |

## Struktur Folder

```
src/
├── app/
│   ├── (auth)/         # placeholder untuk login/register (Tahap 2)
│   ├── (dashboard)/    # placeholder area protected (Tahap 3+)
│   ├── (marketing)/    # landing page publik
│   │   └── page.tsx
│   ├── api/            # route handlers
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/             # shadcn components (button, sonner, ...)
│   ├── shared/         # navbar, footer, providers, theme-toggle
│   └── features/       # komponen per-fitur
├── lib/
│   ├── db.ts           # singleton Prisma client
│   ├── utils.ts        # cn helper (clsx + tailwind-merge)
│   └── constants.ts
├── hooks/
├── types/
├── actions/            # server actions
└── styles/
prisma/
└── schema.prisma       # datasource PostgreSQL, models akan diisi Tahap 2
```

## Setup

### 1. Prasyarat

- **Node.js** ≥ 18 (project ini diuji dengan Node 24)
- **npm** ≥ 9
- **PostgreSQL** ≥ 14 (lokal atau hosted, e.g. Neon / Supabase / Railway)

### 2. Install dependencies

```bash
npm install
```

### 3. Konfigurasi environment

Salin `.env.example` ke `.env`, lalu isi `DATABASE_URL` dengan connection string PostgreSQL kamu:

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/lms_platform?schema=public"
```

> Variabel auth/storage/payment/email pada `.env.example` boleh dikosongkan dulu — akan dipakai pada tahap berikutnya.

### 4. (Opsional sekarang) Generate Prisma client

Karena belum ada model di `prisma/schema.prisma`, `prisma generate` akan menolak. Skip langkah ini sampai Tahap 2 menambahkan model. Cukup pastikan `DATABASE_URL` valid.

### 5. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) — kamu akan melihat landing page placeholder dengan tombol toggle dark/light mode di pojok kanan atas.

## Scripts

| Command          | Fungsi                              |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Start dev server (Next.js)          |
| `npm run build`  | Production build                    |
| `npm run start`  | Jalankan hasil build                |
| `npm run lint`   | Lint dengan ESLint                  |

## Path Aliases

Import alias diset ke `@/*` → `src/*`. Contoh:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

## Theme (Dark / Light Mode)

Theme provider via `next-themes` (attribute: `class`, defaultTheme: `system`). Toggle component ada di `src/components/shared/theme-toggle.tsx`. Untuk hindari flicker, root `<html>` diberi `suppressHydrationWarning`.

## Catatan Tahap 1

- **shadcn/ui** di-setup manual (bukan via CLI v4) karena CLI terbaru dirancang untuk Tailwind v4, sedangkan Next.js 14 ini pakai Tailwind v3. Konfigurasi (components.json, globals.css HSL, tailwind.config.ts) sudah disesuaikan dengan konvensi shadcn v0.9 + slate base color. Komponen baru bisa ditambah dengan menyalin dari [ui.shadcn.com](https://ui.shadcn.com/docs/components).
- **Prisma 5.22** dipakai (bukan v7) karena v7 sudah menghapus `url = env("DATABASE_URL")` di `schema.prisma` dan mengganti pola koneksi dengan adapter — ini akan ditambahkan kalau memang dibutuhkan di tahap selanjutnya.

## Lanjut ke Tahap 2

Tahap 2 akan menambahkan:

- Schema Prisma (User, Account, Session, Course, Lesson, Enrollment, dll)
- Migration pertama (`prisma migrate dev`)
- NextAuth.js / Auth.js untuk login/register (email + OAuth Google/GitHub)
- Halaman `(auth)/login` dan `(auth)/register`
- Middleware proteksi untuk route `(dashboard)`

Sebelum mulai Tahap 2, pastikan:

- [ ] `npm run dev` berjalan tanpa error
- [ ] Landing page tampil di `/`
- [ ] Toggle dark/light mode bekerja
- [ ] PostgreSQL local sudah running, `DATABASE_URL` valid
- [ ] Sudah commit progress Tahap 1 ke git
