import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function UPIIssuingPage() {
  return (
    <ProductPageLayout
      title="UPI Issuing Stack"
      category="UPI Stack"
      categoryHref="/products/upi-stack"
      description="Multi-cloud Issuing PSP. Power UPI as a payment method for your app with full control over issuing infrastructure."
      features={[
        { title: "Multi-Cloud", description: "Resilient, globally distributed infrastructure." },
        { title: "Full Control", description: "Customize and optimize for your use case." },
        { title: "Scale", description: "Built for millions of transactions." },
      ]}
    />
  );
}
