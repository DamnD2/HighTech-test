import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Main.scss';

const Main = () => (
  <>
    <div className='main'>
      <div className='main-wrapper'>
        <Link to='/administration'>
          <Button title='Административные процедуры' type='administration' />
        </Link>
        <Link to='/management'>
          <Button title='Руководство' type='management' />
        </Link>
        <Link to='/schedule'>
          <Button title='График приёма' type='schedule' />
        </Link>
        <div />
        <Link to='/structure'>
          <Button title='Структура' type='structure' />
        </Link>
      </div>
    </div>
  </>
);

export default Main;
