import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-2xl shadow-black/40 py-3.5 border-b border-white/[0.08]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Profile Picture */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-slate-900 dark:text-white font-semibold focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-500 p-[2px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105 shrink-0 overflow-hidden">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full bg-white dark:bg-dark-950"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/avatar.svg";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AI & ML • BIT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-purple-700 dark:text-pink-300 bg-purple-500/15 border border-purple-500/30 shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white hover:bg-purple-500/10 dark:hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action: Theme Toggle & Resume Button */}
          <div className="hidden md:flex items-center space-x-2.5">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-semibold text-purple-700 dark:text-pink-300 rounded-lg overflow-hidden group bg-purple-500/10 dark:bg-purple-950/40 border border-purple-400/40 dark:border-purple-500/30 hover:border-purple-500 hover:text-purple-900 dark:hover:text-white transition-all shadow-sm hover:shadow-purple-500/20 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <FileText className="w-3.5 h-3.5 mr-1.5 text-purple-600 dark:text-pink-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-semibold text-purple-700 dark:text-pink-300 rounded-lg bg-purple-500/10 dark:bg-purple-950/40 border border-purple-400/40 dark:border-purple-500/30"
              aria-label="View Resume"
            >
              Resume
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white hover:bg-purple-500/10 dark:hover:bg-white/[0.06] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-purple-600 dark:text-pink-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2 mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/60 transition-colors"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
