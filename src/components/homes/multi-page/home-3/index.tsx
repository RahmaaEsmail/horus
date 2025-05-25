

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import FunFactAreaHomeThree from './FunFactAreaHomeThree';
import FeatureAreaHomeThree from './FeatureAreaHomeThree';
import GalleryAreaHomeThree from './GalleryAreaHomeThree';
import TeamAreaHomeThree from './TeamAreaHomeThree';
import ExpartFeatureAreaHomeThree from './ExpartFeatureAreaHomeThree';
import ProductAreaHomeThree from './ProductAreaHomeThree';
import BlogAreaHomeThree from './BlogAreaHomeThree';
import NewsletterAreaHomeThree from './NewsletterAreaHomeThree';
import FooterThree from '@/layouts/footers/FooterThree';
import ProjectAreaHomeOne from '../home/ProjectAreaHomeOne';

const HomeThree = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroAreaHomeThree />
            <ServiceAreaHomeThree />
            <AboutAreaHomeThree />
            <FunFactAreaHomeThree />
            <FeatureAreaHomeThree />
            <GalleryAreaHomeThree />
            <TeamAreaHomeThree />
            {/* <ProjectAreaHomeOne /> */}
            <ExpartFeatureAreaHomeThree />
            <ProductAreaHomeThree />
            <BlogAreaHomeThree />
            <NewsletterAreaHomeThree />
          </main>
          <FooterThree />
        </div>
      </div>

    </>
  );
};

export default HomeThree;

