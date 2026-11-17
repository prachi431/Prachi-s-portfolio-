import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { playRocketSound } from '../utils/audioEffects';

export default function RocketEffect() {
  const [rockets, setRockets] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const launchRocket = useCallback((x, y) => {
    if (soundEnabled) {
      try {
        playRocketSound();
      } catch (err) {
        console.warn('Audio playback error', err);
      }
    }

    const newRocket = {
      id: Date.now() + Math.random(),
      x,
      y,
      angle: (Math.random() - 0.5) * 28, // slight tilt -14deg to +14deg
      scale: 0.9 + Math.random() * 0.4,
      particles: Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        dx: (Math.random() - 0.5) * 40,
        dy: Math.random() * 30 + 10,
        color: i % 2 === 0 ? '#ec4899' : '#a855f7'
      }))
    };

    setRockets((prev) => [...prev.slice(-8), newRocket]); // keep at most 8 active rockets

    // Clean up rocket after flight
    setTimeout(() => {
      setRockets((prev) => prev.filter((r) => r.id !== newRocket.id));
    }, 1400);
  }, [soundEnabled]);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't launch rocket if clicking on the mute button itself
      if (e.target.closest('#sound-toggle-btn')) {
        return;
      }

      launchRocket(e.clientX, e.clientY);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [launchRocket]);

  return (
    <>
      {/* Floating Rockets & Sparks Layer */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {rockets.map((rocket) => (
            <motion.div
              key={rocket.id}
              initial={{
                x: rocket.x - 24,
                y: rocket.y - 24,
                opacity: 1,
                scale: 0.4,
                rotate: rocket.angle
              }}
              animate={{
                y: -120, // launch off top of screen
                x: rocket.x - 24 + rocket.angle * 12,
                opacity: [1, 1, 0.9, 0],
                scale: [0.4, rocket.scale * 1.2, rocket.scale * 0.9]
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.11, 0, 0.5, 0] // rocket acceleration curve
              }}
              className="absolute flex flex-col items-center"
            >
              {/* Rocket Body */}
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-t from-pink-500/40 via-purple-500/40 to-transparent blur-md rounded-full pointer-events-none"></div>

                <div className="relative p-2.5 rounded-full bg-gradient-to-t from-purple-900/90 to-dark-900 border border-purple-400/60 shadow-lg shadow-purple-500/40">
                  <Rocket className="w-7 h-7 text-pink-400 -rotate-45 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
                </div>
              </div>

              {/* Flame Thruster Trail */}
              <motion.div
                initial={{ height: 10, opacity: 0.8 }}
                animate={{
                  height: [16, 36, 24],
                  opacity: [0.9, 1, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2.5 rounded-b-full bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent blur-[1px] shadow-[0_0_15px_#f97316] mt-[-4px]"
              />

              {/* Exhaust Spark Particles */}
              <div className="relative w-0 h-0">
                {rocket.particles.map((p) => (
                  <motion.span
                    key={p.id}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: p.dx,
                      y: p.dy,
                      opacity: 0,
                      scale: 0.2
                    }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ backgroundColor: p.color }}
                    className="absolute w-2 h-2 rounded-full blur-[0.5px]"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Sound Toggle Pill */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          id="sound-toggle-btn"
          onClick={() => setSoundEnabled((prev) => !prev)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono font-medium backdrop-blur-md border transition-all duration-200 shadow-xl ${
            soundEnabled
              ? 'bg-purple-950/80 text-pink-300 border-purple-500/40 hover:border-pink-400 hover:bg-purple-900/80 shadow-purple-950/50'
              : 'bg-dark-900/80 text-slate-400 border-white/[0.08] hover:text-white'
          }`}
          title={soundEnabled ? 'Rocket Sound FX: Enabled (Click to Mute)' : 'Rocket Sound FX: Muted (Click to Unmute)'}
        >
          <Rocket className={`w-3.5 h-3.5 ${soundEnabled ? 'text-pink-400 animate-pulse' : 'text-slate-500'}`} />
          <span>{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-purple-300" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          )}
        </button>
      </div>
    </>
  );
}
