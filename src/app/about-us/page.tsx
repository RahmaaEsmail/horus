import AboutUs from '@/components/about-us';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Interno About Us - Architecture & Interior Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <AboutUs />
    </Wrapper> 
  );
};

export default index;