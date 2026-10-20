import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Search,
  Sparkles,
  Layers,
  Info,
} from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';

export const Skills: React.FC = () => {
  const { skills: skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code,
    frontend: Layout,
    backend: Server,
    databases: Database,
    'ai-data': Brain,
    tools: Wrench,
  };

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat: SkillCategory) => {
        const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
        if (!matchesCategory) return null;

        const filteredSkills = cat.skills.filter((skill) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.description?.toLowerCase().includes(query) ||
            cat.name.toLowerCase().includes(query)
          );
        });

        if (filteredSkills.length === 0) return null;

        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter(Boolean) as SkillCategory[];
  }, [skillCategories, selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skillCategories]);

  return (
    <section id="skills" className="py-24 relative bg-[#090b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Skills & Tools</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Organized tech stack covering software development, databases, backend architecture, and emerging AI/ML interests.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Sparkles;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                      : 'glass-panel text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <div
                key={cat.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{cat.description}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 transition-all duration-200 group/skill cursor-default flex items-center justify-between gap-2"
                        title={skill.description}
                      >
                        <span className="text-xs font-medium text-slate-200 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-medium ${
                              skill.level === 'Proficient'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : skill.level === 'Familiar'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote indicating easy configurability */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Category ID: {cat.id}</span>
                  <span className="text-blue-400/80">Editable in portfolioData.ts</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredCategories.length === 0 && (
          <div className="glass-panel p-12 text-center rounded-2xl border border-white/10 max-w-md mx-auto space-y-3">
            <Search className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No matching skills found</h3>
            <p className="text-xs text-slate-400">
              No skills match &quot;{searchQuery}&quot;. Try clearing your query or checking other categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Customization Tip Alert */}
        <div className="mt-12 glass-panel p-4 rounded-xl border border-blue-500/20 flex items-start gap-3 bg-blue-500/[0.03]">
          <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Note for Kavin:</strong> All skills and proficiency tags above are directly linked to <code className="text-blue-300 font-mono">src/data/portfolioData.ts</code>. You can effortlessly remove any technology you are not yet comfortable discussing in interviews, or add new frameworks as you learn them.
          </p>
        </div>
      </div>
    </section>
  );
};
