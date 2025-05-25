import Link from "next/link";
import React from "react";

const AboutAreaHomeThree = () => {
  return (
    <>
      <div id="about-one-page" className="tp-about-3-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-about-3-title-box mb-60">
                <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                  About Us
                </span>
                <h3 className="tp-section-title tp-split-text tp-split-in-right">
                  Designing Tomorrow s <br /> ClassclassNameics Today
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
                  <h6>About Us</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="tp-about-3-right">
                <div className="tp-about-3-content pb-60">
                  <p className="mb-45">
                    Nemo design enim ipsam voluptatem quim voluptas sit
                    aspernatur aut odit auting fugit sed thisnquia consequuntur
                    magni dolores eos designer heresm qui ratione
                  </p>
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
