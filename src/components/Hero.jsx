import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Terminal, MapPin, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const infoLines = [
  '🏫 Schooling at Aravali International School',
  '🎓 Currently 1st Year @ Bangalore Institute of Technology',
  '🤖 B.E. in AI & Machine Learning',
  '📍 From Haryana, studying in Bengaluru',
];

function CyclingInfo() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(showTimer);
  }, [index]);

  useEffect(() => {
    if (!visible) {
      const switchTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % infoLines.length);
        setVisible(true);
      }, 500);
      return () => clearTimeout(switchTimer);
    }
  }, [visible]);

  return (
    <div className="h-7 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-sm sm:text-base font-mono text-purple-300/90 tracking-wide"
          >
            {infoLines[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full space-y-8"
        >
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-mono text-slate-300">
              Bangalore Institute of Technology • B.E. AI &amp; ML
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <span className="text-2xl sm:text-3xl font-mono text-purple-300 font-semibold tracking-wide block">
              Greetings
            </span>
            <CyclingInfo />
            <h1 className="font-black tracking-tight text-white leading-[1.1]">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-yellow-300 via-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg block">
                WELCOME
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PRACHI'S PORTFOLIO
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            {personalInfo.bio}
          </p>

          {/* Location & Origin Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono text-slate-400">
            <span className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-4 h-4 text-cyan-400" />
              BIT, Bengaluru (From Haryana)
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Code className="w-4 h-4 text-indigo-400" />
              Focus: C • Python • Algorithms
            </span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-slate-500 rounded-xl transition-all duration-200"
            >
              <Mail className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-white/[0.07] flex items-center justify-center space-x-4">
            <span className="text-sm font-mono uppercase tracking-wider text-slate-500">
              Connect:
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-cyan-500/40 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/40 transition-all duration-200 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-teal-500/40 transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
