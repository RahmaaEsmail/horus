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
        <div className={styles.introLabel}>Our Introduction</div>
        <h1 className={styles.heroTitle}>Welcome to Our Real Estate & Construction Services</h1>
        <p className={styles.heroDescription}>
          We offer end-to-end solutions for residential and commercial projects — from contracting and renovation to interior design and project management.
        </p>
  
        <div className={styles.heroFeatureBoxes}>
          <div className={styles.featureBox}>
            <div className={`${styles.iconCircle} ${styles.hammer}`}>
              <FaHammer />
            </div>
            <div className={styles.featureText}>
              <h4>General Contracting</h4>
              <p>Full project management from foundation to finish.</p>
            </div>
          </div>
  
          <div className={styles.featureBox}>
            <div className={`${styles.iconCircle} ${styles.home}`}>
              <FaHome />
            </div>
            <div className={styles.featureText}>
              <h4>Property Renovation</h4>
              <p>Modern upgrades to add value and comfort to your property.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
