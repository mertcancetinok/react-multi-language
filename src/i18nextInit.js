import en from './locales/en/translation.js'
import tr from './locales/tr/translation.js'
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    'en-US':en,
    'tr-TR':tr
};

i18n.use(initReactI18next).init({
    resources,
    lng:'tr-TR',
    keySeparator:false,
    interpolation: {
        escapeValue:false
    }
});

export default i18n;