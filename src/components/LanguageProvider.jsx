import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import EnglishMessages from './Languages/en.json';
import FrenchMessages from './Languages/fr.json';
import './LanguageProvider.css'; // Import the new CSS file

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
