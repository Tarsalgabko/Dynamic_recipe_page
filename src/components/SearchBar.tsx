import React from 'react';
import { Search } from 'lucide-react';
import { Translations } from '../types/language';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  searchType: 'name' | 'ingredients';
  onSearchTypeChange: (type: 'name' | 'ingredients') => void;
  t: Translations;
  theme: 'light' | 'dark';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  searchType,
  onSearchTypeChange,
  t,
  theme
}) => {
  return (
    <div className={`rounded-2xl shadow-lg p-6 mb-8 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className={`flex rounded-xl p-1 ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <button
            onClick={() => onSearchTypeChange('ingredients')}
            className={`shiny-button flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              searchType === 'ingredients'
                ? 'bg-green-600 text-white shadow-md'
                : theme === 'dark'
                  ? 'text-gray-300 hover:text-green-400'
                  : 'text-gray-600 hover:text-green-600'
            }`}
          >
            <span className="shiny-text">{t.searchByIngredients}</span>
          </button>
          <button
            onClick={() => onSearchTypeChange('name')}
            className={`shiny-button flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              searchType === 'name'
                ? 'bg-green-600 text-white shadow-md'
                : theme === 'dark'
                  ? 'text-gray-300 hover:text-green-400'
                  : 'text-gray-600 hover:text-green-600'
            }`}
          >
            <span className="shiny-text">{t.searchByName}</span>
          </button>
        </div>
        
        <div className="flex-1 relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
          }`} size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              searchType === 'ingredients'
                ? t.searchIngredientsPlaceholder
                : t.searchNamePlaceholder
            }
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-200 ${
              theme === 'dark'
                ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400'
                : 'bg-white border-gray-200 text-gray-700 placeholder-gray-500'
            }`}
          />
        </div>
      </div>
    </div>
  );
};