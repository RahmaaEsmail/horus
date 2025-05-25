

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import BlogAreaHomeThree from '../../multi-page/home-3/BlogAreaHomeThree';
import HeroAreaHomeThree from '../../multi-page/home-3/HeroAreaHomeThree';
import TeamAreaHomeThree from '../../multi-page/home-3/TeamAreaHomeThree';
import AboutAreaHomeThree from '../../multi-page/home-3/AboutAreaHomeThree';
import FunFactAreaHomeThree from '../../multi-page/home-3/FunFactAreaHomeThree';
import FeatureAreaHomeThree from '../../multi-page/home-3/FeatureAreaHomeThree';
import GalleryAreaHomeThree from '../../multi-page/home-3/GalleryAreaHomeThree';
import ServiceAreaHomeThree from '../../multi-page/home-3/ServiceAreaHomeThree';
import ProductAreaHomeThree from '../../multi-page/home-3/ProductAreaHomeThree';
import NewsletterAreaHomeThree from '../../multi-page/home-3/NewsletterAreaHomeThree';
import ExpartFeatureAreaHomeThree from '../../multi-page/home-3/ExpartFeatureAreaHomeThree';
import ProjectAreaHomeOne from '../../multi-page/home/ProjectAreaHomeOne';
import TestimonialAreaHomeOne from '../../multi-page/home/TestimonialAreaHomeOne';

const HomeThreeOnePage = () => {
  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroAreaHomeThree />
            <div className='page_container'>
            <ServiceAreaHomeThree />
            <AboutAreaHomeThree />
            </div>
            <FunFactAreaHomeThree />
            <FeatureAreaHomeThree />
            {/* <GalleryAreaHomeThree /> */}
            <div className='page_container'>
            <ProjectAreaHomeOne />
            <TestimonialAreaHomeOne/>
            </div>
            {/* <TeamAreaHomeThree /> */}
            {/* <ExpartFeatureAreaHomeThree /> */}
            {/* <ProductAreaHomeThree /> */}
            {/* <BlogAreaHomeThree /> */}
           
            <NewsletterAreaHomeThree />
          </main>
          <FooterThree />
        </div>
      </div>
    </>
  );
};

export default HomeThreeOnePage;