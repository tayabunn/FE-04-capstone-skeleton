import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <PlaceholderCard
      title="Application Settings Page"
      description="Placeholder page for application configuration, notification settings, security options, and API key management."
      route="/settings"
      icon={Settings}
      badge="Server Component"
      features={[
        "App Router page route initialized",
        "Configured for upcoming form interactivity",
        "Consistent layout and navigation experience",
        "Prepared for environment variable controls",
      ]}
      primaryAction={{ label: "User Profile", href: "/profile" }}
      secondaryAction={{ label: "Check Health", href: "/health" }}
    />
  );
}
