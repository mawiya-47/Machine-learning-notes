import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getNav } from "@/lib/chapters";

export const metadata = {
  title: "ML Notes — Free Open Source Machine Learning Guide",
  description:
    "A complete, free, open-source Machine Learning notes website — theory, code, visuals, mini-projects, cheat sheets and 100 MCQs.",
};

export default function RootLayout({ children }) {
  const nav = getNav();
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 font-semibold text-lg">
              <span className="text-2xl">📘</span>
              <span>ML Notes</span>
            </a>
            <nav className="flex items-center gap-4 text-sm text-slate-300">
              <a href="/" className="hover:text-white">Home</a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub ↗
              </a>
            </nav>
          </div>
        </header>
        <div className="flex-1 max-w-7xl w-full mx-auto flex">
          <Sidebar nav={nav} />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
        <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          Made with ❤️ — Open Source under MIT License
        </footer>
      </body>
    </html>
  );
}
