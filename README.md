# FE-04-capstone-skeleton

Next.js 16 App Router production-ready foundation scaffold with Tailwind CSS design tokens, server components by default, placeholder routes, health check API, and Vercel deployment pipeline setup.

## Features & Architecture

- **Next.js 16 App Router**: Strict TypeScript, server components by default.
- **Design Tokens**: Configured Tailwind CSS v4 design system with CSS custom properties (`--background`, `--foreground`, `--primary`, etc.).
- **Placeholder Skeleton Routes**: `Home`, `Dashboard`, `Projects`, `Settings`, `Profile`, `Cart`, `Wishlist`, `Checkout`, `Login`, `Register`.
- **Health Check (`/health`)**: Server-side data fetching diagnostic page fetching from remote endpoint (`jsonplaceholder.typicode.com/todos/1`).
- **Environment Safeguards**: Blueprint `.env.example` and git-ignored `.env.local`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
