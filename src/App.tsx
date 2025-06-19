import React, { useState, useMemo } from 'react';
import { ChefHat, Plus, ArrowUp } from 'lucide-react';
import { Recipe, RecipeFormData } from './types/recipe';
import { defaultRecipes } from './data/recipes';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { useTranslatedRecipes } from './hooks/useTranslatedRecipes';
import { RecipeCard } from './components/RecipeCard';
import { SearchBar } from './components/SearchBar';
import { RecipeModal } from './components/RecipeModal';
import { AddRecipeForm } from './components/AddRecipeForm';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';

type TabType = 'all' | 'favorites' | 'custom';

function App() {
  const [recipes, setRecipes] = useLocalStorage<Recipe[]>('recipes', defaultRecipes);
  const [customRecipes, setCustomRecipes] = useLocalStorage<Recipe[]>('customRecipes', []);
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<'name' | 'ingredients'>('ingredients');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { language, t, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Preložené recepty
  const translatedRecipes = useTranslatedRecipes(recipes, language);
  const translatedCustomRecipes = useTranslatedRecipes(customRecipes, language);
  
  const allRecipes = useMemo(() => [...translatedRecipes, ...translatedCustomRecipes], [translatedRecipes, translatedCustomRecipes]);

  // Scroll to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredRecipes = useMemo(() => {
    let recipeList = allRecipes;

    // Filter by tab
    if (activeTab === 'favorites') {
      recipeList = recipeList.filter(recipe => recipe.isFavorite);
    } else if (activeTab === 'custom') {
      recipeList = translatedCustomRecipes;
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      recipeList = recipeList.filter(recipe => {
        if (searchType === 'name') {
          return recipe.name.toLowerCase().includes(searchLower);
        } else {
          return recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(searchLower)
          );
        }
      });
    }

    return recipeList;
  }, [allRecipes, translatedCustomRecipes, activeTab, searchTerm, searchType]);

  const toggleFavorite = (id: string) => {
    const updateRecipes = (recipeList: Recipe[]) =>
      recipeList.map(recipe =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
      );

    // Check if it's a custom recipe
    const isCustom = customRecipes.find(recipe => recipe.id === id);
    if (isCustom) {
      setCustomRecipes(updateRecipes(customRecipes));
    } else {
      setRecipes(updateRecipes(recipes));
    }
  };

  const viewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const addCustomRecipe = (formData: RecipeFormData) => {
    const newRecipe: Recipe = {
      id: Date.now().toString(),
      name: formData.name,
      image: formData.image || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
      instructions: formData.instructions.split('\n').filter(item => item.trim()),
      cookingTime: formData.cookingTime,
      servings: formData.servings,
      calories: formData.calories,
      isCustom: true,
      isFavorite: false
    };

    setCustomRecipes(prev => [...prev, newRecipe]);
  };

  // Funkcia pre návrat na domovskú stránku
  const goToHomePage = () => {
    setActiveTab('all');
    setSearchTerm('');
    setSearchType('ingredients');
  };

  const tabs = [
    { id: 'all' as TabType, label: t.allRecipes, count: allRecipes.length },
    { id: 'favorites' as TabType, label: t.favorites, count: allRecipes.filter(r => r.isFavorite).length },
    { id: 'custom' as TabType, label: t.myRecipes, count: translatedCustomRecipes.length }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    }`}>
      {/* Header */}
      <header className={`backdrop-blur-md shadow-sm sticky top-0 z-40 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Klikateľné logo a názov */}
            <button
              onClick={goToHomePage}
              className="flex items-center gap-3 group transition-all duration-200 hover:scale-105"
            >
              <div className="p-2 bg-green-600 rounded-xl group-hover:bg-green-700 transition-colors duration-200">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h1 className={`text-2xl font-bold transition-colors duration-200 shiny-text ${
                theme === 'dark' 
                  ? 'text-gray-100 group-hover:text-green-400' 
                  : 'text-gray-800 group-hover:text-green-600'
              }`}>{t.appTitle}</h1>
            </button>
            
            <div className="flex items-center gap-3">
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={changeLanguage}
                theme={theme}
              />
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
              <button
                onClick={() => setIsAddFormOpen(true)}
                className="shiny-button flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
              >
                <Plus size={20} />
                <span className="shiny-text">{t.addRecipe}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchType={searchType}
          onSearchTypeChange={setSearchType}
          t={t}
          theme={theme}
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shiny-button px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-green-400'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-green-600'
              }`}
            >
              <span className="shiny-text">{tab.label}</span>
              {tab.count > 0 && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id 
                    ? 'bg-white/20' 
                    : theme === 'dark'
                      ? 'bg-gray-700'
                      : 'bg-gray-200'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onToggleFavorite={toggleFavorite}
                onViewRecipe={viewRecipe}
                t={t}
                theme={theme}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <ChefHat className={`w-16 h-16 mx-auto mb-4 ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`} />
            <h3 className={`text-xl font-semibold mb-2 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {searchTerm ? t.noRecipesFound : t.noRecipes}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}>
              {searchTerm 
                ? t.tryDifferentSearch
                : activeTab === 'custom' 
                  ? t.addFirstCustomRecipe
                  : t.markRecipesAsFavorite}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`mt-16 border-t transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900/50 border-gray-700' 
          : 'bg-white/50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className={`text-lg font-bold mb-2 shiny-text ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {t.appTitle}
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {language === 'sk' && 'Vaša osobná zbierka receptov'}
                {language === 'en' && 'Your personal recipe collection'}
                {language === 'es' && 'Su colección personal de recetas'}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © 2025 {t.appTitle}
              </p>
              
              {/* Scroll to top button */}
              {showScrollTop && (
                <button
                  onClick={scrollToTop}
                  className={`shiny-button p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        t={t}
        theme={theme}
      />

      {/* Add Recipe Form */}
      <AddRecipeForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onSubmit={addCustomRecipe}
        t={t}
        theme={theme}
      />
    </div>
  );
}

export default App;