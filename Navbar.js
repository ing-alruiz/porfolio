import React from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      {/* ...existing code... */}
      <div style={{ marginLeft: 'auto' }}>
        <label>{t('language')}:</label>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('es')}>ES</button>
      </div>
      {/* ...existing code... */}
    </nav>
  );
}

export default Navbar;