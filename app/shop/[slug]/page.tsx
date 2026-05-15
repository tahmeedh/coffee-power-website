import { notFound } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import ProductOptions from "@/components/ui/ProductOptions";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { getProductBySlug, products } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Coffee Power`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const statusLabel: Record<string, string> = {
    "Current Harvest": "Cosecha Actual",
    "Limited Release": "Edición Limitada",
    "Signature": "Signature",
  };

  return (
    <>
      <Nav />

      {/* DETALLE DEL PRODUCTO */}
      <section className="pt-28 section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* Imagen */}
          <div className="sticky top-24">
            <div className="relative bg-surface-dim rounded h-[520px] flex items-center justify-center overflow-hidden">
              {product.status !== "Current Harvest" && (
                <span className="absolute top-5 left-5 text-[10px] font-body font-semibold tracking-widest uppercase text-tertiary border border-tertiary/40 px-2 py-0.5 rounded-[2px]">
                  {statusLabel[product.status] ?? product.status}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={260}
                height={360}
                className="object-contain drop-shadow-2xl h-96 w-auto"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-7">
            <div>
              <p className="label-caps text-muted mb-2">{product.origin} · {product.region}</p>
              <h1 className="font-display text-cream text-5xl md:text-6xl leading-tight mb-4">
                {product.name}
              </h1>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Ficha técnica */}
            <div className="grid grid-cols-2 gap-px bg-outline rounded overflow-hidden border border-outline">
              {[
                { label: "Altitud", value: product.altitude },
                { label: "Variedad", value: product.variety },
                { label: "Proceso", value: product.process },
                { label: "Gramaje", value: "300g" },
              ].map((item) => (
                <div key={item.label} className="bg-surface-container p-4">
                  <p className="label-caps text-muted mb-1">{item.label}</p>
                  <p className="font-body text-cream text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Notas de sabor */}
            <div>
              <p className="label-caps text-muted mb-3">Notas de Sabor</p>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map((note) => (
                  <Chip key={note} label={note} />
                ))}
              </div>
            </div>

            {/* Opciones de molienda, gramaje y CTA */}
            <ProductOptions
              priceId={product.stripePriceId}
              productName={product.name}
              basePrice={product.price}
            />
          </div>
        </div>
      </section>

      {/* LA HISTORIA */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="max-w-2xl">
          <p className="label-caps text-muted mb-4">La Historia</p>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            {product.longDescription}
          </p>
        </div>
      </section>

      {/* TERROIR */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="relative h-80 md:h-[500px] rounded overflow-hidden">
          <Image
            src={product.background}
            alt={`${product.origin} — ${product.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-md">
              <p className="label-caps text-primary mb-3">Terroir</p>
              <h2 className="font-display text-cream text-3xl md:text-4xl leading-tight mb-3">
                La <em>Montaña Viva</em>
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {product.origin} · {product.region} · {product.altitude}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIL DE SABOR */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <p className="label-caps text-muted mb-4 text-center">Perfil de Sabor</p>
        <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-14">
          El <em>Perfil</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline rounded overflow-hidden border border-outline">
          {[
            { key: "body" as const, label: "Cuerpo", icon: "◉" },
            { key: "acidity" as const, label: "Acidez", icon: "◈" },
            { key: "aroma" as const, label: "Aroma", icon: "◎" },
          ].map((col) => {
            const profile = col.key === "body" ? product.body : col.key === "acidity" ? product.acidity : product.aroma;
            return (
              <div key={col.key} className="bg-surface-container p-8 md:p-10 flex flex-col gap-4">
                <span className="text-primary text-2xl">{col.icon}</span>
                <p className="label-caps text-muted">{col.label}</p>
                <h3 className="font-display text-cream text-2xl">{profile.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{profile.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-gap max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="bg-surface-container border border-outline rounded p-8 md:p-14 text-center">
          <p className="label-caps text-muted mb-4">¿Listo?</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-4">
            Vive <em>el Origen</em>
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-8 max-w-lg mx-auto">
            {product.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="priceId" value={product.stripePriceId} />
              <input type="hidden" name="productName" value={product.name} />
              <Button type="submit" variant="primary" size="lg">Añadir a la Colección</Button>
            </form>
            <Button href="/shop" variant="ghost" size="lg">Ver Todos los Orígenes</Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
