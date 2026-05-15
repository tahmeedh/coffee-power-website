import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Herencia — Coffee Power",
  description: "La historia de Chris Rosas — músico, creador y la mente obsesiva detrás de Coffee Power. Donde la música se encuentra con el café en el corazón de España.",
};

const linea = [
  { year: "Los Inicios", title: "Nacido en el Ritmo", body: "Chris Rosas creció inmerso en la música — no solo como oyente, sino como creador. Mucho antes de pensar en el café, entendió algo esencial: que las cosas más poderosas de la vida no se ven ni se tocan. Se sienten. La música se lo enseñó. El café se lo confirmaría." },
  { year: "España", title: "Una Cultura Construida Alrededor de la Taza", body: "España no es un país que tenga prisa con su café. El café es un ritual — un cortado lento por la mañana en la barra de mármol, el silbido del vapor, conversaciones que no empiezan hasta después del primer sorbo. Criado en esta cultura, Chris absorbió una verdad que la mayoría nunca nota conscientemente: el café es tiempo. El café es atención. El café es el momento antes de todo lo demás." },
  { year: "El Despertar", title: "Del Commodity al Artesanado", body: "El punto de inflexión llegó cuando Chris probó por primera vez un Geisha de especialidad de Panamá. Había bebido miles de tazas antes. Pero aquello era diferente — floral, delicado, complejo, vivo. Era la misma sensación que escuchar un acorde perfecto por primera vez. Empezó a estudiar, a catar, a viajar. No podía parar." },
  { year: "La Fundación", title: "Nace Coffee Power", body: "Chris fundó Coffee Power con una convicción: que los mejores cafés del mundo merecen ser escuchados. No solo vendidos — experimentados. Cada uno de los 21 orígenes que selecciona es elegido con el mismo oído obsesivo que lleva a la música. Las notas correctas. El equilibrio correcto. La historia correcta." },
  { year: "Hoy", title: "La Colección Viva", body: "Hoy, Coffee Power es la obra creativa más grande de Chris Rosas — una colección rotativa de los mejores cafés de origen único del mundo, tostados al pedido, enviados a quienes se preocupan lo suficiente como para tomarse un momento y saborear. Cada bolsa es una composición. Cada taza, una actuación." },
];

const pilares = [
  { number: "01", title: "Música y Café", body: "Chris siempre ha creído que la música y el café comparten la misma alma — ambos son artes invisibles que solo se hacen tangibles a través de la presencia y la atención. Su paladar fue entrenado por años de escucha: el ritmo, el silencio, el espacio entre las notas. Esa misma sensibilidad da forma a cada decisión de selección." },
  { number: "02", title: "España y el Ritual", body: "La cultura del café español no tiene que ver con la cafeína — tiene que ver con la ceremonia. El cortado matutino. El café con leche de la tarde. El espresso después de cenar. Chris creció entendiendo que el café no es un producto. Es un momento. Coffee Power fue creado para proteger ese momento." },
  { number: "03", title: "La Historia del Agricultor", body: "Detrás de cada bolsa de Coffee Power hay una familia. Una finca. Una historia que se remonta generaciones. Chris ha viajado a las regiones de origen, ha catado con productores y ha construido relaciones directas que van mucho más allá del comercio. Cuando bebes Coffee Power, bebes esas relaciones." },
];

