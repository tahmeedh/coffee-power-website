"use client";
import { useState } from "react";
import Button from "./Button";

const GRIND_OPTIONS = [
  { id: "grano", label: "Grano" },
  { id: "espresso", label: "Molido espresso" },
  { id: "italiana", label: "Molido italiana" },
  { id: "prensa", label: "Molido prensa" },
  { id: "filtro", label: "Molido filtro" },
  { id: "v60", label: "V60" },
  { id: "chemex", label: "Chemex" },
];

const WEIGHT_OPTIONS = [
  { id: "250", label: "250g" },
  { id: "300", label: "300g" },
];

interface ProductOptionsProps {
  priceId: string;
  productName: string;
  basePrice: number;
}

export default function ProductOptions({ priceId, productName, basePrice }: ProductOptionsProps) {
  const [grind, setGrind] = useState("grano");
  const [weight, setWeight] = useState("300");

  const price = weight === "250" ? Math.round(basePrice * 0.86) : basePrice;

  return (
    <div className="bg-surface-container border border-outline rounded p-6 flex flex-col gap-6">

      {/* Tipo de molienda */}
      <div>
        <p className="label-caps text-muted mb-3">Tipo de Molienda</p>
        <div className="flex flex-wrap gap-2">
          {GRIND_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setGrind(opt.id)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 border ${
                grind === opt.id
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-transparent text-on-surface-variant border-outline hover:border-primary/60 hover:text-cream"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gramaje */}
      <div>
        <p className="label-caps text-muted mb-3">Gramaje</p>
        <div className="flex gap-2">
          {WEIGHT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setWeight(opt.id)}
              className={`px-6 py-2 rounded-full text-sm font-body transition-all duration-200 border ${
                weight === opt.id
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-transparent text-on-surface-variant border-outline hover:border-primary/60 hover:text-cream"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {weight === "250" && (
          <p className="font-body text-muted text-xs mt-2">Formato 250g — ideal para primeras compras</p>
        )}
      </div>

      {/* Precio */}
      <div className="flex items-baseline gap-3 border-t border-outline/40 pt-4">
        <span className="font-display text-cream text-4xl">
          €{(price / 100).toFixed(2)}
        </span>
        <span className="label-caps text-muted">/ {weight}g</span>
      </div>

      {/* CTA */}
      <form action="/api/checkout" method="POST" className="flex flex-col gap-3">
        <input type="hidden" name="priceId" value={priceId} />
        <input type="hidden" name="productName" value={productName} />
        <input type="hidden" name="grind" value={grind} />
        <input type="hidden" name="weight" value={weight} />
        <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
          Añadir a la Colección
        </Button>
      </form>
      <Button href="/subscribe" variant="ghost" size="lg" className="w-full justify-center">
        Suscríbete y Ahorra un 15%
      </Button>
      <p className="font-body text-muted text-xs text-center">
        Envío gratis a partir de €60 · Tostado al pedido · Enviado en 48h
      </p>
    </div>
  );
}
