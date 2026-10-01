import { ExternalLink, Github, Lock } from 'lucide-react';
import { Section, Row, Block, Meta, Chip, DashList, textLink } from './primitives';

type Project = {
  title: string;
  subtitle: string;
  period: string;
  team: string;
  objective: string | string[];
  approach: string | string[];
  outcome: string;
  contributions: string[];
  contributionsLabel?: string;
  techStack: string[];
  codeLink?: string;
  codeStatus?: 'private' | 'not-public';
  trailerLink?: string;
};

const projects: Project[] = [
  {
    title: 'Next-Gen ERP',
    subtitle: 'Built with an AI Multi-Agent System',
    period: 'April 2026 - Present',
    team: 'Solo Project',
    objective: [
      'Rebuild a next-generation ERP tailored to the packaging manufacturing domain on a modern architecture.',
      'Preserve industry-specific domain knowledge while replacing a legacy Windows desktop C/S system.',
    ],
    approach: [
      'Scale a solo developer into a full cross-functional org via a Claude Code multi-agent system under a Staff → Manager → CEO approval pipeline.',
      'Run the platform on AWS + Kubernetes with a managed workflow engine and analytics read model to sustain end-to-end operations alone.',
    ],
    outcome:
      'In progress — foundational design and governance in place; core modeling and API design underway.',
    contributions: [
      'Targeting direct sales and deployment to packaging manufacturers as the end goal of the project.',
    ],
    contributionsLabel: 'Next Milestone',
    techStack: ['Git', 'AWS', 'PostgreSQL', 'LLM', 'Claude'],
    codeStatus: 'not-public',
  },
  {
    title: 'WANBEA',
    subtitle: 'Conversational NPC Game',
    period: 'January 2023 - May 2023',
    team: 'Team of 2',
    objective:
      'Designed to provide emotional support and a sense of companionship for users experiencing psychological distress or suicidal ideation.',
    approach:
      'Developed a game featuring a personalized conversational NPC, driven by user messages and dialogue-based interaction.',
    outcome:
      'Built and released the WANBEA game (trailer available); service discontinued due to operational cost constraints.',
    contributions: [
      'Developed an XLNet-based model to assess depressive risk from user responses',
      'Implemented core gameplay and NPC interaction systems using the Unity engine',
    ],
    techStack: ['C#', 'Unity', 'PyTorch', 'XLNet', 'NLP'],
    codeLink: 'https://drive.google.com/drive/folders/1v6dRpyBxNHmTCUJePssodrz8VAQVHD1l?usp=share_link',
    trailerLink: 'https://www.youtube.com/watch?feature=shared&v=aPyvwndMICs',
  },
];

function TextBlock({ content }: { content: string | string[] }) {
  if (Array.isArray(content)) return <DashList items={content} />;
  return <p className="text-sm leading-relaxed text-ink-soft">{content}</p>;
}

export function Projects() {
  return (
    <Section id="projects" tone="cream" title="Personal Projects" subtitle="Independent work and creative initiatives">
      <div className="divide-y divide-tone-line">
        {projects.map((project) => (
          <article key={project.title} className="py-12 first:pt-0 last:pb-0">
            <Row
              sticky
              left={
                <>
                  <h3 className="text-xl text-ink">{project.title}</h3>
                  <p className="mt-0.5 text-ink-soft">{project.subtitle}</p>
                  <Meta items={[project.period, project.team]} className="mt-2" />

                  {(project.codeLink || project.trailerLink || project.codeStatus === 'not-public') && (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 ${textLink}`}
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          View code
                        </a>
                      )}
                      {project.trailerLink && (
                        <a
                          href={project.trailerLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 ${textLink}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          Watch trailer
                        </a>
                      )}
                      {project.codeStatus === 'not-public' && (
                        <span className="inline-flex items-center gap-1.5 text-ink-muted">
                          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                          Code not public
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </>
              }
            >
              <div className="space-y-6">
                <Block label="Objective">
                  <TextBlock content={project.objective} />
                </Block>
                <Block label="Approach">
                  <TextBlock content={project.approach} />
                </Block>
                <Block label="Outcome">
                  <p className="text-sm leading-relaxed text-ink-soft">{project.outcome}</p>
                </Block>
                <Block label={project.contributionsLabel ?? 'Key contributions'}>
                  <DashList items={project.contributions} />
                </Block>
              </div>
            </Row>
          </article>
        ))}
      </div>
    </Section>
  );
}
