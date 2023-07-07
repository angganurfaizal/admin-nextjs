const path = require("path");
const supportedLngs = [
  "da",
  "de",
  "el",
  "en",
  "es",
  "fr",
  "hu",
  "it",
  "ja",
  "pl",
  "pt",
  "ru",
  "sv",
  "tr",
  "zh",
];
import themeConfig from "./src/theme.config";
export const ni18nConfig = {
  fallbackLng: [themeConfig.locale || "en"],
  supportedLngs,
  ns: ["translation"],
  react: { useSuspense: false },
  backend: {
    loadPath: path.resolve(`/locales/{{lng}}.json`),
  },
};
