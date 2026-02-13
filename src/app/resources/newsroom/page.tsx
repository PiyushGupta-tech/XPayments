const news = [
  { title: "1x Rupee raises $50M in Series D follow-up", date: "Feb 2025", type: "Funding" },
  { title: "1x Rupee partners with leading banks for UPI expansion", date: "Jan 2025", type: "Partnership" },
  { title: "HyperUPI crosses 300M daily transactions", date: "Dec 2024", type: "Milestone" },
  { title: "1x Rupee achieves SOC 2 Type 2 certification", date: "Nov 2024", type: "Compliance" },
];

export default function NewsroomPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Newsroom</h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Latest news, press releases, and updates from 1x Rupee.
        </p>

        <div className="mt-16 divide-y divide-gray-200">
          {news.map((item, i) => (
            <article key={i} className="flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.type}</span>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h2>
              </div>
              <p className="text-sm text-gray-500">{item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
