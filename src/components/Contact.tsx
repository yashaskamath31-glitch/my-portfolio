import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  MessageSquare,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { profileData } from '../data/profile';
import { LinkedInIcon } from './icons/LinkedInIcon';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${senderName.trim() || 'Portfolio Visitor'}`
    );
    const bodyContent = `Name: ${senderName.trim()}\n\nMessage:\n${message.trim()}\n\nSent via Yashas H C Developer Portfolio`;
    const mailtoBody = encodeURIComponent(bodyContent);
    
    // Trigger real mail client
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Projects,{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Internships & Ideas
            </span>
          </h2>
          <p className="text-base text-slate-400">
            Reach out directly for AI/ML engineering roles, internships, or academic collaboration.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Primary Email</div>
                    <div className="text-sm font-bold text-white break-all">
                      {profileData.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                  title="Direct Mailto"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Verified Profile Card */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-[#0077B5]/50 hover:bg-slate-900/90 transition-all duration-300 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">LinkedIn Profile</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400">Connect with Yashas H C</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Location & Academic Base Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Current Location</div>
                  <div className="text-sm font-bold text-white">
                    {profileData.location}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Based in Mangaluru at AJ Institute of Engineering and Technology (VTU). Open to remote internships, relocation, and collaborative tech ventures.
              </p>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Typically replies within 24–48 hours for academic and engineering inquiries.</span>
            </div>

          </div>

          {/* Right Column: Interactive Email Launcher */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Draft Direct Email</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Compose your message here. Submitting will launch your default email client addressed directly to <span className="text-cyan-300 font-mono">{profileData.email}</span> with zero fake backend delays.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Dr. Ramesh / Tech Recruiter / Colleague"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note, job scope, or project details..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch in Mail Client</span>
                  </button>

                  <span className="text-xs text-slate-500 text-center sm:text-left">
                    Directly addresses {profileData.email}
                  </span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
