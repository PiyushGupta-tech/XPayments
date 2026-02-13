import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function AffordabilityLendersPage() {
  return (
    <ProductPageLayout
      title="HyperCredit for Lenders"
      category="Affordability"
      categoryHref="/products/affordability"
      description="Accelerate lending growth with pre-qualified leads. Connect with merchants and reach customers at the point of purchase."
      features={[
        { title: "Pre-Qualified Leads", description: "Intent-based customer acquisition." },
        { title: "Merchant Network", description: "Access to top e-commerce merchants." },
        { title: "Real-Time Decisions", description: "Instant credit decisions at checkout." },
      ]}
    />
  );
}
