import React from 'react';
import Image from 'next/image';
import logo from "@/assets/img/logo/logo-white.png";
import SocialLinks, { CopyRight } from '@/components/common/SocialLinks';
import Link from 'next/link';

type FooterLink = {
  title: string;
  link: string;
}

const footer_content = {
  description: `Horus Construction is a premier construction and interior design company dedicated to transforming spaces with innovative solutions and exceptional craftsmanship. We bring your vision to life with precision and style.`,
  link_title: `Our Links`,
  links: [
    { title: 'Instagram', link: 'https://instagram.com/' },
    { title: 'LinkedIn', link: 'https://linkedin.com/company/' },
    { title: 'Facebook', link: 'https://facebook.com/' },
    { title: 'Pinterest', link: 'https://pinterest.com/' },
  ],
  page_title: 'Quick Links',
  pages: [
    { title: 'About Us', link: '/about-us' },
    { title: 'Services', link: '/service' },
    { title: 'Portfolio', link: '/projects' },
    { title: 'Contact', link: '/contact' },
  ],
  info_title: `Contact Information`,
  address: <>20 Fenchurch Street, London EC3M 3BY, UK</>,
  phone: '(212) 555-0123',
  email: 'info@horus.com',
  our_policy: [
    { title: 'Terms & Conditions', link: '/terms' },
    { title: 'Privacy Policy', link: '/privacy' },
    { title: 'Sitemap', link: '/sitemap' },
  ]
}

const {
  description,
  link_title,
  links,
  page_title,
  pages,
  info_title,
  address,
  phone,
  email,
  our_policy
} = footer_content




const FooterThree = () => {
  return (
    <>
      <footer className='bg-black' style={{backgroundColor:"black"}}>

        <div className="tp-footer-area tp-footer-style-2 tp-footer-style-3 pt-75 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tp-footer-widget footer-cols-3-1">
                  <div className="tp-footer-logo">
                    <Link href="/">
                      <Image src={"https://res.cloudinary.com/dbz6ebekj/image/upload/v1747555890/H_O_R_U_S_nmcisz.svg"} width={"400"} height={"0"} alt="logo-here" />
                    </Link>
                  </div>
                  <div className="tp-footer-text pb-5">
                    <p>{description}</p>
                  </div>
                  <div className="tp-footer-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tp-footer-widget footer-cols-3-2">
                  <h4 className="tp-footer-title">{link_title}</h4>
                  <div className="tp-footer-list">
                    <ul>
                      {links.map((link, i) => (
                        <li key={i}><a href={link?.link}>{link?.title}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="tp-footer-widget footer-cols-3-3">
                  <h4 className="tp-footer-title">{page_title}</h4>
                  <div className="tp-footer-list">
                    <ul>
                      {pages.map((page, i) => (
                        <li key={i}><Link href={page.link}>{page.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                <div className="tp-footer-widget d-flex justify-content-lg-end footer-cols-3-4">
                  <div className="tp-footer-contact-box">
                    <h4 className="tp-footer-title">{info_title}</h4>
                    <div className="tp-footer-contact">
                      <ul>
                        <li>
                          <a
                            href="https://www.google.com/maps/place/United+States/@21.2541411,-83.1622716,7.17z/data=!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw?entry=ttu">1901
                            {address}
                          </a>
                        </li>
                        <li>
                          <a href={`tel:${phone}`}>{phone}</a>
                        </li>
                        <li>
                          <a href={`mailto:${email}`}>{email}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-copyright-area tp-copyright-style-2 tp-copyright-border tp-copyright-height">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tp-copyright-left tp-copyright-left-pt text-center text-lg-start">
                  <p> <CopyRight /> </p>
                </div>
              </div>
              <div className="col-lg-6  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tp-copyright-right text-center text-lg-end">
                  {our_policy.map((item, i) => (
                    <a key={i} href={item.link}>{item.title}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>

    </>
  );
};

export default FooterThree;