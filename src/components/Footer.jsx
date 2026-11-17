import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-black/40 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <a href="#" className="inline-flex items-center gap-2.5 text-lg font-bold text-white hover:text-purple-300 transition-colors">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-6 h-6 rounded-full object-cover ring-1 ring-purple-400"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/avatar.svg";
                }}
              />
              <span>{personalInfo.name}</span>
            </a>
            <p className="text-xs text-slate-400 font-mono">
              B.E. in AI & ML • Bangalore Institute of Technology
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & developed with React, Tailwind CSS & Lucide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
