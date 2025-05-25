

import BlogClassic from '@/components/blog-classic';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Interno Blog Classic - Architecture & Interior Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <BlogClassic />
    </Wrapper>
  );
};

export default index;