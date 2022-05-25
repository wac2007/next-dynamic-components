import React from 'react';

import style from './static.module.scss';

import Car from './sub/car';
import Processor from './sub/processor';
import Book from './sub/book';

interface StaticCardProps {
  type: 'processor' | 'car' | 'book';
}

const StaticCardComponent = ({ type }: StaticCardProps) => {

  return (
    <div className={style.card}>
      {type === 'car' && (<Car />)}
      {type === 'processor' && (<Processor />)}
      {type === 'book' && (<Book />)}
    </div>
  );
};

export default StaticCardComponent;