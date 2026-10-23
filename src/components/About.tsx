import React from 'react';
import { 
  Brain, 
  Binary, 
  Globe, 
  MapPin, 
  School, 
  FileCode,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      title: "AI & ML Specialization",
      description: "Undergraduate curriculum centered on predictive modeling, NLP principles, and intelligent decision systems."
    },
    {
      icon: <Binary className="w-5 h-5 text-cyan-400" />,
      title: "Algorithmic Foundations",
      description: "Rigorous focus on Data Structures, asymptotic analysis, search/sort mechanics, and computational efficiency."
    },
    {
      icon: <FileCode className="w-5 h-5 text-emerald-400" />,
      title: "Clean Engineering",
      description: "Python scripting, semantic HTML web standards, and building transparent, well-documented applications."
    },
    {
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      title: "Multilingual Versatility",
      description: "Effective communicator in 5 languages (Kannada, English, Hindi, Marathi, Malayalam) for diverse collaborative teams."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Yashas H C</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fusing Algorithmic Fundamentals with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Intelligent Software
            </span>
          </h2>
          <p className="text-base text-slate-400">
            A snapshot of my academic journey, technical philosophy, and engineering objectives.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>The Engineering Journey</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science Engineering student specializing in{' '}
                  <strong className="text-indigo-300 font-semibold">Artificial Intelligence & Machine Learning</strong> at{' '}
                  <strong className="text-white font-semibold">AJ Institute of Engineering and Technology (AJIET)</strong>, affiliated with{' '}
                  <strong className="text-white font-semibold">Visvesvaraya Technological University (VTU)</strong>, Mangaluru (Batch 2024–2028).
                </p>
                <p>
                  My engineering philosophy is rooted in building deep command over fundamental principles. Whether 
                  implementing complex <strong className="text-cyan-300 font-semibold">Data Structures</strong>, writing modular{' '}
                  <strong className="text-indigo-300 font-semibold">Python</strong> scripts, or structuring accessible{' '}
                  <strong className="text-emerald-300 font-semibold">HTML</strong> web frontends, I strive for algorithmic efficiency and maintainable code.
                </p>
                <p>
                  My flagship project, the <strong className="text-white font-semibold">AI Job Match and Resume Analyzer</strong>, 
                  synthesizes these disciplines—combining natural language pattern matching, structured evaluation logic, and 
                  intuitive presentation to help candidates optimize their career readiness.
                </p>
              </div>

              {/* Institution & Verification Badge */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <School className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Affiliation</div>
                    <div className="text-sm font-semibold text-slate-200">{profileData.university}</div>
                    <div className="text-xs text-slate-400">{profileData.college}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Current Base</div>
                    <div className="text-sm font-semibold text-slate-200">Mangaluru, Karnataka</div>
                    <div className="text-xs text-slate-400">Open to Remote & Onsite Opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Track Record Quick Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">7.8 CGPA</div>
                <div className="text-xs text-slate-400 mt-1">B.E. Engineering</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">84%</div>
                <div className="text-xs text-slate-400 mt-1">Pre-University (PUC)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">88%</div>
                <div className="text-xs text-slate-400 mt-1">10th Distinction</div>
              </div>
            </div>
          </div>

          {/* Right Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-panel p-5 rounded-xl text-left border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/50 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white tracking-tight">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
