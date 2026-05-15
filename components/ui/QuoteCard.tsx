interface QuoteCardProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export default function QuoteCard({ quote, attribution, className = "" }: QuoteCardProps) {
  return (
    <div className={`border-l-2 border-primary pl-6 py-2 ${className}`}>
      <blockquote className="font-display italic text-cream text-2xl md:text-3xl leading-snug mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <p className="label-caps text-muted">{attribution}</p>
      )}
    </div>
  );
}
