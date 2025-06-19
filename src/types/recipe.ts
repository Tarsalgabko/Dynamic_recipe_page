export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  calories: number;
  isCustom?: boolean;
  isFavorite?: boolean;
}

export interface RecipeFormData {
  name: string;
  image: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  servings: number;
  calories: number;
}