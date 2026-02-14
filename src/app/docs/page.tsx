import Link from "next/link";

const sections = [
  { title: "Getting Started", description: "Quick start guide for integrating XPayments", href: "#" },
  { title: "Authentication", description: "API keys, webhooks, and security", href: "#" },
  { title: "Payments API", description: "Create and manage payment transactions", href: "#" },
  { title: "UPI Integration", description: "HyperUPI and UPI stack documentation", href: "#" },
  { title: "Webhooks", description: "Handle payment events in real-time", href: "#" },
  { title: "SDKs", description: "JavaScript, Python, and mobile SDKs", href: "#" },
];

export default function DocsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">API Documentation</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Integrate XPayments into your application. Find guides, API references, and SDK documentation.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <Link
              key={i}
              href={section.href}
              className="rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
