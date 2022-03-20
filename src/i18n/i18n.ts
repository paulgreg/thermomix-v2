import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import fr from "./fr.json"
import en from "./en.json"

export enum Language {
  FR = "fr",
  EN = "en",
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en, fr },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
