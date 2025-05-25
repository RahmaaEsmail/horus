

import React from 'react';
import Cart from '@/components/cart';
import Wrapper from '@/layouts/Wrapper';

export const metadata = {
  title: "Interno Cart - Architecture & Interior Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  );
};

export default index;