"use client";

import project_data from "@/data/project_data";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const projects = project_data.filter(item => item.path === 'home_1')

// data
const categories = [
  "All",
  ...new Set(project_data.map((item) => item.category)),
];
const perView = 4;

const ProjectAreaHomeOne = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(project_data);
  const [next, setNext] = useState(perView);
  const [isLoading, setIsLoading] = useState(false);

  const filterItems = (cateItem: string) => {
    setIsLoading(true);
    setActiveCategory(cateItem);
    setNext(perView);

    // Simulate loading for better UX
    setTimeout(() => {
      if (cateItem === "All") {
        setItems(project_data);
      } else {
        const findItems = project_data.filter(
          (findItem) => findItem.category == cateItem
        );
        setItems(findItems);
      }
      setIsLoading(false);
    }, 300);
  };

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNext((prev) => prev + perView);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    console.log(items, activeCategory);
  }, [items, activeCategory]);

  return (
    <section
      id="project-one-page"
      className="tp-project-area tp-project-style-2 fix pt-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="tp-project-title-box text-center mb-50"
            >
              <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                Latest Projects
              </span>
              <h3 className="tp-section-title tp-split-text tp-split-in-right">
                Where Form Meets Function <br /> with Flair Designer
              </h3>
            </motion.div>
          </div>
          <div className="col-xl-12">
            <div className="tp-project-filter masonary-menu text-center pb-60">
              {categories.map((cate, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => filterItems(cate)}
                  className={`mb-4 filter-btn ${
                    cate === activeCategory ? "active" : ""
                  }`}
                  aria-label={`Filter by ${cate}`}
                >
                  {cate}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="row gx-4 gy-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div className="col-12 text-center py-5">
                <div className="loading-spinner"></div>
              </div>
            ) : (
              items.slice(0, next).map((item, i) => (
                <motion.div
                  key={item.id || i}
                  className="col-lg-6 col-md-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div className="tp-project-item-wrap p-relative">
                    <div className="tp-project-item fix">
                      <div className="tp-project-thumb">
                        <Link href={`/project-details/${item.id || i}`}>
                          <div className="image-wrapper">
                            <Image
                              className="w-100"
                              src={item.img}
                              alt={item.title}
                              width={600}
                              height={400}
                              style={{ objectFit: "cover" }}
                            />
                            <div className="overlay">
                              <span className="category">{item.category}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="tp-project-content black-bg">
                      <h6 className="tp-project-title">
                        <Link href={`/project-details/${item.id || i}`}>
                          {item.title}
                        </Link>
                      </h6>
                      <Link
                        className="tp-btn-border-lg white-border"
                        href={`/project-details/${item.id || i}`}
                      >
                        <span>View Details</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {next < items.length && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMore}
                className="tp-btn-border-lg"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Load More"}
              </motion.button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .filter-btn {
          background: transparent;
          border: none;
          padding: 8px 20px;
          margin: 0 5px;
          border-radius: 30px;
          transition: all 0.3s ease;
          font-weight: 500;
          color: #666;
        }

        .filter-btn.active {
          background: #000;
          color: #fff;
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .image-wrapper:hover .overlay {
          opacity: 1;
        }

        .category {
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.7);
          font-size: 14px;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .tp-project-content {
          padding: 25px;
          border-radius: 0 0 8px 8px;
        }

        .tp-project-title {
          margin-bottom: 15px;
        }

        .tp-project-title a {
          color: #fff;
          transition: color 0.3s ease;
        }

        .tp-project-title a:hover {
          color: #f0f0f0;
        }

        .tp-btn-border-lg {
          display: inline-flex;
          align-items: center;
          padding: 12px 30px;
          border: 2px solid #fff;
          color: #fff;
          border-radius: 30px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .tp-btn-border-lg:hover {
          background: #fff;
          color: #000;
        }
      `}</style>
    </section>
  );
};

export default ProjectAreaHomeOne;
