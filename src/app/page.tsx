
import HomeOne from '@/components/homes/multi-page/home';
import HomeThree from '@/components/homes/multi-page/home-3';
import HomeThreeOnePage from '@/components/homes/one-page/home-3-one-page';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Interno - Architecture & Interior Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HomeThreeOnePage />
    </Wrapper>
  );
};

export default index;