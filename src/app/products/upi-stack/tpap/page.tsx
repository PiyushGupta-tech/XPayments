import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function UPITPAPPage() {
  return (
    <ProductPageLayout
      title="UPI TPAP Stack"
      category="UPI Stack"
      categoryHref="/products/upi-stack"
      description="Become a UPI app with SDK and S2S APIs. Power industry-best UPI experience for your customers—used by CRED, Amazon, Slice and more."
      features={[
        { title: "UPI SDK", description: "Native SDK for Android and iOS." },
        { title: "S2S APIs", description: "Server-to-server integration for web." },
        { title: "TPAP Ready", description: "Full NPCI compliance for TPAP apps." },
      ]}
    />
  );
}
