'use client'

import project_data from '@/data/project_data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const projects = project_data.filter(item => item.path === 'project')

// data
const categories = ["All", ...new Set(projects.map((item) => item.category))];
const perView = 6;

const ProjectArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(projects);
  const [next, setNext] = useState(perView);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    setNext(perView);
    if (cateItem === "All") {
      return setItems(projects);
    } else {
      const findItems = projects.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <div className="tp-project-4-area pt-150 pb-90 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-project-title-box text-center mb-30">
              <span className="tp-section-subtitle">Latest Projects</span>
              <h3 className="tp-section-title">
                Where Form Meets Function <br className="d-none d-md-block" /> with Flair designer
              </h3>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-project-filter masonary-menu text-center pb-60">
              <div className="filter-buttons">
                {categories.map((cate, i) => (
                  <button 
                    key={i}
                    onClick={() => filterItems(cate)} 
                    className={`filter-button ${cate === activeCategory ? 'active' : ''}`}
                  >
                    {cate}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row grid gx-35">
          {items.slice(0, next).map((item, i) => (
            <div onClick={() => {
              alert("clicked")
              console.log("Clicked")
            }} key={i} className="col-lg-4 col-md-6 col-sm-12 grid-item">
              <Link  href={`/project-details/${item.id}`} className="tp-project-4-item p-relative">
                <div className="tp-project-4-thumb">
                  <Image 
                    src={item.img} 
                    alt={item.title}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="tp-project-4-content">
                  <h6 className="tp-project-4-title">
                    {item.title}
                  </h6>
                  <p>{item.description}</p>
                  <div className="tp-btn-border-lg white-border">
                    <span>Read More</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectArea;