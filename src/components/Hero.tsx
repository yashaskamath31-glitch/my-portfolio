import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Terminal as TerminalIcon, 
  Play, 
  Code2
} from 'lucide-react';
import { profileData } from '../data/profile';
import { LinkedInIcon } from './icons/LinkedInIcon';

export const Hero: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalOutput(null);
    setTimeout(() => {
      setTerminalOutput(
        `✓ Profile initialized successfully.\n` +
        `• Candidate: Yashas H C\n` +
        `• Academic Track: B.E. CSE (AI & ML) @ AJIET / VTU (2024-2028)\n` +
        `• Performance: CGPA 7.8/10 | PUC 84% | 10th 88%\n` +
        `• Primary Competencies: Python, Data Structures, HTML, AI Algorithms\n` +
        `• Featured Work: AI Job Match & Resume Analyzer (Ready)\n` +
        `• Status: Open to Summer Internships & Research Collaborations.`
      );
      setIsRunning(false);
    }, 450);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-900/15 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-900/15 blur-[100px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for AI/ML Internships & Projects</span>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider uppercase text-cyan-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Aspiring Software & AI Engineer</span>
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                Computer Science Engineering Student{' '}
                <span className="text-indigo-400 font-semibold">(AI & ML)</span>
              </p>
            </div>

            {/* University & College Badge Banner */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>{profileData.collegeShort} (VTU) • 2024–2028</span>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{profileData.location}</span>
              </span>
            </div>

            {/* Bio summary */}
            <p className="text-base text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Specializing in Artificial Intelligence and Machine Learning with core expertise in{' '}
              <span className="text-white font-medium">Python</span>,{' '}
              <span className="text-white font-medium">Data Structures</span>, and{' '}
              <span className="text-white font-medium">Web Standards</span>. Passionate about designing 
              algorithmic systems and intelligent tools like my featured{' '}
              <span className="text-cyan-300 font-medium">AI Job Match and Resume Analyzer</span>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all"
              >
                <span>View Featured Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border border-slate-800 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all"
                title="View LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Key Metric Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl font-bold font-mono text-cyan-400">7.8</div>
                <div className="text-xs text-slate-400 font-medium">B.E. CGPA (VTU)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl font-bold font-mono text-indigo-400">84%</div>
                <div className="text-xs text-slate-400 font-medium">Pre-University</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl font-bold font-mono text-emerald-400">88%</div>
                <div className="text-xs text-slate-400 font-medium">10th Standard</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl font-bold font-mono text-purple-400">5</div>
                <div className="text-xs text-slate-400 font-medium">Languages Spoken</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Sandbox / Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition duration-500 opacity-70" />
              
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                      yashas_profile.py
                    </span>
                  </div>

                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border border-indigo-500/30 transition-colors disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? 'Executing...' : 'Run Code'}</span>
                  </button>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-left text-slate-300 overflow-x-auto">
                  <div className="text-slate-500 italic mb-2"># Student Profile & AI Competencies</div>
                  
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-400">class</span>{' '}
                      <span className="text-yellow-300">SoftwareEngineer</span>:
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">name</span> = <span className="text-emerald-300">"Yashas H C"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">institution</span> = <span className="text-emerald-300">"AJIET, Mangaluru"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">university</span> = <span className="text-emerald-300">"VTU (2024–2028)"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">specialization</span> = <span className="text-emerald-300">"AI & ML"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">core_skills</span> = [
                      <span className="text-emerald-300">"Python"</span>,{' '}
                      <span className="text-emerald-300">"Data Structures"</span>,{' '}
                      <span className="text-emerald-300">"HTML"</span>]
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">featured_project</span> = <span className="text-emerald-300">"AI Job Match & Resume Analyzer"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">cgpa</span> = <span className="text-orange-400">7.8</span>
                    </div>
                    <div className="pl-4 mt-2">
                      <span className="text-purple-400">def</span>{' '}
                      <span className="text-blue-400">get_objective</span>(<span className="text-slate-400">self</span>):
                    </div>
                    <div className="pl-8 text-emerald-300">
                      return "Engineering scalable algorithms & AI solutions"
                    </div>
                  </div>

                  {/* Terminal interactive output console */}
                  {terminalOutput && (
                    <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 bg-slate-900/80 p-3 rounded-lg border border-emerald-500/20 whitespace-pre-line animate-in fade-in duration-300">
                      {terminalOutput}
                    </div>
                  )}
                </div>

                {/* Footer note in terminal */}
                <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Python 3.12 Runtime
                  </span>
                  <span className="text-slate-500">UTF-8 • VTU Belagavi</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
