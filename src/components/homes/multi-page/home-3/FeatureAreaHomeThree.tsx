'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import shape_img from '@/assets/img/feature/shape-1-1.png';
import Link from 'next/link';


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  description: React.JSX.Element;
  feature_data: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const feature_content: DataType = {
  subtitle: 'Our Services',
  title: <>Transform Your Space <br /> With Expert Interior <br /> Design Solutions</>,
  description: <>We offer comprehensive interior design and construction services <br /> tailored to your unique vision and requirements. Our team of <br /> experts ensures quality and excellence in every project.</>,
  feature_data: [
    {
      title: 'Interior Design',
      description: 'Professional interior design services that transform your space into a beautiful and functional environment.',
      icon: `<svg width="65" height="49" viewBox="0 0 65 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M41.6406 36.6875H23.3594C22.7977 36.6875 22.3438 37.1425 22.3438 37.7031V40.75C22.3438 41.3106 22.7977 41.7656 23.3594 41.7656H41.6406C42.2023 41.7656 42.6562 41.3106 42.6562 40.75V37.7031C42.6562 37.1425 42.2023 36.6875 41.6406 36.6875ZM40.625 39.7344H24.375V38.7188H40.625V39.7344Z" fill="currentcolor" /> <path d="M60.9375 24.0135V3.17188C60.9375 1.49203 59.5705 0.125 57.8906 0.125H7.10938C5.42953 0.125 4.0625 1.49203 4.0625 3.17188V19.4219C4.0625 19.9825 4.51648 20.4375 5.07812 20.4375C5.63977 20.4375 6.09375 19.9825 6.09375 19.4219V3.17188C6.09375 2.61227 6.54875 2.15625 7.10938 2.15625H57.8906C58.4512 2.15625 58.9062 2.61227 58.9062 3.17188V22.6861C57.59 22.0107 56.1245 21.5933 54.5726 21.4907L53.8281 19.2573V10.5209L54.7371 8.70399C54.9148 8.34953 54.8691 7.92297 54.6213 7.61422C54.3725 7.30445 53.9642 7.16734 53.5834 7.26383L49.6407 8.25H38.7187L34.777 7.26484C34.3972 7.16937 33.9879 7.30547 33.7391 7.61523C33.4913 7.92398 33.4455 8.35055 33.6233 8.705L34.5312 10.5209V19.1141L32.9723 21.4531H31.2L30.4688 19.2573V10.5209L31.3777 8.70399C31.5555 8.34953 31.5098 7.92297 31.262 7.61422C31.0131 7.30445 30.6028 7.16734 30.224 7.26383L26.2813 8.25H15.3593L11.4177 7.26484C11.0368 7.16937 10.6285 7.30547 10.3797 7.61523C10.1319 7.92398 10.0862 8.35055 10.2639 8.705L11.1719 10.5209V19.1141L9.5225 21.5882C4.14375 22.3905 0 27.0269 0 32.625V42.7812C0 44.4611 1.36703 45.8281 3.04688 45.8281C3.51609 45.8281 3.95586 45.7123 4.35398 45.5214C4.53781 45.7103 4.79375 45.8281 5.07812 45.8281H6.09375V47.8594C6.09375 48.42 6.54773 48.875 7.10938 48.875H11.1719C11.7335 48.875 12.1875 48.42 12.1875 47.8594V45.8281H52.8125V47.8594C52.8125 48.42 53.2665 48.875 53.8281 48.875H57.8906C58.4523 48.875 58.9062 48.42 58.9062 47.8594V45.8281H59.9219C60.2062 45.8281 60.4622 45.7103 60.646 45.5214C61.0441 45.7123 61.4839 45.8281 61.9531 45.8281C63.633 45.8281 65 44.4611 65 42.7812V32.625C65 29.1637 63.4166 26.0651 60.9375 24.0135Z" fill="currentcolor" /> </svg>`
    },
    {
      title: 'Construction',
      description: 'Expert construction services for residential and commercial projects with attention to detail and quality.',
      icon: `<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M63.9448 17.1011L32.9875 0.124922C32.6838 -0.0416406 32.3152 -0.0416406 32.0115 0.124922L1.05422 17.1011C0.403203 17.4576 0 18.1401 0 18.8825V25.7075C0 26.4327 0.372734 27.0857 0.996328 27.4564C1.31828 27.6463 1.67375 27.7408 2.03023 27.7408C2.36437 27.7408 2.69953 27.6565 3.00727 27.4879L5.07812 26.3514V61.9531C5.07812 63.633 6.44516 65 8.125 65H56.875C58.5548 65 59.9219 63.633 59.9219 61.9531V26.3514L61.9927 27.4869C62.6285 27.8362 63.3811 27.823 64.0027 27.4554C64.6273 27.0857 65 26.4316 65 25.7075V18.8825C65 18.1401 64.5968 17.4576 63.9448 17.1011Z" fill="currentcolor" /> </svg>`
    },
    {
      title: 'Renovation',
      description: 'Complete renovation services to breathe new life into your existing spaces with modern solutions.',
      icon: `<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M63.9448 17.1011L32.9875 0.124922C32.6838 -0.0416406 32.3152 -0.0416406 32.0115 0.124922L1.05422 17.1011C0.403203 17.4576 0 18.1401 0 18.8825V25.7075C0 26.4327 0.372734 27.0857 0.996328 27.4564C1.31828 27.6463 1.67375 27.7408 2.03023 27.7408C2.36437 27.7408 2.69953 27.6565 3.00727 27.4879L5.07812 26.3514V61.9531C5.07812 63.633 6.44516 65 8.125 65H56.875C58.5548 65 59.9219 63.633 59.9219 61.9531V26.3514L61.9927 27.4869C62.6285 27.8362 63.3811 27.823 64.0027 27.4554C64.6273 27.0857 65 26.4316 65 25.7075V18.8825C65 18.1401 64.5968 17.4576 63.9448 17.1011Z" fill="currentcolor" /> </svg>`
    },
    {
      title: 'Consultation',
      description: 'Professional consultation services to help you make informed decisions about your space transformation.',
      icon: `<svg width="65" height="49" viewBox="0 0 65 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M41.6406 36.6875H23.3594C22.7977 36.6875 22.3438 37.1425 22.3438 37.7031V40.75C22.3438 41.3106 22.7977 41.7656 23.3594 41.7656H41.6406C42.2023 41.7656 42.6562 41.3106 42.6562 40.75V37.7031C42.6562 37.1425 42.2023 36.6875 41.6406 36.6875ZM40.625 39.7344H24.375V38.7188H40.625V39.7344Z" fill="currentcolor" /> <path d="M60.9375 24.0135V3.17188C60.9375 1.49203 59.5705 0.125 57.8906 0.125H7.10938C5.42953 0.125 4.0625 1.49203 4.0625 3.17188V19.4219C4.0625 19.9825 4.51648 20.4375 5.07812 20.4375C5.63977 20.4375 6.09375 19.9825 6.09375 19.4219V3.17188C6.09375 2.61227 6.54875 2.15625 7.10938 2.15625H57.8906C58.4512 2.15625 58.9062 2.61227 58.9062 3.17188V22.6861C57.59 22.0107 56.1245 21.5933 54.5726 21.4907L53.8281 19.2573V10.5209L54.7371 8.70399C54.9148 8.34953 54.8691 7.92297 54.6213 7.61422C54.3725 7.30445 53.9642 7.16734 53.5834 7.26383L49.6407 8.25H38.7187L34.777 7.26484C34.3972 7.16937 33.9879 7.30547 33.7391 7.61523C33.4913 7.92398 33.4455 8.35055 33.6233 8.705L34.5312 10.5209V19.1141L32.9723 21.4531H31.2L30.4688 19.2573V10.5209L31.3777 8.70399C31.5555 8.34953 31.5098 7.92297 31.262 7.61422C31.0131 7.30445 30.6028 7.16734 30.224 7.26383L26.2813 8.25H15.3593L11.4177 7.26484C11.0368 7.16937 10.6285 7.30547 10.3797 7.61523C10.1319 7.92398 10.0862 8.35055 10.2639 8.705L11.1719 10.5209V19.1141L9.5225 21.5882C4.14375 22.3905 0 27.0269 0 32.625V42.7812C0 44.4611 1.36703 45.8281 3.04688 45.8281C3.51609 45.8281 3.95586 45.7123 4.35398 45.5214C4.53781 45.7103 4.79375 45.8281 5.07812 45.8281H6.09375V47.8594C6.09375 48.42 6.54773 48.875 7.10938 48.875H11.1719C11.7335 48.875 12.1875 48.42 12.1875 47.8594V45.8281H52.8125V47.8594C52.8125 48.42 53.2665 48.875 53.8281 48.875H57.8906C58.4523 48.875 58.9062 48.42 58.9062 47.8594V45.8281H59.9219C60.2062 45.8281 60.4622 45.7103 60.646 45.5214C61.0441 45.7123 61.4839 45.8281 61.9531 45.8281C63.633 45.8281 65 44.4611 65 42.7812V32.625C65 29.1637 63.4166 26.0651 60.9375 24.0135Z" fill="currentcolor" /> </svg>`
    }
  ]
}


