"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import './aboutCertifications.scss';

const certifications = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747747636/download_4_wfbhfb.jpg",
    title: "ISO 9001",
    description: "Quality Management System"
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747747637/images_klertr.jpg",
    title: "ISO 14001",
    description: "Environmental Management"
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747747636/images_1_sqphbw.jpg",
    title: "OHSAS 18001",
    description: "Health & Safety Management"
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747747636/images_1_sqphbw.jpg",
    title: "LEED Certified",
    description: "Green Building Certification"
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747750785/images_3_phitnx.jpg",
    title: "ISO 45001",
    description: "Occupational Health & Safety"
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747747636/download_4_wfbhfb.jpg",
    title: "ISO 27001",
    description: "Information Security"
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747747637/images_klertr.jpg",
    title: "ISO 50001",
    description: "Energy Management"
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747750785/images_3_phitnx.jpg",
    title: "ISO 22000",
    description: "Food Safety Management"
  }
];

export default function AboutCertifications() {
  return (
    <div className="certifications-section">
      <div className="certifications-header">
        <span className="section-subtitle">Our Certifications</span>
        <h2 className="section-title">Quality & Excellence</h2>
        <p className="section-description">
          We maintain the highest standards of quality and safety in all our operations
        </p>
      </div>

      <div className="certifications-slider">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2.5}
          navigation
        //   pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
          className="certifications-swiper"
        >
          {certifications.map((cert) => (
            <SwiperSlide key={cert.id} className="certification-slide">
              {/* <div className="certification-card"> */}
                <div className="certification-image">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    width={120}
                    height={120}
                    className="cert-img"
                  />
                </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
