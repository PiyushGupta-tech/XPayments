import ProductPageLayout from "@/components/ui/ProductPageLayout";

export default function NativeOTPPage() {
  return (
    <ProductPageLayout
      title="Native OTP"
      category="Customer Experience"
      categoryHref="/products/customer-experience"
      description="Auto-read and submit OTP. Eliminate manual OTP entry for faster, frictionless checkouts on mobile."
      features={[
        { title: "Auto-Read", description: "Detect and read OTP from SMS." },
        { title: "Auto-Submit", description: "Submit OTP without user action." },
        { title: "Secure", description: "OTP never stored or logged." },
      ]}
    />
  );
}
