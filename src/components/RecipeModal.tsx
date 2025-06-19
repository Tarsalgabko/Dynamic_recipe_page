import React from 'react';
import { X, Clock, Users, Flame } from 'lucide-react';
import { Recipe } from '../types/recipe';
import { Translations } from '../types/language';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  theme: 'light' | 'dark';
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  isOpen,
  onClose,
  t,
  theme
}) => {
  if (!isOpen || !recipe) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
              theme === 'dark'
                ? 'bg-gray-800/90 hover:bg-gray-700 text-gray-200'
                : 'bg-white/90 hover:bg-white text-gray-700'
            }`}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className={`text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>{recipe.name}</h2>
          
          <div className={`flex items-center gap-6 mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>{recipe.servings} {t.portions}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{recipe.cookingTime} {t.min}</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame size={20} />
              <span>{recipe.calories} {t.kcal}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
            }`}>{t.ingredients}</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={`capitalize ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
            }`}>{t.instructions}</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className={`pt-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};