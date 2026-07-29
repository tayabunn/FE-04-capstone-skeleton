import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <PlaceholderCard
      title="User Login Page"
      description="Authentication login placeholder page for user credentials, social OAuth logins, and session initiation."
      route="/login"
      icon={LogIn}
      badge="Server Component"
      features={[
        "App Router page route initialized",
        "Clean server component shell ready for form interactive components",
        "Unified navbar navigation and responsive layout",
        "Prepared for Supabase / NextAuth integration",
      ]}
      primaryAction={{ label: "Go to Register", href: "/register" }}
      secondaryAction={{ label: "Go to Dashboard", href: "/dashboard" }}
    />
  );
}
