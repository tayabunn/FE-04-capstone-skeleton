import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { FolderKanban } from "lucide-react";

export default function ProjectsPage() {
  return (
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
  );
}
