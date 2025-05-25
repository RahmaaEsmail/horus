

import service_data from '@/data/service_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = service_data.filter(item => item.home === 3)

const ServiceAreaHomeThree = () => {
  return (
    <>
      <div id="service-one-page" className="tp-service-area pt-50 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-title-box text-center mb-60">
                <span className="tp-section-subtitle tp-split-text tp-split-in-right">Best Service</span>
                <h3 className="tp-section-title tp-split-text tp-split-in-right">Creating Harmony in <br /> Every Room</h3>
              </div>
            </div>

            {services.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-service-item">
                  <div className="tp-service-thumb-box p-relative">
                    <div className="tp-service-thumb">
                      <Image src={item.img ?? ''} alt="image-here" />
                    </div>
                    <div className="tp-service-icon">
                      <span dangerouslySetInnerHTML={{ __html: item.icon ?? '' }}>

                      </span>
                    </div>
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title">
                      <Link href="/service-details">{item.title}</Link></h4>
                    <p>{item.description}</p>
                    <div className="tp-service-link">
                      <Link className="tp-link" href="/service-details">
                        Read More
                        <span className="bottom-line"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))} 

          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeThree;