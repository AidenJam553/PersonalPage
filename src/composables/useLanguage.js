import { ref, provide, inject } from 'vue'

const languageKey = Symbol('language')

export function provideLanguage() {
  const currentLanguage = ref('zh')
  
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', lang)
    }
  }
  
  // 从 localStorage 读取保存的语言
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      currentLanguage.value = savedLanguage
    }
  }
  
  provide(languageKey, {
    currentLanguage,
    setLanguage
  })
  
  return {
    currentLanguage,
    setLanguage
  }
}

export function useLanguage() {
  const languageContext = inject(languageKey)
  
  if (!languageContext) {
    throw new Error('useLanguage must be used within a component that calls provideLanguage')
  }
  
  return languageContext
}

