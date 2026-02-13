import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function PaymentLinksPage() {
  return (
    <ProductPageLayout
      title="Payment Links & Forms"
      category="Payments"
      categoryHref="/products/payments"
      description="Create and send payment links and forms without code. Share a link and get paid—no integration required."
      features={[
        { title: "No-Code", description: "Create payment links in minutes." },
        { title: "Customizable", description: "Add your branding and messaging." },
        { title: "Trackable", description: "Monitor payment status in real-time." },
      ]}
    />
  );
}
