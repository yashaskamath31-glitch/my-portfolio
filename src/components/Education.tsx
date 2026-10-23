import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  Building2, 
  Sparkles, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-base text-slate-400">
            A consistent record of academic excellence across secondary, pre-university, and university engineering education.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 text-left relative">
          
          {/* Subtle Vertical Connector Line */}
          <div className="hidden sm:block absolute top-8 bottom-8 left-[35px] w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-slate-800" />

          {profileData.education.map((item, index) => (
            <div 
              key={index} 
              className="relative flex flex-col sm:flex-row items-start gap-6 group"
            >
              {/* Timeline Icon Node */}
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 items-center justify-center shrink-0 z-10 shadow-lg group-hover:border-indigo-500 group-hover:scale-105 transition-all">
                {index === 0 ? (
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                ) : index === 1 ? (
                  <BookOpen className="w-7 h-7 text-cyan-400" />
                ) : (
                  <Award className="w-7 h-7 text-emerald-400" />
                )}
              </div>

              {/* Card Surface */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-slate-700 flex-1 space-y-4 group-hover:shadow-xl transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
                      {item.status}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Grade Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-sm shadow-inner shrink-0 self-start sm:self-center">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>{item.grade}</span>
                  </div>
                </div>

                {/* Institution & Period */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{item.institution}</span>
                  </span>
                  {item.university && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="text-indigo-400 font-medium">{item.university}</span>
                    </>
                  )}
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </span>
                </div>

                {/* Key Details */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
