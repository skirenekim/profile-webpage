import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Users } from 'lucide-react';
import eaLogo from '../../../img/electronic_arts_logo.jpeg';
import kraftonLogo from '../../../img/krafton_inc_logo.jpeg';
import { experienceData, type Job, type Project } from '../../data/experienceData';

const logoMap: Record<string, string> = {
  'Electronic Arts': eaLogo,
  'PUBG, Krafton': kraftonLogo,
};

const sectionHeading = 'font-semibold text-slate-900 mb-1 text-sm';
const sectionBody = 'text-slate-600 text-sm leading-relaxed';

function ProjectCard({ project, index, accentBg }: { project: Project; index: number; accentBg: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all mb-3 border border-[#E8DFCA] overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-[#F5EFE6] transition-colors"
      >
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 mb-2 leading-tight">
            {project.title}
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="flex items-center gap-1 px-2 py-1 bg-[#E8DFCA]/60 text-slate-600 rounded-md">
              <Calendar className="w-3 h-3" />
              {project.period}
            </span>
            <span className="flex items-center gap-1 px-2 py-1 bg-[#CBDCEB]/50 text-[#3d6a9e] rounded-md">
              <Users className="w-3 h-3" />
              {project.team}
            </span>
          </div>
        </div>
        <div className={`flex-shrink-0 mt-1 w-8 h-8 rounded-lg ${accentBg} flex items-center justify-center`}>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-white" />
          ) : (
            <ChevronDown className="w-4 h-4 text-white" />
          )}
        </div>
      </button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 pb-5 space-y-3 bg-[#F5EFE6]"
        >
          <div className="pl-4 border-l-2 border-[#CBDCEB]">
            <h5 className={sectionHeading}>Problem</h5>
            <p className={sectionBody}>{project.problem}</p>
          </div>

          <div className="pl-4 border-l-2 border-[#E8DFCA]">
            <h5 className={sectionHeading}>Approach</h5>
            <p className={sectionBody}>{project.approach}</p>
          </div>

          <div className="pl-4 border-l-2 border-[#6D94C5]/40">
            <h5 className={sectionHeading}>Outcome</h5>
            <p className={sectionBody}>{project.outcome}</p>
          </div>

          <div className="pl-4 border-l-2 border-[#E8DFCA]">
            <h5 className="font-semibold text-slate-900 mb-2 text-sm">Key Contributions</h5>
            <ul className="space-y-1.5">
              {project.contributions.map((contribution, idx) => (
                <li key={idx} className="text-slate-600 text-sm leading-relaxed flex">
                  <span className="text-[#6D94C5] mr-2">▸</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function Experience() {
  return (
    <div className="space-y-8">
      {experienceData.map((job, jobIndex) => (
        <motion.div
          key={job.company}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: jobIndex * 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8DFCA]"
        >
          {/* Company Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#E8DFCA] shadow-sm flex-shrink-0 bg-white flex items-center justify-center">
              <img
                src={logoMap[job.company]}
                alt={job.company}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900">{job.company}</h3>
              <p className="text-lg text-slate-600">{job.role}</p>
              <p className="text-sm text-slate-500">{job.period}</p>
              {job.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + jobIndex * 0.1 }}
                  className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-[#C49A6C]/20 text-[#8a5e2a] rounded-lg text-sm font-medium border border-[#C49A6C]/50"
                >
                  <span className="text-[#C49A6C]">★</span>
                  {job.highlight}
                </motion.div>
              )}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            {job.projects.map((project, projectIndex) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={projectIndex}
                accentBg={job.accentBg}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
