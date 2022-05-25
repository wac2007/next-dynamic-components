import React from 'react';

import style from '../static.module.scss';

const car = () => {
  return (
    <div className={style.car}>
      <h2 className={style.title}>Car Product</h2>
      <p className={style.manufacturer}>Manufacturer: <label>Tesla</label></p>
      <p className={style.model}>Model: <label>Model S</label></p>
      <p className={style.price}>Price: <label>R$ 12.000</label></p>
    </div>
  );
};

export default car;
