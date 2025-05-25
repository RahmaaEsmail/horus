import HeaderFive from '@/layouts/headers/HeaderFive';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ProjectArea from './ProjectArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import product_data from '@/data/product_data';
import project_data from '@/data/project_data';

interface ProjectDetailsProps {
  project_id: any;
}


const ProjectDetails = ({project_id}: ProjectDetailsProps) => {
  const title  = project_data?.find(item => item?.id == project_id)?.title;
  console.log(title);

  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title={title || ""} subtitle={title || ""} />
            <ProjectArea project_id={project_id}/>
            <ContactAreaHomeOne />
          </main>
          <FooterThree />
        </div>
      </div>

    </>
  );
};

export default ProjectDetails;