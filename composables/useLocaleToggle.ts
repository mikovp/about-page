export const useLocaleToggle = () => {
  const { locale } = useI18n()

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'ru' : 'en'
  }

  const currentLocale = computed(() => locale.value)
  const isEnglish = computed(() => locale.value === 'en')

  return {
    locale: currentLocale,
    isEnglish,
    toggleLocale
  }
}
