import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  return (
    <PlaceholderCard
      title="Saved Wishlist Page"
      description="Placeholder page for saved items, favorite products, stock availability indicators, and quick-add actions."
      route="/wishlist"
      icon={Heart}
      badge="Server Component"
      features={[
        "App Router page route initialized",
        "Server component by default for fast page delivery",
        "Design system tokens applied for card borders and status tags",
        "Ready for wishlist backend sync",
      ]}
      primaryAction={{ label: "View Cart", href: "/cart" }}
      secondaryAction={{ label: "Go to Dashboard", href: "/dashboard" }}
    />
  );
}
