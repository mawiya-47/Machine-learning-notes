import Link from "next/link";
import { getNav } from "@/lib/chapters";

export default function Home() {
  const nav = getNav();
  const highlights = [
    { emoji: "📖", title: "26 Full Chapters", desc: "Theory, definitions, examples & interview Qs" },
    { emoji: "📊", title: "35+ Visuals", desc: "Charts, decision boundaries, heatmaps & diagrams" },
    { emoji: "🚀", title: "5 Mini Projects", desc: "House Prices, Iris, Segmentation, Spam, Titanic" },
    { emoji: "✅", title: "100 MCQs", desc: "With answers for interview prep" },
  ];

  return (
    <div>
      <section className="px-6 md:px-12 py-16 md:py-24 text-center max-w-4xl mx-auto">
        <p className="text-indigo-400 font-medium mb-3">100% Free &amp; Open Source</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Machine Learning Notes 📘
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-8">
          A complete, university-style guide to Machine Learning — simple
          explanations, real Python code, visuals, mini-projects, cheat
          sheets and 100 interview MCQs. Free for everyone, forever.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href={`/chapters/${nav[0].slug}`}
            className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl font-medium"
          >
            Start Learning →
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 hover:border-slate-500 transition px-6 py-3 rounded-xl font-medium"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <div className="text-3xl mb-2">{h.emoji}</div>
            <h3 className="font-semibold mb-1">{h.title}</h3>
            <p className="text-sm text-slate-400">{h.desc}</p>
          </div>
        ))}
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">All Chapters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {nav.map((item) => (
            <Link
              key={item.slug}
              href={`/chapters/${item.slug}`}
              className="rounded-xl border border-slate-800 hover:border-indigo-500 bg-slate-900/40 px-4 py-3 text-sm transition"
            >
              <span className="text-slate-500 mr-2">
                {String(item.num).padStart(2, "0")}
              </span>
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