export default function HeritagePage() {
  return (
    <>
      <Nav />

      <HeroSection
        label="Herencia"
        heading={<>Donde la Música se Encuentra <em>con el Café</em></>}
        subheading="La historia de Chris Rosas — una vida marcada por el ritmo, el ritual y la búsqueda incansable de lo extraordinario."
        backgroundImage="/assets/backgrounds/esencia-victoria.jpg"
        backgroundAlt="Chris Rosas — la herencia detrás de Coffee Power"
        overlay="heavy"
      />

      {/* CITA INICIAL */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-8 h-px bg-primary mx-auto mb-10" />
          <blockquote className="font-display italic text-cream text-3xl md:text-5xl leading-tight mb-8">
            &ldquo;El café no es una bebida. Es un idioma. Y como todos los idiomas, hacen falta años para hablarlo con fluidez.&rdquo;
          </blockquote>
          <p className="label-caps text-primary">Chris Rosas — Fundador, Coffee Power</p>
          <div className="w-8 h-px bg-primary mx-auto mt-10" />
        </div>
      </section>

      {/* RETRATO + INTRO */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative h-[500px] md:h-[640px] rounded overflow-hidden">
            <Image src="/assets/images/chris-rosas.jpg" alt="Chris Rosas — fundador de Coffee Power" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 border border-primary/20 rounded" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="label-caps text-primary mb-1">Chris Rosas</p>
              <p className="font-body text-cream/70 text-sm">Fundador · Seleccionador · Creador</p>
            </div>
          </div>
          <div>
            <p className="label-caps text-muted mb-5">El Hombre Detrás de la Taza</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-6">
              Un Artista que Encontró <em>su Medio</em>
            </h2>
            <div className="space-y-5 font-body text-on-surface-variant text-base leading-relaxed">
              <p>Chris Rosas no llegó al café a través de los negocios ni de las tendencias. Llegó a través del sentimiento. Músico y creativo de corazón, Chris había pasado años entrenando sus sentidos — aprendiendo a escuchar lo que otros no oyen, a notar el detalle en el espacio entre los sonidos.</p>
              <p>Cuando se encontró por primera vez con un café de especialidad verdaderamente excepcional, algo encajó. La complejidad. El terroir. La historia codificada en una sola taza. Era igual que la música: invisible, pero completamente abrumadora. Todo un mundo comprimido en un momento.</p>
              <p>Empezó con curiosidad. Terminó con Coffee Power.</p>
              <p>Con sede en España — un país donde el café matutino es casi sagrado — Chris entendió mejor que nadie lo que significa tomarse el ritual en serio. España le enseñó la lentitud. La música le enseñó la profundidad. Y las fincas a las que viajó le enseñaron la humildad.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-outline/40 pt-8">
              {[{ stat: "21", label: "Orígenes" }, { stat: "9+", label: "Países" }, { stat: "100%", label: "Calidad Specialty" }].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-primary text-4xl mb-1">{s.stat}</p>
                  <p className="label-caps text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRES PILARES */}
      <section className="section-gap bg-surface-container/30 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="label-caps text-muted mb-4">La Filosofía</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">Tres Fuerzas. <em>Una Visión.</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((p) => (
              <div key={p.number} className="bg-surface-container border border-outline rounded p-8 relative overflow-hidden">
                <span className="font-display text-primary/10 text-8xl absolute -top-2 -right-2 leading-none select-none">{p.number}</span>
                <p className="label-caps text-primary mb-4">{p.number}</p>
                <h3 className="font-display text-cream text-2xl mb-4">{p.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LÍNEA DEL TIEMPO */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="label-caps text-muted mb-4">El Viaje</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">Una Vida Construida <em>Taza a Taza</em></h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {linea.map((item, idx) => (
            <div key={item.year} className="relative flex gap-8 pb-14 last:pb-0">
              {idx < linea.length - 1 && <div className="absolute left-[22px] top-10 bottom-0 w-px bg-outline/60" />}
              <div className="shrink-0 w-11 h-11 rounded-full border border-primary/60 bg-surface-container flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <div className="pt-2">
                <p className="label-caps text-primary mb-1">{item.year}</p>
                <h3 className="font-display text-cream text-2xl mb-3">{item.title}</h3>
                <p className="font-body text-on-surface-variant text-base leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MÚSICA × CAFÉ */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="label-caps text-muted mb-5">La Conexión</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-6">La Música le Enseñó <em>a Escuchar</em></h2>
            <div className="space-y-5 font-body text-on-surface-variant text-base leading-relaxed">
              <p>Los grandes músicos no solo escuchan notas. Escuchan las relaciones entre notas — la tensión y la resolución, el silencio tanto como el sonido. Chris Rosas llevó ese mismo oído al café.</p>
              <p>Cuando cata un nuevo lote, no solo saborea dulzura o acidez. Escucha la composición — cómo las notas del origen, el proceso y el tueste interactúan para crear algo que solo podría venir de ese lugar exacto, en ese momento exacto.</p>
              <p>Por eso la colección de Coffee Power no es un catálogo de productos. Es una lista de reproducción. Cada origen, una canción. Cada taza, una estrofa.</p>
            </div>
            <div className="mt-8 border-l-2 border-primary pl-6">
              <p className="font-display italic text-cream text-xl leading-snug mb-3">
                &ldquo;Una gran taza de café, como una gran canción, te detiene a mitad de frase. Exige tu presencia.&rdquo;
              </p>
              <p className="label-caps text-muted">Chris Rosas</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/assets/backgrounds/geisha.jpg", alt: "Recogida manual de café" },
              { src: "/assets/backgrounds/golden-sunset.jpg", alt: "Origen Golden Sunset", mt: true },
              { src: "/assets/backgrounds/supremo-pc.jpg", alt: "Agricultores trabajando" },
              { src: "/assets/images/packaging.jpg", alt: "Envase Coffee Power", mt: true },
            ].map((img, i) => (
              <div key={i} className={`relative h-56 rounded overflow-hidden${img.mt ? " mt-8" : ""}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPAÑA */}
      <section className="section-gap bg-surface-container/30 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative h-[420px] rounded overflow-hidden">
              <Image src="/assets/images/world-travel.jpg" alt="Orígenes de café alrededor del mundo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div>
              <p className="label-caps text-muted mb-5">Con Raíces en España</p>
              <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-6">Un País que <em>Entiende el Café</em></h2>
              <div className="space-y-5 font-body text-on-surface-variant text-base leading-relaxed">
                <p>España tiene una de las culturas de café más arraigadas del mundo. El café aquí no se consume — se habita. Te quedas en la barra. No miras el móvil. Te tomas el cortado en dos sorbos y luego, quizás, pides otro.</p>
                <p>Creciendo dentro de esta cultura, Chris Rosas absorbió lo que la mayoría de las marcas de café de especialidad gastan millones intentando fabricar: una genuina apreciación del momento. Del ritual. De la taza en sí misma.</p>
                <p>Coffee Power existe para llevar los mejores cafés de origen único del mundo a ese mismo ritual — para dar a la experiencia del café español el ingrediente que merece: granos excepcionales con una historia que vale la pena contar.</p>
              </div>
              <div className="mt-10 flex gap-8 border-t border-outline/40 pt-8">
                {[{ stat: "España", label: "Sede" }, { stat: "Global", label: "Orígenes" }, { stat: "Directo", label: "Solo Comercio Directo" }].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-primary text-3xl mb-1">{s.stat}</p>
                    <p className="label-caps text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10 text-center">
        <p className="label-caps text-muted mb-5">Vive la Colección</p>
        <h2 className="font-display text-cream text-4xl md:text-6xl leading-tight mb-6 max-w-2xl mx-auto">Cada Taza Cuenta una <em>Historia</em></h2>
        <p className="font-body text-on-surface-variant text-lg max-w-xl mx-auto mb-10">La herencia está en la bolsa. Solo tienes que prepararla.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/shop" variant="primary" size="lg">Explorar la Colección</Button>
          <Button href="/subscribe" variant="ghost" size="lg">Suscríbete y Ahorra</Button>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
