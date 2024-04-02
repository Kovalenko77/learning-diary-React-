import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages } from './types/constants';

const Nav = () => {
  const { t, i18n } = useTranslation();

  const handleLangSwitch = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">{t('home')}</Link>
        </li>
        <li>
          <Link to="/tracker">{t('tracker')}</Link>
        </li>
        <li>
          <Link to="/comments">{t('comments')}</Link>
        </li>
        <li>
          <button onClick={() => handleLangSwitch(Languages.en)}>EN</button>
        </li>
        <li>
          <button onClick={() => handleLangSwitch(Languages.ru)}>RU</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
