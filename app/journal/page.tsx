import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/sections/NewsletterSection";
import JournalGrid from "@/components/ui/JournalGrid";
import { journalEntries } from "@/lib/journal";

export const metadata = {
  title: "Blog — Coffee Power",
  description: "Historias de origen, procesos artesanales, guías de preparación y el pensamiento detrás de cada selección Coffee Power.",
};

export default function JournalPage() {
  const [featured, ...rest] = journalEntries;

  return (
    <>
      <Nav />

      {/* CABECERA */}
      <section className="pt-36 pb-10 max-w-screen-xl mx-auto px-5 md:px-10">
        <p className="label-caps text-muted mb-4">Historias del Campo</p>
        <h1 className="font-display text-cream text-5xl md:text-7xl leading-none tracking-tight">
          El <em>Blog</em>
        </h1>
      </section>

      {/* GRID CON FILTROS (cliente) */}
      <JournalGrid featured={featured} rest={rest} />

      <NewsletterSection />
      <Footer />
    </>
  );
}
