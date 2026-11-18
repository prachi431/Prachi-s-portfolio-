import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Terminal, ChevronRight, CheckCircle2, Sparkles, Code2, PlayCircle, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'output'

  // Distinguish language colors
  const isPython = project.primaryLanguage === 'Python';
  const langColorClass = isPython
    ? 'text-yellow-300 bg-yellow-950/40 border-yellow-500/30'
    : 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30';

  const dotColorClass = isPython ? 'bg-yellow-400' : 'bg-cyan-400';
  const hasCodeViewer = !!project.code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300 relative"
    >
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

        {/* ── Code Viewer (only if project has code) ── */}
        {hasCodeViewer && (
          <div className="mb-5">
            {/* Toggle Button */}
            <button
              onClick={() => setShowOutput((v) => !v)}
              className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 group/code"
            >
              <span className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 group-hover/code:text-cyan-300 transition-colors">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                View Source &amp; Output
              </span>
              {showOutput
                ? <ChevronUp className="w-4 h-4 text-slate-400" />
                : <ChevronDown className="w-4 h-4 text-slate-400" />
              }
            </button>

            {/* Expandable Code + Output Panel */}
            <AnimatePresence>
              {showOutput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {/* Window chrome */}
                  <div className="mt-2 rounded-xl border border-white/[0.1] overflow-hidden shadow-2xl shadow-black/50">
                    {/* Title bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1a2e] border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        main.c — OnlineGDB
                      </span>
                      {/* Tab switcher */}
                      <div className="flex items-center gap-1 bg-black/30 rounded-lg p-0.5">
                        <button
                          onClick={() => setActiveTab('code')}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                            activeTab === 'code'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          Code
                        </button>
                        <button
                          onClick={() => setActiveTab('output')}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                            activeTab === 'output'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          <PlayCircle className="w-2.5 h-2.5" />
                          Output
                        </button>
                      </div>
                    </div>

                    {/* Code tab */}
                    <AnimatePresence mode="wait">
                      {activeTab === 'code' && (
                        <motion.div
                          key="code"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="bg-[#0d0d1a] p-4 overflow-x-auto"
                        >
                          <pre className="text-xs font-mono text-slate-300 leading-relaxed">
                            {project.code.split('\n').map((line, i) => (
                              <div key={i} className="flex gap-4 hover:bg-white/[0.02] rounded px-1">
                                <span className="select-none text-slate-600 w-5 text-right shrink-0">{i + 1}</span>
                                <span
                                  className="text-slate-200"
                                  dangerouslySetInnerHTML={{
                                    __html: line
                                      .replace(/&/g, '&amp;')
                                      .replace(/</g, '&lt;')
                                      .replace(/>/g, '&gt;')
                                      .replace(/(#include\s*&lt;[^&]+&gt;)/g, '<span style="color:#f472b6">$1</span>')
                                      .replace(/\b(int|char|float|double|return|for|if|else|while|void)\b/g, '<span style="color:#c084fc">$1</span>')
                                      .replace(/(printf|scanf|main)/g, '<span style="color:#22d3ee">$1</span>')
                                      .replace(/"([^"]*)"/g, '<span style="color:#5eead4">"$1"</span>')
                                      .replace(/\/\/(.*)/g, '<span style="color:#64748b">//$1</span>')
                                  }}
                                />
                              </div>
                            ))}
                          </pre>
                        </motion.div>
                      )}

                      {/* Output tab */}
                      {activeTab === 'output' && (
                        <motion.div
                          key="output"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="bg-[#0a0a0a] p-4"
                        >
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.06]">
                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                              ▶ Program Output
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">
                              (input: 9)
                            </span>
                          </div>
                          <pre className="text-xs font-mono text-emerald-300 leading-relaxed whitespace-pre-wrap">
                            {project.codeOutput}
                          </pre>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

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
    </motion.div>
  );
}
