

import React from 'react';
import ContactArea from './ContactArea'; 
import Breadcrumb from '../common/Breadcrumb';
import HeaderFive from '@/layouts/headers/HeaderFive';
import BrandAreaHomeOne from '../homes/multi-page/home/BrandAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';

const Contact = () => {
  return (
    <>
      <HeaderOne  onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title='Contact Us' subtitle='Contact Us' />
            <ContactArea /> 
            <BrandAreaHomeOne bg_style={true} />
          </main>
          <FooterThree />
        </div>
      </div>
    </>
  );
};

export default Contact;