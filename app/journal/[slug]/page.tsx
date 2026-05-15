import { notFound } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { journalEntries, getEntryBySlug, generateStaticEntryParams } from "@/lib/journal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return generateStaticEntryParams();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} — Coffee Power Journal`,
    description: entry.excerpt,
  };
}

export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();

  const paragraphs = entry.body.split("\n\n").filter(Boolean);

  // Pick 2 related entries (same category, different slug)
  const related = journalEntries
    .filter((e) => e.slug !== slug && e.category === entry.category)
    .slice(0, 2);

  const fallbackRelated = journalEntries
    .filter((e) => e.slug !== slug)
    .slice(0, 2 - related.length);

  const relatedEntries = [...related, ...fallbackRelated].slice(0, 2);

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-5 md:px-10 pt-28 pb-12">
          <p className="label-caps text-primary mb-4">{entry.category}</p>
          <h1 className="font-display text-cream text-4xl md:text-6xl leading-tight tracking-tight max-w-3xl">
            {entry.title}
          </h1>
        </div>
      </section>

      {/* META */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 py-6 flex items-center gap-6 border-b border-outline">
        <p className="label-caps text-muted">{entry.author}</p>
        <span className="text-outline">·</span>
        <p className="label-caps text-muted">
          {new Date(entry.publishedAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <span className="text-outline hidden md:block">·</span>
        <p className="label-caps text-muted hidden md:block">{entry.category}</p>
      </section>

      {/* BODY */}
      <article className="max-w-2xl mx-auto px-5 md:px-10 py-14">
        <p className="font-body text-on-surface-variant text-xl leading-relaxed mb-10 font-light">
          {entry.excerpt}
        </p>
        {paragraphs.map((para, i) => (
          <p key={i} className="font-body text-on-surface text-base md:text-lg leading-relaxed mb-6">
            {para}
          </p>
        ))}

        {entry.relatedProduct && (
          <div className="mt-14 p-8 bg-surface-container border border-outline rounded text-center">
            <p className="label-caps text-muted mb-3">Experience It</p>
            <h3 className="font-display text-cream text-2xl mb-4">
              Ready to taste this yourself?
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href={`/shop/${entry.relatedProduct}`} variant="primary">
                Shop This Coffee
              </Button>
              <Button href="/subscribe" variant="ghost">
                Subscribe &amp; Save
              </Button>
            </div>
          </div>
        )}
      </article>

      {/* RELATED ENTRIES */}
      {relatedEntries.length > 0 && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-10 pb-16">
          <div className="border-t border-outline pt-12">
            <p className="label-caps text-muted mb-8">Continue Reading</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedEntries.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/journal/${rel.slug}`}
                  className="group flex gap-5 border border-outline rounded overflow-hidden hover:border-primary/40 transition-colors p-5"
                >
                  <div className="relative w-24 h-24 shrink-0 rounded overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="label-caps text-primary text-[10px]">{rel.category}</p>
                    <h4 className="font-display text-cream text-base leading-snug group-hover:text-primary/90 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="label-caps text-muted text-[10px]">
                      {new Date(rel.publishedAt).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BACK */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 pb-16">
        <Button href="/journal" variant="ghost">
          ← Back to Journal
        </Button>
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
}
