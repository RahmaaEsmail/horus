import HeaderFive from '@/layouts/headers/HeaderFive';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import SeerviceArea from './SeerviceArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PricingArea from './PricingArea';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import ServiceFaq from './ServiceFaq';
import ServiceIntro from './ServiceIntro';

const Service = () => {
  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image="https://res.cloudinary.com/dbz6ebekj/image/upload/v1748067464/Highschool_9_Lib-persp-min_sxyhsv.jpg" title="Service" subtitle="Service" />
           <div className='services_container'>
           <ServiceIntro />
            <SeerviceArea />
            <ServiceFaq />
           </div>
            {/* <PricingArea /> */}
            <ContactAreaHomeOne />
          </main>
          <FooterThree />
        </div>
      </div>

    </>
  );
};

export default Service;