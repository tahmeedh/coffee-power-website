import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Suscripción — Coffee Power",
  description: "Únete a la suscripción Coffee Power y recibe los mejores cafés de especialidad del mundo en tu puerta cada mes. Seleccionado por Chris Rosas.",
};

const planes = [
  {
    id: "esencial",
    name: "Esencial",
    tagline: "Tu primera taza de lo extraordinario",
    price: "16", priceDecimal: "90", frequency: "/ mes",
    highlight: false, bags: 1, weight: "300g", perBag: "16,90",
    features: ["1 bolsa (300g) al mes", "Rotación de la colección Signature", "Tarjeta de cata seleccionada", "Envío gratis por España", "10% de descuento en pedidos adicionales", "Email mensual sobre el origen"],
    cta: "Empezar Esencial", badge: null,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Para los que quieren más",
    price: "29", priceDecimal: "90", frequency: "/ mes",
    highlight: true, bags: 2, weight: "300g cada una", perBag: "14,95",
    features: ["2 bolsas (300g cada una) al mes", "Mix Signature + Cosecha Actual", "Guía detallada de cata y origen", "Envío gratis a todo el mundo", "15% de descuento en pedidos adicionales", "Acceso anticipado a novedades", "Vídeo mensual de Chris Rosas"],
    cta: "Empezar Premium", badge: "Más Popular",
  },
  {
    id: "coleccion",
    name: "Colección",
    tagline: "La experiencia completa",
    price: "44", priceDecimal: "90", frequency: "/ mes",
    highlight: false, bags: 3, weight: "300g cada una", perBag: "14,97",
    features: ["3 bolsas (300g cada una) al mes", "Selección completa — incluye Ediciones Limitadas", "Notas de cata escritas a mano por Chris", "Envío exprés mundial gratuito", "20% de descuento en pedidos adicionales", "Acceso prioritario a Ediciones Limitadas", "Perfil de café personalizado", "Cafés exclusivos para suscriptores"],
    cta: "Empezar Colección", badge: "Mejor Precio",
  },
];

const ventajas = [
  { icon: "✦", title: "Selección Personal", body: "Cada bolsa de tu suscripción es elegida por Chris Rosas en persona. Sin algoritmos, sin suposiciones — solo la curaduría obsesiva de alguien que ha catado miles de lotes." },
  { icon: "⏱", title: "Tostado al Pedido", body: "Tu café se tuesta en las 48 horas previas al envío. No semanas antes. No meses antes. El día que se envía tu pedido, tostamos. Frescura máxima, cada mes." },
  { icon: "🚚", title: "Envío Gratuito", body: "Todos los planes incluyen envío gratuito. Premium y Colección incluyen entrega mundial sin coste adicional." },
  { icon: "🎛", title: "Total Flexibilidad", body: "Pausa, salta o cancela cualquier mes. Sin penalizaciones, sin formularios, sin excusas necesarias. Queremos que estés aquí porque el café lo merece — no porque te lo hayamos puesto difícil." },
  { icon: "📬", title: "El Elemento Sorpresa", body: "Cada envío incluye una tarjeta de cata con detalles del origen, guía de preparación y una nota personal de Chris sobre por qué ese lote concreto entró en la selección este mes." },
  { icon: "⚡", title: "Acceso Prioritario", body: "Los suscriptores tienen acceso preferente a las Ediciones Limitadas y lotes especiales antes de que salgan a la venta al público general. Algunos de nuestros mejores cafés se agotan en horas." },
];

const faqs = [
  { q: "¿Cuándo empieza mi suscripción?", a: "Tu primera caja se envía en los 3–5 días hábiles siguientes a la suscripción. Después, tu café se envía el mismo día de cada mes." },
  { q: "¿Puedo elegir mis cafés?", a: "En el plan Esencial, la selección rota entre nuestra colección Signature. Los suscriptores Premium y Colección reciben un cuestionario de perfil personalizado para que Chris pueda adaptar los cafés a tu paladar." },
  { q: "¿Puedo pausar o cancelar?", a: "Sí. Puedes pausar hasta 3 meses o cancelar en cualquier momento antes de la fecha de tu próximo envío, sin gastos ni penalizaciones." },
  { q: "¿Tengo descuento en pedidos adicionales?", a: "Sí. Los suscriptores Esencial ahorran un 10%, Premium un 15% y Colección un 20% en cualquier pedido adicional mientras estén suscritos." },
  { q: "¿Enviáis fuera de España?", a: "Los planes Premium y Colección incluyen envío mundial gratuito. El plan Esencial incluye envío gratuito dentro de España; el envío internacional está disponible con tarifa estándar." },
  { q: "¿Qué tipo de molienda ofrecéis?", a: "Puedes elegir grano, molido espresso, molido italiana, molido prensa, molido filtro, V60 o Chemex al finalizar tu pedido." },
];

