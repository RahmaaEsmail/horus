'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import './OurTeam.scss'; // 👈 SCSS file

const teams = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dbz6ebekj/image/upload/v1747536463/photo-1633332755192-727a05c4013d_vtrhsc.avif',
    title: 'Yomi Denzel',
    desc: 'E-Commerce 2.0',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dbz6ebekj/image/upload/v1747536463/photo-1633332755192-727a05c4013d_vtrhsc.avif',
    title: 'Timothée Moiroux',
    desc: 'Investissement Immobilier',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dbz6ebekj/image/upload/v1747536463/photo-1633332755192-727a05c4013d_vtrhsc.avif',
    title: 'David Sequiera',
    desc: 'Closing',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dbz6ebekj/image/upload/v1747536463/photo-1633332755192-727a05c4013d_vtrhsc.avif',
    title: 'Manuel Ravier',
    desc: 'Investissement Immobilier',
  },
];

export default function OurTeam() {
  return (
    <section className="our-team">
      <div className='team_container'>
        <div className="our-team__header">
        <h2>Partnered with most of the</h2>
        <h1>top people at each industry</h1>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {teams.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="team-card">
              <Image
                src={member.image}
                alt={member.title}
                width={300}
                height={300}
                className="team-card__image"
              />
              <div className="team-card__overlay" />
              <div className="team-card__info">
                <h3>{member.title}</h3>
                <p>{member.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
