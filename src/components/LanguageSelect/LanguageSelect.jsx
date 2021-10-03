import React from 'react';
import i18next from 'i18next';

import './LanguageSelect.scss';

const LanguageSelect = () => {
  const handleChange = ({ target }) => i18next.changeLanguage(target.value);

  return (
    <select name='Language' className='language-select' onChange={handleChange}>
      <option value='ru'>Русский</option>
      <option value='en'>English</option>
    </select>
  );
};

export default LanguageSelect;
