import PlaceholderCard from "@/components/ui/PlaceholderCard";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <PlaceholderCard
      title="Shopping Cart Page"
      description="Placeholder page for selected items, order summary, promotional codes, and subtotal calculations."
      route="/cart"
      icon={ShoppingCart}
      badge="Server Component"
      features={[
        "App Router page route initialized",
        "Server-rendered base with zero hydration overhead",
        "Fully responsive layout across mobile and desktop",
        "Prepared for cart state & checkout transitions",
      ]}
      primaryAction={{ label: "Proceed to Checkout", href: "/checkout" }}
      secondaryAction={{ label: "View Wishlist", href: "/wishlist" }}
    />
  );
}
