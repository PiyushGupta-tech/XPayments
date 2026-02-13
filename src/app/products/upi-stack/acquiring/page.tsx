import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function UPIAcquiringPage() {
  return (
    <ProductPageLayout
      title="UPI Acquiring Stack"
      category="UPI Stack"
      categoryHref="/products/upi-stack"
      description="First UPI Stack on Cloud with 99.99% Uptime and 90% Success Rates. Zero technical declines with multi-cloud acquiring PSP."
      features={[
        { title: "99.99% Uptime", description: "Best-in-class reliability." },
        { title: "90% Success", description: "Industry-leading conversion rates." },
        { title: "Cloud Native", description: "Scalable, elastic infrastructure." },
      ]}
    />
  );
}
