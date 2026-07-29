import Link from "next/link";
import { 
  Rocket, 
  LayoutDashboard, 
  FolderKanban, 
  Settings, 
  User, 
  ShoppingCart, 
  Heart, 
  CreditCard, 
  Activity, 
  ShieldCheck, 
  GitBranch, 
  ArrowRight,
  Layers,
  Zap,
  Lock
} from "lucide-react";

const allRoutes = [
  { name: "Dashboard", href: "/dashboard", desc: "Analytics & overview page", icon: LayoutDashboard, badge: "Server Component" },
  { name: "Projects", href: "/projects", desc: "Project management grid", icon: FolderKanban, badge: "Server Component" },
  { name: "Cart", href: "/cart", desc: "Shopping cart placeholder", icon: ShoppingCart, badge: "Server Component" },
  { name: "Wishlist", href: "/wishlist", desc: "Saved items collection", icon: Heart, badge: "Server Component" },
  { name: "Checkout", href: "/checkout", desc: "Payment flow skeleton", icon: CreditCard, badge: "Server Component" },
  { name: "Profile", href: "/profile", desc: "User profile settings", icon: User, badge: "Server Component" },
  { name: "Settings", href: "/settings", desc: "Application preferences", icon: Settings, badge: "Server Component" },
  { name: "Health Check", href: "/health", desc: "Data fetching validation", icon: Activity, badge: "Live SSR Fetch" },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
          <Rocket className="w-4 h-4 text-blue-400" />
          <span>Phase 1: Foundations Complete</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Production-Ready <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            Next.js 16 App Router Scaffold
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Deploy-on-day-one architecture featuring scalable folder structure, Tailwind design system tokens, server components by default, and continuous deployment previews.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <span>Explore Skeleton Routes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/health"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 flex items-center gap-2 transition-all"
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Verify Data Fetching</span>
          </Link>
        </div>
      </section>

      {/* Architectural Principles Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-white">Server Components First</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All page routes are constructed as React Server Components by default to maximize streaming SSR performance and minimize client JavaScript bundle size.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="text-lg font-bold text-white">Deploy-on-Day-One</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Automated CI/CD pipeline structure prepared for instant Vercel git integration. Every commit creates an isolated, zero-downtime live preview URL.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Lock className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg font-bold text-white">Zero Secrets Committed</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Strict environment variable hierarchy using `.env.example` blueprint and git-ignored `.env.local` to prevent security leaks in source repositories.
          </p>
        </div>
      </section>

      {/* Routes & Placeholders Directory */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              Scaffolded Route Skeleton
            </h2>
            <p className="text-xs text-slate-400">
              All specified application endpoints exist as responsive placeholders with shared layout navigation.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">Total Routes: {allRoutes.length}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allRoutes.map((r) => {
            const Icon = r.icon;
            return (
              <Link
                key={r.href}
                href={r.href}
                className="glass-card rounded-xl p-4 border border-slate-800/80 hover:border-blue-500/40 group transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      {r.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {r.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono group-hover:text-slate-300">
                  <span>{r.href}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Deployment & Workflow Info Banner */}
      <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Ready for Vercel Deployment &amp; GitHub Integration
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            This repository is structured for instant import into Vercel with zero additional build configuration required. Connect your GitHub repository to enable automatic preview deployments on every push.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/health"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
          >
            Run Health Diagnostics
          </Link>
        </div>
      </section>
    </div>
  );
}
