import React, { useState } from 'react';
import { FolderGit2, Github, PlusCircle, Sparkles, Terminal } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'C', 'Python'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.primaryLanguage.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Beginner-friendly projects built with C and Python, demonstrating low-level data persistence, command-line automation, and algorithmic logic.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {filter === 'All' ? 'All Languages' : `${filter} Projects`}
            </button>
          ))}
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Modular Extensibility Callout */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              More Experiments in the Pipeline
            </h4>
            <p className="text-xs text-slate-400">
              Currently writing scripts for linear algebra visualization and basic neural network implementations from scratch.
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-cyan-500/40 hover:text-cyan-300 transition-all shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Explore GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
