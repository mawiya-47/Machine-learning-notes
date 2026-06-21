import { getAllSlugs, getChapter, getNav } from "@/lib/chapters";
import ChapterContent from "@/components/ChapterContent";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { meta } = getChapter(slug);
    return { title: `${meta.title} — ML Notes` };
  } catch {
    return { title: "ML Notes" };
  }
}

export default async function ChapterPage({ params }) {
  const { slug } = await params;
  const nav = getNav();
  let chapter;
  try {
    chapter = getChapter(slug);
  } catch {
    notFound();
  }

  const idx = nav.findIndex((n) => n.slug === slug);
  const prev = idx > 0 ? nav[idx - 1] : null;
  const next = idx < nav.length - 1 ? nav[idx + 1] : null;

  return (
    <div className="px-6 py-8 md:px-12 md:py-10 max-w-4xl mx-auto">
      <p className="text-indigo-400 text-sm font-medium mb-2">
        Chapter {chapter.meta.chapter}
      </p>
      <ChapterContent content={chapter.content} />

      <div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-6 text-sm">
        {prev ? (
          <Link
            href={`/chapters/${prev.slug}`}
            className="text-slate-300 hover:text-white"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/chapters/${next.slug}`}
            className="text-slate-300 hover:text-white text-right"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
