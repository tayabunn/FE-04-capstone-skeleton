import Link from "next/link";
import { Activity, ShieldCheck, GitBranch, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-200">NextStack Foundation</span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                v16.0 (App Router)
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Production-ready scaffold with server components, Tailwind design system, and CI/CD preview deployment.
            </p>
          </div>

          {/* Quick Links & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <Link
              href="/health"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Activity className="w-3.5 h-3.5 text-slate-400" />
              <span>System Health</span>
            </Link>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production Ready</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
              <span>Main Branch</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span>&copy; {new Date().getFullYear()} NextStack Foundation. All rights reserved.</span>
          <span className="font-mono text-slate-500">Deploy-on-Day-One Architecture</span>
        </div>
      </div>
    </footer>
  );
}
