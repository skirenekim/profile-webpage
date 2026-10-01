import { Section, Label, Chip, Block, Row } from './primitives';

const coreExpertise = [
  'Agentic AI Systems',
  'Anomaly Detection',
  'Applied Machine Learning',
  'Data-Driven Decision Making',
  'User Behavior Analytics',
];

const technicalSkills = [
  'Databricks',
  'Docker',
  'PyTorch',
  'Python',
  'S3',
  'Spark',
  'SQL',
  'Tableau',
  'TensorFlow',
];

const glance = [
  ['Experience', '5+ years in applied ML'],
  ['Organizations', 'Electronic Arts · Krafton'],
  ['Speaking', 'Data + AI Summit 2026'],
];

export function About() {
  return (
    <Section id="about" tone="sand" title="About">
      <Row
        sticky
        leftLastOnMobile
        left={
        <aside className="space-y-8">
          <div>
            <Label className="mb-3">At a glance</Label>
            <dl className="divide-y divide-tone-line border-y border-tone-line text-sm">
              {glance.map(([term, value]) => (
                <div key={term} className="py-2.5">
                <dt className="text-xs text-ink-muted">{term}</dt>
                <dd className="mt-0.5 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Label className="mb-3">Core expertise</Label>
            <div className="flex flex-wrap gap-1.5">
              {coreExpertise.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>

          <div>
            <Label className="mb-3">Technical skills</Label>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </aside>
        }
      >
        <div className="space-y-8">
          <Block label="Professional">
            <p className="text-sm leading-[1.85] text-ink-soft">
              I am a Senior Data Scientist who applies AI and machine learning to automate workflows,
              strengthen analytical systems, and support better operational decision-making. My focus
              is on user behavior analytics and agentic AI — turning complex, fragmented processes into
              practical solutions that translate ML into measurable impact.
            </p>
          </Block>

          <Block label="Perspective">
            <p className="text-sm leading-[1.85] text-ink-soft">
              Beyond my professional work, I am deeply interested in how AI is reshaping the way people
              live, think, and interact — and in how we can guide that transformation responsibly. This
              interest has long shaped my work, from applying deep learning to cyberbullying, depression,
              and anti-cheat systems to now exploring what agentic AI may unlock for building systems
              that are safe, healthy, and socially beneficial.
            </p>
          </Block>
        </div>
      </Row>
    </Section>
  );
}
