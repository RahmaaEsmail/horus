

import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Interno Faq  - Architecture & Interior Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;