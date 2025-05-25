
'use client'
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import about_img_1 from "@/assets/img/about/thumb-1.jpg";
import about_img_2 from "@/assets/img/about/thumb-2.jpg";

import './about.scss';

interface StyleType {
  style_2: boolean
}


interface DataType {
  subtitle: string;
  title: string;
  description: string;
  features: string[];
}

const about_content: DataType = {
  subtitle: `About Us`,
  title: `Elevate Your Space design Elevate Your Life`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc Duis egestas ac ante sed tincidunt. Maecenas in nisi et arcu vulputat isn aliquam Nullam ut metus purus Suspendisse`,
  features: [
    `It is a Long Established fact a reader designer`,
    `Many Desktop publishing packages our`,
    `Something by accident sometimes happy`,
  ]
}

const { subtitle, title, description, features } = about_content

const AboutAreaHomeOne = ({ style_2 }: StyleType) => {


  return (
    <>
      <div id="about-one-page" className={`tp-about-area tp-about-bg p-relative grey-bg ${style_2 ? 'mt-120 pb-50' : 'pb-50'}`}>
        <div className="tp-about-big-text d-none d-xl-block">
          <h6>{subtitle}</h6>
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
              <div className="tp-about-thumb-box z-index">
                <div className="tp-hover-distort-wrapper">
                  <div className="canvas"></div>
                  <div className="tp-hover-distort" data-displacementimage="assets/img/webgl/10.jpg">
                    <Image className="tp-hover-distort-img front" src={about_img_1} alt="image-here" />
                    <Image className="tp-hover-distort-img back" src={about_img_1} alt="image-here" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
              <div className="tp-about-content">
                <div className="tp-about-title-box mb-20">
                  <span className="tp-section-subtitle tp-split-text tp-split-in-right">{subtitle}</span>
                  <h3 className="tp-section-title tp-split-text tp-split-in-right">{title}</h3>
                </div>
                <div className="tp-about-text mb-25">
                  <p>{description}</p>
                </div>
                <div className="tp-about-list mb-35">
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}><i className="fa-light fa-check"></i>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link className="tp-btn-black" href="/about-us">
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-3 offset-lg-3 col-xl-6 col-lg-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="tp-about-thumb-boxs z-index text-center mt-80">
                <div className="tp-hover-distort-wrapper">
                  <div className="canvas"></div>
                  <div className="tp-hover-distort" data-displacementimage="assets/img/webgl/10.jpg">
                    <Image className="tp-hover-distort-img front" src={about_img_2} alt="image-here" />
                    <Image className="tp-hover-distort-img back" src={about_img_2} alt="image-here" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="about-content">
  <div className="content-card">
    <h3>Mission</h3>
    <p>
      We are dedicated to redefining excellence in real estate by developing projects that prioritize quality and sustainability, establishing new industry standards.
    </p>
  </div>
  <div className="content-card">
    <h3>Vision</h3>
    <p>
      Our goal is to provide clients with exceptional guidance in finding and choosing their ideal home. With a strong focus on customer care and transparency, our experienced advisors stay on top of market trends to deliver accurate, up-to-date insights.
    </p>
  </div>
</section>

    </>
  );
};

export default AboutAreaHomeOne;