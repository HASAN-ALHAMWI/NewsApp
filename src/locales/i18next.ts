// Native import 
import { I18nManager } from 'react-native';

// Library import 
import i18next, { Module, ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Locale files import 
import arLang from './ar.json'
import enLang from './en.json'

// Config import
import * as constants from './../constants';

interface LanguageDetector extends Module {
  type: ModuleType;
  detect: (callback: (lang: string) => void) => void;
  init: () => void;
  cacheUserLanguage: () => void;
}

const languageDetector: LanguageDetector = {
  type: 'languageDetector',
  detect: (callback) => callback(constants.LANGUAGE.EN),
  init: () => { },
  cacheUserLanguage: () => { },
};

const languageResources = {
  en: { translation: enLang },
  ar: { translation: arLang },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: I18nManager.isRTL ? constants.LANGUAGE.AR : constants.LANGUAGE.EN,
    fallbackLng: constants.LANGUAGE.EN,
    debug: true,
    resources: languageResources,
  });

export default i18next;














