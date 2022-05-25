import React, { useEffect, useState } from 'react';

interface DynamicButtonProps {
  children: any;
  state: 'primary' | 'secondary' | 'tertiary';
}

const DynamicButton = ({ children, state }: DynamicButtonProps) => {
  const [style, setStyle] = useState({});


  useEffect(() => {
    const handleStyle = async () => {
      switch (state) {
        case 'primary':
          setStyle((await import('./primary.module.scss')).default);
          break;
        case 'secondary':
          setStyle((await import('./secondary.module.scss')).default);
          break;
        case 'tertiary':
          setStyle((await import('./tertiary.module.scss')).default);
          break;
        default:
          break;
      }
    };
    handleStyle();
  }, [state]);

  return (
    <button className={style[state]}>
      {children}
    </button>
  );
};

export default DynamicButton;