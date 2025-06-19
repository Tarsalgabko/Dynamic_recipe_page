import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`shiny-button p-3 rounded-xl transition-all duration-300 shadow-md ${
        theme === 'dark'
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="transform rotate-0 transition-transform duration-300" />
      ) : (
        <Moon size={20} className="transform rotate-0 transition-transform duration-300" />
      )}
    </button>
  );
};