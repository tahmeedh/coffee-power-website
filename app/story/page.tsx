import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EditorialSplit from "@/components/ui/EditorialSplit";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Nuestra Historia — Coffee Power",
  description: "La historia de Chris Rosas y Coffee Power — 21 orígenes, una obsesión.",
};

const guardianes = [
  {
    name: "Chris Rosas",
    role: "Fundador y Seleccionador Jefe",
    image: "/assets/images/chris-rosas.jpg",
    bio: "Chris ha pasado años construyendo relaciones directas con las mejores fincas del mundo — catando personalmente cada lote antes de que entre en la colección.",
  },
  {
    name: "Los Productores",
    role: "Socios de Origen",
    image: "/assets/backgrounds/supremo-pc.jpg",
    bio: "21 familias en 9 países. Cada una seleccionada no solo por la calidad de su café, sino por el cuidado que ponen en su tierra y su comunidad.",
  },
  {
    name: "Los Tostadores",
    role: "Arte en Pequeño Lote",
    image: "/assets/images/packaging.jpg",
    bio: "Tostado al pedido en pequeños lotes. Cada perfil desarrollado para expresar el carácter único de su origen — nunca sobrerostado, nunca comprometido.",
  },
];

const valores = [
  { icon: "⚖️", title: "Comercio Directo", body: "Pagamos por encima del mercado directamente a los agricultores. Sin intermediarios. El 100% de cada prima va a las personas que lo cultivaron." },
  { icon: "🌱", title: "Pequeño Lote", body: "Cada lote se tuesta en porciones de 300g al pedido. Frescura máxima, cero desperdicio. Tu bolsa fue tostada para ti, esta semana." },
  { icon: "✦", title: "Calidad Specialty", body: "Solo cafés con puntuación 80+ en la escala SCA entran en la colección. El 1% más alto del café mundial, en cada origen." },
  { icon: "♻️", title: "Envase Reciclable", body: "Nuestras bolsas negras son 100% reciclables y resellables. Presentación premium sin compromiso medioambiental." },
];

export default function StoryPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <HeroSection
        label="Nuestra Historia"
        heading={<>Cultivado con <em>Intención</em></>}
        subheading="Coffee Power nació de una simple convicción: que cada taza debería llevar el alma de la tierra de la que procede."
        primaryCta={{ label: "Explorar la Colección", href: "/shop" }}
        backgroundImage="/assets/backgrounds/kenia.jpg"
        backgroundAlt="Agricultores de café en el campo"
        overlay="heavy"
      />

      {/* HISTORIA DEL FUNDADOR */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <EditorialSplit
          imageSrc="/assets/images/chris-rosas.jpg"
          imageAlt="Chris Rosas — fundador de Coffee Power"
          imageLeft
          label="El Fundador"
          heading={<>El Hombre <em>Detrás de la Taza</em></>}
          body="Chris Rosas no se propuso crear una marca de café. Se propuso compartir algo que le emocionaba — la extraordinaria diversidad y calidad de los mejores cafés del mundo, y las personas notables que los cultivan. Coffee Power es el resultado de años de relaciones directas, miles de cataciones y un compromiso inquebrantable con la calidad por encima de la conveniencia."
          quote={{
            text: "No quería solo vender café. Quería compartir las historias de quienes lo cultivan.",
            attribution: "Chris Rosas, Fundador",
          }}
        />
      </section>

      {/* VALORES */}
      <section id="ethics" className="section-gap bg-surface-container/30 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="label-caps text-muted mb-4">El Compromiso</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">
              Cómo lo <em>Hacemos</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((v) => (
              <div key={v.title} className="bg-surface-container border border-t-2 border-t-primary border-outline rounded p-7">
                <span className="text-2xl mb-4 block">{v.icon}</span>
                <h3 className="font-display text-cream text-xl mb-3">{v.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA DE ORÍGENES */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <p className="label-caps text-muted mb-4">La Colección</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">
            El Mundo <em>en Tu Taza</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative h-72 md:h-96 bg-surface-container rounded flex items-center justify-center overflow-hidden">
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
              <div key={dot.label} className="absolute w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2" style={{ left: dot.x, top: dot.y }} title={dot.label} />
            ))}
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { origin: "Panamá", note: "Geisha · Gesha · Lavado y Natural" },
                { origin: "Colombia", note: "Múltiples regiones · Caturra, Bourbon, Pink Bourbon, Tabi" },
                { origin: "Costa Rica", note: "Tarrazú · Caturra / Catuaí · Lavado" },
                { origin: "Brasil", note: "Cerrado Mineiro · Yellow Bourbon · Natural" },
                { origin: "Perú", note: "Cajamarca · Caturra / Bourbon · Lavado" },
                { origin: "Nicaragua", note: "Jinotega · Pacamara · Lavado" },
                { origin: "Kenia", note: "Kirinyaga · SL28/SL34 · Lavado Doble Fermentado" },
                { origin: "Hawái", note: "Kona · Typica · Lavado" },
                { origin: "Puerto Rico", note: "Yauco · Bourbon · Lavado" },
              ].map((row) => (
                <div key={row.origin} className="flex items-start gap-4 border-b border-outline/40 pb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-body text-cream text-sm font-semibold">{row.origin}</span>
                    <span className="font-body text-muted text-sm"> — {row.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EL PROCESO */}
      <section id="process" className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <EditorialSplit
          imageSrc="/assets/images/packaging.jpg"
          imageAlt="Proceso de envasado del café"
          imageLeft={false}
          label="El Proceso"
          heading={<>Pequeño Lote. <em>Siempre.</em></>}
          body="Cada lote de Coffee Power se tuesta en las 48 horas posteriores a tu pedido, en pequeñas cantidades diseñadas para preservar el carácter único de cada origen. No tostamos con antelación. No mantenemos stock. Tu bolsa se tuesta para ti — sin excepción."
          quote={{
            text: "La frescura no es una característica. Es la base.",
            attribution: "Chris Rosas",
          }}
          cta={<Button href="/shop" variant="primary">Explorar la Colección</Button>}
        />
      </section>

      {/* HORARIO */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="max-w-lg mx-auto bg-surface-container border border-outline rounded p-10 text-center">
          <p className="label-caps text-muted mb-4">Encuéntranos</p>
          <h2 className="font-display text-cream text-4xl mb-8">Visítanos</h2>
          <div className="space-y-6">
            <div>
              <p className="label-caps text-muted mb-2">Lunes — Viernes</p>
              <p className="font-body text-cream text-xl">10:00 – 14:00</p>
              <p className="font-body text-cream text-xl">17:30 – 20:30</p>
            </div>
            <div className="border-t border-outline pt-6">
              <p className="label-caps text-muted mb-2">Sábado</p>
              <p className="font-body text-cream text-xl">10:00 – 14:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARDIANES DEL SABOR */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="label-caps text-muted mb-4">El Equipo</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">
            Guardianes <em>del Sabor</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guardianes.map((g) => (
            <div key={g.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-5 rounded overflow-hidden">
                <Image src={g.image} alt={g.name} fill className="object-cover" sizes="160px" />
              </div>
              <h3 className="font-display text-cream text-xl mb-1">{g.name}</h3>
              <p className="label-caps text-primary mb-3">{g.role}</p>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">{g.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
