
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFive from '@/layouts/headers/HeaderFive';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import ProductArea from './ProductArea';

const Shop = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image="/assets/img/breadcurmb/breadcurmb.jpg" title='Shop' subtitle='Shop' />
            <ProductArea />
            <ContactAreaHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default Shop;