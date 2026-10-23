import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  Layers, 
  Terminal, 
  TrendingUp
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Projects: React.FC = () => {
  const project = profileData.featuredProject;
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<typeof project.sampleScenarios[0] | null>(
    project.sampleScenarios[0]
  );

  const handleScenarioChange = (index: number) => {
    setSelectedScenarioIndex(index);
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult(project.sampleScenarios[index]);
      setIsAnalyzing(false);
    }, 400);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship Engineering &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              AI Implementation
            </span>
          </h2>
          <p className="text-base text-slate-400">
            A comprehensive look at my flagship software project, its architectural pipeline, and live interactive evaluation demo.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="glass-panel rounded-3xl border border-slate-800/90 overflow-hidden shadow-2xl">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 sm:p-8 border-b border-slate-800/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    AI & NLP Application
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Production Ready
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-400 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-700/80 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Body Grid: Architecture & Details on Left, Interactive Demo on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 text-left">
            
            {/* Left 6 Columns: Project Details */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Problem Solved */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Problem Statement & Purpose</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                  {project.problemSolved}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Core System Capabilities</span>
                </h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pipeline Workflow */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Algorithmic Processing Pipeline</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architecture.map((step, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs font-mono text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[10px]">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 6 Columns: Interactive Live Simulator Demo */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 sm:p-6 shadow-xl space-y-5">
                
                {/* Interactive Demo Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Interactive Live Evaluator
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Simulate Match Scoring
                  </span>
                </div>

                {/* Scenario Selectors */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-medium">
                    Select Target Job Role to Test:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.sampleScenarios.map((sc, scIdx) => (
                      <button
                        key={scIdx}
                        onClick={() => handleScenarioChange(scIdx)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border ${
                          selectedScenarioIndex === scIdx
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200 shadow-sm'
                            : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold truncate">{sc.jobTitle}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Benchmark #{scIdx + 1}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Candidate Credentials Input View */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono space-y-1.5">
                  <div className="text-slate-400 text-[11px] flex items-center justify-between">
                    <span>Parsed Candidate Skills (Yashas H C):</span>
                    <span className="text-emerald-400 font-semibold">Verified</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Python", "Data Structures", "HTML", "AI/ML Track", "Problem Solving"].map((sk, skIdx) => (
                      <span key={skIdx} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 text-[11px] border border-slate-700">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Scoring Display */}
                {isAnalyzing ? (
                  <div className="py-12 flex flex-col items-center justify-center gap-3 text-slate-400">
                    <RefreshCw className="w-6 h-6 animate-spin text-indigo-400" />
                    <span className="text-xs font-mono">Running NLP keyword & similarity evaluation...</span>
                  </div>
                ) : analysisResult ? (
                  <div className="space-y-4 pt-1 animate-in fade-in duration-200">
                    
                    {/* Score Bar */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">Algorithmic Match Score</div>
                        <div className="text-2xl font-black font-mono text-white flex items-center gap-2">
                          <span className={analysisResult.sampleMatchScore >= 80 ? 'text-emerald-400' : 'text-cyan-400'}>
                            {analysisResult.sampleMatchScore}%
                          </span>
                          <span className="text-xs font-mono font-normal text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                            {analysisResult.sampleMatchScore >= 80 ? 'High Fit' : 'Moderate Fit'}
                          </span>
                        </div>
                      </div>

                      <div className="w-16 h-16 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
                        <div 
                          className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-pulse"
                        />
                        <span className="font-mono text-xs font-bold text-slate-200">
                          {analysisResult.sampleMatchScore}%
                        </span>
                      </div>
                    </div>

                    {/* Matched vs Missing Tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                        <div className="text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Matched Skills ({analysisResult.matchedSkills.length})</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {analysisResult.matchedSkills.map((m, mIdx) => (
                            <span key={mIdx} className="px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-200 text-[10px] font-mono">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1.5">
                        <div className="text-[11px] font-mono font-bold text-amber-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>Identified Gaps ({analysisResult.missingSkills.length})</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {analysisResult.missingSkills.map((m, mIdx) => (
                            <span key={mIdx} className="px-2 py-0.5 rounded bg-amber-900/40 text-amber-200 text-[10px] font-mono">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Feedback */}
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <span className="text-cyan-400 font-semibold block mb-1">Automated Recommendation:</span>
                      {analysisResult.analysis}
                    </div>

                  </div>
                ) : null}

              </div>

              {/* Bottom Note */}
              <div className="mt-4 px-2 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Engineered with Python & NLP Heuristics
                </span>
                <span>Yashas H C • Academic Portfolio</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
