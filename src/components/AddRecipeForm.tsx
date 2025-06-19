import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { RecipeFormData } from '../types/recipe';
import { Translations } from '../types/language';

interface AddRecipeFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (recipe: RecipeFormData) => void;
  t: Translations;
  theme: 'light' | 'dark';
}

export const AddRecipeForm: React.FC<AddRecipeFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  t,
  theme
}) => {
  const [formData, setFormData] = useState<RecipeFormData>({
    name: '',
    image: '',
    ingredients: '',
    instructions: '',
    cookingTime: 30,
    servings: 2,
    calories: 300
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.ingredients && formData.instructions) {
      onSubmit(formData);
      setFormData({
        name: '',
        image: '',
        ingredients: '',
        instructions: '',
        cookingTime: 30,
        servings: 2,
        calories: 300
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  const inputClass = `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
    theme === 'dark'
      ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400'
      : 'bg-white border-gray-300 text-gray-700 placeholder-gray-500'
  }`;

  const labelClass = `block text-sm font-medium mb-2 shiny-text ${
    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  }`;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className={`flex items-center justify-between p-6 border-b ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-2xl font-bold shiny-text ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>{t.addNewRecipe}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors duration-200 ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <X size={20} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className={labelClass}>
              {t.recipeName} *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              placeholder={t.recipeNamePlaceholder}
              required
            />
          </div>
          
          <div>
            <label className={labelClass}>
              {t.imageUrl}
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className={inputClass}
              placeholder={t.imageUrlPlaceholder}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>
                {t.cookingTime}
              </label>
              <input
                type="number"
                value={formData.cookingTime}
                onChange={(e) => setFormData({ ...formData, cookingTime: parseInt(e.target.value) })}
                className={inputClass}
                min="1"
              />
            </div>
            
            <div>
              <label className={labelClass}>
                {t.servingsCount}
              </label>
              <input
                type="number"
                value={formData.servings}
                onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })}
                className={inputClass}
                min="1"
              />
            </div>
            
            <div>
              <label className={labelClass}>
                {t.calories}
              </label>
              <input
                type="number"
                value={formData.calories}
                onChange={(e) => setFormData({ ...formData, calories: parseInt(e.target.value) })}
                className={inputClass}
                min="1"
              />
            </div>
          </div>
          
          <div>
            <label className={labelClass}>
              {t.ingredientsLabel} *
            </label>
            <textarea
              value={formData.ingredients}
              onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
              className={inputClass}
              rows={4}
              placeholder={t.ingredientsPlaceholder}
              required
            />
          </div>
          
          <div>
            <label className={labelClass}>
              {t.instructionsLabel} *
            </label>
            <textarea
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              className={inputClass}
              rows={6}
              placeholder={t.instructionsPlaceholder}
              required
            />
          </div>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className={`shiny-button flex-1 py-3 px-6 border-2 rounded-xl font-medium transition-colors duration-200 ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="shiny-text">{t.cancel}</span>
            </button>
            <button
              type="submit"
              className="shiny-button flex-1 py-3 px-6 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              <span className="shiny-text">{t.addRecipeButton}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};