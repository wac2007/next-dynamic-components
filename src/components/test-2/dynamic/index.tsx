import React from 'react';
import dynamic from 'next/dynamic';

import style from './dynamic.module.scss';

interface StaticCardProps {
  type: 'processor' | 'car' | 'book';
}

const DynamicCar = dynamic(() => import('./sub/car'));
const DynamicProcessor = dynamic(() => import('./sub/processor'));
const DynamicBook = dynamic(() => import('./sub/book'));

const StaticCardComponent = ({ type }: StaticCardProps) => {

  return (
    <div className={style.card}>
      {type === 'car' && (<DynamicCar />)}
      {type === 'processor' && (<DynamicProcessor />)}
      {type === 'book' && (<DynamicBook />)}
    </div>
  );
};

export default StaticCardComponent;
