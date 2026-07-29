import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
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
  );
}
