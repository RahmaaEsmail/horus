'use client'

import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './menu/NavMenu';
import OnPageMenu from './menu/OnPageMenu';
import React, { useEffect, useState } from 'react';

import UseSticky from '@/hooks/UseSticky';
import logo from "@/assets/img/logo/logo-black.png";
import Offcanvus from '@/components/common/Offcanvus';
import OnePageOffcanvas from '@/components/common/OnePageOffcanvas';
import ShoppingCart from '@/components/common/ShoppingCart';
import './header.scss';

const HeaderOne = ({ onePageHomeOne, onePageHomeThree }: any) => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const { sticky } = UseSticky();
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop: number = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
      } else if (currentScrollTop <= 500) {
        document.querySelector('.tp-int-menu')?.classList.remove('tp-header-pinned');
      } else {
        document.querySelector('.tp-int-menu')?.classList.add('tp-header-pinned');
      }
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="tp-header-top-area tp-header-top-height theme-bg z-index-5 d-none d-md-block">
        <div className="container custom-container-1">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
              <div className="tp-header-top-left">
                <ul className="d-flex flex-wrap justify-content-center justify-content-md-start">
                  <li className="d-none d-md-inline-block me-3">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <a target="_blank" href="https://www.google.com/maps/place/Cumberland+House,+SK,+Canada/@53.6729773,-103.7836571,8z/data=!4m15!1m8!3m7!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!2sCanada!3b1!8m2!3d56.130366!4d-106.346771!16zL20vMGQwNjBn!3m5!1s0x52f917b0cc93e6c1:0x44da1470d37ba724!8m2!3d53.958266!4d-102.267444!16zL20vMDZteWx5?entry=ttu">
                      6391 Elgin St. Celina, 10299
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div className="tp-header-top-social text-center text-md-end mt-2 mt-md-0">
                <a href="#" className="me-3"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="me-3"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="me-3"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`tp-header-area z-index-5 
        ${onePageHomeOne ? 'tp-onepage-header' : ''} 
        ${onePageHomeThree ? 'tp-header-style-3 tp-onepage-header grey-bg' : ''} 
        ${sticky ? 'header-sticky' : ''}`}
      >
        <div className="container custom-container-1">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="tp-header-logo">
                <Link href="/">
                  <Image 
                    width={100} 
                    height={100} 
                    src={"https://res.cloudinary.com/dbz6ebekj/image/upload/v1747555890/H_O_R_U_S_nmcisz.svg"} 
                    alt="image"
                    className="img-fluid"
                    style={{ maxWidth: '100%', width:"auto", height: '100px' }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-7 d-none d-xl-block">
              <div className="tp-header-menu">
                <nav className="tp-main-menu-content">
                  {onePageHomeThree && <OnPageMenu onePageHomeThree={onePageHomeThree} />}
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-9 col-6">
              <div className="tp-header-right d-flex align-items-center justify-content-end">
                {/* <div className="tp-header-icon cart d-none d-lg-block me-3">
                  <Link className="cart-icon p-relative" href="/cart">
                    <i className="fa-sharp fa-solid fa-cart-shopping shopping-cart"></i>
                    <span><i className="far fa-plus"></i></span>
                  </Link> 
                  <ShoppingCart />
                </div> */}
                <Link href="/Quotes" className="tp-header-btn d-none d-lg-block me-3">
                  <p className="tp-btn-border black-border"><span>Get A Quote</span></p>
                </Link>
                <div className="tp-header-bar d-xl-none">
                  <button className="tp-menu-bar" onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        <div className="sidebar-content">
          <button className="close-sidebar" onClick={toggleSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="mobile-menu">
            <nav>
              {onePageHomeThree && <OnPageMenu onePageHomeThree={onePageHomeThree} />}
            </nav>
          </div>
          <div className="mobile-contact">
            <ul>
              <li><i className="fa-solid fa-envelope"></i> info@example.com</li>
              <li><i className="fa-solid fa-location-dot"></i> 6391 Elgin St. Celina, 10299</li>
            </ul>
          </div>
          <div className="mobile-social">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;