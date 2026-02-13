import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function RetryPage() {
  return (
    <ProductPageLayout
      title="Retry"
      category="Customer Experience"
      categoryHref="/products/customer-experience"
      description="Instant retries in case of payment failures. Recover lost conversions with intelligent retry logic across payment methods."
      features={[
        { title: "Automatic Retry", description: "Seamless retry without user friction." },
        { title: "Smart Routing", description: "Fallback to alternative gateways." },
        { title: "Analytics", description: "Track retry success and optimize." },
      ]}
    />
  );
}
