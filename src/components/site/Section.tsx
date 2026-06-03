import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-20 sm:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
