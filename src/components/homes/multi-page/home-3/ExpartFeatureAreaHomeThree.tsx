'use client'
import React from 'react';
import Link from 'next/link';

// import progressbar   
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const ExpartFeatureAreaHomeThree = () => {

  const percentage = 89;
  const percentage2 = 79;

  return (
    <>
      <div className="tp-exp-fea-area fix pb-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-exp-fea-title-box p-relative mb-60">
                <span className="tp-section-subtitle tp-split-text tp-split-in-right">Our Features</span>
                <h3 className="tp-section-title tp-split-text tp-split-in-right">Create Your Own Haven with <br /> Expert Interior Guidance</h3>
                <div className="tp-exp-fea-big-text d-none d-xl-block">
                  <h6>Features</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-exp-fea-top mb-60">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-5">
                <div className="tp-exp-fea-thumb">
                  <div className="tp-hover-distort-wrapper">
                    <div className="canvas"></div>
                    <div className="tp-hover-distort" data-displacementimage="assets/img/webgl/10.jpg">
                      <img className="tp-hover-distort-img front" src="assets/img/feature/feature-3-1.jpg" alt="image-here" />
                      <img className="tp-hover-distort-img back" src="assets/img/feature/feature-3-1.jpg" alt="image-here" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-7">
                <div className="tp-exp-fea-right">
                  <div className="tp-exp-fea-text pb-5">
                    <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed
                      thisnquia consequuntur magni dolores eos designer heresm qui ratione </p>
                  </div>
                  <div className="tp-exp-fea-list mb-40">
                    <ul>
                      <li><i className="fa-solid fa-check"></i>Mistakes To Avoid</li>
                      <li><i className="fa-solid fa-check"></i>Your Startup</li>
                      <li><i className="fa-solid fa-check"></i>Knew About Fonts</li>
                      <li><i className="fa-solid fa-check"></i>Winning Metric for Your Startup</li>
                    </ul>
                  </div>
                  <a className="tp-btn-black" href="about-us.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-exp-fea-bottom">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-md-6 order-1 order-md-0">
                <div className="tp-exp-fea-right">
                  <div className="tp-exp-fea-text pb-5">
                    <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed
                      thisnquia consequuntur magni dolores eos designer heresm qui ratione </p>
                  </div>

                  <div className="tp-exp-fea-wrap d-flex justify-content-between mb-40">
                    <div className="tp-exp-fea-canva-box">
                      <div className="tp-exp-fea-canva tp-progress">
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          strokeWidth={7}
                          className="knob" 
                        />

                      </div>
                      <span>Shine Personality</span>
                    </div>
                    <div className="tp-exp-fea-canva-box">
                      <div className="tp-exp-fea-canva tp-progress">
                        <CircularProgressbar
                          value={percentage2}
                          text={`${percentage2}%`}
                          strokeWidth={7}
                        />

                      </div>
                      <span>Enhance style</span>
                    </div>
                  </div>


                  <Link className="tp-btn-black" href="/about-us">
                    <span>Read More</span>
                  </Link> 

                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6 order-0 order-md-1">
                <div className="tp-exp-fea-thumb-2 text-end">
                  <div className="tp-hover-distort-wrapper">
                    <div className="canvas"></div>
                    <div className="tp-hover-distort" data-displacementimage="assets/img/webgl/10.jpg">
                      <img className="tp-hover-distort-img front" src="assets/img/feature/feature-3-2.jpg" alt="image-here" />
                      <img className="tp-hover-distort-img back" src="assets/img/feature/feature-3-2.jpg" alt="image-here" />
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

export default ExpartFeatureAreaHomeThree;