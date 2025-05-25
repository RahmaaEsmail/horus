
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFive from '@/layouts/headers/HeaderFive';
import AboutAreaHomeOne from '../homes/multi-page/home/AboutAreaHomeOne';
import FunFactAreaHomeOne from '../homes/multi-page/home/FunFactAreaHomeOne';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/multi-page/home/TestimonialAreaHomeOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import OurTeam from '../OurTeam/OurTeam';
import PricingArea from '../service/PricingArea';
import AboutCertifications from './aboutCertifications';

const AboutUs = () => {
  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="About Us" subtitle="About Us" />
            <AboutAreaHomeOne style_2={true} />
            <OurTeam/>
            <FunFactAreaHomeOne style_2={true} />
            <PricingArea />
            <AboutCertifications />
            {/* <TestimonialAreaHomeOne /> */}
            {/* <ContactAreaHomeOne /> */}
          </main>
          <FooterThree />
        </div>
      </div>

    </>
  );
};

export default AboutUs;