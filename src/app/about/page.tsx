import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "About - Potato Shed BBQ",
  description:
    "The story of Braden and Rich, pit masters with 30+ years of BBQ experience. Learn about MeatCraft and our philosophy.",
};

function parseMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-stone-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-stone-900 mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-extrabold text-stone-900 mb-6">$1</h1>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-amber-500 pl-4 italic text-stone-600 my-6">$1</blockquote>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-stone-900">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^(?!<[hbp]|<block)(.*\S.*)$/gm, '<p class="text-stone-600 leading-relaxed mb-4">$1</p>');
}

export default function AboutPage() {
  const aboutPath = path.join(process.cwd(), "content", "about.md");
  const markdown = fs.readFileSync(aboutPath, "utf-8");
  const html = parseMarkdown(markdown);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl font-extrabold tracking-tight">About</h1>
          <p className="text-stone-400 mt-2">
            Over 30 years of BBQ passion
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
