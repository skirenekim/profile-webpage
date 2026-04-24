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

      {/* Bio + Stats — two-column, no card wrappers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-start"
      >
        {/* Left: bio */}
        <div>
          <h2 className="text-3xl font-bold mb-5 text-[#1e3a5f]">About Me</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Agentic AI', 'Applied ML', 'Responsible AI', 'User Behavior Analytics'].map((theme) => (
              <span
                key={theme}
                className="px-3 py-1 bg-[#CBDCEB]/30 text-[#3d6a9e] rounded-full text-xs font-semibold border border-[#CBDCEB] tracking-wide"
              >
                {theme}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            <div className="border-l-2 border-[#6D94C5] pl-4">
              <p className="text-xs font-bold text-[#6D94C5] uppercase tracking-widest mb-2">Professional</p>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.9] tracking-[0.01em]">
                I am a Data Scientist who applies AI and machine learning to automate workflows, improve analytical systems, and support better operational decision-making. My work sits at the intersection of user behavior analytics, applied machine learning, agentic AI, and system improvement, with a focus on turning complex, fragmented processes into scalable and practical solutions. I am particularly interested in understanding user behavior and building analytical systems that translate machine learning into meaningful, measurable impact.
              </p>
            </div>

            <div className="border-l-2 border-[#C49A6C] pl-4">
              <p className="text-xs font-bold text-[#C49A6C] uppercase tracking-widest mb-2">Perspective</p>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.9] tracking-[0.01em]">
                <span className="italic">Beyond my professional work,</span> I am deeply interested in how AI is transforming the way people live, think, and interact with the world. I care not only about what these rapidly evolving technologies can do, but also about how they shape human cognition, behavior, and society. This interest has long shaped my work, from applying deep learning to challenges such as cyberbullying, depression, and anti-cheat systems to now exploring the new possibilities that agentic AI may unlock. Ultimately, I want to better understand not only how AI transforms people and institutions, but also how we can guide that transformation responsibly by building AI systems that are safe, healthy, and socially beneficial.
              </p>
            </div>
          </div>
        </div>

        {/* Right: stats sidebar — no card boxes */}
        <div className="flex flex-col gap-0 pt-1 md:pt-[3.25rem]">
          {statLinks.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
            >
              {'href' in stat ? (
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-[#E8DFCA] py-5 hover:bg-[#F5EFE6] transition-colors px-2 -mx-2 rounded"
                >
                  <div className="text-2xl font-bold text-[#6D94C5] mb-0.5">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </a>
              ) : (
                <button
                  onClick={() => onNavigate(stat.tab!)}
                  className="w-full text-left border-b border-[#E8DFCA] py-5 hover:bg-[#F5EFE6] transition-colors px-2 -mx-2 rounded cursor-pointer"
                >
                  <div className="text-2xl font-bold text-[#6D94C5] mb-0.5">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </button>
              )}
            </motion.div>
          ))}
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">{highlight.title}</h3>
              <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Skills — two separate cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl bg-[#CBDCEB]/40 p-6 md:p-8 border border-[#CBDCEB] shadow-sm"
        >
          <h3 className="text-sm font-bold text-[#3d6a9e] uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6D94C5] rounded-full" />
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Agentic AI Systems',
              'Anomaly Detection',
              'Applied Machine Learning',
              'Data-Driven Decision Making',
              'User Behavior Analytics',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white/70 text-[#3d6a9e] rounded-lg text-sm font-medium border border-[#CBDCEB]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-[#E8DFCA]/60 p-6 md:p-8 border border-[#E8DFCA] shadow-sm"
        >
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C49A6C] rounded-full" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Databricks',
              'Docker',
              'PyTorch',
              'Python',
              'S3',
              'Spark',
              'SQL',
              'Tableau',
              'TensorFlow',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/70 text-slate-700 rounded-lg text-sm font-medium border border-[#E8DFCA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
