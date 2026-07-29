export const env = {
  NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com",
  NEXT_PUBLIC_APP_NAME:
    process.env.NEXT_PUBLIC_APP_NAME || "Next.js Production Foundation",
  SUPABASE_URL: process.env.SUPABASE_URL || "Configured in .env.local",
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? "[SET]" : "[NOT SET]",
  DATABASE_URL: process.env.DATABASE_URL ? "[SET]" : "[NOT SET]",
  NODE_ENV: process.env.NODE_ENV || "development",
};
