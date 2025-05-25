"use client";

import React from "react";
import "./serviceareac.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export const service_data = [
  {
    id: 1,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161051/3_rjdfo6.png",
    title: "General Contracting",
    description:
      "We oversee the entire construction process from start to finish, including planning, coordination, subcontractor management, materials, and compliance.",
      images:[
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161047/1_ko5bot.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161051/3_rjdfo6.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161056/2_buu26p.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161055/4_ervwfv.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161066/5_xfh1lu.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161057/6_ixdyp3.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161054/7_s7cgmd.png"
      ]
  },
  {
    id: 2,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161050/Interior_Design_Decoration_llnoqt.png",
    title: "Interior Design & Decoration",
    description:
      "We transform interior spaces with personalized design and decoration plans that combine aesthetics and functionality.",
  images:[
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161059/9_ipdfrq.png",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161064/10_x2will.png",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161065/12_ftenf8.png",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161067/11_ehbeg8.png",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161067/13_k31fxf.png",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748160999/19_orzsjm.png",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748160981/18_q3uaq2.png"
  ]
    },
  {
    id: 3,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    title: "Painting & Finishing",
    description:
      "Our team provides expert painting services and high-quality finishes that protect and beautify your property.",
      images:[
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161043/25_qqdv1r.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161049/Painting_Finishing_syghp3.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748161058/24_nfipkf.png",
        'https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163015/34_yrcg40.png',
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/33_ycprnt.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163016/29_ga13pb.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163016/28_ghswfc.png",
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163024/31_zg8z06.png",

      ]
    },
  {
    id: 4,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163314/45_y1uiqe.png",
    title: "Renovation & Extensions",
    description:
      "From small updates to large extensions, we help upgrade your property to better suit your needs and lifestyle.",
    images:["https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163312/46_xgcuyy.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163311/38_omgrih.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163303/42_stv9e5.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163298/39_deefma.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163295/40_rgjcqt.png",
    ]
    },
  {
    id: 5,
    home: "service",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163518/50_li2sbt.png",
    title: "Electrical & Plumbing Works",
    description:
      "We deliver reliable electrical and plumbing services that meet all safety standards and project requirements.",
    images:[
      'https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163520/48_k9tblc.png',
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/49_cbntng.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163314/45_y1uiqe.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163312/46_xgcuyy.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163311/38_omgrih.png",
    ]
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
