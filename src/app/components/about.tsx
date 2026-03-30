import { motion } from 'motion/react';
import { Zap, Target, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'AI & ML Expertise',
    description: 'Building production-ready ML systems and AI-driven workflows',
    bg: 'bg-[#6D94C5]',
  },
  {
    icon: Target,
    title: 'Data-Driven Solutions',
    description: 'Translating complex data into actionable business insights',
    bg: 'bg-[#7A9E7E]',
  },
  {
    icon: Heart,
    title: 'User-Centric Approach',
    description: 'Deep understanding of user behavior and engagement patterns',
    bg: 'bg-[#C4785A]',
  },
];

const statLinks = [
  { value: '5+', label: 'Years Experience', tab: 'about' },
  { value: '15+', label: 'Major Projects', tab: 'experience' },
  { value: '1', label: 'Conferences', href: 'https://www.databricks.com/dataaisummit/session/automating-kpi-reasoning-and-narrative-generation-agent-bricks-and' },
  { value: '2', label: 'Organizations', tab: 'experience' },
];

export function About({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8DFCA]"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#1e3a5f]">
          About Me
        </h2>
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
          <p>
            I'm a Data Scientist specializing in user behavior analysis and
            service performance, applying machine learning to drive measurable
            outcomes.
          </p>
          <p>
            My experience spans content and gaming platforms, where I've built
            end-to-end ML systems and analytical frameworks that directly
            inform product decisions and operational strategy.
          </p>
          <p>
            I'm driven by the challenge of turning complex behavioral data into
            clear, actionable insight — and ensuring that insight reaches the
            people who need it.
          </p>
        </div>
      </motion.div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-[#E8DFCA]"
            >
              <div className={`w-14 h-14 ${highlight.bg} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#CBDCEB]/30 rounded-2xl p-6 border border-[#CBDCEB]"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6D94C5] rounded-full"></span>
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'User Behavior Analysis',
              'Statistical Modeling',
              'Applied Machine Learning',
              'Data-Driven Decision Making',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-[#3d6a9e] rounded-lg text-sm font-medium shadow-sm border border-[#CBDCEB]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#E8DFCA]/50 rounded-2xl p-6 border border-[#E8DFCA]"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6D94C5] rounded-full"></span>
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Python',
              'Spark',
              'SQL',
              'S3',
              'PyTorch',
              'TensorFlow',
              'Databricks',
              'Tableau',
              'Docker',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-[#E8DFCA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {statLinks.map((stat, index) => {
          const content = (
            <>
              <div className="text-3xl font-bold text-[#6D94C5] mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </>
          );
          const baseClass = "block w-full bg-white rounded-2xl p-5 shadow-sm text-center border border-[#E8DFCA] transition-all hover:shadow-md hover:border-[#CBDCEB] cursor-pointer";
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + index * 0.1 }}
            >
              {'href' in stat ? (
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className={baseClass}>
                  {content}
                </a>
              ) : (
                <button onClick={() => onNavigate(stat.tab!)} className={baseClass}>
                  {content}
                </button>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
