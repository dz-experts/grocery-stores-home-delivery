import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ar: {
        translation: {
          addNewStore: "إضافة متجر جديد"
        }
      },
      fr: {
        translation: {
          addNewStore: "Ajouter un nouveau magasin"
        }
      },
      en: {
        translation: {
          addNewStore: "Add new store"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export { i18n };
