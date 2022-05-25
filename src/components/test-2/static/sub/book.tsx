import React from 'react';

import style from '../static.module.scss';

const book = () => {
  return (
    <div className={style.book}>
      <h2 className={style.title}>Book</h2>
      <p className={style.editor}>Editor: <label>Planet</label></p>
      <p className={style.ean}>EAN: <label>ADS234556</label></p>
      <p className={style.price}>Price: <label>R$ 87</label></p>
    </div>
  );
};

export default book;
