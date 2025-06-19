import React from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <label>{t('language')}:</label>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
      {/* ...existing code... */}
    </div>
  );
}

export default App;