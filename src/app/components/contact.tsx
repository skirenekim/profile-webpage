import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, Send, Download } from 'lucide-react';
import { useDownloadCV } from './cv/useDownloadCV';

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    link: 'https://www.linkedin.com/in/skirene/',
    iconBg: 'bg-[#6D94C5]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
  },
  {
    icon: FileText,
    label: 'Medium',
    value: 'Read Articles',
    link: 'https://skirene.medium.com/',
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
          I'm always open to discussing new opportunities, collaborations, or exchanging ideas.
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
