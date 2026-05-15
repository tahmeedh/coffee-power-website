import Image from "next/image";
import Button from "@/components/ui/Button";
import { type ReactNode } from "react";

interface HeroSectionProps {
  label?: string;
  heading: ReactNode;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage: string;
  backgroundAlt?: string;
  fullHeight?: boolean;
  overlay?: "light" | "medium" | "heavy";
  center?: boolean;
}

const overlayClass = {
  light: "from-background/40 via-background/10 to-transparent",
  medium: "from-background/80 via-background/30 to-transparent",
  heavy: "from-background via-background/70 to-transparent",
};

export default function HeroSection({
  label,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundAlt = "",
  fullHeight = true,
  overlay = "medium",
  center = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-start ${
        fullHeight ? "min-h-[72vh]" : "min-h-[55vh]"
      } overflow-hidden`}
    >
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Bottom-up gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayClass[overlay]}`} />

      {/* Top-down gradient — keeps text legible against bright skies */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-screen-xl mx-auto px-5 md:px-10 pt-36 pb-14 md:pt-44 md:pb-16 ${
          center ? "text-center flex flex-col items-center" : ""
        }`}
      >
        {label && (
          <p className="label-caps text-primary mb-5">{label}</p>
        )}
        <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight max-w-3xl mb-6 drop-shadow-lg">
          {heading}
        </h1>
        {subheading && (
          <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10 drop-shadow">
            {subheading}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
