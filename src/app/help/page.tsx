export const metadata = {
  title: "FAQ | XPayments",
  description: "Frequently asked questions about XPayments payment solutions.",
};

export default function HelpPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">FAQ</h1>
      <p className="mt-4 text-lg text-gray-600">
        Frequently asked questions about XPayments payment solutions, integration, and support.
      </p>
      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Getting Started</h2>
          <p className="mt-2 text-gray-600">Visit our Docs for integration guides and API documentation.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Support</h2>
          <p className="mt-2 text-gray-600">Contact us for enterprise support and technical assistance.</p>
        </div>
      </div>
    </main>
  );
}
