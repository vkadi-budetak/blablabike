# 🚲 BlablaBike MVP

```text
  ____  _       _     _       ____  _ _
 | __ )| | __ _| |__ | | __ _| __ )(_) | _____
 |  _ \| |/ _` | '_ \| |/ _` |  _ \| | |/ / _ \
 | |_) | | (_| | |_) | | (_| | |_) | |   <  __/
 |____/|_|\__,_|_.__/|_|\__,_|_.__/|_|_|\_\___|
```

**BlablaBike** is a modern bike rental service created as part of a school internship.
The project allows users to find available bikes, check real-time availability, and complete bookings with built-in security and validation.

---

## 🛠 Tech Stack

Our team used a powerful set of tools to build a fast and scalable application:

- **Core Framework:** `Next.js 15 (App Router)`
- **Language:** `TypeScript`
- **Styling:** `Tailwind CSS & Shadcn/UI`
- **Database:** `PostgreSQL`
- **ORM:** `Drizzle ORM`
- **Authentication:** `NextAuth.js`
- **Media Management:** `Cloudinary`
- **Deployment & Hosting:** `Vercel`
- **Version Control:** `GitHub`
- **Icons:** `Lucide React`

---

## 👥 Our Team

### 💻 Developers

- **Vladyslav Kravchenko**
- **Dumitru Gangan**
- **Dmitrii Evdokimov**
- **Kateryna Matvieieva**
- **Stepan Serbin**

### 🔍 QA Engineers

- **Daryna Suk**
- **Dariia Boiko**
- **Vladimir Dinu**
- **Hanna Kozlianska**

---

## 🚦 Git Flow & Development Rules

**Protected Branches:**

- `main` — Production-ready, stable code only.
- `develop` — Integration branch for features and testing.

**Workflow:**

- Features are developed in `feat/` or `fix/` branches.
- Pull Requests require at least one code review approval.
- QA Verification must be completed in the `develop` branch before merging to `main`.

---

## 🚀 Getting Started

1. Clone the repository:

`git clone https://github.com/vkadi-budetak/blablabike.git`

2. Install dependencies:

`npm install`

3. Environment Variables:

Create a `.env.local` file and add your `DATABASE_URL`, `NEXTAUTH_SECRET`, and `CLOUDINARY` credentials.

4. Run locally:

`npm run dev`

5. Open in browser:

`http://localhost:3000`
