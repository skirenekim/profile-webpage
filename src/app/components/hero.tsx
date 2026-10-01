import { Linkedin, FileText, Mail } from 'lucide-react';
import profilePic from '../../../img/profile_pic.JPG';
import { Reveal } from './primitives';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/skirene/', icon: Linkedin },
  { label: 'Medium', href: 'https://skirene.medium.com/', icon: FileText },
  { label: 'Email', href: 'mailto:keks1208@naver.com', icon: Mail },
];

export function Hero() {
  return (
    <section id="top" className="bg-hero text-paper">
      <Reveal
        className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:gap-14 md:py-24"
      >
        <img
          src={profilePic}
          alt="Seong Kyung Kim"
          width={192}
          height={192}
          className="mx-auto h-40 w-40 rounded-full object-cover ring-1 ring-white/20 md:mx-0 md:h-48 md:w-48"
        />

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-paper/70">
            Senior Data Scientist
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl">Seong Kyung Kim</h1>
          <p className="mt-1 text-xl text-paper/70">김성경</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/85 md:mx-0">
            Building agentic AI and ML systems for user behavior analytics at Electronic Arts.
          </p>
          <p className="mt-2 text-sm text-paper/70">Agentic AI · Applied ML · User Behavior Analytics</p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/80 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper/70"
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
