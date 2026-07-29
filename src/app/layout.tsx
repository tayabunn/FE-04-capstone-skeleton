import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NextStack | Production Foundation",
    template: "%s | NextStack Foundation",
  },
  description:
    "A production-ready Next.js 16 App Router scaffold with Tailwind CSS design tokens, server components by default, and preview deployment setup.",
  metadataBase: new URL("https://your-project.vercel.app"),
  openGraph: {
    title: "NextStack Production Foundation",
    description: "Production-grade Next.js App Router scaffold ready for feature development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-500 selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
