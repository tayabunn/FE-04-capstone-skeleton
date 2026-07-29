import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { LayoutDashboard, BarChart3, Users, Zap, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PlaceholderCard
        title="Dashboard Overview Page"
        description="Central command center placeholder for real-time metrics, project status, activity logs, and key performance indicators."
        route="/dashboard"
        icon={LayoutDashboard}
        badge="Server Component"
        features={[
          "App Router page initialized",
          "Server-rendered by default for fast TBT & LCP",
          "Shared root layout and navbar navigation integrated",
          "Responsive layout optimized for 375px & 1280px views",
        ]}
        primaryAction={{ label: "View Projects", href: "/projects" }}
        secondaryAction={{ label: "System Health", href: "/health" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Total Analytics</div>
              <div className="text-lg font-bold text-white">99.9% Uptime</div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Active Sessions</div>
              <div className="text-lg font-bold text-white">Ready</div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Deployment Pipeline</div>
              <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
