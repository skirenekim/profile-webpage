import { Linkedin, FileText, Mail } from 'lucide-react';
import profilePic from '../../../img/profile_pic.JPG';
import { Reveal, glassPill } from './primitives';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/skirene/', icon: Linkedin },
  { label: 'Medium', href: 'https://skirene.medium.com/', icon: FileText },
  { label: 'Email', href: 'mailto:keks1208@naver.com', icon: Mail },
];

const keywords = ['Agentic AI', 'Applied ML', 'User Behavior Analytics'];

export function Hero() {
  return (
    <section
      id="top"
      className="tone-cream bg-[radial-gradient(60%_55%_at_30%_40%,rgba(255,255,255,0.6),transparent)]"
    >
      <Reveal className="mx-auto grid max-w-5xl items-center gap-10 px-6 pb-20 pt-20 md:grid-cols-[auto_1fr] md:gap-14 md:pb-28 md:pt-28">
        <img
          src={profilePic}
          alt="Seong Kyung Kim"
          width={192}
          height={192}
          className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-white/70 md:mx-0 md:h-48 md:w-48"
        />

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
            Senior Data Scientist
          </p>
          <h1 className="mt-3 text-4xl text-ink sm:text-5xl md:text-6xl">Seong Kyung Kim</h1>
          <p className="mt-1 text-xl text-ink-soft">김성경</p>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-ink-soft md:mx-0">
            I build agentic AI and applied ML systems that turn how people actually behave into
            clearer decisions — currently at Electronic Arts.
          </p>

          <p className="mt-2 text-sm text-ink-muted">{keywords.join(' · ')}</p>

          <ul className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={glassPill}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
