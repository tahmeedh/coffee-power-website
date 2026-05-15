"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { JournalEntry } from "@/lib/journal";

const CATEGORIES = [
  "Todos",
  "Origin Stories",
  "Process & Craft",
  "Brew Guides",
  "Education",
  "Field Notes",
  "Harvest Reports",
];

const CATEGORY_ES: Record<string, string> = {
  "Todos": "Todos",
  "Origin Stories": "Historias de Origen",
  "Process & Craft": "Proceso y Artesanado",
  "Brew Guides": "Guías de Preparación",
  "Education": "Educación",
  "Field Notes": "Notas de Campo",
  "Harvest Reports": "Informes de Cosecha",
};

interface Props {
  featured: JournalEntry;
  rest: JournalEntry[];
}

export default function JournalGrid({ featured, rest }: Props) {
  const [active, setActive] = useState("Todos");

  const allEntries = [featured, ...rest];

  const filtered =
    active === "Todos"
      ? allEntries
      : allEntries.filter((e) => e.category === active);

  const [featuredEntry, ...gridEntries] = filtered;

  return (
    <>
      {/* Category filter */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 mb-12">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`border text-[10px] font-body font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full transition-all duration-200 ${
                active === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-outline-variant text-muted hover:border-primary/50 hover:text-cream"
              }`}
            >
              {CATEGORY_ES[cat] ?? cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured entry */}
      {featuredEntry && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-10 mb-16">
          <Link
            href={`/journal/${featuredEntry.slug}`}
            className="group grid md:grid-cols-2 gap-0 border border-outline rounded overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className="relative h-64 md:h-auto overflow-hidden">
              <Image
                src={featuredEntry.image}
                alt={featuredEntry.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="bg-surface-container p-8 md:p-12 flex flex-col justify-center gap-5">
              <p className="label-caps text-primary">{CATEGORY_ES[featuredEntry.category] ?? featuredEntry.category}</p>
              <h2 className="font-display text-cream text-3xl md:text-4xl leading-tight">
                {featuredEntry.title}
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {featuredEntry.excerpt}
              </p>
              <p className="label-caps text-muted">
                {featuredEntry.author} ·{" "}
                {new Date(featuredEntry.publishedAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <span className="label-caps text-primary group-hover:translate-x-1 transition-transform inline-block">
                Leer →
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Grid */}
      {gridEntries.length > 0 && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridEntries.map((entry) => (
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
                  <p className="label-caps text-primary">{CATEGORY_ES[entry.category] ?? entry.category}</p>
                  <h3 className="font-display text-cream text-xl leading-snug group-hover:text-primary/90 transition-colors">
                    {entry.title}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed flex-1">
                    {entry.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-outline/40 pt-3 mt-1">
                    <p className="label-caps text-muted text-[10px]">
                      {new Date(entry.publishedAt).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                    <span className="label-caps text-primary text-[10px] group-hover:translate-x-0.5 transition-transform inline-block">
                      Leer →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-10 pb-24 text-center">
          <p className="font-body text-muted text-lg">No hay artículos en esta categoría.</p>
        </section>
      )}
    </>
  );
}
