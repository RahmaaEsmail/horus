

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HomeOneSinglePage from '@/components/homes/one-page/home-1-one-page';


export const metadata = {
  title: "Interno Home One One Page - Architecture & Interior Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <HomeOneSinglePage />
    </Wrapper>
  );
};

export default index;