import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function HyperUPIPage() {
  return (
    <ProductPageLayout
      title="HyperUPI"
      category="UPI Stack"
      categoryHref="/products/upi-stack"
      description="1-click UPI payments with 90%+ success rates. Industry-first lightning-fast UPI checkout for Indian customers—the best-in-class UPI experience."
      features={[
        { title: "1-Click Checkout", description: "90%+ success rates with minimal friction." },
        { title: "Lightning Fast", description: "Sub-second payment confirmation." },
        { title: "Zero Technical Declines", description: "Intelligent retry and routing." },
      ]}
    />
  );
}
