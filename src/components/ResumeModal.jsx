import React from 'react';
import { X, Download, ExternalLink, GraduationCap, Code2, Award, Briefcase, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutData, skillsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/[0.12] shadow-2xl shadow-black/80 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-dark-900/90 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae / Resume</h3>
              <p className="text-xs text-slate-400 font-mono">Prachi Rawat • AI & ML</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-slate-200">
          {/* Header Summary */}
          <div className="border-b border-white/[0.08] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
                <p className="text-sm font-semibold text-cyan-400">{personalInfo.shortTitle}</p>
              </div>
              <div className="text-xs text-slate-400 font-mono space-y-0.5 sm:text-right">
                <p>{personalInfo.location}</p>
                <p className="text-cyan-300">{personalInfo.email}</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-light pt-2">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="space-y-4">
              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-bold text-white">{edu.degree}</span>
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">{edu.institution} — {edu.location}</div>
                  <ul className="text-xs text-slate-300 space-y-1 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-1.5">
                        <span className="text-cyan-400 text-xs">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skillsData.map((cat) => (
                <div key={cat.category} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <span className="text-xs font-semibold text-white block">{cat.category}</span>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-300 border border-white/[0.06]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects</span>
            </h4>
            <div className="space-y-3">
              {projectsData.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{p.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{p.primaryLanguage}</span>
                  </div>
                  <p className="text-xs text-slate-300">{p.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {p.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-900 text-slate-400 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Note & Actions */}
        <div className="px-6 py-4 bg-dark-900/90 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>Tip: You can replace this modal with your direct resume link or PDF file in <code className="text-cyan-400">portfolioData.js</code></span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
