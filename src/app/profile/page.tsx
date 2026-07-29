import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <PlaceholderCard
      title="User Profile Page"
      description="Placeholder page for account details, user avatars, activity history, and authentication status."
      route="/profile"
      icon={User}
      badge="Server Component"
      features={[
        "Server Component structure with fast page response",
        "Unified glassmorphic theme design tokens",
        "Responsive breakpoints for mobile and desktop screens",
        "Ready for user session & Auth integrations",
      ]}
      primaryAction={{ label: "Account Settings", href: "/settings" }}
      secondaryAction={{ label: "View Projects", href: "/projects" }}
    />
  );
}
