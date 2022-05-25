import React from 'react';

import styleBase from '../dynamic.module.scss';
import localStyle from './processor.module.scss';

const car = () => {
  return (
    <div className={localStyle.processor}>
      <h2 className={styleBase.title}>Processor</h2>
      <p className={styleBase.item}>Manufacturer: <label>Intel</label></p>
      <p className={styleBase.item}>Architecture: <label>x64</label></p>
      <p className={`${styleBase.item} ${localStyle.generation}`}>Generation: <label>10th</label></p>
      <p className={styleBase.price}>Price: <label>R$ 2.500</label></p>
    </div>
  );
};

export default car;
