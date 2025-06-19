import { useState } from 'react';
import { Language, translations } from '../types/language';
import { useLocalStorage } from './useLocalStorage';

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage<Language>('language', 'sk');
  
  const t = translations[language];
  
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return { language, t, changeLanguage };
}