interface PlaceholderImageProps {
  label: string;
  ratio?: string;
  className?: string;
}

export function PlaceholderImage({
  label,
  ratio = "3 / 4",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative bg-surface-raised border border-gold-line ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* inner hairline frame */}
      <div className="absolute inset-3 border border-gold-line/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <span className="font-display text-3xl text-gradient-gold leading-none">&#9671;</span>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}