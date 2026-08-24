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
    role: 'Senior Data Scientist',
    period: 'December 2024 - Present',
    highlight: 'Awarded RSUs for outstanding annual performance (2025)',
    accentBg: 'bg-[#6D94C5]',
    projects: [
      {
        title: '[FC Online 4] Service Health Scoring & AI Diagnostic System',
        period: '2026.07 - Present',
        team: 'Individual Contributor',
        problem:
          'Product directors needed a standardized monthly read on overall service health — spanning engagement, revenue, and game economy — but lacked a consistent framework for interpreting raw KPI tables without analyst support.',
        approach:
          'Designed a multi-domain health scoring system (S/A/B/C/D/F composite grades across engagement, revenue, and game economy) and wired a domain-specific LLM serving endpoint to generate Korean-language diagnostic narratives, with all scoring logic computed deterministically before prose generation.',
        outcome:
          'Replaced manual monthly service reviews with an automated health report — enabling product directors to self-serve standardized cross-domain diagnostics without analyst involvement.',
        contributions: [
          'Designed a multi-domain health scoring framework covering engagement, revenue, and game economy with composite grading, mirroring scoring logic identically in JS (frontend) and Python (batch pipeline).',
          'Integrated an LLM serving endpoint for AI-written diagnostic copy with number-grounding validation, ensuring generated narratives cannot contradict pre-calculated scores.',
          'Built an interactive methodology chatbot grounded in an official knowledge base, enabling stakeholders to ask about scoring rationale and metric definitions in-app.',
          'Connected three Databricks Apps (KPI platform, economy dashboard, health chart) via resource bindings to consolidate multi-domain signals into a single health view.',
        ],
      },
      {
        title: '[FC Online 4] Executive Business Review & Segment Diagnostic',
        period: '2026.02 - 2026.03',
        team: 'Team of 3',
        problem: 'Executives and company-wide stakeholders lacked a consolidated view of 2025 service performance and a diagnostic read on user segments showing declines in early 2026.',
        approach: 'Delivered two distinct executive reports — a 2025 service-wide retrospective and a 2026 behavioral diagnostic on a declining user segment — each scoped to a different leadership decision horizon.',
        outcome: 'Published a director-level 2025 executive retrospective and 2026 segment diagnostic report distributed company-wide, directly informing leadership decisions and strategic direction for the service.',
        contributions: [
          '2025 Annual Service Review — Consolidated full-year engagement, revenue, and in-game metrics into a single executive-facing retrospective distributed company-wide.',
          '2026 Segment Diagnostic — Conducted a deep-dive behavioral analysis on a declining user segment, identifying structural drivers and surfacing intervention priorities for leadership.',
        ],
      },
      {
        title: '[FC Online 4] AI KPI Reporting & Prompt Management Platform',
        period: '2025.12 - Present',
        team: 'Individual Contributor',
        problem:
          'Monthly AI reporting required both a reliable multi-stage LLM pipeline and a way for analysts to iteratively tune prompts — without engineering involvement each time interpretation logic needed to change.',
        approach:
          'Built a two-stage LLM pipeline (Genie → MLflow agent) for 9 KPI sections with a final executive summary pass, paired with an in-browser prompt management UI featuring version history, live preview, and one-click deployment.',
        outcome:
          'Enabled analysts to own AI report quality end-to-end — iterating on prompts directly in the UI without code deployments — while delivering sub-second dashboard loads across multiple countries via a pre-computed Delta Lake cache.',
        contributions: [
          'Implemented an in-browser prompt management UI with version history, live preview, and one-click deployment — enabling analysts to iterate on AI report prompts without engineering involvement.',
          'Designed a Genie → MLflow agent two-stage pipeline across 9 monthly report sections, with a final agent pass generating an executive summary with slogans and key points.',
          'Applied SMD-based 9-tier metric status classification across engagement, revenue, and game economy, standardizing interpretation for consistent AI analysis input.',
          'Built a cache-first FastAPI app on Databricks Apps backed by pre-computed Unity Catalog Delta tables, cutting dashboard load times from 30+ seconds to sub-second.',
        ],
      },
      {
        title: '[FC Online 4] Churn Prediction & Proactive Intervention System',
        period: '2025.08 - 2026.04',
        team: 'Individual Contributor',
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
        period: '2025.04 - 2025.11',
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
        period: '2024.12 - 2025.12',
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
