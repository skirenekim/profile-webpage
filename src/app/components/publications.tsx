import { motion } from 'motion/react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const publication = {
  title:
    'Effectiveness of Image Augmentation Techniques on Detection of Building Characteristics from Street View Images Using Deep Learning',
  year: '2024',
  journal: 'Journal of Construction Engineering and Management',
  role: 'Co-author',
  description:
    'Research demonstrating that the impact of image augmentation on deep learning model accuracy varies by task and building characteristics when identifying building floor count and type from street view images.',
  link: '#',
};

export function Publications() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Publications
        </h2>
        <p className="text-slate-600">Academic research and contributions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 rounded-3xl p-1 shadow-2xl"
      >
        <div className="bg-white rounded-3xl p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-50" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {publication.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-semibold">
                  {publication.year}
                </span>
                <span className="px-3 py-1.5 bg-teal-100 text-teal-700 rounded-lg text-sm font-semibold">
                  {publication.role}
                </span>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-5 mb-4 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-600" />
                  {publication.journal}
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {publication.description}
                </p>
              </div>

              <a
                href={publication.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all hover:scale-105 font-medium shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                View Publication
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6 border border-indigo-100"
      >
        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Research Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Deep Learning',
            'Computer Vision',
            'Image Augmentation',
            'Applied ML',
            'Building Detection',
          ].map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 bg-white text-indigo-700 rounded-lg text-sm font-medium shadow-sm border border-indigo-200"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
