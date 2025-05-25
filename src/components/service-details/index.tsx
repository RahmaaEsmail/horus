"use client";
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import Breadcrumb from '../common/Breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import ServiceAsk from './ServiceAsk';
import ServiceDetailsFormQuote from './serviceDetailsFormQuote';
import { service_data } from '../service/SeerviceArea';

interface ServiceDetailsProps {
  serviceId: string | string[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  const service = service_data.find(item => item.id === Number(serviceId));

  if (!service) {
    return (
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              image="https://res.cloudinary.com/dbz6ebekj/image/upload/v1748067464/Highschool_9_Lib-persp-min_sxyhsv.jpg"
              title={service.title}
              subtitle="Service Details"
            />
            <ServiceDetailsArea serviceId={service.id.toString()} />
            {/* <ServiceBenefits /> */}
            <ServiceAsk />
            <ServiceDetailsFormQuote />
            <ContactAreaHomeOne />
          </main>
          <FooterThree />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
