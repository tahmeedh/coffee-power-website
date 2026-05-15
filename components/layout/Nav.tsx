"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Tienda", href: "/shop" },
  { label: "Nuestra Historia", href: "/story" },
  { label: "Herencia", href: "/heritage" },
  { label: "Suscripción", href: "/subscribe" },
  { label: "Blog", href: "/journal" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface-dim/95 backdrop-blur-xl border-b border-outline/50 shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <Image
              src="/assets/logos/isotipo.png"
              alt="Coffee Power"
              fill
              sizes="32px"
              className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-white text-lg tracking-tight leading-none drop-shadow-sm">
              Coffee Power
            </span>
            <span className="font-body text-white/50 text-[9px] tracking-[0.18em] uppercase leading-tight mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              por Chris Rosas
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative px-4 py-2 label-caps transition-colors duration-200 group ${
                  scrolled
                    ? "text-on-surface-variant hover:text-cream"
                    : "text-white hover:text-white/80"
                }`}
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          {/* Subscribe pill */}
          <Link
            href="/subscribe"
            className={`hidden md:inline-flex items-center gap-1.5 border text-[10px] font-body font-semibold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 ${
              scrolled
                ? "border-primary/60 hover:border-primary hover:bg-primary/10 text-primary"
                : "border-white/60 hover:border-white text-white hover:bg-white/10"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${scrolled ? "bg-primary" : "bg-white"}`} />
            Suscríbete
          </Link>

          {/* Bag icon */}
          <Link
            href="/shop"
            aria-label="Tienda"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
              scrolled
                ? "border-outline/60 hover:border-primary/60 text-on-surface-variant hover:text-cream"
                : "border-white/50 hover:border-white text-white hover:text-white/80"
            }`}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
              scrolled
                ? "border-outline/60 hover:border-primary/60 text-on-surface-variant hover:text-cream"
                : "border-white/50 hover:border-white text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Copper accent line on scroll */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-dim/98 backdrop-blur-xl border-t border-outline/40 px-5 py-8">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-center justify-between py-3 border-b border-outline/30 label-caps text-on-surface-variant hover:text-cream transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href="/subscribe"
              className="flex items-center justify-center gap-2 border border-primary/60 text-primary text-[10px] font-body font-semibold tracking-widest uppercase py-3 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Suscríbete Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
