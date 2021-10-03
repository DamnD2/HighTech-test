import React from 'react';
import './Footer.scss';
import tehnoskyLogo from './tehnosky-logo.svg';
import belpochtaLogo from './belpochta-logo.svg';

const Footer = () => (
  <div className='footer'>
    <div className='footer__info'>
      <p className='footer__info-item'>Национальный оператор почтовой связи Республики Беларусь</p>
      <img className='footer__info-item footer__info-logo' src={belpochtaLogo} alt='logo' />
      <p className='footer__info-item'>Покупайте белорусские товары на shop.belpost.by</p>
    </div>
    <p className='footer__author'>
      <span className='footer__author-item'>Разработано компанией</span>
      <img className='footer__author-item footer__author-logo' src={tehnoskyLogo} alt='logo' />
      <span className='footer__author-item'>High-tech.by</span>
    </p>
  </div>
);

export default Footer;
