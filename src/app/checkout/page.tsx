
import Checkout from '@/components/checkout';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Interno Checkout - Architecture & Interior Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Checkout />
    </Wrapper>
  );
};

export default index;