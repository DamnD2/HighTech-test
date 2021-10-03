import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';
import './Section.scss';
import backIcon from './back.svg';

const Section = ({ title }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => history.goBack();

  return (
    <div className='section'>
      <h2 className='section__title'>{title}</h2>
      <div onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex={0}>
        <img className='section-page__back' src={backIcon} alt='back-button' />
      </div>
      <div className='section-wrapper'>
        <Link to={`${match.url}/page1`}>
          <Button title={`${t('section_page_title')} 1`} type='defaultIcon' />
        </Link>
        <Link to={`${match.url}/page2`}>
          <Button title={`${t('section_page_title')} 2`} type='defaultIcon' />
        </Link>
        <Link to={`${match.url}/page3`}>
          <Button title={`${t('section_page_title')} 3`} type='defaultIcon' />
        </Link>
        <div />
        <Link to={`${match.url}/page4`}>
          <Button title={`${t('section_page_title')} 4`} type='defaultIcon' />
        </Link>
      </div>
    </div>
  );
};

Section.propTypes = { title: PropTypes.string.isRequired };

export default Section;
