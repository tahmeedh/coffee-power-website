import Link from "next/link";
import Image from "next/image";

const shopLinks = [
  { label: "Todos los Cafés", href: "/shop" },
  { label: "Ediciones Limitadas", href: "/shop?filter=limited" },
  { label: "Colección Signature", href: "/shop?filter=signature" },
  { label: "Tarjetas Regalo", href: "/shop#gift" },
  { label: "Suscripciones", href: "/subscribe" },
];

const companyLinks = [
  { label: "Nuestra Historia", href: "/story" },
  { label: "Herencia", href: "/heritage" },
  { label: "Suscríbete", href: "/subscribe" },
  { label: "Blog", href: "/journal" },
  { label: "Contacto", href: "mailto:hello@coffeepower.com" },
];

const connectLinks = [
  { label: "Instagram", href: "https://instagram.com/coffeepower", external: true },
  { label: "WhatsApp", href: "https://wa.me/", external: true },
  { label: "Boletín", href: "/#newsletter" },
  { label: "Información de Envío", href: "/story#shipping" },
  { label: "Ética", href: "/story#ethics" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dim border-t border-outline/60">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logos/isotipo.png"
                alt="Coffee Power"
                width={32}
                height={32}
                className="opacity-80"
              />
              <span className="font-display text-cream text-lg">Coffee Power</span>
            </div>
            <p className="font-body text-muted text-sm leading-relaxed mb-6">
              21 orígenes. Una obsesión. Café de especialidad seleccionado por Chris Rosas.
            </p>
            <div className="mb-6">
              <Image
                src="/assets/logos/chris-rosas-solo.png"
                alt="Chris Rosas"
                width={100}
                height={36}
                className="opacity-60 hover:opacity-90 transition-opacity invert"
              />
            </div>
            <div>
              <p className="label-caps text-muted mb-2">Horario</p>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Lun–Vie: 10:00–14:00 y 17:30–20:30<br />
                Sábado: 10:00–14:00
              </p>
            </div>
          </div>

          {/* Tienda */}
          <div>
            <p className="label-caps text-muted mb-5">Tienda</p>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-on-surface-variant text-sm hover:text-cream transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="label-caps text-muted mb-5">Empresa</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-on-surface-variant text-sm hover:text-cream transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conecta */}
          <div>
            <p className="label-caps text-muted mb-5">Conecta</p>
            <ul className="space-y-3">
              {connectLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-body text-on-surface-variant text-sm hover:text-cream transition-colors">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="font-body text-on-surface-variant text-sm hover:text-cream transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-outline/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted text-xs">
            © {new Date().getFullYear()} Coffee Power · Fundado por Chris Rosas · Todos los derechos reservados
          </p>
          <p className="label-caps text-muted text-[10px]">
            Especialidad · Origen Único · Comercio Directo
          </p>
        </div>
      </div>
    </footer>
  );
}
