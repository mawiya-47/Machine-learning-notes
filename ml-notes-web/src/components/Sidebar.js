"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar({ nav }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-indigo-600 text-white rounded-full w-12 h-12 shadow-lg"
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>
      <aside
        className={`${
          open ? "block" : "hidden"
        } md:block w-72 shrink-0 border-r border-slate-800 bg-slate-950 md:sticky md:top-[57px] md:h-[calc(100vh-57px)] overflow-y-auto px-4 py-6`}
      >
        <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 px-2">
          Chapters
        </p>
        <ul className="space-y-1">
          {nav.map((item) => {
            const href = `/chapters/${item.slug}`;
            const active = pathname === href;
            return (
              <li key={item.slug}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-indigo-600 text-white font-medium"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="text-slate-500 mr-2">
                    {String(item.num).padStart(2, "0")}
                  </span>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
