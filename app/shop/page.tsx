import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Image from "next/image";
import { products, productCategories } from "@/lib/products";

export const metadata = {
  title: "Tienda — Coffee Power",
  description: "Descubre 21 cafés de especialidad de origen único, seleccionados por Chris Rosas.",
};

export default function ShopPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <Image src="/assets/backgrounds/golden-sunset.jpg" alt="Origen Golden Sunset" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-5 md:px-10 pt-36 pb-12 md:pt-44 md:pb-16">
          <p className="label-caps text-primary mb-4">La Colección Completa</p>
          <h1 className="font-display text-white text-5xl md:text-7xl leading-none tracking-tight mb-4 drop-shadow-lg">
            21 Orígenes.<br /><em>Una Obsesión.</em>
          </h1>
          <p className="font-body text-white/80 text-lg max-w-lg drop-shadow">
            Cada bolsa contiene 300g de café de calidad specialty, tostado en pequeño lote y enviado en 48 horas.
          </p>
        </div>
      </section>

      {/* PRODUCTO DESTACADO — Geisha */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative h-80 md:h-[500px] bg-surface-dim rounded overflow-hidden flex items-center justify-center">
            <Image src="/assets/products/geisha.png" alt="Geisha" width={240} height={340} className="object-contain drop-shadow-2xl" />
            <span className="absolute top-5 left-5 text-[10px] font-body font-semibold tracking-widest uppercase text-tertiary border border-tertiary/40 px-2 py-0.5 rounded-[2px]">
              Edición Limitada
            </span>
          </div>
          <div>
            <p className="label-caps text-muted mb-3">La Estrella de Esta Temporada</p>
            <h2 className="font-display text-cream text-5xl leading-tight mb-4"><em>Geisha</em></h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-5">
              La joya de la corona del café de especialidad. Cultivado en las brumosas tierras altas de Boquete, Panamá — esta variedad Gesha abre con jazmín y bergamota, profundizando hacia melocotón maduro y miel de flor silvestre.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Jazmín", "Bergamota", "Melocotón", "Miel"].map((n) => (
                <Chip key={n} label={n} />
              ))}
            </div>
            <div className="flex items-center gap-5 mb-8">
              <span className="font-body text-cream font-semibold text-xl">€28,00</span>
              <span className="label-caps text-muted">300g · Lavado · 1.600–1.800m</span>
            </div>
            <div className="flex gap-4">
              <Button href="/shop/geisha" variant="primary" size="lg">Ver Detalles</Button>
              <Button href="/shop/geisha" variant="ghost" size="lg">Añadir al Carrito</Button>
            </div>
          </div>
        </div>
      </section>

      {/* COSECHA ACTUAL */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading label="Temporada Actual" heading={<>Llegadas de <em>Esta Semana</em></>} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productCategories.current.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* EDICIONES LIMITADAS */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading label="Mientras Haya Stock" heading={<>Ediciones <em>Limitadas</em></>} subheading="Lotes pequeños. Cuando se acaban, se acaban." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productCategories.limited.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* EDITORIAL — Herencia */}
      <section className="section-gap bg-surface-container/30 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <p className="label-caps text-muted mb-4">La Filosofía</p>
              <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-6">
                El café como <em>patrimonio vivo</em>
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-6">
                Cada origen de esta colección existe gracias a personas extraordinarias — agricultores, recolectores y procesadores que han dedicado generaciones a sacar lo mejor de su tierra. Cuando compras en Coffee Power, inviertes directamente en esas relaciones.
              </p>
              <div className="border-l-2 border-primary pl-5 mb-8">
                <p className="font-display italic text-cream text-2xl leading-snug mb-3">
                  &ldquo;El comercio directo no es un término de marketing. Es un compromiso.&rdquo;
                </p>
                <p className="label-caps text-muted">Chris Rosas, Fundador</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { stat: "21", label: "Orígenes" },
                  { stat: "100%", label: "Calidad Specialty" },
                  { stat: "48h", label: "Tostado a Envío" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-primary text-3xl mb-1">{item.stat}</p>
                    <p className="label-caps text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-[480px] rounded overflow-hidden">
              <Image src="/assets/backgrounds/supremo-pc.jpg" alt="Agricultores de café" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* COLECCIÓN SIGNATURE */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading label="Siempre Disponibles" heading={<>Colección <em>Signature</em></>} subheading="Nuestros clásicos de todo el año. Tostados al pedido, cada semana." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productCategories.signature.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* TILES */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "🎁", title: "Tarjetas Regalo", body: "Regala el don del café extraordinario. Tarjetas regalo digitales entregadas al instante.", cta: "Enviar un Regalo", href: "/shop#gift" },
            { icon: "📦", title: "Suscríbete y Ahorra", body: "Recibe café de especialidad seleccionado personalmente cada mes. Cancela cuando quieras.", cta: "Ver Planes", href: "/subscribe" },
            { icon: "♻️", title: "Ética Pura", body: "Comercio directo. Envase reciclable. Tostado neutro en carbono. Sin compromisos.", cta: "Nuestra Herencia", href: "/heritage" },
          ].map((tile) => (
            <div key={tile.title} className="bg-surface-container border border-outline rounded p-8 flex flex-col gap-4">
              <span className="text-3xl">{tile.icon}</span>
              <h3 className="font-display text-cream text-2xl">{tile.title}</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed flex-1">{tile.body}</p>
              <Button href={tile.href} variant="text" className="text-primary self-start">{tile.cta} →</Button>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
