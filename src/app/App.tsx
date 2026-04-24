import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Education } from './components/education';
import { Experience } from './components/experience';
import { Updates } from './components/updates';
import { Research } from './components/research';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { User, Briefcase, GraduationCap, Code, TrendingUp, Lightbulb, Mail } from 'lucide-react';

const tabs = [
  { id: 'about', label: 'About', icon: User },
  { id: 'updates', label: 'Updates', icon: TrendingUp },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'research', label: 'Research', icon: Lightbulb },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About onNavigate={setActiveTab} />;
      case 'updates':
        return <Updates onNavigate={setActiveTab} />;
      case 'research':
        return <Research />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Hero />

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-40 bg-[#F5EFE6]/90 backdrop-blur-xl border-b border-[#E8DFCA] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-[#6D94C5]'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6D94C5] to-[#CBDCEB]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
