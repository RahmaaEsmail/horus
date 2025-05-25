

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import BlogDetails from '@/components/blog-details';


export const metadata = {
  title: "Interno Blog Details - Architecture & Interior Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;