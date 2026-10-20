import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const github = socials.find((s) => s.platform === 'GitHub');
  const linkedin = socials.find((s) => s.platform === 'LinkedIn');
  const email = socials.find((s) => s.platform === 'Email');

  return (
    <footer className="border-t border-white/10 bg-[#06070a] relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 p-[1.5px] shadow-sm shadow-blue-500/20">
              <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center font-mono text-xs font-bold text-blue-400">
                KK
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight">Kavin K</span>
              <p className="text-xs text-slate-400 font-mono">
                {personal.department} &bull; Sathyabama IST (2027)
              </p>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {email && (
              <a
                href={email.url}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Kavin"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-all cursor-pointer ml-2"
              title="Scroll to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Kavin K. Built with React, Vite, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Honest Engineering & Bullshit-Free Code</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
