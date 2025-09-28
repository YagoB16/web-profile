'use client'

import React, { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage, type Language } from '@/src/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:bg-[var(--green-tint)] hover:text-[var(--green)] text-[var(--lightest-slate)]"
        aria-label="Alterar idioma"
      >
        <Globe size={18} />
        <span className="hidden sm:block">{currentLanguage?.flag}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-[var(--navy)] border border-[var(--light-navy)] rounded-md shadow-lg min-w-[150px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all hover:bg-[var(--green-tint)] hover:text-[var(--green)] ${
                language === lang.code
                  ? 'text-[var(--green)] bg-[var(--green-tint)]'
                  : 'text-[var(--lightest-slate)]'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
