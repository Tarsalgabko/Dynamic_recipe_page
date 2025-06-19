import { useMemo } from 'react';
import { Recipe } from '../types/recipe';
import { Language } from '../types/language';
import { translateRecipeName, translateIngredients, translateInstructions } from '../utils/translator';

export function useTranslatedRecipes(recipes: Recipe[], language: Language): Recipe[] {
  return useMemo(() => {
    if (language === 'sk') return recipes;
    
    return recipes.map(recipe => ({
      ...recipe,
      name: translateRecipeName(recipe.name, language),
      ingredients: translateIngredients(recipe.ingredients, language),
      instructions: translateInstructions(recipe.instructions, language)
    }));
  }, [recipes, language]);
}