import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, skills, projects, achievements } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0d0f18] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#0a0c13] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-resume-title" className="text-base font-bold text-white">
                {personal.name} &ndash; Professional Resume Preview
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                PDF Source: <code className="text-blue-300">{personal.resumeUrl}</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download="Kavin_K_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#0a0b12] text-slate-200 font-sans">
          {/* Note Banner */}
          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-slate-300 flex items-center justify-between gap-2">
            <span>
              ℹ️ To use your custom PDF file, place your resume as <code className="text-blue-300 font-mono">public/resume.pdf</code>.
            </span>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1 text-[11px] font-mono shrink-0"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Styled Digital Resume Sheet */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0e111a] border border-white/10 space-y-6 shadow-inner">
            {/* Header */}
            <div className="border-b border-white/10 pb-5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{personal.name}</h1>
                  <h2 className="text-xs sm:text-sm font-semibold text-blue-400">{personal.headline}</h2>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-violet-400" />
                    <span>kavin.developer.contact@example.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Professional Summary
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Information Technology undergraduate at Sathyabama Institute of Science and Technology (graduating 2027) with a strong foundation in full-stack web engineering, algorithms, and artificial intelligence. Winner of 1st place in the Web Whiz competition; experienced in rapid prototyping, clean code design, and student workshop facilitation.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Education
              </h4>
              <div className="text-xs space-y-1">
                <div className="flex justify-between font-semibold text-white">
                  <span>{education.degree}</span>
                  <span className="font-mono text-slate-400">{education.period}</span>
                </div>
                <div className="text-slate-400">{education.institution}, {education.location}</div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Relevant Coursework: {education.coursework.slice(0, 5).join(', ')}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skills.map((c) => (
                  <div key={c.id} className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="font-semibold text-slate-200">{c.name}: </span>
                    <span className="text-slate-400 text-[11px]">
                      {c.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Featured Projects
              </h4>
              <div className="space-y-3">
                {projects.slice(0, 3).map((p) => (
                  <div key={p.id} className="text-xs space-y-1">
                    <div className="flex justify-between font-semibold text-white">
                      <span>{p.title} &ndash; <span className="font-normal text-slate-400">{p.subtitle}</span></span>
                      <span className="text-[10px] font-mono text-blue-400">{p.status}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{p.solution}</p>
                    <div className="text-[10px] font-mono text-slate-400">
                      Tech: {p.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Honors & Key Activities
              </h4>
              <ul className="text-xs space-y-1.5 text-slate-300 list-disc list-inside">
                {achievements.map((a) => (
                  <li key={a.id}>
                    <strong>{a.title}</strong>: {a.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0a0c13] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Resume formatted for ATS & recruiter review
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
