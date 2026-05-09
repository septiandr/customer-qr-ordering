import * as Localization from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import zh from "./locales/zh.json";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
};

// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).init({
  resources,
  lng: Localization.getLocales()[0].languageCode ?? "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
