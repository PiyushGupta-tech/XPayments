import Link from "next/link";

const posts = [
  { title: "Building 1-click UPI checkout at scale", excerpt: "How we achieved 90%+ success rates with HyperUPI.", date: "Feb 2025", category: "Engineering" },
  { title: "Payment orchestration: Why it matters", excerpt: "Route payments to the best performing gateway for higher conversions.", date: "Jan 2025", category: "Product" },
  { title: "The future of checkout experiences", excerpt: "Native checkout vs redirect—what works for your business.", date: "Dec 2024", category: "Product" },
  { title: "NACH eMandates: Simplified recurring payments", excerpt: "Enable subscriptions and EMI with bank-backed mandates.", date: "Nov 2024", category: "Payments" },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Blog</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Insights on payments, fintech, and building better checkout experiences.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <article key={i} className="group rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
              <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
              <p className="mt-4 text-xs text-gray-500">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
