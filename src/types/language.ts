export type Language = 'sk' | 'en' | 'es';

export interface Translations {
  // Header
  appTitle: string;
  addRecipe: string;
  
  // Search
  searchByIngredients: string;
  searchByName: string;
  searchIngredientsPlaceholder: string;
  searchNamePlaceholder: string;
  
  // Tabs
  allRecipes: string;
  favorites: string;
  myRecipes: string;
  
  // Recipe Card
  servings: string;
  minutes: string;
  viewRecipe: string;
  
  // Recipe Modal
  ingredients: string;
  instructions: string;
  
  // Add Recipe Form
  addNewRecipe: string;
  recipeName: string;
  recipeNamePlaceholder: string;
  imageUrl: string;
  imageUrlPlaceholder: string;
  cookingTime: string;
  servingsCount: string;
  calories: string;
  ingredientsLabel: string;
  ingredientsPlaceholder: string;
  instructionsLabel: string;
  instructionsPlaceholder: string;
  cancel: string;
  addRecipeButton: string;
  
  // Empty States
  noRecipesFound: string;
  noRecipes: string;
  tryDifferentSearch: string;
  addFirstCustomRecipe: string;
  markRecipesAsFavorite: string;
  
  // Units
  kcal: string;
  min: string;
  portions: string;
}

export const translations: Record<Language, Translations> = {
  sk: {
    appTitle: 'Gabriell S. Kisely',
    addRecipe: 'Pridať recept',
    searchByIngredients: 'Hľadať podľa ingrediencií',
    searchByName: 'Hľadať podľa názvu',
    searchIngredientsPlaceholder: 'Hľadať podľa ingrediencií (napr. múka, vajcia)',
    searchNamePlaceholder: 'Hľadať podľa názvu receptu',
    allRecipes: 'Všetky recepty',
    favorites: 'Obľúbené',
    myRecipes: 'Moje recepty',
    servings: 'porcie',
    minutes: 'min',
    viewRecipe: 'Zobraziť recept',
    ingredients: 'Ingrediencie',
    instructions: 'Postup',
    addNewRecipe: 'Pridať nový recept',
    recipeName: 'Názov receptu',
    recipeNamePlaceholder: 'Zadajte názov receptu',
    imageUrl: 'URL obrázka',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    cookingTime: 'Čas prípravy (min)',
    servingsCount: 'Počet porcií',
    calories: 'Kalórie (kcal)',
    ingredientsLabel: 'Ingrediencie',
    ingredientsPlaceholder: 'Zadajte ingrediencie oddelené čiarkami (napr. múka, mlieko, vajcia)',
    instructionsLabel: 'Postup prípravy',
    instructionsPlaceholder: 'Opíšte postup prípravy (každý krok na novom riadku)',
    cancel: 'Zrušiť',
    addRecipeButton: 'Pridať recept',
    noRecipesFound: 'Žiadne recepty nenájdené',
    noRecipes: 'Žiadne recepty',
    tryDifferentSearch: 'Skúste zmeniť vyhľadávacie kritériá',
    addFirstCustomRecipe: 'Pridajte svoj prvý vlastný recept',
    markRecipesAsFavorite: 'Označte recepty ako obľúbené',
    kcal: 'kcal',
    min: 'min',
    portions: 'porcie'
  },
  en: {
    appTitle: 'Gabriell S. Kisely',
    addRecipe: 'Add Recipe',
    searchByIngredients: 'Search by Ingredients',
    searchByName: 'Search by Name',
    searchIngredientsPlaceholder: 'Search by ingredients (e.g. flour, eggs)',
    searchNamePlaceholder: 'Search by recipe name',
    allRecipes: 'All Recipes',
    favorites: 'Favorites',
    myRecipes: 'My Recipes',
    servings: 'servings',
    minutes: 'min',
    viewRecipe: 'View Recipe',
    ingredients: 'Ingredients',
    instructions: 'Instructions',
    addNewRecipe: 'Add New Recipe',
    recipeName: 'Recipe Name',
    recipeNamePlaceholder: 'Enter recipe name',
    imageUrl: 'Image URL',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    cookingTime: 'Cooking Time (min)',
    servingsCount: 'Number of Servings',
    calories: 'Calories (kcal)',
    ingredientsLabel: 'Ingredients',
    ingredientsPlaceholder: 'Enter ingredients separated by commas (e.g. flour, milk, eggs)',
    instructionsLabel: 'Cooking Instructions',
    instructionsPlaceholder: 'Describe the cooking process (each step on a new line)',
    cancel: 'Cancel',
    addRecipeButton: 'Add Recipe',
    noRecipesFound: 'No recipes found',
    noRecipes: 'No recipes',
    tryDifferentSearch: 'Try changing search criteria',
    addFirstCustomRecipe: 'Add your first custom recipe',
    markRecipesAsFavorite: 'Mark recipes as favorite',
    kcal: 'kcal',
    min: 'min',
    portions: 'servings'
  },
  es: {
    appTitle: 'Gabriell S. Kisely',
    addRecipe: 'Añadir Receta',
    searchByIngredients: 'Buscar por Ingredientes',
    searchByName: 'Buscar por Nombre',
    searchIngredientsPlaceholder: 'Buscar por ingredientes (ej. harina, huevos)',
    searchNamePlaceholder: 'Buscar por nombre de receta',
    allRecipes: 'Todas las Recetas',
    favorites: 'Favoritas',
    myRecipes: 'Mis Recetas',
    servings: 'porciones',
    minutes: 'min',
    viewRecipe: 'Ver Receta',
    ingredients: 'Ingredientes',
    instructions: 'Instrucciones',
    addNewRecipe: 'Añadir Nueva Receta',
    recipeName: 'Nombre de la Receta',
    recipeNamePlaceholder: 'Ingrese el nombre de la receta',
    imageUrl: 'URL de Imagen',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    cookingTime: 'Tiempo de Cocción (min)',
    servingsCount: 'Número de Porciones',
    calories: 'Calorías (kcal)',
    ingredientsLabel: 'Ingredientes',
    ingredientsPlaceholder: 'Ingrese ingredientes separados por comas (ej. harina, leche, huevos)',
    instructionsLabel: 'Instrucciones de Cocción',
    instructionsPlaceholder: 'Describa el proceso de cocción (cada paso en una nueva línea)',
    cancel: 'Cancelar',
    addRecipeButton: 'Añadir Receta',
    noRecipesFound: 'No se encontraron recetas',
    noRecipes: 'Sin recetas',
    tryDifferentSearch: 'Intente cambiar los criterios de búsqueda',
    addFirstCustomRecipe: 'Añada su primera receta personalizada',
    markRecipesAsFavorite: 'Marque recetas como favoritas',
    kcal: 'kcal',
    min: 'min',
    portions: 'porciones'
  }
};