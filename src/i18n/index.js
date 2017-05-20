export { reducer } from './reducer';
export { sagas } from './sagas';
export * as actions from './actions';

export const languages = [
  { language: 'en', label: 'English '},
  { language: 'de', label: 'Deutsch '},
];

const defaultLanguage = 'en';

export function selectDefaultLanguage() {
  const storageLanguage = localStorage.getItem('language');
  if (storageLanguage) return storageLanguage;

  const browserLanguages = window.navigator.languages;

  for (const i in browserLanguages) {
    const browserLanguage = browserLanguages[i];
    for (const j in languages) {
      if (languages[j].language === browserLanguage) {
        return browserLanguage;
      }
    }
  }

  return defaultLanguage;
}
