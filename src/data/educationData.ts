export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  note?: string;
  honor?: string;
  iconBg: string;
  location: string;
  logo?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  iconBg: string;
}

export const educationData: EducationItem[] = [
  {
    institution: 'Georgia Institute of Technology',
    degree: 'M.S.',
    field: 'Computer Science',
    period: '2022.01 - 2024.12',
    note: 'Completed with corporate sponsorship from Krafton',
    iconBg: 'bg-[#6D94C5]',
    location: 'Atlanta, USA',
  },
  {
    institution: 'London School of Economics and Political Science',
    degree: 'M.S.',
    field: 'Data & Society',
    period: '2019.09 - 2020.12',
    note: 'Thesis: Cyberbullying detection using deep learning',
    iconBg: 'bg-[#9B8EA8]',
    location: 'London, UK',
  },
  {
    institution: 'Chung-Ang University',
    degree: 'B.A.',
    field: 'Media Communications',
    period: '2015.02 - 2019.06',
    honor: 'Magna Cum Laude',
    iconBg: 'bg-[#C4785A]',
    location: 'Seoul, Korea',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Machine Learning Engineering for Production (MLOps)',
    issuer: 'DeepLearning.AI',
    date: '2021.10',
    iconBg: 'bg-[#7A9E7E]',
  },
  {
    title: 'TOEFL iBT',
    issuer: 'Score: 114 / 120',
    date: '2019.09',
    iconBg: 'bg-[#C49A6C]',
  },
];
