"use client";

import React from "react";
import "./serviceareac.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const service_data = [
  {
    id: 1,
    home: "service",
    img: "https://www.pcl.com/content/dam/people-working/fpz_20200807_1424.jpg",
    title: "General Contracting",
    description:
      "We oversee the entire construction process from start to finish, including planning, coordination, subcontractor management, materials, and compliance.",
  },
  {
    id: 2,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728183/download_1_gfztxy.jpg",
    title: "Interior Design & Decoration",
    description:
      "We transform interior spaces with personalized design and decoration plans that combine aesthetics and functionality.",
  },
  {
    id: 3,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728177/images_1_uek7q6.jpg",
    title: "Painting & Finishing",
    description:
      "Our team provides expert painting services and high-quality finishes that protect and beautify your property.",
  },
  {
    id: 4,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728184/images_zdlngb.jpg",
    title: "Renovation & Extensions",
    description:
      "From small updates to large extensions, we help upgrade your property to better suit your needs and lifestyle.",
  },
  {
    id: 5,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728286/download_2_uhbysa.jpg",
    title: "Electrical & Plumbing Works",
    description:
      "We deliver reliable electrical and plumbing services that meet all safety standards and project requirements.",
  },
];

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SeerviceArea = () => {
  const router = useRouter();

  const handleServiceClick = (serviceId: number) => {
    router.push(`/service-details/${serviceId}`);
  };

  return (
    <motion.div
      className="tp-service-2-area service-area-container !px-20 pt-40 pb-45"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="service-header"
        >
          <h3 className="service-title">Our Services</h3>
          <p>
            providing a service with respect to the purchase, sale, lease,
            rental, or appraisal of real property.
          </p>
        </motion.div>

        <div className="service-grid">
          {service_data?.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item?.id}
              className="service_card"
              onClick={() => handleServiceClick(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={item?.img}
                width={100}
                height={100}
                alt={item?.title}
              />
              <h5>{item?.title}</h5>
              <p>{item?.description}</p>

              <button>
                <span>Read More</span>
                <HiMiniArrowUpRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SeerviceArea;
