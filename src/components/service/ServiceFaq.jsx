"use client";

import React from "react";
import "./serviceareac.scss";
import { IoHelp } from "react-icons/io5";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    question: "What is general contracting in real estate?",
    answer:
      "General contracting refers to the complete management of a construction project, including hiring subcontractors, sourcing materials, overseeing timelines, and ensuring regulatory compliance.",
  },
  {
    id: 2,
    question: "Do I need an interior designer for my home renovation?",
    answer:
      "Hiring an interior designer ensures that your renovation not only looks great but also uses space efficiently and reflects your personal style.",
  },
  {
    id: 3,
    question: "How long does a typical renovation take?",
    answer:
      "Depending on the size and complexity, renovations can take anywhere from a few weeks to several months. A timeline is usually provided after an initial site assessment.",
  },
  {
    id: 4,
    question: "Are plumbing and electrical services included in your packages?",
    answer:
      "Yes, we offer complete electrical and plumbing services as part of our renovation and construction packages, performed by certified professionals.",
  },
  {
    id: 5,
    question: "What types of properties do you service?",
    answer:
      "We work with residential, commercial, and investment properties, including apartments, villas, office buildings, and retail spaces.",
  },
  {
    id: 6,
    question: "Can I get a quote before starting the project?",
    answer:
      "Absolutely. We provide free consultations and detailed quotations based on your project requirements and site conditions.",
  },
];

// Variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceFaq() {
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      className="service-area-container service_faq_conatiner"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => {
        document.body.style.overflow = "hidden";
      }}
      onViewportLeave={() => {
        document.body.style.overflow = "auto";
      }}
    >
      <motion.div className="service-header" variants={rightVariant}>
        <h3 className="service-title">Most asked questions</h3>
        <p>Questions & Answers</p>
      </motion.div>

      <motion.div className="faq_container_grid">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="faq_card"
            variants={index % 2 === 0 ? leftVariant : rightVariant}
          >
            <div className="faq_icon">
              <IoHelp />
            </div>
            <div className="faq_content">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
