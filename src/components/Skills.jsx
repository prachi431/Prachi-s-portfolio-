import React, { useState } from 'react';
import { 
  FileCode, 
  Terminal, 
  Cpu, 
  Boxes, 
  Brain, 
  GitBranch, 
  Github, 
  Server, 
  Laptop, 
  Layers, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string to Lucide component
const iconMap = {
  FileCode,
  Terminal,
  Cpu,
  Boxes,
  Brain,
  GitBranch,
  Github,
  Server,
  Laptop
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 text-xs font-mono tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Categorized overview of foundational languages, algorithmic problem solving, and developer platforms I utilize.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Badges Grid */}
        <div className="space-y-10">
          {filteredCategories.map((catSection) => (
            <div key={catSection.category} className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {catSection.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{catSection.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  {catSection.skills.length} competencies
                </span>
              </div>

              {/* Badges / Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catSection.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Sparkles;
                  return (
                    <div
                      key={skill.name}
                      className="glass-card p-5 rounded-2xl border border-white/[0.07] flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} border flex items-center justify-center group-hover:scale-105 transition-transform`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-light mt-2 pt-2 border-t border-white/[0.05]">
                        {skill.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Footer Note */}
        <div className="p-4 rounded-xl glass-panel-subtle border border-cyan-500/10 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Currently expanding knowledge into <strong>Object-Oriented C++</strong>, <strong>Time Complexity Optimization</strong>, and <strong>NumPy/Pandas</strong>.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