export default function SubscribePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <Image src="/assets/backgrounds/panama.jpg" alt="Origen Panamá" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-5 md:px-10 pt-36 pb-12 md:pt-44 md:pb-16">
          <p className="label-caps text-primary mb-4">Suscripciones Coffee Power</p>
          <h1 className="font-display text-white text-5xl md:text-7xl leading-none tracking-tight mb-5 max-w-3xl drop-shadow-lg">
            El Mejor Café del Mundo,<br /><em>Cada Mes.</em>
          </h1>
          <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8 drop-shadow">
            Suscríbete una vez. Recibe café de especialidad extraordinario en tu puerta, seleccionado personalmente por Chris Rosas de 21 orígenes de todo el mundo.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Envío Gratis", "Cancela Cuando Quieras", "Tostado Fresco", "Selección Personal"].map((tag) => (
              <span key={tag} className="border border-outline-variant text-muted text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-[2px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="label-caps text-muted mb-4">Elige tu Plan</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">Tres Niveles de <em>Excelencia</em></h2>
          <p className="font-body text-on-surface-variant text-base mt-4 max-w-lg mx-auto">
            Todos los planes incluyen café de especialidad recién tostado seleccionado por Chris Rosas. Elige según qué tan profundo quieras llegar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planes.map((plan) => (
            <div key={plan.id} className={`relative rounded flex flex-col p-8 border transition-transform ${plan.highlight ? "bg-primary-container border-primary shadow-[0_0_60px_-10px_rgba(193,123,74,0.3)]" : "bg-surface-container border-outline"}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-on-primary text-[10px] font-body font-semibold tracking-widest uppercase px-4 py-1 rounded-full">{plan.badge}</span>
                </div>
              )}
              <div className="mb-6">
                <p className="label-caps text-primary mb-1">{plan.bags} bolsa{plan.bags > 1 ? "s" : ""} / mes</p>
                <h3 className="font-display text-cream text-3xl mb-1">{plan.name}</h3>
                <p className="font-body text-on-surface-variant text-sm">{plan.tagline}</p>
              </div>
              <div className="mb-6 pb-6 border-b border-outline/40">
                <div className="flex items-end gap-1">
                  <span className="font-display text-cream text-5xl leading-none">€{plan.price}</span>
                  <span className="font-body text-cream text-xl mb-1">,{plan.priceDecimal}</span>
                  <span className="font-body text-muted text-sm mb-2">{plan.frequency}</span>
                </div>
                <p className="font-body text-muted text-xs mt-2">€{plan.perBag} por bolsa · {plan.weight}</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="font-body text-on-surface-variant text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
              <Button href={`/shop?subscribe=${plan.id}`} variant={plan.highlight ? "primary" : "ghost"} size="lg" className="w-full justify-center">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center font-body text-muted text-xs mt-6">Todos los precios incluyen IVA. Cancela o pausa cuando quieras. Sin compromisos.</p>
      </section>

      {/* VENTAJAS */}
      <section className="section-gap bg-surface-container/30 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="label-caps text-muted mb-4">Por Qué Suscribirte</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">Más Que Solo <em>Café</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((v) => (
              <div key={v.title} className="bg-surface-container border border-outline rounded p-7">
                <span className="font-body text-primary text-xl mb-4 block">{v.icon}</span>
                <h3 className="font-display text-cream text-xl mb-3">{v.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHRIS */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative h-[400px] rounded overflow-hidden">
            <Image src="/assets/images/chris-rosas.jpg" alt="Chris Rosas — fundador" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 border border-primary/20 rounded" />
          </div>
          <div>
            <p className="label-caps text-muted mb-5">Una Palabra Personal</p>
            <h2 className="font-display text-cream text-4xl leading-tight mb-6">Seleccionado por <em>Chris Rosas</em></h2>
            <div className="space-y-5 font-body text-on-surface-variant text-base leading-relaxed">
              <p>Empecé Coffee Power porque quería compartir los cafés que me detuvieron en seco. Los que me hicieron dejar lo que estaba haciendo y simplemente — estar presente con la taza.</p>
              <p>Una suscripción no es solo un envío. Es un compromiso entre nosotros. Yo me comprometo a enviarte solo algo que me haya emocionado genuinamente. Tú te comprometes a prepararlo con atención.</p>
              <p>Cada mes, elijo en persona. Cato cada lote antes de que salga. Si no llega al nivel, no va en la caja. Esa es la promesa.</p>
            </div>
            <div className="mt-8 border-l-2 border-primary pl-5">
              <p className="font-display italic text-cream text-2xl leading-snug mb-3">&ldquo;Solo envío lo que yo mismo querría recibir.&rdquo;</p>
              <p className="label-caps text-muted">Chris Rosas, Fundador</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="label-caps text-muted mb-4">Preguntas</p>
            <h2 className="font-display text-cream text-4xl leading-tight">Preguntas <em>Frecuentes</em></h2>
          </div>
          <div className="divide-y divide-outline/40">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-display text-cream text-xl mb-3">{faq.q}</h3>
                <p className="font-body text-on-surface-variant text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-gap bg-surface-container/30 border-y border-outline/40">
        <div className="max-w-screen-xl mx-auto px-5 md:px-10 text-center">
          <p className="label-caps text-muted mb-4">¿Listo para Comenzar?</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-6">Tu Primera Caja <em>te Espera</em></h2>
          <p className="font-body text-on-surface-variant text-lg max-w-lg mx-auto mb-10">
            Únete a suscriptores que reciben café de especialidad seleccionado personalmente cada mes — recién tostado, bellamente envasado y siempre extraordinario.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/shop?subscribe=esencial" variant="primary" size="lg">Empezar Esencial — €16,90/mes</Button>
            <Button href="/shop?subscribe=premium" variant="ghost" size="lg">Ir a Premium — €29,90/mes</Button>
          </div>
          <p className="font-body text-muted text-sm mt-6">Sin compromiso. Cancela cuando quieras.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
