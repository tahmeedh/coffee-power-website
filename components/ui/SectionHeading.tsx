interface SectionHeadingProps {
  label?: string;
  heading: string | React.ReactNode;
  subheading?: string;
  center?: boolean;
  className?: string;
}

import { type ReactNode } from "react";

export default function SectionHeading({
  label,
  heading,
  subheading,
  center = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="label-caps text-muted mb-4">{label}</p>
      )}
      <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight tracking-tight mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
