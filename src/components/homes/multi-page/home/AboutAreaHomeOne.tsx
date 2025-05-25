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
  title: `Your Trusted Construction Partner in London`,
  description: `Horus Construction Ltd has more than 30 years experience in domestic, commercial and insurance defect works within London and the surrounding areas. We work for both clients directly and architects on behalf of clients, maintaining strong relationships with several architects in London through successful project completions.`,
  features: [
    `Specialized in renovations and extensions`,
    `Expert in loft conversions`,
    `Accredited EWI installer for external insulation`,
    `Professional silicone render services`,
    `Free no-obligation project quotations`,
    `Architectural and professional referrals available`
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
            To deliver exceptional construction and renovation services with unwavering commitment to quality, safety, and customer satisfaction. We strive to be the most trusted construction partner in London by combining our 30+ years of experience with innovative solutions and professional expertise.
          </p>
        </div>
        <div className="content-card">
          <h3>Vision</h3>
          <p>
            To be London's leading construction company, known for excellence in renovations, extensions, and specialized services. We aim to continuously expand our network of professional partnerships while maintaining the highest standards of workmanship and customer service, helping clients transform their spaces into exceptional environments.
          </p>
        </div>
      </section>

    </>
  );
};

export default AboutAreaHomeOne;