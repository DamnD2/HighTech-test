import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import administration from './administration.svg';
import defaultIcon from './default-icon.svg';
import management from './management.svg';
import schedule from './schedule.svg';
import structure from './structure.svg';

const svgIconTypeMap = {
  administration,
  defaultIcon,
  management,
  schedule,
  structure,
};

const Button = ({ title, type }) => (
  <div className='button'>
    <h5 className='button__title'>{title}</h5>
    <img className='button__image' src={svgIconTypeMap[type]} alt='svg' />
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
