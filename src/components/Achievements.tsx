import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { AchievementItem } from '../types/portfolio';
import {
  Trophy,
  Award,
  Users,
  Terminal,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  X,
  FileCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  const [selectedCertificate, setSelectedCertificate] = useState<AchievementItem | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#f59e0b', '#10b981'],
    });
  };

  const categoryIcons: Record<string, React.ElementType> = {
    'Competition Award': Trophy,
    Hackathon: Award,
    'Community & Leadership': Users,
    'Event Coordination': Terminal,
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#090b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Extracurriculars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Competitive programming highlights, hackathon participations, student club initiatives, and technical event leadership.
          </p>
        </div>

        {/* Featured Spotlight: Web Whiz 1st Place */}
        {achievements.find((a) => a.id === 'web-whiz-1st') && (
          <div className="mb-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/30 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/20">
                  <Trophy className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-xs font-bold">
                      🏆 1st Place Winner
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Teammate: Kishore &bull; Web Whiz Competition
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    First Place &ndash; Web Whiz Competition
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Designed, coded, and delivered a responsive, high-performing web application under strict time constraints alongside teammate Kishore, earning top rank for code quality, responsiveness, and prototype execution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <button
                  onClick={triggerConfetti}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Celebrate Victory</span>
                </button>
                <button
                  onClick={() => setSelectedCertificate(achievements[0])}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements
            .filter((a) => a.id !== 'web-whiz-1st')
            .map((item) => {
              const Icon = categoryIcons[item.category] || Award;
              return (
                <div
                  key={item.id}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            {item.category}
                          </span>
                          <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 shrink-0">
                        {item.dateOrYear}
                      </span>
                    </div>

                    {item.roleOrTeam && (
                      <div className="text-xs font-mono text-blue-400/90 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>{item.roleOrTeam}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {item.impactOrLearnings.map((imp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {item.certificateAvailable && (
                    <div className="mt-5 pt-3 border-t border-white/5 flex justify-end">
                      <button
                        onClick={() => setSelectedCertificate(item)}
                        className="text-xs text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <span>Certificate Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0d0f18] border border-white/15 rounded-2xl p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Certificate & Verification</h3>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 rounded-xl bg-[#08090e] border border-white/10 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                <FileCheck className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-white">{selectedCertificate.title}</h4>
              <p className="text-xs text-slate-400 font-mono">
                {selectedCertificate.roleOrTeam || 'Verified Participation'} &bull; {selectedCertificate.dateOrYear}
              </p>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300 text-left space-y-1">
                <div className="text-[11px] font-mono text-slate-500">HONEST VERIFICATION NOTE:</div>
                <p>
                  Official certificate can be viewed upon interview request or placed in <code className="text-blue-400 font-mono">public/certificates/{selectedCertificate.id}.pdf</code>.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
