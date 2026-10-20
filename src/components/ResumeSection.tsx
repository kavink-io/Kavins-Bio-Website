import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const { personal, education } = portfolioData;

  return (
    <section id="resume" className="py-24 relative bg-[#090b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Developer <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive summary of technical skills, competitive wins, academic background, and project experience.
          </p>
        </div>

        {/* Resume Action Card */}
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-40 -z-10" />

          <div className="space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white shrink-0 shadow-lg shadow-violet-600/30">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personal.name} &ndash; Resume</h3>
                  <p className="text-xs text-blue-400 font-mono">
                    {education.degree} &bull; {education.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Candidate</span>
              </div>
            </div>

            {/* Short Recruiter Summary */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-slate-400">
                Executive Candidate Summary
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aspiring Software Engineer & Full-Stack Developer with hands-on experience in React.js, Python, Node.js, and AI/ML concepts. Winner of the Web Whiz competition and organizer of technical student workshops. Graduating in 2027 from Sathyabama Institute of Science and Technology, Chennai. Eager to bring strong problem-solving skills and teamwork to internship and junior engineering opportunities.
              </p>
            </div>

            {/* Key Quick Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-mono pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full-Stack & Applied AI Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1st Place Web Whiz Winner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Clean, Testable Code Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Available for Internships & Projects</span>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {/* Download Button */}
                <a
                  href={personal.resumeUrl}
                  download="Kavin_K_Resume.pdf"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                {/* View Resume Button */}
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>View in Browser</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-500 text-center sm:text-right">
                Path: <code className="text-slate-400">{personal.resumeUrl}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
