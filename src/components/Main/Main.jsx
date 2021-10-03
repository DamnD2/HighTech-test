import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';
import './Main.scss';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className='main'>
      <div className='main-wrapper'>
        <Link to='/administration'>
          <Button title={t('section_title_Administration')} type='administration' />
        </Link>
        <Link to='/management'>
          <Button title={t('section_title_Management')} type='management' />
        </Link>
        <Link to='/schedule'>
          <Button title={t('section_title_Schedule')} type='schedule' />
        </Link>
        <div />
        <Link to='/structure'>
          <Button title={t('section_title_Structure')} type='structure' />
        </Link>
      </div>
    </div>
  );
};

export default Main;
