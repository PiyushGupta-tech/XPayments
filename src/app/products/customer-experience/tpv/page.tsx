import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function TPVPage() {
  return (
    <ProductPageLayout
      title="Third Party Validation"
      category="Customer Experience"
      categoryHref="/products/customer-experience"
      description="Support TPV with UPI & Netbanking. Enable third-party validation flows for compliant, seamless payments."
      features={[
        { title: "UPI TPV", description: "Third-party validation for UPI." },
        { title: "Netbanking TPV", description: "Bank-specific validation flows." },
        { title: "Compliant", description: "Regulatory-compliant implementation." },
      ]}
    />
  );
}
