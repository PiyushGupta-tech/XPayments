import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Merchant Dashboard</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Access your merchant dashboard to view transactions, analytics, and manage your payment integrations.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Transactions</h3>
            <p className="mt-2 text-sm text-gray-600">View and filter all payment transactions</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Analytics</h3>
            <p className="mt-2 text-sm text-gray-600">Conversion rates and revenue insights</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Integrations</h3>
            <p className="mt-2 text-sm text-gray-600">Manage payment gateways and APIs</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Reports</h3>
            <p className="mt-2 text-sm text-gray-600">Download statements and reconcile</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/login"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Log In to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
