import { useLanguage } from '@/src/contexts/LanguageContext'

export function useTranslation() {
  const { language, setLanguage, t } = useLanguage()

  // Função para traduzir com fallback
  const translate = (key: string, fallback?: string): string => {
    const translation = t(key)
    return translation === key ? (fallback || key) : translation
  }

  // Função para traduzir com interpolação (para futuro)
  const translateWithParams = (key: string, params: Record<string, string | number>): string => {
    let translation = t(key)

    Object.entries(params).forEach(([param, value]) => {
      translation = translation.replace(`{{${param}}}`, String(value))
    })

    return translation
  }

  // Função para detectar se está em português
  const isPortuguese = () => language === 'pt'

  // Função para detectar se está em inglês
  const isEnglish = () => language === 'en'

  // Função para alternar entre idiomas
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  return {
    t: translate,
    translateWithParams,
    language,
    setLanguage,
    isPortuguese,
    isEnglish,
    toggleLanguage
  }
}
