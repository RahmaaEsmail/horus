import FooterThree from '@/layouts/footers/FooterThree'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import ProjectCards from './ProjectCards';

export default function Projects() {
  return (
    <div>
        <HeaderOne onePageHomeThree={true} />
        <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image="/assets/img/breadcurmb/breadcurmb.jpg" title="Project" subtitle='Projects' />
            <ProjectCards />
            {/* <ProjectArea />
            <ContactAreaHomeOne /> */}
          </main>
          <FooterThree />
        </div>
      </div>
    </div>
  )
}
