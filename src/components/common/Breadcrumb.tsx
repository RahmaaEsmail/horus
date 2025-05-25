

import Link from 'next/link';
import React from 'react';

interface Props {
  title: string
  subtitle: string
  image:string
}

const Breadcrumb = ({ title = 'About Us', subtitle = 'About Us' , image = "/assets/img/breadcurmb/breadcurmb.jpg"}: Props) => {
  return (
    <>
      <div className="breadcrumb__pt">
        <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content z-index">
                  <div className="breadcrumb__section-title-box mb-20">
                    <h3 className="breadcrumb__title tp-split-text tp-split-in-right">{title}</h3>
                  </div>
                  <div className="breadcrumb__list">
                    <span><Link href="/">Home</Link></span>
                    <span className="dvdr"><i className="fa-solid fa-angle-right"></i></span>
                    <span>{subtitle}</span>
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

export default Breadcrumb;