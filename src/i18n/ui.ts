import en from './en.json';
import fr from './fr.json';
import nl from './nl.json';

export const languages = {
  en: 'English',
  fr: 'Français',
  nl: 'Nederlands',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

const dictionaries: Record<Lang, Record<string, string>> = { en, fr, nl };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in dictionaries) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return dictionaries[lang]?.[key] ?? dictionaries[defaultLang][key] ?? key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(en|fr|nl)/, '') || '/';
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}
