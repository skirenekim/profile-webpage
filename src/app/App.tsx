import { useEffect, useRef, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Updates } from './components/updates';
import { Education } from './components/education';
import { Contact } from './components/contact';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'updates', label: 'Updates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));

    // The last section may be too short to reach the observer band; mark it when at page end.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(sections[sections.length - 1].id);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return active;
}

export default function App() {
  const active = useActiveSection();
  const navRef = useRef<HTMLUListElement>(null);

  // Keep the active anchor visible when the nav scrolls horizontally on small screens.
  // Horizontal-only so it never nudges the page vertically.
  useEffect(() => {
    const list = navRef.current;
    const el = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!list || !el || list.scrollWidth <= list.clientWidth) return;
    const left = el.offsetLeft - (list.clientWidth - el.offsetWidth) / 2;
    list.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper">
        <Hero />

        <nav
          aria-label="Sections"
          className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-5xl items-center gap-6 px-6">
            <a
              href="#top"
              className="hidden shrink-0 font-serif text-base font-medium text-ink md:block"
            >
              Seong Kyung Kim
            </a>
            <ul
              ref={navRef}
              className="scrollbar-hide -mx-6 flex flex-1 overflow-x-auto px-6 [mask-image:linear-gradient(to_right,black_calc(100%_-_2.5rem),transparent)] md:mx-0 md:justify-end md:px-0 md:[mask-image:none]"
            >
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id} className="shrink-0">
                    <a
                      href={`#${s.id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`relative block px-3 py-4 text-sm transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-muted hover:text-ink-soft'
                      }`}
                    >
                      {s.label}
                      <span
                        className={`absolute inset-x-3 bottom-0 h-px bg-ink transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <main className="mx-auto max-w-5xl px-6">
          <About />
          <Experience />
          <Projects />
          <Updates />
          <Education />
          <Contact />
        </main>

        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-ink-muted">
            © {new Date().getFullYear()} Seong Kyung Kim
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
