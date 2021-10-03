import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './SectionPage.scss';
import backIcon from '../back.svg';
import homeIcon from '../home.svg';

const SectionPage = ({ title }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => history.goBack();

  return (
    <div className='section-page'>
      <h2 className='section-page__title'>{title}</h2>
      <div onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex={0}>
        <img className='section-page__back' src={backIcon} alt='back-button' />
      </div>
      <Link to='/'>
        <img className='section-page__home' src={homeIcon} alt='back-button' />
      </Link>

      <p className='section-page__text'>{t('section_page_text')}</p>
    </div>
  );
};

SectionPage.propTypes = { title: PropTypes.string.isRequired };

export default SectionPage;
