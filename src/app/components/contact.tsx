import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, MessageCircle, Send, Download } from 'lucide-react';
import { useDownloadCV } from './cv/useDownloadCV';

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    link: 'https://www.linkedin.com/in/seongkyung-kim',
    iconBg: 'bg-[#6D94C5]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
  },
  {
    icon: FileText,
    label: 'Medium',
    value: 'Read Articles',
    link: 'https://medium.com/@seongkyung-kim',
    iconBg: 'bg-[#9B8EA8]',
    cardBg: 'bg-[#E8DFCA]/40',
    border: 'border-[#E8DFCA]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Send a Message',
    link: 'mailto:keks1208@naver.com',
    iconBg: 'bg-[#C4785A]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
  },
];

export function Contact() {
  const { downloadCV } = useDownloadCV();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    await downloadCV();
    setIsGenerating(false);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-3 text-[#1e3a5f]">
          Let's Connect
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          exchanging ideas on data science and machine learning.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`relative ${contact.cardBg} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border ${contact.border} overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 ${contact.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{contact.label}</h3>
                <p className="text-slate-600 text-sm break-all font-medium">{contact.value}</p>

                <div className="mt-4 flex items-center gap-2 text-[#6D94C5] text-sm font-medium">
                  <Send className="w-4 h-4" />
                  <span>Connect now</span>
                </div>
              </div>
            </motion.a>
          );
        })}

        {/* CV Download Card */}
        <motion.button
          onClick={handleDownload}
          disabled={isGenerating}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -8 }}
          className="relative bg-[#E8DFCA]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-[#E8DFCA] overflow-hidden group text-left w-full disabled:opacity-70 disabled:cursor-wait"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-[#7A9E7E] rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <Download className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">CV</h3>
            <p className="text-slate-600 text-sm font-medium">
              {isGenerating ? 'Generating PDF...' : 'Download PDF'}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#7A9E7E] text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Please wait...' : 'Download now'}</span>
            </div>
          </div>
        </motion.button>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative overflow-hidden rounded-3xl shadow-xl"
      >
        {/* Background gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1a3356] to-[#162d4d]" />

        {/* Top accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6D94C5] via-[#CBDCEB] to-[#C49A6C]" />

        {/* Decorative background circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#6D94C5]/10 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#C49A6C]/10 blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[#CBDCEB]/5 blur-xl" />

        {/* Dot grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #CBDCEB 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Content: horizontal split on md+ */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-8 md:p-10">

          {/* Left: text block with left accent border */}
          <div className="flex gap-5 items-start md:items-center">
            <div className="hidden sm:block w-[3px] self-stretch rounded-full bg-gradient-to-b from-[#6D94C5] to-[#C49A6C] shrink-0" />
            <div>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#CBDCEB]/70 text-xs font-semibold uppercase tracking-widest mb-2"
              >
                Let's work together
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
                className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3"
              >
                Ready to collaborate?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-[#CBDCEB]/80 text-sm md:text-base max-w-sm leading-relaxed"
              >
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </motion.p>
            </div>
          </div>

          {/* Right: button stack */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0"
          >
            {/* Primary CTA */}
            <a
              href="mailto:keks1208@naver.com"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#F5EFE6] text-[#1e3a5f] rounded-xl hover:bg-[#E8DFCA] transition-all duration-200 hover:scale-[1.03] hover:shadow-lg font-semibold text-sm shadow-md whitespace-nowrap"
            >
              <Mail className="w-4 h-4 shrink-0" />
              Send an Email
            </a>

            {/* Secondary CTA */}
            <a
              href="https://www.linkedin.com/in/seongkyung-kim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-transparent text-[#CBDCEB] rounded-xl border border-[#6D94C5]/50 hover:border-[#CBDCEB]/70 hover:bg-[#6D94C5]/15 transition-all duration-200 hover:scale-[1.03] font-semibold text-sm whitespace-nowrap"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              Connect on LinkedIn
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-slate-500 text-sm pt-4"
      >
        © {new Date().getFullYear()} Seong Kyung Kim. All rights reserved.
      </motion.p>
    </div>
  );
}
