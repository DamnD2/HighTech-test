import React from 'react';
import { useTranslation } from 'react-i18next';

import './Footer.scss';
import tehnoskyLogo from './tehnosky-logo.svg';
import belpochtaLogo from './belpochta-logo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer'>
      <div className='footer__info'>
        <p className='footer__info-item'>{t('footer__info_1')}</p>
        <img className='footer__info-item footer__info-logo' src={belpochtaLogo} alt='logo' />
        <p className='footer__info-item'>{t('footer__info_2')}</p>
      </div>
      <p className='footer__author'>
        <span className='footer__author-item'>{t('footer__info_3')}</span>
        <img className='footer__author-item footer__author-logo' src={tehnoskyLogo} alt='logo' />
        <span className='footer__author-item'>High-tech.by</span>
      </p>
    </div>
  );
};

export default Footer;
