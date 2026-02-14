export const navLinks = {
  products: [
    {
      label: "Payments",
      href: "/products/payments",
      subItems: [
        { label: "HyperCheckout", href: "/products/payments/hypercheckout" },
        { label: "Express Checkout", href: "/products/payments/express-checkout" },
        { label: "Payouts", href: "/products/payments/payouts" },
        { label: "Payment Links & Forms", href: "/products/payments/payment-links" },
        { label: "Offers", href: "/products/payments/offers" },
        { label: "NACH Payments", href: "/products/payments/nach" },
      ],
    },
    {
      label: "UPI Stack",
      href: "/products/upi-stack",
      subItems: [
        { label: "HyperUPI", href: "/products/upi-stack/hyperupi" },
        { label: "UPI Issuing Stack", href: "/products/upi-stack/issuing" },
        { label: "UPI TPAP Stack", href: "/products/upi-stack/tpap" },
        { label: "UPI Acquiring Stack", href: "/products/upi-stack/acquiring" },
      ],
    },
    {
      label: "Affordability",
      href: "/products/affordability",
      subItems: [
        { label: "For Merchants", href: "/products/affordability/merchants" },
        { label: "For Lenders", href: "/products/affordability/lenders" },
      ],
    },
    {
      label: "Customer Experience",
      href: "/products/customer-experience",
      subItems: [
        { label: "QuickPay", href: "/products/customer-experience/quickpay" },
        { label: "Retry", href: "/products/customer-experience/retry" },
        { label: "Native OTP", href: "/products/customer-experience/native-otp" },
        { label: "Third Party Validation", href: "/products/customer-experience/tpv" },
      ],
    },
  ],
  resources: [
    { label: "Dashboard", href: "/resources/dashboard" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Newsroom", href: "/resources/newsroom" },
    { label: "Careers", href: "/resources/careers" },
    { label: "About", href: "/resources/about" },
    { label: "Case Studies", href: "/resources/case-studies" },
  ],
  docs: { label: "Docs", href: "/docs" },
};

export const footerLinks = {
  company: [
    { label: "About Us", href: "/resources/about" },
    { label: "Tech", href: "/developers" },
    { label: "Careers", href: "/resources/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Newsroom", href: "/resources/newsroom" },
  ],
  products: [
    { label: "HyperCheckout", href: "/products/payments/hypercheckout" },
    { label: "Express Checkout", href: "/products/payments/express-checkout" },
    { label: "UPI 360", href: "/products/upi-stack" },
    { label: "Ecosystem Products", href: "/products/payments" },
    { label: "HyperCredit", href: "/products/affordability" },
    { label: "Payouts", href: "/products/payments/payouts" },
  ],
  compliances: [
    { label: "Vulnerability Disclosure", href: "/compliances/vulnerability" },
    { label: "Payment Aggregation", href: "/compliances/pa" },
    { label: "PCI DSS 4.0", href: "/compliances/pci" },
    { label: "ISO 27001:2022", href: "/compliances/iso" },
    { label: "SOC 2 Type 2", href: "/compliances/soc2" },
  ],
  resources: [
    { label: "Merchant Home", href: "/resources/dashboard" },
    { label: "API Documentation", href: "/docs" },
    { label: "Blog", href: "/resources/blog" },
  ],
};

export const stats = [
  { value: "300 Mn+", label: "Transactions processed every day" },
  { value: "99.999%", label: "Uptime best in class" },
  { value: "2.5 Bn+", label: "App Installs with XPayments SDKs" },
  { value: "₹1 Lakh Cr+", label: "Annual TPV" },
];

export const trustedBy = ["Amazon", "Flipkart", "Swiggy", "Meesho", "Jio", "Myntra"];

export const productsOverview = [
  {
    title: "HyperCheckout",
    description:
      "Native checkout experiences, robust payment orchestration, and advanced analytics for higher conversions.",
    href: "/products/payments/hypercheckout",
    category: "Payments",
  },
  {
    title: "HyperUPI",
    description:
      "1-click UPI payments with 90%+ success rates. Lightning-fast checkout for Indian customers.",
    href: "/products/upi-stack/hyperupi",
    category: "UPI Stack",
  },
  {
    title: "HyperCredit",
    description:
      "Embed credit across purchase journeys. Unlock revenue with embedded credit and seamless lender integrations.",
    href: "/products/affordability",
    category: "Affordability",
  },
  {
    title: "QuickPay",
    description:
      "3x faster checkouts. Native OTP, instant retries, and third-party validation support.",
    href: "/products/customer-experience/quickpay",
    category: "Customer Experience",
  },
];

export const testimonials = [
  {
    quote:
      "We admire XPayments for its great UI and consistent experience across our Web, Android, and iOS platforms!",
    author: "Director of Growth, Travclan",
  },
  {
    quote:
      "XPayments has been more of a partner than just a vendor. The breadth of knowledge in the payments space has been impressive!",
    author: "Product, Bigbasket",
  },
  {
    quote:
      "Our teams have always worked together to achieve a better payment experience. XPayments conversion rates are a benchmark for the industry.",
    author: "Director Finance, Swiggy",
  },
  {
    quote:
      "The platform is user-friendly and has made a significant impact on streamlining our repayments and driving key success metrics.",
    author: "Product lead, Onecard",
  },
  {
    quote:
      "Ease of handling Payment Integrations and onboarding of PGs. Using its dynamic routing logic we achieved nearly 20% lift in payment success.",
    author: "Director, The Good Glamm Group",
  },
  {
    quote:
      "XPayments continues to offer a range of payment solutions with ease of integration which helps us provide seamless & choiceful payment options to our customers.",
    author: "Head of Payments Products, TataCliq",
  },
];
