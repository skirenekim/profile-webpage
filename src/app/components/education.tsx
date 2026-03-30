import { motion } from 'motion/react';
import { Award, MapPin } from 'lucide-react';
import georgiaLogo from '../../../img/georgia_institute_of_technology_logo.jpeg';
import lseLogo from '../../../img/london_school_of_economics_logo.jpeg';
import cauLogo from '../../../img/chung_ang_university_logo.jpeg';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  note?: string;
  honor?: string;
  iconBg: string;
  location: string;
  logo: string;
}

const educationData: EducationItem[] = [
  {
    institution: 'Georgia Institute of Technology',
    degree: 'M.S.',
    field: 'Computer Science',
    period: '2022.01 - 2024.12',
    note: 'Completed with corporate sponsorship from Krafton',
    iconBg: 'bg-[#6D94C5]',
    location: 'Atlanta, USA',
    logo: georgiaLogo,
  },
  {
    institution: 'London School of Economics and Political Science',
    degree: 'M.S.',
    field: 'Data & Society',
    period: '2019.09 - 2020.12',
    note: 'Thesis: Cyberbullying detection using deep learning',
    iconBg: 'bg-[#9B8EA8]',
    location: 'London, UK',
    logo: lseLogo,
  },
  {
    institution: 'Chung-Ang University',
    degree: 'B.A.',
    field: 'Media Communications',
    period: '2015.02 - 2019.06',
    honor: 'Magna Cum Laude',
    iconBg: 'bg-[#C4785A]',
    location: 'Seoul, Korea',
    logo: cauLogo,
  },
];

const certifications = [
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

export function Education() {
  return (
    <div className="space-y-8">
      {/* Education Cards */}
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-[#E8DFCA]"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#E8DFCA] shadow-sm flex-shrink-0 bg-white flex items-center justify-center">
                <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-1" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {edu.institution}
                </h3>

                <p className="text-lg text-slate-700 mb-2">
                  {edu.degree} in {edu.field}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#E8DFCA]/70 text-slate-600 rounded-lg text-sm font-medium">
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-[#CBDCEB]/40 text-[#3d6a9e] rounded-lg text-sm font-medium">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>

                {edu.honor && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C49A6C]/15 text-[#8a5e2a] border border-[#C49A6C]/40 rounded-full text-xs font-semibold mb-2">
                    <Award className="w-3 h-3" />
                    {edu.honor}
                  </span>
                )}
                {edu.note && (
                  <div className="flex items-start gap-2 p-3 bg-[#CBDCEB]/25 rounded-lg border border-[#CBDCEB]">
                    <Award className="w-4 h-4 text-[#6D94C5] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#3d6a9e] font-medium">{edu.note}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Additional Qualifications
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[#E8DFCA]"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cert.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 mb-1 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-600 mb-2">{cert.issuer}</p>
                  <span className="text-xs text-slate-500 font-medium">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
