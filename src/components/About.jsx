import React from 'react';
import { GraduationCap, MapPin, Code2, Sparkles, BookOpen, Compass, Award, ArrowUpRight } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From Haryana to Bangalore’s vibrant technology ecosystem — how I am shaping my career in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* 4 Feature Stat Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutData.highlights.map((item, idx) => {
            const icons = {
              GraduationCap: GraduationCap,
              MapPin: MapPin,
              Code2: Code2,
              Sparkles: Sparkles,
            };
            const IconComponent = icons[item.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-xl border border-white/[0.08] flex flex-col justify-between"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-white/[0.06]">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">My Academic & Coding Journey</h3>
                <p className="text-xs text-slate-400 font-mono">Transitioning into AI & Software Engineering</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {aboutData.story.map((paragraph, index) => (
                <p key={index} className="text-slate-300 font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Aspirations Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-dark-900 to-indigo-950/40 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-white">Current Academic Goal:</span> To build an unwavering grasp of computational complexity, C memory architecture, and scalable Python scripts before advancing to deep learning pipelines.
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education Cards */}
          <div className="lg:col-span-5 space-y-6">
            {aboutData.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group"
              >
                {/* Accent Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${idx === 0 ? 'from-cyan-400 via-teal-400 to-indigo-500' : 'from-slate-600 to-slate-400'}`}></div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                    <GraduationCap className="w-3 h-3 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${idx === 0 ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' : 'bg-slate-800 text-slate-300'}`}>
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {edu.location}
                </p>

                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Highlights:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 text-xs mt-0.5 font-mono">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
