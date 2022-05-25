import React from 'react';

import style from './static.module.scss';

interface StaticButtonProps {
  children: any;
  state: 'primary' | 'secondary' | 'tertiary';
}

const StaticButton = ({ children, state }: StaticButtonProps) => {
  return (
    <button className={style[state]}>
      {children}
    </button>
  );
};

export default StaticButton;