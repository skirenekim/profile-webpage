import { ExternalLink } from 'lucide-react';
import { Section, Row, Meta, textLink } from './primitives';

type Milestone = {
  date: string;
  title: string;
  description: string;
  location?: string;
  tag?: string;
  link?: string;
  linkLabel?: string;
};

const milestones: Milestone[] = [
  {
    date: 'Jun 2026',
    tag: 'Conference',
    title: 'Attended Databricks Data + AI Summit',
    description: 'Joined the annual Databricks conference on data engineering, analytics, and AI.',
    location: 'San Francisco',
  },
  {
    date: 'Dec 2025',
    title: 'RSU award for outstanding performance',
    description: 'Awarded RSUs for outstanding annual performance at Electronic Arts.',
  },
  {
    date: 'Dec 2024',
    title: 'Senior Data Scientist at Electronic Arts',
    description: 'Joined EA to build advanced analytics and AI systems for FC Online 4.',
  },
  {
    date: 'Dec 2024',
    title: 'M.S. Computer Science, Georgia Tech',
    description:
      "Graduated from Georgia Institute of Technology with a Master's in Computer Science, completed with corporate sponsorship from Krafton.",
    location: 'Atlanta, USA',
  },
];

export function Updates() {
  return (
    <Section id="updates" tone="lilac" title="Updates">
      <ul className="divide-y divide-tone-line border-y border-tone-line">
        {milestones.map((m) => (
          <li key={m.title} className="py-6">
            <Row left={<Meta items={[m.date, m.location]} />}>
              {m.tag && (
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-tone-accent">{m.tag}</p>
              )}
              <h3 className="text-base font-medium text-ink">{m.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.description}</p>
              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3 inline-flex items-center gap-1.5 text-sm ${textLink}`}
                >
                  {m.linkLabel}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </Row>
          </li>
        ))}
      </ul>
    </Section>
  );
}
