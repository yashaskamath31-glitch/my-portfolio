import React from 'react';
import { 
  Terminal, 
  Binary, 
  FileCode, 
  Brain, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCards = [
    {
      title: "Python Programming",
      badge: "Core Language",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
      icon: <Terminal className="w-6 h-6 text-indigo-400" />,
      description: "Primary language for computational engineering, data processing, backend automation, and algorithmic implementation.",
      keyCapabilities: [
        "Object-Oriented Design & Clean Scripting",
        "String Tokenization & Text Extraction",
        "Algorithmic Problem Solving",
        "AI/ML Data Pipeline Integration",
        "Modular File I/O & JSON Parsing"
      ],
      highlights: ["OOP", "Automation", "Text Processing", "File I/O", "Logic Building"]
    },
    {
      title: "Data Structures & Algorithms",
      badge: "Core CS Discipline",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      icon: <Binary className="w-6 h-6 text-cyan-400" />,
      description: "Rigorous command of foundational data structures and asymptotic time/space complexity analysis.",
      keyCapabilities: [
        "Linear Structures: Arrays, Linked Lists, Stacks, Queues",
        "Non-Linear Structures: Trees, Binary Search Trees, Graphs",
        "Search & Sorting: Binary Search, Merge Sort, Quick Sort",
        "Hashing & Key-Value Lookup Optimizations",
        "Asymptotic Big-O Complexity Analysis"
      ],
      highlights: ["Big-O Analysis", "Trees & BST", "Hashing", "Sorting", "Stacks & Queues"]
    },
    {
      title: "HTML & Web Standards",
      badge: "Frontend & Structure",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: <FileCode className="w-6 h-6 text-emerald-400" />,
      description: "Engineering semantic, responsive, and accessible document structures that cleanly integrate with modern UI layers.",
      keyCapabilities: [
        "Semantic HTML5 Markup & Document Hierarchies",
        "DOM Structure & Element Accessibility (a11y)",
        "Form Validations & User Input Handlers",
        "Responsive Grid & Flexbox Layout Principles",
        "Integration with Modern Reactive Frameworks"
      ],
      highlights: ["Semantic HTML5", "DOM Hierarchy", "Accessibility", "Forms", "Responsive UI"]
    },
    {
      title: "Artificial Intelligence & ML",
      badge: "Academic Specialization",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      description: "Specialized undergraduate track in VTU focusing on data-driven modeling, NLP concepts, and intelligent automation.",
      keyCapabilities: [
        "Resume Parsing & Keyword Matching Heuristics",
        "Semantic Similarity & Weight Scoring Models",
        "Skill Gap Detection & Evaluation Algorithms",
        "Data Preprocessing & Feature Normalization",
        "Foundational Machine Learning Concepts"
      ],
      highlights: ["NLP Principles", "Pattern Matching", "Skill Extraction", "Scoring Logic"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Competencies &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Computer Science Focus
            </span>
          </h2>
          <p className="text-base text-slate-400">
            A verified repertoire of programming languages, computational foundations, and academic specializations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div className="space-y-5">
                {/* Header & Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{card.title}</h3>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-medium mt-1 ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Disciplines:
                  </div>
                  <ul className="space-y-1.5">
                    {card.keyCapabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags Pills */}
              <div className="pt-5 mt-5 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {card.highlights.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 via-slate-900/60 to-cyan-950/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              Committed to Verified, Transparent Skills
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Honoring clean engineering practices with zero fabricated experience. Every competency listed reflects actual coursework, code, or project implementation.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <span>See Them in Action</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
