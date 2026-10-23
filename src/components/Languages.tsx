import React from 'react';
import { Globe2, CheckCircle2, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Linguistic Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Multilingual{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Fluency & Communication
            </span>
          </h2>
          <p className="text-base text-slate-400">
            Fluent across 5 distinct languages—enabling effortless collaboration across diverse technical teams, regional cultures, and global contexts.
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {profileData.languages.map((lang, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {lang.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{lang.name}</span>
                    </h3>
                  </div>

                  {/* Native Script Badge */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-base text-indigo-300 shadow-inner group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                    {lang.nativeName}
                  </div>
                </div>

                {/* Proficiency Badge */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{lang.proficiency}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  {lang.description}
                </p>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Language #{index + 1}</span>
                <span className="text-emerald-400">Active Proficiency</span>
              </div>
            </div>
          ))}

          {/* Versatility Summary Card */}
          <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-slate-900/60 flex flex-col justify-between text-left sm:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 w-fit">
                <Globe2 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Cross-Cultural Agility</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Proficiency in 5 languages provides exceptional interpersonal agility, seamless teamwork in multicultural engineering environments, and clear technical communication.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-cyan-300">
              Karnataka & National Cultural Synergy
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
