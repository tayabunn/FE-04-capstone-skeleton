import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <PlaceholderCard
      title="User Registration Page"
      description="Account creation placeholder page for new user signups, email verification, and profile setup."
      route="/register"
      icon={UserPlus}
      badge="Server Component"
      features={[
        "App Router page route initialized",
        "Server-rendered page shell with zero initial client JS payload",
        "Responsive styling and design system tokens",
        "Prepared for registration API flow",
      ]}
      primaryAction={{ label: "Already have account? Login", href: "/login" }}
      secondaryAction={{ label: "Go to Home", href: "/" }}
    />
  );
}
