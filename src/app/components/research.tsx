import { motion } from 'motion/react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { nowData } from '../../data/nowData';

export function Research() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-3 text-[#1e3a5f]">
          Research Interests
        </h2>
        <p className="text-slate-600">Current questions shaping my work</p>
      </motion.div>

      {/* Motivation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-[#C4785A]/40 px-8 py-8"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#C4785A]" />
            <span className="text-[#C4785A] text-xs font-bold uppercase tracking-widest">Currently Thinking About</span>
          </div>
          <span className="text-slate-400 text-xs">{nowData.updatedDate}</span>
        </div>

        <p className="text-[0.9375rem] text-[#1e3a5f] font-medium leading-relaxed">
          {nowData.motivation}
        </p>
      </motion.div>

      {/* Interests grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {nowData.interests.map((interest, i) => (
          <motion.div
            key={interest.keyword}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl bg-white border border-[#E8DFCA] p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[#C4785A] shrink-0" />
              <p className="text-xs font-bold text-[#C4785A] uppercase tracking-widest">{interest.keyword}</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-[1.125rem]">{interest.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
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
