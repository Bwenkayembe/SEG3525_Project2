import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import EnglishMessages from '../languages/en.json';
import FrenchMessages from '../languages/fr.json';

export const LanguageContext = React.createContext();

const messages = {
  en: EnglishMessages,
  fr: FrenchMessages,
};

const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const switchLanguage = (language) => {
    setLocale(language);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
