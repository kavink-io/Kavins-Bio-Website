import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Sparkles,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, socials } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const github = socials.find((s) => s.platform === 'GitHub');
  const linkedin = socials.find((s) => s.platform === 'LinkedIn');
  const emailSocial = socials.find((s) => s.platform === 'Email');

  const handleCopyEmail = () => {
    if (emailSocial) {
      const email = emailSocial.handle;
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Interactive Background Particle Canvas */}
      <HeroCanvas />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-sm shadow-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for 2025–2026 Internships & Projects</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-blue-400 uppercase font-semibold">
                Hello, World! I am
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="relative inline-block">
                  {personal.name}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full" />
                </span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-300 font-sans tracking-tight pt-1">
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  {personal.headline}
                </span>
              </h2>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed italic border-l-2 border-blue-500/50 pl-4 py-1 text-left inline-block max-w-2xl bg-white/[0.02] rounded-r-lg">
              &ldquo;{personal.tagline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              {personal.bioShort}
            </p>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/5">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>{personal.university} &bull; Class of {personal.graduationYear}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume Button */}
              <a
                href={personal.resumeUrl}
                download="Kavin_K_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-blue-400/50 transition-all duration-200 active:scale-95 cursor-pointer"
                title="Download PDF Resume"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm border border-white/10 hover:border-violet-400/50 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Copy */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <div className="flex items-center gap-2.5">
                {github && (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass-panel hover:bg-white/15 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
                    title="GitHub: Configure in portfolioData.ts"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass-panel hover:bg-white/15 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
                    title="LinkedIn: Configure in portfolioData.ts"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {emailSocial && (
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass-panel hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 text-xs font-mono transition-all"
                    title="Click to copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Modern Developer Terminal & Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              {/* Outer Neon Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-2xl glass-panel border border-white/15 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-[#0b0d14] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">
                      kavin@portfolio:~
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    <Terminal className="w-3 h-3" />
                    <span>bash</span>
                  </div>
                </div>

                {/* Profile Visual / Card */}
                <div className="p-6 space-y-6">
                  {/* Photo Placeholder Area */}
                  <div className="relative flex justify-center">
                    <div className="relative w-44 h-44 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 shadow-xl shadow-blue-500/20">
                      <div className="w-full h-full bg-[#0a0c13] rounded-xl overflow-hidden flex flex-col items-center justify-center p-2 text-center group/photo relative">
                        <img
                          src={personal.avatarUrl}
                          alt={`${personal.name} profile`}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover/photo:scale-105"
                          onError={(e) => {
                            // Fallback if image fails
                            e.currentTarget.src = '/profile-placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center p-2">
                          <p className="text-[11px] text-slate-200 font-mono">Profile Avatar</p>
                          <p className="text-[9px] text-blue-300 font-mono mt-1">
                            Replace: public/profile.jpg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Code Summary */}
                  <div className="bg-[#07080d] p-3.5 rounded-xl border border-white/5 font-mono text-xs space-y-2 text-slate-300">
                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="text-emerald-400">$</span>
                      <span>cat profile_summary.json</span>
                    </div>
                    <div className="pl-3 space-y-1 text-[11px] border-l border-white/10">
                      <div>
                        <span className="text-blue-400">"status"</span>: <span className="text-emerald-300">"B.Tech IT Student (2023-2027)"</span>,
                      </div>
                      <div>
                        <span className="text-blue-400">"university"</span>: <span className="text-slate-300">"Sathyabama IST, Chennai"</span>,
                      </div>
                      <div>
                        <span className="text-blue-400">"focus"</span>: <span className="text-violet-300">["FullStack", "AI/ML", "IoT Sim"]</span>,
                      </div>
                      <div>
                        <span className="text-blue-400">"recent_win"</span>: <span className="text-amber-300">"1st Place @ Web Whiz"</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Skill Tags */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Core Technology Stack:</span>
                      <span className="text-blue-400">v2026.1</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['React.js', 'Python', 'Node.js', 'Tailwind', 'AI/ML', 'SQL', 'Git'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Resume Link in Card */}
                  <button
                    onClick={onOpenResume}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Interactive Resume Preview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-xs text-slate-400 mt-1">Featured Projects</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              1st
            </div>
            <div className="text-xs text-slate-400 mt-1">Place Web Whiz Win</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              2027
            </div>
            <div className="text-xs text-slate-400 mt-1">B.Tech IT Graduation</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">Authentic & Verified Code</div>
          </div>
        </div>
      </div>
    </section>
  );
};
