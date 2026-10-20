import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Edit3,
  Award,
} from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;
  const [showConfigHint, setShowConfigHint] = useState(false);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Formal <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Foundational computer science, software engineering curricula, and university achievements.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-violet-500/20 rounded-3xl blur-md -z-10" />

          <div className="space-y-8">
            {/* Top row with Institution & Degree */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                      Undergraduate Degree
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {education.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {education.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base font-semibold text-slate-300">
                    {education.institution}
                  </h4>
                </div>
              </div>

              {/* Time & Location Pill */}
              <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Configurable CGPA Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Academic Performance / CGPA</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{education.cgpa}</span>
                    <button
                      onClick={() => setShowConfigHint(!showConfigHint)}
                      className="text-[10px] text-blue-400 hover:text-blue-300 font-mono inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>{showConfigHint ? 'Hide Config Note' : 'Update CGPA'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500">
                Scale: {education.cgpaMax || '10.0'}
              </div>
            </div>

            {showConfigHint && (
              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-slate-300 space-y-1">
                <strong className="text-white">How to update your CGPA:</strong>
                <p>
                  Open <code className="text-blue-300 font-mono">src/data/portfolioData.ts</code>, locate the <code className="text-blue-300 font-mono">education.cgpa</code> property, and enter your current semester CGPA (e.g., <code className="text-emerald-300 font-mono">&quot;8.65 / 10.0&quot;</code>).
                </p>
              </div>
            )}

            {/* Coursework & Department Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Core Coursework */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Relevant Coursework</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campus & Extracurricular Highlights */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>University Involvement</span>
                </h5>
                <div className="space-y-2">
                  {education.highlights.map((high, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
