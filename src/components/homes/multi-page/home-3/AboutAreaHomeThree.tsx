import Link from "next/link";
import React from "react";

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

const AboutAreaHomeThree = () => {
  return (
    <>
      <div id="about-one-page" className="tp-about-3-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-about-3-title-box mb-60">
                <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                  {subtitle}
                </span>
                <h3 className="tp-section-title tp-split-text tp-split-in-right">
                  {title}
                </h3>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="tp-about-3-left-box p-relative">
                <div className="tp-about-3-thumb">
                  <div className="tp-hover-distort-wrapper">
                    <div className="canvas"></div>
                    <div
                      className="tp-hover-distort"
                      data-displacementimage="assets/img/webgl/10.jpg"
                    >
                      <img
                        className="tp-hover-distort-img front"
                        src="assets/img/about/thumb-3-1.jpg"
                        alt="image-here"
                      />
                      <img
                        className="tp-hover-distort-img back"
                        src="assets/img/about/thumb-3-1.jpg"
                        alt="image-here"
                      />
                    </div>
                  </div>
                </div>
                <div className="tp-about-3-big-text d-none d-xl-block">
                  <h6>{subtitle}</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="tp-about-3-right">
                <div className="tp-about-3-content pb-60">
                  <p className="mb-45">
                    {description}
                  </p>
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
                <div className="row">
                  <div className="col-xl-9">
                    <div className="tp-about-3-thumb-sm">
                      <div className="tp-hover-distort-wrapper">
                        <div className="canvas"></div>
                        <div
                          className="tp-hover-distort"
                          data-displacementimage="assets/img/webgl/10.jpg"
                        >
                          <img
                            className="tp-hover-distort-img front"
                            src="assets/img/about/thumb-3-2.jpg"
                            alt="image-here"
                          />
                          <img
                            className="tp-hover-distort-img back"
                            src="assets/img/about/thumb-3-2.jpg"
                            alt="image-here"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeThree;
