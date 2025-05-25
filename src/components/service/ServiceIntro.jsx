"use client";

import React, { useEffect, useState } from 'react'
import { FaHammer, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import {motion}  from 'framer-motion';
import styles from './ServiceIntro.module.css';

const useResponsiveAnimation = () => {
  const [animationValues, setAnimationValues] = useState({
    left: -100,
    right: 100
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setAnimationValues({
          left: -50,
          right: 50
        });
      } else {
        setAnimationValues({
          left: -100,
          right: 100
        });
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return animationValues;
};

export default function ServiceIntro() {
  const { left, right } = useResponsiveAnimation();

  return (
    <div className={styles.heroSection}>
      <motion.div 
        initial={{x: left, opacity: 0}} 
        animate={{x: 0, opacity: 1}} 
        whileInView={{x: 0, opacity: 1}} 
        transition={{duration: 0.3, ease: "easeInOut"}} 
        className={styles.heroImageBlock}
      >
        <Image
          src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1747736756/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_hcxbpw.jpg"
          alt="Real Estate Hero"
          width={600}
          height={300}
          className={styles.heroImage}
        />
        <div className={styles.goalBox}>
          <strong>OUR GOAL:</strong><br />
          "Building better spaces, one project at a time."
        </div>
      </motion.div>
  
      <motion.div 
        initial={{x: right, opacity: 0}} 
        animate={{x: 0, opacity: 1}} 
        whileInView={{x: 0, opacity: 1}} 
        transition={{duration: 0.3, ease: "easeInOut"}} 
        className={styles.heroTextContent}
      >
        <div className={styles.introLabel}>Our Services</div>
        <h1 className={styles.heroTitle}>Expert Construction & Renovation Services in London</h1>
        <p className={styles.heroDescription}>
          With over 30 years of experience, we specialize in domestic and commercial construction, offering comprehensive solutions from renovations and extensions to specialized EWI installation and silicone render services.
        </p>
  
        <div className={styles.heroFeatureBoxes}>
          <div className={styles.featureBox}>
            <div className={`${styles.iconCircle} ${styles.hammer}`}>
              <FaHammer />
            </div>
            <div className={styles.featureText}>
              <h4>Renovations & Extensions</h4>
              <p>Complete renovation services and custom extensions to transform your space.</p>
            </div>
          </div>
  
          <div className={styles.featureBox}>
            <div className={`${styles.iconCircle} ${styles.home}`}>
              <FaHome />
            </div>
            <div className={styles.featureText}>
              <h4>Loft Conversions & EWI</h4>
              <p>Expert loft conversions and accredited external wall insulation services.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
