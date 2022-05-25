import React from 'react';

import style from '../static.module.scss';

const car = () => {
  return (
    <div className={style.processor}>
      <h2 className={style.title}>Processor</h2>
      <p className={style.item}>Manufacturer: <label>Intel</label></p>
      <p className={style.item}>Architecture: <label>x64</label></p>
      <p className={`${style.item} ${style.generation}`}>Generation: <label>10th</label></p>
      <p className={style.price}>Price: <label>R$ 2.500</label></p>
    </div>
  );
};

export default car;
