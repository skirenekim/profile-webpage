import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Award } from 'lucide-react';
import eaLogo from '../../../img/electronic_arts_logo.jpeg';
import kraftonLogo from '../../../img/krafton_inc_logo.jpeg';
import { experienceData, type Project } from '../../data/experienceData';
import { Section, Row, Block, Meta, DashList } from './primitives';

const logoMap: Record<string, string> = {
  'Electronic Arts': eaLogo,
  'PUBG, Krafton': kraftonLogo,
};

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li>
      <h4 className="text-base font-medium leading-snug text-ink">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 py-5 text-left"
        >
          <span className="min-w-0">
            <span className="block">{project.title}</span>
            <Meta items={[project.period, project.team]} className="mt-1 font-normal" />
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h4>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-5 pb-6">
              <Block label="Problem">
                <p className="text-sm leading-relaxed text-ink-soft">{project.problem}</p>
              </Block>
              <Block label="Approach">
                <p className="text-sm leading-relaxed text-ink-soft">{project.approach}</p>
              </Block>
              <Block label="Outcome">
                <p className="text-sm leading-relaxed text-ink-soft">{project.outcome}</p>
              </Block>
              <Block label="Key contributions">
                <DashList items={project.contributions} />
              </Block>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" tone="mist" title="Experience">
      <div className="space-y-16">
        {experienceData.map((job) => (
          <Row
            key={job.company}
            sticky
            left={
              <>
                <img
                  src={logoMap[job.company]}
                  alt=""
                  className="h-11 w-11 rounded-md border border-tone-line bg-white object-contain p-1"
                />
                <h3 className="mt-4 text-xl text-ink">{job.company}</h3>
                <p className="mt-0.5 text-ink-soft">{job.role}</p>
                <p className="mt-1 text-sm text-ink-muted">{job.period}</p>
                {job.highlight && (
                  <p className="mt-3 flex items-start gap-1.5 text-sm text-honor">
                    <Award className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{job.highlight}</span>
                  </p>
                )}
              </>
            }
          >
            <ul className="divide-y divide-tone-line border-y border-tone-line">
              {job.projects.map((project) => (
                <ProjectRow key={project.title} project={project} />
              ))}
            </ul>
          </Row>
        ))}
      </div>
    </Section>
  );
}
