import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { FolderKanban, GitBranch, Layers, Star } from "lucide-react";

export default function ProjectsPage() {
  const sampleProjects = [
    { title: "Next.js Core Architecture", tag: "Foundation", status: "Active" },
    { title: "Tailwind Design Token System", tag: "UI/UX", status: "Ready" },
    { title: "Health SSR Diagnostic Module", tag: "API", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <PlaceholderCard
        title="Projects Management Page"
        description="Placeholder page for workspace projects, repository lists, task boards, and team collaboration views."
        route="/projects"
        icon={FolderKanban}
        badge="Server Component"
        features={[
          "Clean folder hierarchy under src/app/projects/page.tsx",
          "Server-side rendering setup without unnecessary client hooks",
          "Tailwind CSS custom properties & design tokens enabled",
          "Ready for state management & API data fetching",
        ]}
        primaryAction={{ label: "Go to Dashboard", href: "/dashboard" }}
        secondaryAction={{ label: "User Profile", href: "/profile" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-400" />
          Active Project Modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sampleProjects.map((p, idx) => (
            <div key={idx} className="glass-card rounded-xl p-4 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  {p.tag}
                </span>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
              </div>
              <h3 className="text-sm font-bold text-white">{p.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-2 border-t border-slate-800/60 font-mono">
                <GitBranch className="w-3.5 h-3.5" />
                <span>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
