import Link from "next/link";
import { LucideIcon, ArrowRight, CheckCircle2, Server, Sparkles } from "lucide-react";

interface PlaceholderCardProps {
  title: string;
  description: string;
  route: string;
  icon: LucideIcon;
  badge?: string;
  features?: string[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function PlaceholderCard({
  title,
  description,
  route,
  icon: Icon,
  badge = "Server Component",
  features = [
    "App Router architecture ready",
    "Server-rendered by default for optimal performance",
    "Responsive at 375px mobile and 1280px desktop",
    "Prepared for feature implementation",
  ],
  primaryAction,
  secondaryAction,
}: PlaceholderCardProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-800 shadow-2xl">
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              {route}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {badge}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">Status: Ready</span>
        </div>

        {/* Main Content Info */}
        <div className="flex flex-col sm:flex-row items-start gap-5 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-slate-900 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
            <Icon className="w-7 h-7 text-blue-400" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Feature Check Grid */}
        <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Foundation Readiness Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {primaryAction ? (
            <Link
              href={primaryAction.href}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-blue-600/20 transition-all"
            >
              <span>{primaryAction.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-blue-600/20 transition-all"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          {secondaryAction ? (
            <Link
              href={secondaryAction.href}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all"
            >
              {secondaryAction.label}
            </Link>
          ) : (
            <Link
              href="/health"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all"
            >
              Check Health Endpoint
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
