
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Appointment from '@/components/appointment';


export const metadata = {
  title: "Interno Appointment - Architecture & Interior Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <Appointment />
    </Wrapper>
  );
};

export default index;