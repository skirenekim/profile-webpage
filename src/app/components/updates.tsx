import { motion } from 'motion/react';
import { Award, TrendingUp, Zap, ExternalLink } from 'lucide-react';

const updates = [
  {
    icon: ExternalLink,
    title: 'Speaking at Databricks Data + AI Summit',
    description: 'Presenting on agent-based KPI reasoning & narrative generation. Come find me there!',
    date: 'Jun 2026',
    location: 'San Francisco',
    iconBg: 'bg-[#6D94C5]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
    link: 'https://www.databricks.com/dataaisummit/session/automating-kpi-reasoning-and-narrative-generation-agent-bricks-and',
    linkLabel: 'View Session',
  },
  {
    icon: Award,
    title: 'RSU Award for Outstanding Performance',
    description: 'Awarded RSUs for outstanding annual performance at Electronic Arts',
    date: 'Dec 2025',
    location: null,
    iconBg: 'bg-[#C49A6C]',
    cardBg: 'bg-[#C49A6C]/10',
    border: 'border-[#C49A6C]/40',
    link: null,
    linkLabel: null,
  },
  {
    icon: Zap,
    title: 'Agent-Based Automation System',
    description: 'Deployed an LLM-driven agent workflow that reduced recurring reporting workload by ~7 person-days per month',
    date: 'Nov 2025',
    location: null,
    iconBg: 'bg-[#9B8EA8]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
    link: null,
    linkLabel: null,
  },
  {
    icon: TrendingUp,
    title: 'Data Scientist at Electronic Arts',
    description: 'Joined EA to build advanced analytics and AI systems for FC Online 4',
    date: 'Dec 2024',
    location: null,
    iconBg: 'bg-[#7A9E7E]',
    cardBg: 'bg-[#E8DFCA]/40',
    border: 'border-[#E8DFCA]',
    link: null,
    linkLabel: null,
  },
];

export function Updates({ onNavigate: _onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-3 text-[#1e3a5f]">
          Recent Updates
        </h2>
        <p className="text-slate-600">Latest achievements and milestones</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {updates.map((update, index) => {
          const Icon = update.icon;
          return (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`${update.cardBg} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border ${update.border}`}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                className={`w-14 h-14 ${update.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-sm`}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                {update.title}
              </h3>

              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                {update.description}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#6D94C5]">{update.date}</span>
                  {update.location && (
                    <span className="text-xs text-slate-400">{update.location}</span>
                  )}
                </div>
                {update.link && (
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-white bg-[#6D94C5] px-2 py-1 rounded-md hover:bg-[#5882b0] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {update.linkLabel}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
