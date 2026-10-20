import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Rocket, Info } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'IoT & Simulation', value: 'IoT / Simulation' },
    { label: 'AI & ML', value: 'AI & ML' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'AR / 3D', value: 'AR / 3D' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projects;
    return projects.filter((p) => p.category === selectedFilter);
  }, [projects, selectedFilter]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Hands-on software applications, algorithmic simulations, and interactive prototypes built with modern frameworks and AI tools.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-xl glass-panel border border-white/10 flex flex-wrap gap-1 justify-center">
            {filterOptions.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === f.value
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Honest Simulation Notice */}
        <div className="mt-14 glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3 bg-white/[0.02]">
          <Info className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Engineering Integrity:</strong> Projects like <strong>SmartBinX</strong> and <strong>AmbuClear</strong> are presented truthfully as algorithmic software simulations and architectural concepts using simulated sensor data, rather than claimed physical IoT hardware. You can test each system&apos;s simulation logic by clicking &ldquo;Interactive Demo&rdquo; on any card.
          </p>
        </div>
      </div>

      {/* Modal View for Project Details & Interactive Simulators */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
