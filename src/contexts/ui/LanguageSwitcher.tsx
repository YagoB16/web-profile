"use client";

import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage, type Language } from "@/src/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: "pt" as Language,
      name: "Português",
      flag: "🇧🇷",
      // Cores do Brasil: Verde, Amarelo, Azul
      colors: {
        primary: "#009C3B", // Verde da bandeira
        secondary: "#FFDF00", // Amarelo da bandeira
        accent: "#002776", // Azul da bandeira
        hover: "rgba(0, 156, 59, 0.1)",
        gradient:
          "linear-gradient(135deg, rgba(0, 156, 59, 0.1), rgba(255, 223, 0, 0.1))",
      },
    },
    {
      code: "en" as Language,
      name: "English",
      flag: "🇺🇸",
      // Cores dos EUA: Azul, Vermelho, Branco
      colors: {
        primary: "#B22234", // Vermelho da bandeira
        secondary: "#3C3B6E", // Azul da bandeira
        accent: "#FFFFFF", // Branco da bandeira
        hover: "rgba(178, 34, 52, 0.1)",
        gradient:
          "linear-gradient(135deg, rgba(60, 59, 110, 0.1), rgba(178, 34, 52, 0.1))",
      },
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:bg-[var(--green-tint)] hover:text-[var(--green)] text-[var(--lightest-slate)]"
        aria-label="Alterar idioma"
        style={{
          background:
            isOpen && currentLanguage
              ? currentLanguage.colors.hover
              : "transparent",
        }}
      >
        <Globe size={18} />
        <span className="hidden sm:block">{currentLanguage?.flag}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-[var(--navy)] border border-[var(--light-navy)] rounded-md shadow-lg min-w-[150px] z-50">
          {languages.map((lang) => {
            const isActive = language === lang.code;

            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="min-w-[150px] flex items-center gap-3 px-4 py-3 text-left transition-all relative group"
                style={{
                  background: isActive ? lang.colors.gradient : "transparent",
                  color: isActive
                    ? lang.colors.primary
                    : "var(--lightest-slate)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = lang.colors.gradient;
                  e.currentTarget.style.color = lang.colors.primary;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--lightest-slate)";
                  }
                }}
              >
                {/* Borda sutil com cor da bandeira */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(to bottom, ${lang.colors.primary}, ${lang.colors.secondary})`
                      : "transparent",
                  }}
                />

                <span className="text-lg transition-all duration-300 group-hover:scale-110">
                  {lang.flag}
                </span>

                <span
                  className="text-sm font-medium transition-all duration-300"
                  style={{
                    fontWeight: isActive ? "600" : "500",
                  }}
                >
                  {lang.name}
                </span>

                {/* Indicador ativo */}
                {isActive && (
                  <div
                    className="ml-auto w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: lang.colors.primary,
                      boxShadow: `0 0 10px ${lang.colors.primary}40`,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
