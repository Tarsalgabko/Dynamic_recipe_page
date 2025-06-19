# 🍳 My Recipes – Dynamic Recipe Page

[web-app view](Dynamic_recipe_page.png)

## 🚀 Stack

![Next.js](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)

## ✨ Features

- 🔍 **Advanced Search** - by ingredients or recipe name
- ❤️ **Favorite Recipes** - stored in LocalStorage
- ➕ **Custom Recipes** - add and manage your own recipes
- 🌍 **Multilingual Support** - Slovak, English, Spanish
- 🌙 **Dark/Light Theme** - theme toggle
- 📱 **Responsive Design** - optimized for all devices
- ✨ **Shiny Effects** - luxurious button animations
- 🔄 **Automatic Translation** - recipes are translated into the selected language


## 🗂️  Project Structure

```
src/
├── components/
│   ├── AddRecipeForm.tsx      # Form to add a new recipe
│   ├── LanguageSelector.tsx   # App language selector
│   ├── RecipeCard.tsx         # Recipe card display
│   ├── RecipeModal.tsx        # Modal with recipe details
│   ├── SearchBar.tsx          # Search bar
│   └── ThemeToggle.tsx        # Theme switch (light/dark)
├── data/
│   └── recipes.ts             # Default recipes
├── hooks/
│   ├── useLanguage.ts         # Language management hook
│   ├── useLocalStorage.ts     # Hook for LocalStorage
│   ├── useTheme.ts            # Theme management hook
│   └── useTranslatedRecipes.ts # Recipe translation hook
├── types/
│   ├── language.ts            # Language types and translations
│   └── recipe.ts              # Recipe types
├── utils/
│   └── translator.ts          # Translation utilities
├── App.tsx                    # Main app component
├── index.css                  # Global styles and animations
└── main.tsx                   # App entry point

```

## 🎨 Components

### 🏠 App.tsx
The main application component including:
- State management for recipes and UI
- Filtering and searching
- Favorite recipes management
- Section navigation

### 🔍 SearchBar.tsx
Advanced search panel with:
- Toggle between name/ingredient search
- Responsive design
- Shiny effects on buttons

### 🃏 RecipeCard.tsx
Recipe card displaying:
- Recipe image
- Basic information (time, servings, calories)
- Favorite button
- Hover effects and animations

### 📝 RecipeModal.tsx
Detailed modal with:
- Complete recipe
- List of ingredients
- Preparation steps
- Responsive design

### ➕ AddRecipeForm.tsx
Form for adding a recipe with:
- Field validation
- Image upload
- Automatic saving

## 🎯 Hooks

### 🌍 useLanguage.ts
- Manage current language
- Load translations
- Save to LocalStorage

### 🌙 useTheme.ts
- Toggle between light/dark theme
- Detect system theme
- Persist settings

### 💾 useLocalStorage.ts
- Generic hook for LocalStorage
- Automatic serialization/deserialization
- Error handling

### 🔄 useTranslatedRecipes.ts
- Automatic recipe translation
- Optimization with useMemo
- Support for multiple languages

## 🛠️ Installation & Run

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```

## 📦 Dependencies

### Production
- **React 18.3.1** - UI library
- **React DOM 18.3.1** - DOM manipulation
- **Lucide React 0.344.0** - Icons

### Development
- **Vite 5.4.2** - Build tool
- **TypeScript 5.5.3** - Type safety
- **Tailwind CSS 3.4.1** - Styling
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## 🎨 Design System

### Colors
- **Primary**: Green-600 (#059669)
- **Light background**: Gradient amber-50 → orange-50 → yellow-50
- **Dark background**: Gradient gray-900 → gray-800 → gray-900

### Animations
- **Shiny effect** - light beam sliding across text
- **Hover effects** - scale transformations
- **Smooth transitions** - 200–300ms duration

### Responsiveness
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Grid system**: 1 → 2 → 3 columns

## 🌍 Localization

The application supports 3 languages:
- 🇸🇰 **Slovak** (default)
- 🇺🇸 **English**
- 🇪🇸 **Spanish**

Translations include:
- UI texts
- Recipe titles
- Ingredients
- Instructions

## 💾 Data Storage

### LocalStorage keys:
- `recipes` - default and favorite recipes
- `customRecipes` - custom added recipes
- `language` - selected language
- `theme` - light/dark theme

## 🚀 Performance

- **Lazy loading** of components
- **useMemo** for optimized filtering
- **Debounced search** for better UX
- **Optimized re-renders**

## 📱 Features

### Search
- By ingredients (default)
- By recipe name
- Case-insensitive
- Real-time filtering

### Recipe Management
- Mark as favorite
- Add custom recipe
- Categorization (All/Favorites/Mine)
- Auto-saving

### UI/UX
- Smooth scrolling
- Scroll-to-top button
- Loading states
- Error handling
- Responsive design

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js`:
- Dark mode support
- Custom animations
- Extended color palette

### TypeScript
Strict settings for type safety:
- Strict mode enabled
- No unused variables/parameters
- Module detection

### Vite
Optimizations for React:
- Fast refresh
- Optimized dependencies
- Build optimizations

---

**Autor**: Gabriell S. Kisely  
**Verzia**: 1.2.0  
**Licencia**: MIT