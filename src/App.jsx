import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import RocketEffect from './components/RocketEffect';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-grid text-slate-100 relative selection:bg-purple-500/20 selection:text-pink-300">
      {/* Sticky Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About & Education Section */}
        <About />

        {/* 3. Skills Grid Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Rocket Launch & Sound FX */}
      <RocketEffect />
    </div>
  );
}
