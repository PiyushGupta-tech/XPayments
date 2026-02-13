import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function NACHPage() {
  return (
    <ProductPageLayout
      title="NACH Payments"
      category="Payments"
      categoryHref="/products/payments"
      description="Simplified NACH debit eMandates. Enable recurring payments for subscriptions, EMI, and installment plans with bank-backed mandates."
      features={[
        { title: "eMandate", description: "Digital mandate registration with banks." },
        { title: "Recurring", description: "Automated debit for subscriptions." },
        { title: "Compliance", description: "NPCI-compliant NACH integration." },
      ]}
    />
  );
}
