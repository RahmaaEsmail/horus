import React from 'react';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import '../service-details/service-details.scss';

interface DataType {
  title: string;
  price: number;
  delay: string;
  feature_data: string[];
  popular?: boolean;
  description: string;
}

const price_data: DataType[] = [
  {
    title: "Basic Plan",
    price: 1999,
    delay: '.3s',
    description: "Perfect for small projects and renovations",
    feature_data: [
      "Initial Consultation",
      "Basic Design Planning",
      "Material Selection",
      "Project Timeline",
      "Basic Support"
    ]
  },
  {
    title: "Professional Plan",
    price: 4999,
    delay: '.5s',
    description: "Ideal for medium-sized projects",
    popular: true,
    feature_data: [
      "Everything in Basic Plan",
      "Detailed Design Planning",
      "3D Visualization",
      "Material & Vendor Management",
      "Dedicated Project Manager",
      "Regular Progress Updates"
    ]
  },
  {
    title: "Premium Plan",
    price: 9999,
    delay: '.7s',
    description: "Complete solution for large-scale projects",
    feature_data: [
      "Everything in Professional Plan",
      "Custom Design Solutions",
      "Premium Materials",
      "Priority Scheduling",
      "24/7 Support",
      "Post-Project Maintenance",
      "Warranty Coverage"
    ]
  }
];

const PricingArea = () => {
  return (
    <div className="pricing-area">
      <div className="pricing-header">
        <span className="section-subtitle">Pricing Plans</span>
        <h2 className="section-title">Choose Your Perfect Plan</h2>
        <p className="section-description">
          Select the plan that best fits your project needs and budget
        </p>
      </div>

      <div className="pricing-grid">
        {price_data.map((item, i) => (
          <div 
            key={i} 
            className={`pricing-card ${item.popular ? 'popular' : ''}`}
            data-wow-duration=".9s" 
            data-wow-delay={item.delay}
          >
            {item.popular && (
              <div className="popular-badge">Most Popular</div>
            )}
            
            <div className="pricing-card-header">
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{item.price}</span>
                <span className="period">/project</span>
              </div>
            </div>

            <div className="pricing-features">
              <ul>
                {item.feature_data.map((feature, index) => (
                  <li key={index}>
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing-footer">
              <Link 
                href="/contact" 
                className={`pricing-button ${item.popular ? 'popular' : ''}`}
              >
                Get Started
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-note">
        <p>
          * All plans include a free initial consultation. Custom solutions available for specific requirements.
        </p>
      </div>
    </div>
  );
};

export default PricingArea;