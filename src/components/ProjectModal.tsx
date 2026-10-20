import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '../types/portfolio';
import {
  X,
  ExternalLink,
  Code2,
  CheckCircle,
  AlertCircle,
  Cpu,
  Layers,
  Copy,
  Check,
  Play,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import {
  SmartBinSimulator,
  AmbuClearSimulator,
  MindLinkSimulator,
  ARRestaurantSimulator,
  OneHoodSimulator,
} from './ProjectSimulators';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'overview' | 'architecture'>('interactive');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e17] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-[#0e101a] gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span
                className={`text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
              >
                {project.status}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 pt-3 bg-[#0c0e17] border-b border-white/5 flex gap-2">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all ${
              activeTab === 'interactive'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Problem & Features</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Simulation & Stack Notes</span>
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: INTERACTIVE SIMULATOR */}
          {activeTab === 'interactive' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Test the dynamic features and algorithmic logic of <strong>{project.title}</strong> right in your browser:
              </div>

              {project.demoType === 'smartbin' && <SmartBinSimulator />}
              {project.demoType === 'ambuclear' && <AmbuClearSimulator />}
              {project.demoType === 'mindlink' && <MindLinkSimulator />}
              {project.demoType === 'ar' && <ARRestaurantSimulator />}
              {project.demoType === 'onehood' && <OneHoodSimulator />}

              {/* Technologies strip */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400">Implemented & Designed With:</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROBLEM & FEATURES */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem statement */}
              <div className="p-4 rounded-xl bg-red-500/[0.04] border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Real-World Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wide">
                  <Code2 className="w-4 h-4" />
                  <span>The Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Key Architectural Features</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & SIMULATION NOTES */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wide">
                  <Cpu className="w-4 h-4" />
                  <span>Simulation Disclosure & Recruiter Honesty</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.previewNote || 'This project demonstrates software and algorithmic implementation principles.'}
                </p>
              </div>

              {project.simulationFeatures && project.simulationFeatures.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">System Component Breakdown</h4>
                  <div className="space-y-2.5">
                    {project.simulationFeatures.map((sf, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-white">
                          <span>{sf.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {sf.isSimulated ? 'Software Simulation' : 'Production Feature'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{sf.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">Configurable Technology Stack</h4>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <p className="text-xs text-slate-400">
                    The stack for {project.title} can be updated in <code className="text-blue-400 font-mono">portfolioData.ts</code> to match exact course submissions or repository changes.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0a0c13] flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-slate-500">
            Repo: <span className="text-slate-400">{project.githubUrl}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyGithub}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:bg-white/10 text-xs text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Copy GitHub URL placeholder"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Copy Repo URL'}</span>
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Code</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
