import "server-only";
import type { Locale } from "@/i18n.config";
import { i18n } from "@/i18n.config";

const dictionaries = {
  en: () =>
    import("@/lib/dictionaries/en.json").then((module) => module.default),
  ua: () =>
    import("@/lib/dictionaries/ua.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
