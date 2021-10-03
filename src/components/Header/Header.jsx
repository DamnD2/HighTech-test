import React from 'react';
import { useTranslation } from 'react-i18next';

import './Header.scss';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className='header'>
      <div className='header__wrapper'>
        <div className='header__time'>12:09</div>
        <div className='header__weather'>16°C</div>
        <LanguageSelect />
      </div>
      <div className='header__date'>{t('header_date')}</div>
    </div>
  );
};

export default Header;
