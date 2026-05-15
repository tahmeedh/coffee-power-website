interface ChipProps {
  label: string;
  className?: string;
}

export default function Chip({ label, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-block border border-outline-variant text-muted text-[10px] font-body font-semibold tracking-widest uppercase px-2.5 py-1 rounded-[2px] ${className}`}
    >
      {label}
    </span>
  );
}
