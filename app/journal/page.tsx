import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Image from "next/image";
import Link from "next/link";
import { journalEntries } from "@/lib/journal";

export const metadata = {
  title: "Journal — Coffee Power",
  description: "Stories from the field, the roastery, and the cup. Origin stories, brew guides, and the thinking behind every Coffee Power selection.",
};

const categories = ["All", "Origin Stories", "Process & Craft", "Brew Guides", "Education", "Field Notes", "Harvest Reports"];

export default function JournalPage() {
  const [featured, ...rest] = journalEntries;

  return (
    <>
      <Nav />

      {/* HEADER */}
      <section className="pt-36 pb-14 max-w-screen-xl mx-auto px-5 md:px-10">
        <p className="label-caps text-muted mb-4">Stories from the Field</p>
        <h1 className="font-display text-cream text-5xl md:text-7xl leading-none tracking-tight">
          The <em>Journal</em>
        </h1>
        <p className="font-body text-on-surface-variant text-lg mt-5 max-w-xl">
          Origin stories, process deep-dives, brew guides, and the obsessive thinking behind every Coffee Power selection. Written by Chris Rosas.
        </p>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`border text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full cursor-default ${
                cat === "All"
                  ? "border-primary text-primary"
                  : "border-outline-variant text-muted hover:border-primary/50 hover:text-cream transition-colors"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED ENTRY */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 mb-16">
        <Link
          href={`/journal/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-0 border border-outline rounded overflow-hidden hover:border-primary/40 transition-colors"
        >
          <div className="relative h-64 md:h-auto overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-surface-container p-8 md:p-12 flex flex-col justify-center gap-5">
            <p className="label-caps text-primary">{featured.category}</p>
            <h2 className="font-display text-cream text-3xl md:text-4xl leading-tight">{featured.title}</h2>
            <p className="font-body text-on-surface-variant leading-relaxed">{featured.excerpt}</p>
            <p className="label-caps text-muted">
              {featured.author} ·{" "}
              {new Date(featured.publishedAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <span className="label-caps text-primary group-hover:translate-x-1 transition-transform inline-block">
              Read →
            </span>
          </div>
        </Link>
      </section>

      {/* ENTRY GRID — all 20 coffees */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((entry) => (
            <Link
              key={entry.slug}
              href={`/journal/${entry.slug}`}
              className="group flex flex-col border border-outline rounded overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              <div className="bg-surface-container flex-1 p-6 flex flex-col gap-3">
                <p className="label-caps text-primary">{entry.category}</p>
                <h3 className="font-display text-cream text-xl leading-snug group-hover:text-primary/90 transition-colors">
                  {entry.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed flex-1">
                  {entry.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-outline/40 pt-3 mt-1">
                  <p className="label-caps text-muted text-[10px]">
                    {new Date(entry.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                  <span className="label-caps text-primary text-[10px] group-hover:translate-x-0.5 transition-transform inline-block">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
