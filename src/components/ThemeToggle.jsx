import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative p-2 rounded-xl transition-all duration-300 border ${
        isDark
          ? 'bg-purple-950/40 border-purple-500/30 text-amber-300 hover:text-amber-200 hover:border-purple-400 hover:bg-purple-900/50 shadow-md shadow-purple-950/40'
          : 'bg-white/80 border-purple-200 text-purple-700 hover:bg-white hover:text-purple-900 shadow-md shadow-purple-200/50'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]" />
        ) : (
          <Moon className="w-4 h-4 text-purple-700 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
