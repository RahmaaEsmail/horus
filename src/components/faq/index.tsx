

import HeaderFive from '@/layouts/headers/HeaderFive';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FaqArea from './FaqArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Faq = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image="/assets/img/breadcurmb/breadcurmb.jpg" title='faq' subtitle='faq' />
            <FaqArea />
            <ContactAreaHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default Faq;