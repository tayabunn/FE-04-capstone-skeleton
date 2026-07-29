# FE-04-capstone-skeleton

Production-ready Next.js 16 App Router foundation scaffold with Tailwind CSS design tokens, server components by default, placeholder routes, health check API, and Vercel deployment pipeline integration.

---

## Features & Architecture

- **Next.js 16 App Router**: Strict TypeScript, server components by default.
- **Design Tokens**: Configured Tailwind CSS v4 design system with CSS custom properties (`--background`, `--foreground`, `--primary`, etc.).
- **Placeholder Skeleton Routes**: `Home`, `Dashboard`, `Projects`, `Settings`, `Profile`, `Cart`, `Wishlist`, `Checkout`, `Login`, `Register`.
- **Health Check (`/health`)**: Server-side data fetching diagnostic page fetching from remote endpoint (`jsonplaceholder.typicode.com/todos/1`).
- **Environment Safeguards**: Blueprint `.env.example` and git-ignored `.env.local`.

---

## CI/CD & Automated Preview Deployment Workflow

Deploying on day one ensures every git commit automatically triggers a new deployment preview on Vercel:

```text
Create project
    ↓
Push to GitHub (tayabunn/FE-04-capstone-skeleton)
    ↓
Connect to Vercel
    ↓
Every future commit automatically creates a live preview
    ↓
Keep developing
```

Every push creates a unique preview deployment URL:

```text
https://fe-04-capstone-skeleton.vercel.app
```

or

```text
https://fe-04-capstone-skeleton-git-main.vercel.app
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npx --no-install next build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.
