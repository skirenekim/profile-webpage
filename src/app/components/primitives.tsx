import type { ReactNode } from 'react';

export type Tone = 'cream' | 'blush' | 'sand' | 'mist' | 'aqua' | 'lilac';

/** Single, section-level entrance: one quiet CSS fade-up on load (disabled under prefers-reduced-motion). */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`fade-up ${className}`}>{children}</div>;
}

/**
 * Full-bleed section band. The tone sets the translucent pastel background and the accent
 * that Label / links / hairlines inside it resolve to. The aurora backdrop shows through.
 */
export function Section({
  id,
  tone,
  title,
  subtitle,
  children,
}: {
  id: string;
  tone: Tone;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`tone-${tone} scroll-mt-16 bg-tone-bg/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]`}
    >
      <Reveal className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <header className="mb-10 md:mb-12">
          <h2 className="text-3xl text-ink md:text-[2.125rem]">{title}</h2>
          {subtitle && <p className="mt-2 text-ink-soft">{subtitle}</p>}
        </header>
        {children}
      </Reveal>
    </section>
  );
}

/** Small uppercase eyebrow label — neutral and identical everywhere; the accent is kept for links and actions. */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest text-ink-muted ${className}`}>
      {children}
    </p>
  );
}

/** Highlighter-style emphasis: a soft wash of the section's accent behind the words. Max 2–3 per paragraph. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <mark className="-mx-0.5 rounded-sm bg-tone-accent/12 box-decoration-clone px-0.5 text-inherit">
      {children}
    </mark>
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

/** The one chip style: frosted white pill on the tinted band. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-white/70 bg-white/55 px-3 py-1 text-xs font-medium text-ink-soft">
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
          <span className="mr-2.5 shrink-0 text-tone-accent">–</span>
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

/** Frosted glass pill used for primary links in the hero. */
export const glassPill =
  'inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-medium text-ink-soft backdrop-blur-sm transition-colors hover:bg-white/85 hover:text-ink';

export const textLink =
  'text-tone-accent underline decoration-tone-accent/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40';
