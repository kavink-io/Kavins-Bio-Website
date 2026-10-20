import React from 'react';
import type { ProjectItem } from '../types/portfolio';
import {
  ExternalLink,
  Play,
  Sparkles,
  Radio,
  Clock,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  // Render custom tech illustration based on project id
  const renderVisualMockup = () => {
    switch (project.id) {
      case 'smartbinx':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#0c1815] via-[#091012] to-[#06070a] rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SIMULATED TELEMETRY
              </span>
              <span className="text-slate-400">5 Virtual Nodes</span>
            </div>
            {/* Visual Bars */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-300 w-16">Bin #101:</span>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full w-[92%]" />
                </div>
                <span className="text-rose-400 font-bold">92%</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-300 w-16">Bin #103:</span>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[87%]" />
                </div>
                <span className="text-amber-400 font-bold">87%</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-300 w-16">Route:</span>
                <span className="text-emerald-400 text-[11px]">Dijkstra Shortest Path Computed</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center justify-between">
              <span>Dynamic Collection Dispatch</span>
              <span>-34% Transit Distance</span>
            </div>
          </div>
        );

      case 'ambuclear':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#0a161c] via-[#080d14] to-[#06070a] rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                GREEN CORRIDOR PRIORITY
              </span>
              <span className="text-slate-400">Emergency 108</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-cyan-500/20 font-mono text-xs space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>Signal Pre-emption:</span>
                <span className="text-emerald-400 font-bold">AUTOMATED</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Junction Delay:</span>
                <span className="text-cyan-400 font-bold">-57% Time to Hospital</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-cyan-300/80 bg-cyan-500/10 px-2 py-0.5 rounded flex items-center justify-between">
              <span>Junction 1 &rarr; 2 &rarr; 3</span>
              <span className="text-emerald-400">Corridor Clear</span>
            </div>
          </div>
        );

      case 'mindlink':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#130f1f] via-[#0d0a17] to-[#06070a] rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-violet-400">
                <Clock className="w-3.5 h-3.5" />
                STUDY PLATFORM & POMODORO
              </span>
              <span className="text-slate-400 font-mono">25:00</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-200 font-semibold">Anonymous Study Pod</span>
                <span className="text-emerald-400 text-[10px] font-mono">14 peers active</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">AI Summarizer: Key Lecture Concepts Extracted</p>
            </div>
            <div className="text-[10px] font-mono text-violet-300/90 bg-violet-500/10 px-2 py-0.5 rounded flex items-center justify-between">
              <span>Distraction-Free Interface</span>
              <span>RAG & LLM Ready</span>
            </div>
          </div>
        );

      case 'onehood':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#0c1322] via-[#090e17] to-[#06070a] rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Compass className="w-3.5 h-3.5" />
                HYPERLOCAL CHATBOARD
              </span>
              <span className="text-slate-400 font-mono">Campus Zone</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-200 font-medium">
                <span>#StudyGroups</span>
                <span className="text-blue-400 text-[10px]">Just now</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">DSA exam discussion meet at central library</p>
            </div>
            <div className="text-[10px] font-mono text-blue-300/90 bg-blue-500/10 px-2 py-0.5 rounded flex items-center justify-between">
              <span>Location-Aware Feeds</span>
              <span>Responsive Cards</span>
            </div>
          </div>
        );

      case 'ar-restaurant-menu':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#1c1409] via-[#120c06] to-[#06070a] rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                3D AUGMENTED REALITY
              </span>
              <span className="text-slate-400 font-mono">Unity 3D</span>
            </div>
            <div className="flex items-center justify-center py-2">
              <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-2">
                <span>360&deg; Interactive Model Inspection</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-amber-300/90 bg-amber-500/10 px-2 py-0.5 rounded flex items-center justify-between">
              <span>Portion & Ingredient Transparency</span>
              <span>Vuforia Target</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="glass-panel rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl">
      {/* Top Visual Preview Area */}
      <div className="p-4 sm:p-5 pb-0">
        <div className="relative cursor-pointer" onClick={() => onOpenDetails(project)}>
          {renderVisualMockup()}

          {/* Overlay hover prompt */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white pointer-events-none">
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>Click to Test Live Simulator</span>
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Category & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
              {project.category}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
              {project.status}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3
              onClick={() => onOpenDetails(project)}
              className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </h3>
            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{project.subtitle}</p>
          </div>

          {/* Concise Problem & Solution */}
          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
            {project.solution}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-blue-400" />
            <span>Interactive Demo</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub Code (configurable link)"
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Live Demo Preview (configurable link)"
                aria-label={`${project.title} live preview`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
