

import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHomeOne from "../../multi-page/home/HeroAreaHomeOne";
import ServiceAreaHomeOne from "../../multi-page/home/ServiceAreaHomeOne";
import AboutAreaHomeOne from "../../multi-page/home/AboutAreaHomeOne";
import FunFactAreaHomeOne from "../../multi-page/home/FunFactAreaHomeOne";
import TestimonialAreaHomeOne from "../../multi-page/home/TestimonialAreaHomeOne";
import ProjectAreaHomeOne from "../../multi-page/home/ProjectAreaHomeOne";
import ProductAreaHomeOne from "../../multi-page/home/ProductAreaHomeOne";
import BlogAreaHomeOne from "../../multi-page/home/BlogAreaHomeOne";
import BrandAreaHomeOne from "../../multi-page/home/BrandAreaHomeOne";
import ContactAreaHomeOne from "../../multi-page/home/ContactAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeOneSinglePage = () => {
  return (
    <>
      <HeaderOne  onePageHomeOne={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroAreaHomeOne />
            <ServiceAreaHomeOne />
            <AboutAreaHomeOne style_2={false} />
            <FunFactAreaHomeOne style_2={false} />
            <TestimonialAreaHomeOne />
            <ProjectAreaHomeOne />
            <ProductAreaHomeOne />
            <BlogAreaHomeOne />
            <BrandAreaHomeOne />
            <ContactAreaHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default HomeOneSinglePage;