import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CHAPTERS_DIR = path.join(process.cwd(), "content", "chapters");
const NAV_PATH = path.join(process.cwd(), "content", "nav.json");

export function getNav() {
  const raw = fs.readFileSync(NAV_PATH, "utf-8");
  return JSON.parse(raw);
}

export function getAllSlugs() {
  return getNav().map((n) => n.slug);
}

export function getChapter(slug) {
  const filePath = path.join(CHAPTERS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data, content };
}
