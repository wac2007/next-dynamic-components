import React from 'react';

import styleBase from '../dynamic.module.scss';
import localStyle from './car.module.scss';

const car = () => {
  return (
    <div className={localStyle.car}>
      <h2 className={styleBase.title}>Car Product</h2>
      <p className={styleBase.item}>Manufacturer: <label>Tesla</label></p>
      <p className={styleBase.item}>Model: <label>Model S</label></p>
      <p className={styleBase.price}>Price: <label>R$ 12.000</label></p>
    </div>
  );
};

export default car;
