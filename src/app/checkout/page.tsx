import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { CreditCard } from "lucide-react";

export default function CheckoutPage() {
  return (
    <PlaceholderCard
      title="Checkout & Payment Page"
      description="Placeholder page for shipping details, payment gateway integrations, order review, and purchase confirmation."
      route="/checkout"
      icon={CreditCard}
      badge="Server Component"
      features={[
        "App Router page route initialized",
        "Server-rendered foundation with strict TS types",
        "Optimized layout spacing for responsive screens",
        "Prepared for payment provider integration",
      ]}
      primaryAction={{ label: "View Cart", href: "/cart" }}
      secondaryAction={{ label: "Check Health", href: "/health" }}
    />
  );
}
