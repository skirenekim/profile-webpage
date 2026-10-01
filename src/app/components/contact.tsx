import { useState } from 'react';
import { Download } from 'lucide-react';
import { useDownloadCV } from './cv/useDownloadCV';
import { Section, Row, textLink } from './primitives';

const links = [
  { label: 'LinkedIn', value: 'linkedin.com/in/skirene', href: 'https://www.linkedin.com/in/skirene/' },
  { label: 'Medium', value: 'skirene.medium.com', href: 'https://skirene.medium.com/' },
  { label: 'Email', value: 'keks1208@naver.com', href: 'mailto:keks1208@naver.com' },
];

export function Contact() {
  const { downloadCV } = useDownloadCV();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await downloadCV();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Section id="contact" tone="cream" title="Contact">
      <Row
        left={
          <p className="leading-relaxed text-ink-soft">
            I'm always open to discussing new opportunities, collaborations, or exchanging ideas.
          </p>
        }
      >
        <button
          type="button"
          onClick={handleDownload}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 rounded-lg bg-tone-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink disabled:cursor-wait disabled:opacity-70"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {isGenerating ? 'Generating PDF…' : 'Download CV (PDF)'}
        </button>

        <dl className="mt-10 divide-y divide-tone-line border-y border-tone-line">
          {links.map((l) => (
            <div key={l.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 text-sm">
              <dt className="text-ink-muted">{l.label}</dt>
              <dd>
                <a
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={textLink}
                >
                  {l.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Row>
    </Section>
  );
}
