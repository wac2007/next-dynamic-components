import React from 'react';

import styleBase from '../dynamic.module.scss';
import localStyle from './book.module.scss';

const book = () => {
  return (
    <div className={localStyle.book}>
      <h2 className={styleBase.title}>Book</h2>
      <p className={styleBase.item}>Editor: <label>Planet</label></p>
      <p className={styleBase.item}>EAN: <label>ADS234556</label></p>
      <p className={styleBase.price}>Price: <label>R$ 87</label></p>
    </div>
  );
};

export default book;
