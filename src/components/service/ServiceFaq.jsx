"use client";

import React from "react";
import "./serviceareac.scss";
import { IoHelp } from "react-icons/io5";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    question: "What types of construction projects do you handle?",
    answer:
      "We specialize in domestic and commercial projects, including renovations, extensions, loft conversions, and external wall insulation (EWI) installation. With over 30 years of experience, we handle both direct client projects and work through architects.",
  },
  {
    id: 2,
    question: "Do you provide free quotations for projects?",
    answer:
      "Yes, we offer personalized no-obligation quotations for all projects. We'll visit your site to discuss your plans and provide a detailed quote based on your specific requirements.",
  },
  {
    id: 3,
    question: "What is EWI installation and why should I consider it?",
    answer:
      "External Wall Insulation (EWI) is an energy-efficient solution that improves thermal performance and reduces heating costs. As an accredited EWI installer, we provide professional installation with silicone render finishes for enhanced durability and aesthetics.",
  },
  {
    id: 4,
    question: "How long does a typical loft conversion take?",
    answer:
      "The duration depends on the complexity and size of the project. A standard loft conversion typically takes 6-8 weeks, but we'll provide a detailed timeline after assessing your specific requirements and property structure.",
  },
  {
    id: 5,
    question: "Can you help with planning permission and building regulations?",
    answer:
      "Yes, we can assist with all aspects of planning permission and building regulations. We work closely with architects and can refer you to trusted professionals to help manage these requirements for your project.",
  },
  {
    id: 6,
    question: "What areas do you cover?",
    answer:
      "We primarily work within London and the surrounding areas, serving both residential and commercial clients. Our extensive experience in the region allows us to understand local building regulations and requirements.",
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
    <div
      className="service-area-container service_faq_conatiner"
    >
      <div className="service-header">
        <h3 className="service-title">Most asked questions</h3>
        <p>Questions & Answers</p>
      </div>

      <div className="faq_container_grid">
        {data.map((item, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
}
