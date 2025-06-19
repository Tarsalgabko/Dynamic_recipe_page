import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types/language';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  theme: 'light' | 'dark';
}

const languageOptions = [
  { code: 'sk' as Language, name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' }
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  theme
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`shiny-button flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        } shadow-md`}
      >
        <Languages size={18} />
        <span className="text-lg">
          {languageOptions.find(lang => lang.code === currentLanguage)?.flag}
        </span>
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 py-2 rounded-xl shadow-lg z-50 min-w-[160px] ${
          theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                onLanguageChange(option.code);
                setIsOpen(false);
              }}
              className={`shiny-button w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                currentLanguage === option.code
                  ? theme === 'dark'
                    ? 'bg-green-900 text-green-200'
                    : 'bg-green-50 text-green-700'
                  : theme === 'dark'
                    ? 'text-gray-200 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{option.flag}</span>
              <span className="font-medium shiny-text">{option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};