import React from 'react';

import StaticButton from '../src/components/test-1/static';
const test = () => {
  return (
    <div>
      Hello world <StaticButton state="secondary">Primary</StaticButton>
    </div>
  );
};

export default test;