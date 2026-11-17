import React, { useState } from 'react';
import { Github, ExternalLink, Terminal, ChevronRight, CheckCircle2, Sparkles, Code2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  // Distinguish language colors
  const isPython = project.primaryLanguage === 'Python';
  const langColorClass = isPython
    ? 'text-yellow-300 bg-yellow-950/40 border-yellow-500/30'
    : 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30';

  const dotColorClass = isPython ? 'bg-yellow-400' : 'bg-cyan-400';

  return (
    <div className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 relative">
      {/* Top Accent Gradient Bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${
        isPython 
          ? 'from-amber-400 via-yellow-400 to-teal-400' 
          : 'from-cyan-400 via-blue-500 to-indigo-500'
      }`}></div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Meta badges header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${langColorClass}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass} animate-pulse`}></span>
              {project.primaryLanguage}
            </span>
            <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] hidden sm:inline-block">
              {project.featuredBadge}
            </span>
          </div>

          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">
            <CheckCircle2 className="w-3 h-3" />
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 font-light leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 mb-6 bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.04]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
            Key Architecture Points:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-dark-900/90 text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 bg-dark-900/60 border-t border-white/[0.06] flex items-center justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 group/link transition-colors"
        >
          <Github className="w-4 h-4 text-slate-400 group-hover/link:text-cyan-400 transition-colors" />
          <span>View Source on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-cyan-400 group-hover/link:translate-x-0.5 transition-all" />
        </a>

        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
