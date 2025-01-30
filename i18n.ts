import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en/common.json";
import ko from "./public/locales/ko/common.json";

// 언어 리소스 설정
const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

// i18next 설정
i18n
  .use(initReactI18next) // React에서 i18next 사용 가능하도록 설정
  .init({
    resources,
    lng: "en", // 기본 언어 설정
    fallbackLng: "en", // 언어를 찾지 못할 경우 사용할 기본 언어
    interpolation: {
      escapeValue: false, // React는 XSS 보호 기능을 제공하므로 false로 설정
    },
  });

export default i18n;
