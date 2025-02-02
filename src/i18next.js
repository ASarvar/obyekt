import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const Languages = ['uz', 'ru']
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
        fallbackLng: 'uz',
        lng: 'uz',
        debug: false,
        whitelist: Languages,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
    });


export default i18n;