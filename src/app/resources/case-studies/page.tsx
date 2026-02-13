import Link from "next/link";

const studies = [
  { company: "Swiggy", quote: "Our teams have always worked together to achieve a better payment experience. 1x Rupee conversion rates are a benchmark for the industry.", author: "Director Finance, Swiggy", metric: "20% lift in payment success" },
  { company: "Bigbasket", quote: "1x Rupee has been more of a partner than just a vendor. The breadth of knowledge in the payments space has been impressive.", author: "Product, Bigbasket", metric: "Streamlined integrations" },
  { company: "TataCliq", quote: "A range of payment solutions with ease of integration. Seamless & choiceful payment options for our customers.", author: "Head of Payments Products, TataCliq", metric: "Native checkout experience" },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Case Studies</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Learn how leading businesses use 1x Rupee to drive payment success and grow revenue.
        </p>

        <div className="mt-16 space-y-12">
          {studies.map((study, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-8 md:p-12">
              <p className="text-2xl font-bold text-primary">{study.company}</p>
              <blockquote className="mt-6 text-xl text-gray-700">&ldquo;{study.quote}&rdquo;</blockquote>
              <p className="mt-4 text-sm text-gray-600">— {study.author}</p>
              <p className="mt-2 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{study.metric}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
