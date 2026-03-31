import { motion } from 'motion/react';
import { Linkedin, FileText } from 'lucide-react';
import profilePic from '../../../img/profile_pic.JPG';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#2a4f7c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-[#CBDCEB]/25"
                style={{ transform: 'scale(1.1)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-[#6D94C5]/30"
                style={{ transform: 'scale(1.2)' }}
              />

              {/* Profile photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#CBDCEB]/30 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Seong Kyung Kim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-3">
                Seong Kyung Kim
              </h1>
              <p className="text-2xl md:text-3xl text-[#CBDCEB]/70 mb-2">
                김성경
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <p className="text-base md:text-lg text-[#E8DFCA] mb-3 tracking-wide font-medium">
                Data Scientist
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['Agentic AI', 'Applied ML', 'User Behavior Analytics'].map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 bg-[#6D94C5]/25 backdrop-blur-sm text-[#CBDCEB] rounded-full text-sm border border-[#CBDCEB]/30 font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/seongkyung-kim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#F5EFE6] text-[#1e3a5f] rounded-lg hover:bg-[#E8DFCA] transition-all hover:scale-105 font-medium shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@seongkyung-kim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#6D94C5]/20 backdrop-blur-sm text-white rounded-lg hover:bg-[#6D94C5]/30 transition-all hover:scale-105 font-medium border border-[#CBDCEB]/30"
              >
                <FileText className="w-5 h-5" />
                Medium
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
