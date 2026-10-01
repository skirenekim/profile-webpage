import type { ReactNode } from 'react';

/** Single, section-level entrance: one quiet CSS fade-up on load (disabled under prefers-reduced-motion). */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`fade-up ${className}`}>{children}</div>;
}

/** Page section with the one shared heading style (left-aligned serif h2). */
export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-16 first:border-t-0 md:py-20">
      <Reveal>
        <header className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-[2.125rem] text-ink">{title}</h2>
          {subtitle && <p className="mt-2 text-ink-soft">{subtitle}</p>}
        </header>
        {children}
      </Reveal>
    </section>
  );
}

/** Small uppercase eyebrow label — identical everywhere. */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest text-ink-muted ${className}`}>
      {children}
    </p>
  );
}

/** Labelled block of body copy. */
export function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <Label className="mb-2">{label}</Label>
      {children}
    </div>
  );
}

/** The one chip style: hairline outline, no fill. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
      {children}
    </span>
  );
}

/** Metadata line: "Period · Team · Location" as plain text. */
export function Meta({ items, className = '' }: { items: (string | null | undefined)[]; className?: string }) {
  const parts = items.filter(Boolean) as string[];
  return (
    <p className={`text-sm text-ink-muted ${className}`}>
      {parts.map((part, i) => (
        <span key={part}>
          {i > 0 && <span className="mx-1.5">·</span>}
          {part}
        </span>
      ))}
    </p>
  );
}

/** Dash bullet list used for contributions and multi-line fields. */
export function DashList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex text-sm leading-relaxed text-ink-soft">
          <span className="mr-2.5 shrink-0 text-ink-muted">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two-column editorial row: narrow left column (dates, titles) and body on the right. */
export function Row({
  left,
  children,
  sticky = false,
  leftLastOnMobile = false,
  className = '',
}: {
  left: ReactNode;
  children: ReactNode;
  sticky?: boolean;
  /** Stack the left column below the body on small screens (e.g. skills after bio). */
  leftLastOnMobile?: boolean;
  className?: string;
}) {
  const leftOrder = leftLastOnMobile ? 'order-2 md:order-none' : '';
  const bodyOrder = leftLastOnMobile ? 'order-1 md:order-none' : '';
  return (
    <div className={`grid gap-8 md:grid-cols-[220px_1fr] md:gap-12 ${className}`}>
      <div className={`${leftOrder} ${sticky ? 'md:sticky md:top-24 md:self-start' : ''}`}>{left}</div>
      <div className={`min-w-0 ${bodyOrder}`}>{children}</div>
    </div>
  );
}

export const textLink =
  'text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40';
