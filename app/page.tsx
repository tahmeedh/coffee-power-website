import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EditorialSplit from "@/components/ui/EditorialSplit";
import ProductCard from "@/components/ui/ProductCard";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProducts, products } from "@/lib/products";

const ORIGENES = [
  "Panamá", "Colombia", "Costa Rica", "Brasil", "Perú",
  "Nicaragua", "Kenia", "Hawái", "Puerto Rico", "Etiopía",
];

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <HeroSection
        label="Café de Especialidad Origen Único"
        heading={<>El Café es <em>Poder.</em></>}
        subheading="21 orígenes. Una obsesión. Seleccionado por Chris Rosas."
        primaryCta={{ label: "Explorar la Colección", href: "/shop" }}
        secondaryCta={{ label: "Nuestra Historia", href: "/story" }}
        backgroundImage="/assets/backgrounds/supremo-pc.jpg"
        backgroundAlt="Agricultores de café en las laderas colombianas"
        overlay="heavy"
      />

      {/* EDITORIAL SPLIT */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <EditorialSplit
          imageSrc="/assets/backgrounds/geisha.jpg"
          imageAlt="Recogida manual de cerezas de café"
          imageLeft
          label="La Colección"
          heading={<>El café como <em>artefacto cultural</em></>}
          body="Cada origen de nuestra colección lleva una historia — del suelo, el clima, las manos que recogieron cada cereza. No solo seleccionamos café. Coleccionamos experiencias, relaciones y momentos de sabor extraordinario de 21 de las regiones productoras más notables del mundo."
          quote={{
            text: "Cada bolsa lleva la huella de su tierra.",
            attribution: "Chris Rosas, Fundador",
          }}
          cta={<Button href="/story" variant="ghost">Explorar los Orígenes</Button>}
        />
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            label="La Colección"
            heading={<>Cosechas en <em>Pequeño Lote</em></>}
            subheading="Seleccionado personalmente. Tostado al pedido. Enviado en 48 horas."
          />
          <Button href="/shop" variant="ghost" className="hidden md:inline-flex">
            Ver los 21 Cafés
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button href="/shop" variant="primary">Ver Todos los Cafés</Button>
        </div>
      </section>

      {/* ORÍGENES DEL MUNDO */}
      <section className="section-gap bg-surface-container/40 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10 text-center">
          <p className="label-caps text-muted mb-4">21 Orígenes</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-6">
            De Todos los <em>Rincones del Mundo</em>
          </h2>
          <p className="font-body text-on-surface-variant text-lg max-w-xl mx-auto mb-12">
            Desde las brumosas tierras altas de Panamá hasta las mesetas volcánicas de Kenia — cada origen se elige por una sola razón: sabor extraordinario.
          </p>

          <div className="relative w-full max-w-3xl mx-auto h-64 md:h-80 bg-surface-container rounded flex items-center justify-center mb-10 overflow-hidden">
            <svg viewBox="0 0 800 400" className="w-full h-full opacity-20" fill="none">
              <ellipse cx="400" cy="200" rx="380" ry="180" stroke="#C17B4A" strokeWidth="1"/>
              <ellipse cx="400" cy="200" rx="250" ry="180" stroke="#C17B4A" strokeWidth="0.5"/>
              <line x1="20" y1="200" x2="780" y2="200" stroke="#C17B4A" strokeWidth="0.5"/>
              <line x1="400" y1="20" x2="400" y2="380" stroke="#C17B4A" strokeWidth="0.5"/>
            </svg>
            {[
              { x: "28%", y: "48%", label: "Panamá" },
              { x: "30%", y: "52%", label: "Colombia" },
              { x: "27%", y: "50%", label: "Costa Rica" },
              { x: "33%", y: "58%", label: "Brasil" },
              { x: "31%", y: "56%", label: "Perú" },
              { x: "28%", y: "45%", label: "Nicaragua" },
              { x: "57%", y: "52%", label: "Kenia" },
              { x: "18%", y: "42%", label: "Hawái" },
              { x: "29%", y: "48%", label: "Puerto Rico" },
            ].map((dot) => (
              <div
                key={dot.label}
                className="absolute w-2 h-2 rounded-full bg-primary border border-primary/40 -translate-x-1/2 -translate-y-1/2 cursor-default group"
                style={{ left: dot.x, top: dot.y }}
                title={dot.label}
              >
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-surface-container-high border border-outline px-2 py-0.5 rounded text-[10px] text-cream whitespace-nowrap">
                  {dot.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {ORIGENES.map((o) => (
              <span key={o} className="border border-outline-variant text-muted text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-[2px]">
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EL FUNDADOR */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <EditorialSplit
          imageSrc="/assets/images/chris-rosas.jpg"
          imageAlt="Chris Rosas — fundador de Coffee Power"
          imageLeft={false}
          label="El Fundador"
          heading={<>El Arte de la <em>Selección</em></>}
          body="Chris Rosas ha pasado años construyendo relaciones directas con las mejores fincas del mundo. Cada lote es catado, evaluado y seleccionado personalmente — solo el 1% más alto de cada cosecha entra en la colección Coffee Power. 300 gramos de lo extraordinario, en tu puerta."
          quote={{
            text: "No quería solo vender café. Quería compartir las historias de quienes lo cultivan.",
            attribution: "Chris Rosas",
          }}
          cta={<Button href="/story" variant="primary">Conoce a Chris</Button>}
        />
      </section>

      {/* LLEGADAS RECIENTES */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading label="Esta Temporada" heading={<>Llegadas <em>Recientes</em></>} />
          <Button href="/shop" variant="text">Ver todo →</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(4, 7).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
