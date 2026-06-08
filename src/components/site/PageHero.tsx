export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-surface">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {eyebrow}
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-primary">{title.split(" ").slice(-1)}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}
