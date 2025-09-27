import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
          isDark 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : 'bg-gray-300 hover:bg-gray-400'
        }`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
            isDark 
              ? 'translate-x-6 bg-gray-800 text-cyan-400' 
              : 'translate-x-0 bg-white text-yellow-500'
          }`}
        >
          {isDark ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </div>
        
        {/* Background icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun className={`w-4 h-4 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`} />
          <Moon className={`w-4 h-4 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-30'}`} />
        </div>
      </button>
    </div>
  );
};