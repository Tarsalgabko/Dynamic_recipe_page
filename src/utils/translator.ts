// Prekladové slovníky pre ingrediencie a bežné výrazy
const ingredientTranslations = {
  // Základné ingrediencie
  'múka': { en: 'flour', es: 'harina' },
  'mlieko': { en: 'milk', es: 'leche' },
  'vajcia': { en: 'eggs', es: 'huevos' },
  'soľ': { en: 'salt', es: 'sal' },
  'cukor': { en: 'sugar', es: 'azúcar' },
  'maslo': { en: 'butter', es: 'mantequilla' },
  'jahody': { en: 'strawberries', es: 'fresas' },
  'spaghetti': { en: 'spaghetti', es: 'espaguetis' },
  'parmazán': { en: 'parmesan', es: 'parmesano' },
  'slanina': { en: 'bacon', es: 'tocino' },
  'cesnak': { en: 'garlic', es: 'ajo' },
  'olivový olej': { en: 'olive oil', es: 'aceite de oliva' },
  'rímsky šalát': { en: 'romaine lettuce', es: 'lechuga romana' },
  'krutóny': { en: 'croutons', es: 'picatostes' },
  'kurčacie mäso': { en: 'chicken meat', es: 'carne de pollo' },
  'cézar dresing': { en: 'caesar dressing', es: 'aderezo césar' },
  'tmavá čokoláda': { en: 'dark chocolate', es: 'chocolate negro' },
  'kakaový prášok': { en: 'cocoa powder', es: 'cacao en polvo' },
  'lososový filet': { en: 'salmon fillet', es: 'filete de salmón' },
  'citrón': { en: 'lemon', es: 'limón' },
  'tymián': { en: 'thyme', es: 'tomillo' },
  'korenie': { en: 'pepper', es: 'pimienta' },
  'pizzové cesto': { en: 'pizza dough', es: 'masa de pizza' },
  'paradajkový pretlak': { en: 'tomato sauce', es: 'salsa de tomate' },
  'mozzarella': { en: 'mozzarella', es: 'mozzarella' },
  'paprika': { en: 'bell pepper', es: 'pimiento' },
  'žampióny': { en: 'mushrooms', es: 'champiñones' },
  'olivy': { en: 'olives', es: 'aceitunas' },
  'bazalka': { en: 'basil', es: 'albahaca' }
};

const recipeNameTranslations = {
  'Domáce palacinky': { en: 'Homemade Pancakes', es: 'Panqueques Caseros' },
  'Spaghetti Carbonara': { en: 'Spaghetti Carbonara', es: 'Espaguetis Carbonara' },
  'Cézar šalát': { en: 'Caesar Salad', es: 'Ensalada César' },
  'Čokoládový brownie': { en: 'Chocolate Brownie', es: 'Brownie de Chocolate' },
  'Grilovaný losos': { en: 'Grilled Salmon', es: 'Salmón a la Parrilla' },
  'Vegetariánska pizza': { en: 'Vegetarian Pizza', es: 'Pizza Vegetariana' }
};

const instructionTranslations = {
  // Bežné výrazy v inštrukciách
  'Zmiešajte': { en: 'Mix', es: 'Mezcle' },
  'Pridajte': { en: 'Add', es: 'Añada' },
  'Nechajte': { en: 'Let', es: 'Deje' },
  'Pečte': { en: 'Bake', es: 'Hornee' },
  'Servírujte': { en: 'Serve', es: 'Sirva' },
  'Uvarte': { en: 'Cook', es: 'Cocine' },
  'Osmažte': { en: 'Fry', es: 'Fría' },
  'Vyšľahajte': { en: 'Whisk', es: 'Bata' },
  'Opečte': { en: 'Roast', es: 'Ase' },
  'Umyte': { en: 'Wash', es: 'Lave' },
  'Natrhajte': { en: 'Tear', es: 'Desgarre' },
  'Pripravte': { en: 'Prepare', es: 'Prepare' },
  'Polejte': { en: 'Pour', es: 'Vierta' },
  'Posypte': { en: 'Sprinkle', es: 'Espolvoree' },
  'Roztopte': { en: 'Melt', es: 'Derrita' },
  'Grilujte': { en: 'Grill', es: 'Ase a la parrilla' },
  'Marinujte': { en: 'Marinate', es: 'Marine' },
  'Rozohrejte': { en: 'Heat', es: 'Caliente' },
  'Rozvaľkajte': { en: 'Roll out', es: 'Extienda' },
  'Potrite': { en: 'Spread', es: 'Unte' },
  
  // Frázy
  'do hladka': { en: 'until smooth', es: 'hasta que esté suave' },
  'odstáť': { en: 'rest', es: 'reposar' },
  'na rozohriateej panvici': { en: 'in a heated pan', es: 'en una sartén caliente' },
  's maslom': { en: 'with butter', es: 'con mantequilla' },
  's medom': { en: 'with honey', es: 'con miel' },
  'podľa návodu na obale': { en: 'according to package instructions', es: 'según las instrucciones del paquete' },
  'do chrumkava': { en: 'until crispy', es: 'hasta que esté crujiente' },
  'na kúsky': { en: 'into pieces', es: 'en trozos' },
  'z chleba': { en: 'from bread', es: 'de pan' },
  's vajcami': { en: 'with eggs', es: 'con huevos' },
  'pri 180°C': { en: 'at 180°C', es: 'a 180°C' },
  'pri 220°C': { en: 'at 220°C', es: 'a 220°C' },
  'z každej strany': { en: 'on each side', es: 'por cada lado' },
  's čerstvými bylinkami': { en: 'with fresh herbs', es: 'con hierbas frescas' },
  'v rúre': { en: 'in the oven', es: 'en el horno' },
  's čerstvou bazalkou': { en: 'with fresh basil', es: 'con albahaca fresca' },
  'na stredný oheň': { en: 'to medium heat', es: 'a fuego medio' },
  'citrónovou šťavou': { en: 'lemon juice', es: 'jugo de limón' },
  'štipku soli': { en: 'a pinch of salt', es: 'una pizca de sal' },
  'minút': { en: 'minutes', es: 'minutos' }
};

export type Language = 'sk' | 'en' | 'es';

export function translateText(text: string, targetLanguage: Language): string {
  if (targetLanguage === 'sk') return text;
  
  let translatedText = text;
  
  // Preklad názvov receptov
  const recipeTranslation = recipeNameTranslations[text as keyof typeof recipeNameTranslations];
  if (recipeTranslation) {
    return recipeTranslation[targetLanguage];
  }
  
  // Preklad ingrediencií
  Object.entries(ingredientTranslations).forEach(([slovak, translations]) => {
    const regex = new RegExp(`\\b${slovak}\\b`, 'gi');
    translatedText = translatedText.replace(regex, translations[targetLanguage]);
  });
  
  // Preklad inštrukčných fráz
  Object.entries(instructionTranslations).forEach(([slovak, translations]) => {
    const regex = new RegExp(`\\b${slovak}\\b`, 'gi');
    translatedText = translatedText.replace(regex, translations[targetLanguage]);
  });
  
  return translatedText;
}

export function translateIngredients(ingredients: string[], targetLanguage: Language): string[] {
  return ingredients.map(ingredient => translateText(ingredient, targetLanguage));
}

export function translateInstructions(instructions: string[], targetLanguage: Language): string[] {
  return instructions.map(instruction => translateText(instruction, targetLanguage));
}

export function translateRecipeName(name: string, targetLanguage: Language): string {
  return translateText(name, targetLanguage);
}