const { subtitle, title, description, feature_data } = feature_content

const FeatureAreaHomeThree = () => {


  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tpService2Items = document.querySelectorAll('.tp-feature-item');

      if (target.classList.contains('tp-feature-item')) {
        target.classList.add('active');

        // Remove 'active' class from all items except the current one
        tpService2Items.forEach(item => {
          if (item !== target) {
            item.classList.remove('active');
          }
        });
      }
    };

    const tpService2Items = document.querySelectorAll('.tp-feature-item');

    tpService2Items.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter as EventListenerOrEventListenerObject);
    });

    return () => {
      tpService2Items.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter as EventListenerOrEventListenerObject);
      });
    };

  }, []);



  return (
    <>
      <div className="tp-feature-area tp-feature-style-2 p-relative z-index fix black-bg pt-140 pb-135">
        <div className="tp-feature-shape-1">
          <Image style={{height:"auto"}} src={shape_img} alt="image-here" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-feature-left">
                <div className="tp-feature-title-box mb-30">
                  <span className="tp-section-subtitle tp-split-text tp-split-in-right">{subtitle}</span>
                  <h3 className="tp-section-title text-white tp-split-text tp-split-in-right">{title}</h3>
                </div>
                <div className="tp-feature-text">
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                {feature_data.map((item, i) => (
                  <div key={i} className="col-md-6 mb-25">
                    <div className={`tp-feature-item ${i === 1 ? 'active' : ''}`}>
                      <div className="tp-feature-icon mb-40">
                        <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                      </div>
                      <div className="tp-feature-content">
                        <h4 className="tp-feature-title pb-10"><Link href="/service-details">{item.title}</Link></h4>
                        <div className="tp-feature-text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureAreaHomeThree;