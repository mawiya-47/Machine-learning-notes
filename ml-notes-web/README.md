# 📘 ML Notes — Web

The official website for **Machine Learning Notes** — a free, open-source,
university-style ML guide. Built with **Next.js 16 + Tailwind CSS**, content
sourced directly from the companion Jupyter notebook (`/notebook`).

🔗 Live demo: _add your Vercel URL here after deploying_

## ✨ Features
- 26 chapters: theory, definitions, real-life examples, interview Qs, pros/cons
- 35+ pre-rendered charts & diagrams
- 5 mini-projects (House Prices, Iris, Customer Segmentation, Spam Detection, Titanic)
- Cheat sheet, formula sheet, revision notes
- 100 MCQs with collapsible answers
- 100% static — fast, free hosting on Vercel

## 🗂️ Project Structure
```
ml-notes-web/
├── content/
│   ├── chapters/        # one .md file per chapter (auto-generated from the notebook)
│   └── nav.json         # chapter navigation order
├── public/graphs/       # chart PNGs referenced by chapters
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Sidebar, ChapterContent
│   └── lib/chapters.js   # markdown loader
└── package.json
```

## 🚀 Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## 🏗️ Build for production
```bash
npm run build
npm start
```

## ☁️ Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework Preset: **Next.js** (auto-detected). No env vars required.
4. Click **Deploy** — done! 🎉

Or with the CLI:
```bash
npm i -g vercel
vercel --prod
```

## ✍️ Updating content
Chapter markdown lives in `content/chapters/*.md` with frontmatter:
```md
---
title: "Linear Regression"
chapter: 5
slug: "05-linear-regression"
---

### Content here in Markdown...
```
Edit any file and the corresponding page updates automatically. To regenerate
all chapters fresh from the notebook, see `/notebook/ML_Notes.ipynb` and the
extraction script in the repo root (`scripts/extract_chapters.py`).

## 📄 License
MIT — see [LICENSE](../LICENSE).
