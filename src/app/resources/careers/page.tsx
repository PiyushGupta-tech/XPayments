import Link from "next/link";

const openings = [
  { title: "Senior Backend Engineer", department: "Engineering", location: "Bengaluru, India" },
  { title: "Product Manager - Payments", department: "Product", location: "Bengaluru, India" },
  { title: "Frontend Engineer", department: "Engineering", location: "Remote" },
  { title: "DevOps Engineer", department: "Engineering", location: "Bengaluru, India" },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Careers</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Join our team and help build the future of payments. We&apos;re looking for people who are passionate about solving hard problems at scale.
        </p>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Why Join Us</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Impact at Scale</h3>
              <p className="mt-2 text-sm text-gray-600">Power millions of transactions every day</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Growth</h3>
              <p className="mt-2 text-sm text-gray-600">Learn and grow with the best in payments</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Culture</h3>
              <p className="mt-2 text-sm text-gray-600">For developers, by developers</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Flexibility</h3>
              <p className="mt-2 text-sm text-gray-600">Remote-first with hybrid options</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>
          <div className="mt-6 divide-y divide-gray-200 rounded-lg border border-gray-200">
            {openings.map((job, i) => (
              <div key={i} className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{job.department} · {job.location}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
