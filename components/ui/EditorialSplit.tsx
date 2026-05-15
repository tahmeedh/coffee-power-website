import Image from "next/image";
import { type ReactNode } from "react";

interface EditorialSplitProps {
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  label?: string;
  heading: ReactNode;
  body: string;
  quote?: { text: string; attribution?: string };
  cta?: ReactNode;
  className?: string;
}

export default function EditorialSplit({
  imageSrc,
  imageAlt,
  imageLeft = true,
  label,
  heading,
  body,
  quote,
  cta,
  className = "",
}: EditorialSplitProps) {
  const imageCol = (
    <div className="relative h-[520px] md:h-auto overflow-hidden rounded">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  const textCol = (
    <div className="flex flex-col justify-center gap-6 py-8 md:py-0 md:px-8 lg:px-16">
      {label && <p className="label-caps text-muted">{label}</p>}
      <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight tracking-tight">
        {heading}
      </h2>
      <p className="font-body text-on-surface-variant text-lg leading-relaxed">{body}</p>
      {quote && (
        <blockquote className="border-l-2 border-primary pl-5 py-1">
          <p className="font-display italic text-cream text-2xl leading-snug mb-3">
            &ldquo;{quote.text}&rdquo;
          </p>
          {quote.attribution && (
            <p className="label-caps text-muted">{quote.attribution}</p>
          )}
        </blockquote>
      )}
      {cta && <div className="pt-2">{cta}</div>}
    </div>
  );

  return (
    <div className={`grid md:grid-cols-2 gap-0 md:gap-16 items-center ${className}`}>
      {imageLeft ? imageCol : textCol}
      {imageLeft ? textCol : imageCol}
    </div>
  );
}
