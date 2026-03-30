import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, MessageCircle, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/seongkyung-kim',
    link: 'https://www.linkedin.com/in/seongkyung-kim',
    iconBg: 'bg-[#6D94C5]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
  },
  {
    icon: FileText,
    label: 'Medium',
    value: 'medium.com/@seongkyung-kim',
    link: 'https://medium.com/@seongkyung-kim',
    iconBg: 'bg-[#9B8EA8]',
    cardBg: 'bg-[#E8DFCA]/40',
    border: 'border-[#E8DFCA]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'keks1208@naver.com',
    link: 'mailto:keks1208@naver.com',
    iconBg: 'bg-[#C4785A]',
    cardBg: 'bg-[#CBDCEB]/25',
    border: 'border-[#CBDCEB]',
  },
];

export function Contact() {
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
      <div className="grid md:grid-cols-3 gap-6">
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
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-[#1e3a5f] rounded-3xl p-8 shadow-lg text-white text-center"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="w-16 h-16 bg-[#6D94C5]/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-2xl font-bold mb-3">Ready to collaborate?</h3>
          <p className="text-[#CBDCEB] mb-6 max-w-lg mx-auto">
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:keks1208@naver.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#F5EFE6] text-[#1e3a5f] rounded-lg hover:bg-[#E8DFCA] transition-all hover:scale-105 font-semibold shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/seongkyung-kim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#6D94C5]/20 backdrop-blur-sm text-white rounded-lg hover:bg-[#6D94C5]/30 transition-all hover:scale-105 font-semibold border border-[#CBDCEB]/30"
            >
              <Linkedin className="w-5 h-5" />
              Message on LinkedIn
            </a>
          </div>
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
