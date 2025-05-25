// "use client";

import ProjectDetails from '@/components/project-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Interno Project Details - Architecture & Interior Next js Template",
};


type Props = {
  params: {
    id: string;
  };
};

const index = ({params} : Props) => {
  return (
    <Wrapper>
      <ProjectDetails project_id={params?.id}/>
    </Wrapper>
  );
};

export default index;