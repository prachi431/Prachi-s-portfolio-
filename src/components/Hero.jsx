import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Terminal, MapPin, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio, CTAs, Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-7 text-center lg:text-left"
        >
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-300">
              Bangalore Institute of Technology • B.E. AI & ML
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <span className="text-xl sm:text-2xl font-mono text-purple-300 font-semibold tracking-wide block">
              Greetings
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              WELCOME{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PRACHI'S PORTFOLIO
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            {personalInfo.bio}
          </p>

          {/* Location & Origin Badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              BIT, Bengaluru (From Haryana)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              Focus: C • Python • Algorithms
            </span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-slate-500 rounded-xl transition-all duration-200"
            >
              <Mail className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-white/[0.07] flex items-center justify-center lg:justify-start space-x-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Connect:
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-cyan-500/40 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/40 transition-all duration-200 hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-teal-500/40 transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Terminal Card (Floating Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md glass-card rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/60 relative group">
            {/* Window title bar */}
            <div className="px-4 py-3 bg-dark-900/90 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>prachi_profile.c</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                UTF-8
              </span>
            </div>

            {/* Terminal Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 bg-dark-950/70 select-none">
              <div className="text-slate-500">// Student Profile Definition</div>
              <div>
                <span className="text-purple-400">typedef struct</span> &#123;
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-400">char</span> name[] = <span className="text-teal-300">"Prachi Rawat"</span>;
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-400">char</span> college[] = <span className="text-teal-300">"BIT Bengaluru"</span>;
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-400">char</span> origin[] = <span className="text-teal-300">"Haryana, India"</span>;
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-400">char</span> major[] = <span className="text-teal-300">"AI & ML"</span>;
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-cyan-400">char*</span> focus[] = &#123;
                <span className="text-teal-300">"C"</span>,{' '}
                <span className="text-teal-300">"Python"</span>,{' '}
                <span className="text-teal-300">"Algorithms"</span>&#125;;
              </div>
              <div>&#125; <span className="text-indigo-400">UndergradStudent</span>;</div>
              
              <div className="pt-2 text-slate-500">// Execution status</div>
              <div className="text-emerald-400 flex items-center gap-1.5">
                <span className="text-cyan-400">&gt;</span> status: Compiling fundamentals... [100%]
              </div>
              <div className="text-slate-400 flex items-center gap-1.5">
                <span className="text-cyan-400">&gt;</span> ready_to_collaborate: <span className="text-emerald-300 font-semibold">true</span>
              </div>
            </div>

            {/* Bottom mini status bar */}
            <div className="px-4 py-2.5 bg-dark-900/80 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="w-3 h-3" />
                Undergrad • BIT Bengaluru
              </span>
              <span className="text-slate-500">GCC 13.2 / Python 3.12</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
