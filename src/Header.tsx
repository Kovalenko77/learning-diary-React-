import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <h1>{t('learning_diary')}</h1>
    </header>
  );
};

export default Header;
