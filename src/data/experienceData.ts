export interface Project {
  title: string;
  period: string;
  team: string;
  problem: string;
  approach: string;
  outcome: string;
  contributions: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  projects: Project[];
  highlight?: string;
  logo?: string;
  accentBg: string;
}

export const experienceData: Job[] = [
  {
    company: 'Electronic Arts',
    role: 'Data Scientist',
    period: 'December 2024 - Present',
    highlight: 'Awarded RSUs for outstanding annual performance (2025)',
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
        outcome: "Established Databricks as the team's primary platform for data exploration, ML development, and production pipelines.",
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
        outcome: "Established a data foundation enabling proactive cheat detection from the early stages of the title's lifecycle.",
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
