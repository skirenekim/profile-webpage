import { motion } from 'motion/react';
import { Code, ExternalLink, Github, Gamepad2, Package, Lock } from 'lucide-react';

type Project = {
  title: string;
  subtitle: string;
  period: string;
  team: string;
  icon: typeof Gamepad2;
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
    subtitle: 'Built by an AI Multi-Agent Organization',
    period: 'April 2026 - Present',
    team: 'Solo Project',
    icon: Package,
    objective: [
      'Rebuild a next-generation ERP tailored to the packaging manufacturing domain on a modern architecture.',
      'Preserve industry-specific domain knowledge while replacing a legacy Windows desktop C/S system.',
    ],
    approach: [
      'Re-express legacy domain knowledge on a modern foundation that separates product definition from rules, preserves historical transaction state, and treats exceptions as first-class signals.',
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
    icon: Gamepad2,
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
  if (Array.isArray(content)) {
    return (
      <div className="space-y-1.5">
        {content.map((line, i) => (
          <p key={i} className="text-slate-700 text-sm leading-relaxed pl-4 -indent-4">
            <span className="text-[#6D94C5] font-semibold mr-1.5">—</span>
            {line}
          </p>
        ))}
      </div>
    );
  }
  return <p className="text-slate-700 text-sm leading-relaxed">{content}</p>;
}

export function Projects() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-3 text-[#1e3a5f]">
          Personal Projects
        </h2>
        <p className="text-slate-600">Independent work and creative initiatives</p>
      </motion.div>

      {projects.map((project, projectIdx) => {
        const Icon = project.icon;
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + projectIdx * 0.1 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#6D94C5] to-[#CBDCEB] rounded-3xl p-0.5 shadow-md"
          >
            <div className="bg-white rounded-3xl p-8">
              {/* Header with Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#6D94C5] rounded-2xl flex items-center justify-center shadow-sm">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-3">{project.subtitle}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#CBDCEB]/40 text-[#3d6a9e] rounded-lg text-sm font-medium">
                      {project.period}
                    </span>
                    <span className="px-3 py-1 bg-[#E8DFCA]/60 text-slate-600 rounded-lg text-sm font-medium">
                      {project.team}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {(project.codeLink || project.trailerLink || project.codeStatus) && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2d4e6e] transition-all hover:scale-105 font-medium shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.trailerLink && (
                    <a
                      href={project.trailerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#6D94C5] text-white rounded-lg hover:bg-[#5882b0] transition-all hover:scale-105 font-medium shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch Trailer
                    </a>
                  )}
                  {project.codeStatus === 'not-public' && (
                    <span className="inline-flex items-center gap-1.5 self-center px-3 py-1.5 bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-200">
                      <Lock className="w-3 h-3" />
                      Code Not Public
                    </span>
                  )}
                </div>
              )}

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#CBDCEB]/20 rounded-xl p-5 border border-[#CBDCEB]">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#6D94C5] rounded-full"></span>
                    Objective
                  </h4>
                  <TextBlock content={project.objective} />
                </div>

                <div className="bg-[#E8DFCA]/40 rounded-xl p-5 border border-[#E8DFCA]">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#5882b0] rounded-full"></span>
                    Approach
                  </h4>
                  <TextBlock content={project.approach} />
                </div>

                <div className="bg-[#CBDCEB]/20 rounded-xl p-5 border border-[#CBDCEB]">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4a7ab5] rounded-full"></span>
                    Outcome
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                <div className="bg-[#F5EFE6] rounded-xl p-5 border border-[#E8DFCA]">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#6D94C5] rounded-full"></span>
                    {project.contributionsLabel ?? 'Key Contributions'}
                  </h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, idx) => (
                      <li
                        key={idx}
                        className="text-slate-700 text-sm leading-relaxed flex items-start"
                      >
                        <Code className="w-4 h-4 text-[#6D94C5] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-[#F5EFE6] rounded-xl p-5 border border-[#E8DFCA]">
                <h4 className="font-semibold text-slate-900 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-[#E8DFCA] hover:border-[#6D94C5] hover:text-[#6D94C5] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
