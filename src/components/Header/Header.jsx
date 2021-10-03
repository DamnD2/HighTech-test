import React from 'react';
import './Header.scss';

const Header = () => (
  <div className='header'>
    <div className='header__wrapper'>
      <div className='header__time'>12:09</div>
      <div className='header__weather'>16°C</div>
    </div>
    <div className='header__date'>09 сентября 2020</div>
  </div>
);

export default Header;
