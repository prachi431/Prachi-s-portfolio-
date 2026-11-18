import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import RocketEffect from './components/RocketEffect';

function MainLayout() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative selection:bg-purple-500/20 selection:text-pink-400 transition-colors duration-300 ${
      isDark ? 'text-slate-100' : 'text-slate-800'
    }`}>
      {/* Fixed Fullscreen Background Image */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-300"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      
      {/* Adaptive Theme Overlay */}
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${
        isDark 
          ? 'bg-slate-950/70 backdrop-blur-[1px]' 
          : 'bg-white/40 backdrop-blur-[0.5px]'
      }`} />

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

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
