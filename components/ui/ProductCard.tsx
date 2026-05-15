import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`group block bg-surface-container border border-outline rounded overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-high ${className}`}
    >
      {/* Bag image */}
      <div className="relative bg-surface-dim flex items-center justify-center pt-8 pb-4 px-6 h-64 overflow-hidden">
        {product.status !== "Current Harvest" && (
          <span className="absolute top-4 right-4 text-[9px] font-body font-semibold tracking-widest uppercase text-tertiary border border-tertiary/40 px-2 py-0.5 rounded-[2px]">
            {product.status}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={160}
          height={220}
          className="object-contain h-52 w-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
        />
      </div>

      {/* Info */}
      <div className="px-5 pb-5 pt-4 border-t border-outline">
        <p className="label-caps text-muted mb-1">{product.origin}</p>
        <h3 className="font-display text-cream text-xl leading-tight mb-3">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.flavorNotes.slice(0, 3).map((note) => (
            <Chip key={note} label={note} />
          ))}
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-body text-muted text-xs">{product.process}</span>
          <span className="font-body text-muted text-xs">{product.altitude}</span>
        </div>
        <div className="flex items-center justify-between border-t border-outline/40 pt-3">
          <span className="font-body text-on-surface-variant text-sm">300g · Specialty</span>
          <span className="font-body font-semibold text-cream text-sm">
            €{(product.price / 100).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
