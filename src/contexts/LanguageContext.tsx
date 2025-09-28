"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations } from "./translation";
export type Language = "pt" | "en";

// Interface do contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Criação do contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Hook personalizado para usar o contexto
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}

// Provider do contexto de linguagem
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt");

  // Detectar linguagem do navegador na primeira carga
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    const browserLanguage = navigator.language.startsWith("pt") ? "pt" : "en";

    setLanguage(savedLanguage || browserLanguage);
  }, []);

  // Salvar linguagem no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Função de tradução
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
