"use client";
import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "ghost" | "text";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center font-body font-semibold tracking-widest uppercase text-xs transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-dark px-8 py-4 rounded",
  ghost:
    "border border-gold text-gold hover:bg-surface-container px-8 py-4 rounded",
  text: "text-cream underline-offset-4 hover:underline px-0 py-0",
};

const sizes: Record<Size, string> = {
  sm: "text-[10px] px-5 py-3",
  md: "",
  lg: "text-sm px-10 py-5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${size !== "md" ? sizes[size] : ""} ${className}`;

  if (href) {
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
