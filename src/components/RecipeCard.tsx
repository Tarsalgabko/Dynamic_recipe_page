import React from 'react';
import { Clock, Users, Flame, Heart } from 'lucide-react';
import { Recipe } from '../types/recipe';
import { Translations } from '../types/language';

interface RecipeCardProps {
  recipe: Recipe;
  onToggleFavorite: (id: string) => void;
  onViewRecipe: (recipe: Recipe) => void;
  t: Translations;
  theme: 'light' | 'dark';
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onToggleFavorite,
  onViewRecipe,
  t,
  theme
}) => {
  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(recipe.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            recipe.isFavorite
              ? 'bg-red-500 text-white shadow-lg'
              : theme === 'dark'
                ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-red-400'
                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart size={18} fill={recipe.isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-5">
        <h3 className={`text-xl font-bold mb-3 line-clamp-2 shiny-text ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {recipe.name}
        </h3>
        
        <div className={`flex items-center justify-between text-sm mb-4 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={16} />
            <span>{recipe.calories}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.cookingTime} {t.min}</span>
          </div>
        </div>
        
        <button
          onClick={() => onViewRecipe(recipe)}
          className="shiny-button w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200"
        >
          <span className="shiny-text">{t.viewRecipe}</span>
        </button>
      </div>
    </div>
  );
};