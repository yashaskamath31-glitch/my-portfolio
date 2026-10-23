import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';
import { LinkedInIcon } from './icons/LinkedInIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono text-xs font-bold text-cyan-300">
                  YC
                </div>
              </div>
              <div>
                <span className="font-bold text-slate-100 text-base">{profileData.name}</span>
                <span className="block text-xs text-indigo-400 font-medium">{profileData.role}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Specializing in Artificial Intelligence and Machine Learning at {profileData.collegeShort}, affiliated with {profileData.university}. Dedicated to algorithmic design, Python automation, and intelligent applications.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Yashas</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Project</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education & VTU</a>
              <a href="#languages" className="hover:text-cyan-400 transition-colors">Multilingual Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Hub</a>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Verified Links
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-[#0077B5] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={`mailto:${profileData.email}`} 
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate">{profileData.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Yashas H C. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">VTU / AJIET Batch 2024–2028</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
