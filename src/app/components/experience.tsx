import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Users } from 'lucide-react';
import eaLogo from '../../../img/electronic_arts_logo.jpeg';
import kraftonLogo from '../../../img/krafton_inc_logo.jpeg';

interface Project {
  title: string;
  period: string;
  team: string;
  problem: string;
  approach: string;
  outcome: string;
  contributions: string[];
}

interface Job {
  company: string;
  role: string;
  period: string;
  projects: Project[];
  highlight?: string;
  logo: string;
  accentBg: string;
}

const experienceData: Job[] = [
  {
    company: 'Electronic Arts',
    role: 'Data Scientist',
    period: 'December 2024 - Present',
    highlight: 'Awarded RSUs for outstanding annual performance (2025)',
    logo: eaLogo,
    accentBg: 'bg-[#6D94C5]',
    projects: [
      {
        title: '[FC Online 4] Agent-Based Monthly Reporting Automation',
        period: '2025.11 - Present',
        team: 'Individual Contributor',
        problem: 'Repetitive monthly reporting consumed significant analyst time and slowed decision-making.',
        approach: 'Built an LLM-driven agent workflow to automate monthly performance reporting end-to-end.',
        outcome: 'Reduced recurring operational workload by ~7 person-days per month and shortened decision-making lead time.',
        contributions: [
          'Designed an end-to-end analytics pipeline that generates executive reports and refreshes key metrics without manual intervention.',
          'Delivered a self-serve analytics application enabling product and business teams to independently explore key KPIs.',
        ],
      },
      {
        title: '[FC Online 4] Churn Prediction & Proactive Intervention System',
        period: '2025.08 - Present',
        team: 'Team of 2',
        problem: 'User engagement decline and churn were addressed reactively, limiting proactive intervention.',
        approach: 'Identified early user disengagement signals from large-scale gameplay logs and built a behavior-based prediction framework.',
        outcome: 'Enabled proactive intervention strategies targeting at-risk users before churn occurs.',
        contributions: [
          'Built a behavior-based churn prediction framework enabling proactive intervention strategies.',
          'Implemented custom detection models including time-series deep learning to predict churn risk and support operational decision-making.',
        ],
      },
      {
        title: '[Platform] Analytics Platform Consolidation & Databricks Deployment',
        period: '2025.04 - Present',
        team: 'Individual Contributor',
        problem: 'Fragmented analytics infrastructure across Jupyter, Snowflake, Airflow, and distributed data marts reduced efficiency and standardization.',
        approach: 'Migrated the entire analytics stack to a unified Databricks data platform, owning deployment end-to-end with Databricks Solutions Architects.',
        outcome: 'Established Databricks as the team\'s primary platform for data exploration, ML development, and production pipelines.',
        contributions: [
          'Designed platform architecture and established secure data connectivity in collaboration with Databricks Solutions Architects.',
          'Standardized analytics workflows and trained analysts and engineers on Spark-based development practices.',
        ],
      },
      {
        title: '[FC Online 4] KPI Change Index & Executive Decision Support',
        period: '2024.12 - Present',
        team: 'Team of 2',
        problem: 'Inconsistent interpretation of monthly performance metrics among executives delayed data-driven decisions.',
        approach: 'Designed a KPI Change Index framework using effect-size analysis to distinguish structural behavior shifts from short-term fluctuations.',
        outcome: 'Enabled faster and more consistent product decisions in recurring director-level reviews.',
        contributions: [
          'Designed a KPI Change Index framework to standardize interpretation of engagement and monetization metrics.',
          'Presented insights in recurring director-level reviews, enabling faster and more consistent product decisions.',
        ],
      },
      {
        title: '[FC Online 4] Content Update Impact Analysis',
        period: '2025.01 - Present',
        team: 'Individual Contributor',
        problem: 'No consistent framework existed to evaluate content update performance or guide follow-up decisions.',
        approach: 'Built an analysis framework connecting behavioral data across user segments to quantify incremental effects of content updates.',
        outcome: 'Enabled product teams to prioritize follow-up updates based on data-driven evidence.',
        contributions: [
          'Built an analysis framework to evaluate the impact of content updates on engagement and revenue.',
          'Connected behavioral data across user segments to quantify incremental effects.',
        ],
      },
    ],
  },
  {
    company: 'PUBG, Krafton',
    role: 'Data Scientist',
    period: 'February 2021 - December 2024',
    logo: kraftonLogo,
    accentBg: 'bg-[#9B8EA8]',
    projects: [
      {
        title: '[Battlegrounds] Report-Driven Cheat Detection Automation',
        period: '2024.06 - 2024.08',
        team: 'Team of 2',
        problem: 'Delayed cheat detection response increased user complaints and constrained KPI recovery.',
        approach: 'Built a near-real-time anomaly detection system over player behavior logs with an end-to-end alerting pipeline.',
        outcome: 'Reduced detection response time by ~60% and recovered core KPIs.',
        contributions: [
          'Built a near-real-time anomaly detection system over player behavior logs.',
          'Deployed an end-to-end detection and alerting pipeline reducing response time by ~60%.',
          'Identified emerging cheat patterns missed by existing rule-based systems.',
        ],
      },
      {
        title: '[Dark & Darker] In-Game & Out-of-Game Schema Design',
        period: '2024.06 - 2024.12',
        team: 'Team of 2',
        problem: 'No logging infrastructure existed to support anomaly detection for a new title in early development.',
        approach: 'Designed event logging schemas based on anticipated abuse scenarios and detection requirements, validating with engineering during closed beta.',
        outcome: 'Established a data foundation enabling proactive cheat detection from the early stages of the title\'s lifecycle.',
        contributions: [
          'Designed logging schemas to support anomaly detection for early-stage cheat prevention.',
          'Defined event structures based on anticipated abuse scenarios and detection requirements.',
          'Worked with engineering teams to validate and refine logs during closed beta.',
        ],
      },
      {
        title: '[Battlegrounds] Teamkill False-Positive Reduction & Policy Optimization',
        period: '2024.01 - 2024.05',
        team: 'Team of 2',
        problem: 'False-positive teamkill penalties damaged player trust and degraded core gameplay KPIs.',
        approach: 'Analyzed false-positive teamkill penalties, identified misclassification patterns, and redesigned enforcement logic.',
        outcome: 'Reduced false positives by ~50%, improving player trust and core gameplay KPIs.',
        contributions: [
          'Analyzed false-positive teamkill penalties and identified misclassification patterns.',
          'Redesigned enforcement logic, reducing false positives by ~50%.',
        ],
      },
      {
        title: '[Battlegrounds] Automated Macro Abuse Detection & Modeling',
        period: '2023.03 - 2023.11',
        team: 'Team of 2',
        problem: 'Macro-driven abuse and farming operations were increasing, causing in-game harm and KPI decline.',
        approach: 'Modeled macro-driven abuse using large-scale behavioral logs and time-series deep learning.',
        outcome: 'Reduced abusive users by ~80% and supported data-driven enforcement prioritization.',
        contributions: [
          'Modeled macro-driven abuse using large-scale behavioral logs and time-series deep learning.',
          'Implemented a Transformer-based anomaly detection model optimized for production use.',
        ],
      },
      {
        title: '[Battlegrounds] ML-Based Cheat Detection & Matchmaking Isolation',
        period: '2022.09 - 2023.02',
        team: 'Individual Contributor',
        problem: 'Increased use of illegal programs caused core KPI decline and accelerated user churn.',
        approach: 'Built a deep learning-based cheat detection system integrating in-game and out-of-game logs, using a semi-supervised approach to address label noise.',
        outcome: 'Improved cheat-related KPIs by ~72% — the first production ML deployment in the PUBG anti-cheat pipeline.',
        contributions: [
          'Built a deep learning-based cheat detection system integrating in-game and out-of-game logs.',
          'Designed a semi-supervised anomaly detection approach to address label noise.',
          'Implemented automated pipelines for inference, retraining, and deployment.',
        ],
      },
      {
        title: '[Deep Learning Team] Robust ML Training with Noisy Labels',
        period: '2022.06 - 2023.08',
        team: 'Individual Contributor',
        problem: 'Label noise in training data caused model instability and degraded detection performance.',
        approach: 'Researched training instability from label noise and implemented Iterative Trimmed Loss Minimization (ITLM) to improve robustness.',
        outcome: 'Improved F1-score by ~5%.',
        contributions: [
          'Researched training instability caused by label noise.',
          'Implemented Iterative Trimmed Loss Minimization (ITLM) to improve model robustness.',
        ],
      },
    ],
  },
];

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
                src={job.logo}
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
