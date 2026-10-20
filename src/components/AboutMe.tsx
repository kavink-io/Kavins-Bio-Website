import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Code2,
  Sparkles,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

export const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'teamwork' | 'interests'>('overview');

  const values = [
    {
      title: 'Pragmatic Engineering',
      desc: 'Focusing on real user problems, clean code architecture, and sustainable software design over superficial complexity.',
      icon: Code2,
      color: 'text-blue-400',
      border: 'hover:border-blue-500/40',
    },
    {
      title: 'Collaborative Teamwork',
      desc: 'Thriving in team hackathons, peer code reviews, and cross-functional technical event coordination.',
      icon: Users,
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
    },
    {
      title: 'Applied AI Exploration',
      desc: 'Investigating modern LLM prompts, RAG architectures, and algorithmic simulations with genuine engineering curiosity.',
      icon: Sparkles,
      color: 'text-violet-400',
      border: 'hover:border-violet-500/40',
    },
    {
      title: 'Technical Mentorship',
      desc: 'Active BIS student chapter member organizing hands-on workshops and mentoring junior students in emerging tech.',
      icon: Lightbulb,
      color: 'text-amber-400',
      border: 'hover:border-amber-500/40',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Undergraduate Developer Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Kavin K</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A committed B.Tech IT student blending full-stack software development with artificial intelligence and collaborative leadership.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-xl glass-panel border border-white/10 flex gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Academic Story & Focus
            </button>
            <button
              onClick={() => setActiveTab('teamwork')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'teamwork'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Teamwork & Event Leadership
            </button>
            <button
              onClick={() => setActiveTab('interests')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'interests'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Engineering Philosophy
            </button>
          </div>
        </div>

        {/* Dynamic Content based on activeTab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Content Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            {activeTab === 'overview' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Undergraduate Journey</h3>
                    <p className="text-xs text-blue-400 font-mono">Sathyabama IST, Chennai (2023–2027)</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am pursuing my <strong>B.Tech in Information Technology</strong> at <strong>Sathyabama Institute of Science and Technology</strong> in Chennai, graduating in <strong>2027</strong>.
                  </p>
                  <p>
                    My educational foundation encompasses core computer science fundamentals—data structures, relational database architecture, algorithms, and networking—paired with self-directed exploration of full-stack engineering and intelligent machine systems.
                  </p>
                  <p>
                    Rather than chasing every transient framework, I prioritize mastering underlying software principles: clean asynchronous code in JavaScript/TypeScript, scalable backend structures in Python and Node.js, and solid algorithmic thinking in C++ and Java.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Expected Graduation: May 2027</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Department: Information Technology</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'teamwork' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Collaboration & Event Organization</h3>
                    <p className="text-xs text-emerald-400 font-mono">Team Player & Community Builder</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Great software is rarely built in isolation. Working collaboratively with teammates has been one of the most rewarding aspects of my university life.
                  </p>
                  <p>
                    In the <strong>Web Whiz competition</strong>, I teamed up with my peer <strong>Kishore</strong> to design and build a competitive web application under high pressure, earning <strong>First Place</strong> through clear communication, efficient task allocation, and relentless iteration.
                  </p>
                  <p>
                    As an active member of the <strong>BIS Club</strong> (Bureau of Indian Standards Student Chapter), I helped organize an interactive <strong>AR/VR Workshop</strong> for junior students, guiding them through immersive technologies, Unity basics, and spatial computing concepts.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Web Whiz 1st Place with Kishore</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>BIS Club AR/VR Workshop Organizer</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Honest Engineering & Continuous Learning</h3>
                    <p className="text-xs text-violet-400 font-mono">Authentic, Recruiter-Friendly Ethos</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I believe in technical honesty. When I build software, I test edge cases, document real system limitations, and explicitly distinguish working implementations from simulated prototypes.
                  </p>
                  <p>
                    My projects like <strong>SmartBinX</strong> and <strong>AmbuClear</strong> demonstrate algorithmic simulation thinking—modeling smart cities and emergency corridors with mathematical rigor without claiming unfeasible physical deployments.
                  </p>
                  <p>
                    I am actively seeking software engineering and full-stack internships where I can contribute to production-grade applications, absorb best engineering practices from senior mentors, and deliver measurable impact.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Open to Internships & Hackathons</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Focus: Full-Stack & Applied AI</span>
                  </div>
                </div>
              </div>
            )}

            {/* Recruiter Quote footer */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-slate-500">Student Status: Active & Enrolled</span>
              <a
                href="#projects"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
              >
                Inspect my project code &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className={`glass-panel p-5 rounded-2xl border border-white/10 transition-all duration-300 ${v.border} group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${v.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
