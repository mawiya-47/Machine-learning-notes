import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

export default function ChapterContent({ content }) {
  return (
    <article className="prose prose-invert prose-slate max-w-none prose-headings:scroll-mt-24 prose-img:rounded-xl prose-img:border prose-img:border-slate-800 prose-table:text-sm prose-pre:bg-slate-900 prose-code:text-indigo-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src, alt }) => (
            <span className="block my-6">
              <img
                src={src}
                alt={alt || "chart"}
                className="rounded-xl border border-slate-800 mx-auto max-w-full"
                loading="lazy"
              />
            </span>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-indigo-400 hover:text-indigo-300">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
