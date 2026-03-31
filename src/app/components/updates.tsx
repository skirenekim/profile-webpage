import { motion } from 'motion/react';
import { Award, TrendingUp, GraduationCap, ExternalLink, ArrowRight, MapPin, Lightbulb } from 'lucide-react';
import { nowData } from '../../data/nowData';

const milestones = [
  {
    icon: ExternalLink,
    title: 'Speaking at Databricks Data + AI Summit',
    description: 'Presenting on agent-based KPI reasoning & narrative generation. Come find me there!',
    date: 'Jun 2026',
    location: 'San Francisco',
    iconBg: 'bg-[#6D94C5]',
    accentBorder: 'border-l-[#6D94C5]',
    cardBg: 'bg-[#CBDCEB]/30',
    link: 'https://www.databricks.com/dataaisummit/session/automating-kpi-reasoning-and-narrative-generation-agent-bricks-and',
    linkLabel: 'View Session',
    tag: 'Upcoming · Conference Talk',
    tagColor: 'text-[#6D94C5]',
    pair: null,
  },
  {
    icon: Award,
    title: 'RSU Award for Outstanding Performance',
    description: 'Awarded RSUs for outstanding annual performance at Electronic Arts',
    date: 'Dec 2025',
    location: null,
    iconBg: 'bg-[#C49A6C]',
    accentBorder: 'border-l-[#C49A6C]',
    cardBg: 'bg-[#C49A6C]/10',
    link: null,
    linkLabel: null,
    tag: null,
    tagColor: null,
    pair: null,
  },
  // Dec 2024 row — two half-width cards rendered via the `pair` field on the first
  {
    icon: TrendingUp,
    title: 'Data Scientist at Electronic Arts',
    description: 'Joined EA to build advanced analytics and AI systems for FC Online 4',
    date: 'Dec 2024',
    location: null,
    iconBg: 'bg-[#7A9E7E]',
    accentBorder: 'border-l-[#7A9E7E]',
    cardBg: 'bg-[#E8DFCA]/40',
    link: null,
    linkLabel: null,
    tag: null,
    tagColor: null,
    pair: {
      icon: GraduationCap,
      title: 'M.S. Computer Science — Georgia Tech',
      description: "Graduated from Georgia Institute of Technology with a Master's in Computer Science, completed with corporate sponsorship from Krafton",
      location: 'Atlanta, USA',
      iconBg: 'bg-[#9B8EA8]',
      accentBorder: 'border-l-[#9B8EA8]',
      cardBg: 'bg-[#CBDCEB]/25',
    },
  },
];

function TimelineDot({ color }: { color: string }) {
  return (
    <div
      className="absolute left-0 top-5 w-3 h-3 rounded-full border-2 border-[#F5EFE6] shadow-sm -translate-x-[5px]"
      style={{ backgroundColor: color }}
    />
  );
}

const dotColorMap: Record<string, string> = {
  'bg-[#6D94C5]': '#6D94C5',
  'bg-[#C49A6C]': '#C49A6C',
  'bg-[#7A9E7E]': '#7A9E7E',
  'bg-[#9B8EA8]': '#9B8EA8',
};

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

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Rail */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#CBDCEB]" />

        <div className="space-y-6 pl-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const dotColor = dotColorMap[milestone.iconBg] ?? '#CBDCEB';

            return (
              <div key={milestone.title} className="relative">
                <TimelineDot color={dotColor} />

                {/* Date stamp outside card */}
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {milestone.date}
                  {milestone.location && (
                    <span className="ml-2 inline-flex items-center gap-0.5 font-normal normal-case tracking-normal text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {milestone.location}
                    </span>
                  )}
                </span>

                {/* Single card or paired cards */}
                {milestone.pair ? (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {/* First of pair */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.1, duration: 0.45 }}
                      whileHover={{ x: 4 }}
                      className={`${milestone.cardBg} rounded-xl border-l-4 ${milestone.accentBorder} border border-transparent pl-4 pr-4 py-4 shadow-sm hover:shadow-md transition-all flex items-start gap-3`}
                    >
                      <div className={`w-10 h-10 ${milestone.iconBg} rounded-lg flex items-center justify-center shrink-0 shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        {milestone.tag && (
                          <p className={`text-xs font-bold uppercase tracking-widest ${milestone.tagColor} mb-1`}>{milestone.tag}</p>
                        )}
                        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">{milestone.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{milestone.description}</p>
                      </div>
                    </motion.div>

                    {/* Second of pair */}
                    {(() => {
                      const PairIcon = milestone.pair.icon;
                      return (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1, duration: 0.45 }}
                          whileHover={{ x: 4 }}
                          className={`${milestone.pair.cardBg} rounded-xl border-l-4 ${milestone.pair.accentBorder} border border-transparent pl-4 pr-4 py-4 shadow-sm hover:shadow-md transition-all flex items-start gap-3`}
                        >
                          <div className={`w-10 h-10 ${milestone.pair.iconBg} rounded-lg flex items-center justify-center shrink-0 shadow-sm`}>
                            <PairIcon className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">{milestone.pair.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">{milestone.pair.description}</p>
                            {milestone.pair.location && (
                              <span className="inline-flex items-center gap-0.5 text-xs text-slate-400 mt-1.5">
                                <MapPin className="w-3 h-3" />
                                {milestone.pair.location}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })()}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.1, duration: 0.45 }}
                    whileHover={{ x: 4 }}
                    className={`${milestone.cardBg} rounded-xl border-l-4 ${milestone.accentBorder} border border-transparent pl-4 pr-5 py-4 shadow-sm hover:shadow-md transition-all flex items-start gap-4`}
                  >
                    <div className={`w-10 h-10 ${milestone.iconBg} rounded-lg flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      {milestone.tag && (
                        <p className={`text-xs font-bold uppercase tracking-widest ${milestone.tagColor} mb-1`}>{milestone.tag}</p>
                      )}
                      <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">{milestone.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{milestone.description}</p>
                      {milestone.link && (
                        <a
                          href={milestone.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-white bg-[#6D94C5] px-3 py-1.5 rounded-lg hover:bg-[#5882b0] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {milestone.linkLabel}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Currently Thinking About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-xl border border-[#C4785A]/40 px-8 py-8 space-y-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#C4785A]" />
            <span className="text-[#C4785A] text-xs font-bold uppercase tracking-widest">Currently Thinking About</span>
          </div>
          <span className="text-slate-400 text-xs">{nowData.updatedDate}</span>
        </div>

        <p className="text-[0.9375rem] text-[#1e3a5f] font-medium leading-relaxed">
          {nowData.motivation}
        </p>

        <ul className="space-y-4">
          {nowData.interests.map((interest, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[0.35rem] w-1.5 h-1.5 rounded-full bg-[#C4785A] shrink-0" />
              <div>
                <p className="text-[0.65rem] font-bold text-[#C4785A] uppercase tracking-widest mb-1">{interest.keyword}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{interest.text}</p>
              </div>
            </li>
          ))}
        </ul>

<a
          href={nowData.ctaLink}
          className="inline-flex items-center gap-2 text-[#C4785A] text-sm font-semibold hover:text-[#1e3a5f] transition-colors"
        >
          {nowData.ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

    </div>
  );
}
