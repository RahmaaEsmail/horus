import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/hero/shape-1.png"
import hero_2 from "@/assets/img/hero/hero-2-1.jpg"
import shape_3 from "@/assets/img/hero/shape-2-1.png"
import shape_4 from "@/assets/img/hero/shape-2-2.png"
import Count from '@/components/common/Count';

import './style.scss';


const hero_content = {
  title: <>Building Excellence <br /> For Over <span>30 Years</span> <br /> In London</>,
  info: <>Horus Construction Ltd specializes in domestic, commercial, and insurance defect works. We excel in renovations, extensions, loft conversions, and external insulation as an accredited EWI installer. Let us bring your vision to life.</>,
  counter_data: [
    {
      count: 30,
      title: `Years Experience`,
    },
    {
      count: 500,
      title: `Projects Completed`,
    },
    {
      count: 100,
      title: `Happy Clients`,
    },
  ]
}

const { title, info, counter_data } = hero_content

const HeroAreaHomeThree = () => {
  return (
    <>
      <div className="tp-hero-2-area tp-hero-2-height px-20 fix grey-bg p-relative">
        <div className="tp-hero-2-shape-1">
          <Image src={shape_1} alt="image-here" />
        </div>
        <div className="container">
          <div className="tp-hero-2-wrap p-relative z-index">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-hero-2-content">
                  <h1 style={{color:"#3d4c7d !important"}} className="text-black tp-slider-title mb-15 tp-split-text tp-split-in-down">
                    {title}
                  </h1>
                  <p className="mb-35">
                    {info}
                  </p>
                  <Link className="tp-btn-black" href="/about-us">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="text-center tp-hero-2-thumb-box p-relative text-lg-end">
                  <div className="tp-hero-2-thumb">
                    <Image src={hero_2} alt="image-here" />
                  </div>
                  <div className="tp-hero-2-shape-2">
                    <Image src={shape_3} alt="image-here" />
                  </div>
                  <div className="tp-hero-2-shape-3">
                    <Image src={shape_4} alt="image-here" />
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="tp-hero-2-funfact-box d-flex justify-content-between">
                  {counter_data.map((item, i) => (
                      <div key={i} className="tp-hero-2-funfact">
                        <h5 className="d-flex">
                          <i className="purecounter">
                          <Count number={item.count} />
                          </i>k
                        </h5>
                        <span>{item.title}</span>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeThree;