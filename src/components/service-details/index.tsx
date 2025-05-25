"use client";
import HeaderFive from '@/layouts/headers/HeaderFive';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import ServiceBenefits from './ServiceBenefits';
import ServiceAsk from './ServiceAsk';
import ServiceDetailsFormQuote  from './serviceDetailsFormQuote';
import { service_data } from '../service/SeerviceArea';

interface ServiceDetailsProps {
  serviceId: string | string[];
}

interface ServiceData {
  id: number;
  home: string;
  img: string;
  title: string;
  description: string;
  images: string[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  const [filteredData, setFilteredData] = useState<ServiceData | null>(null);
  const service = service_data.find(item => item.id === Number(serviceId));


  useEffect(() => {
    const finalData = service_data?.find(item => item?.id === Number(serviceId));
    console.log(finalData);
    if (finalData) {
      setFilteredData(finalData as ServiceData);
    }
  }, [serviceId]);

  if (!service) {
    return <div>Service not found</div>;
  }

  if (!filteredData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image={filteredData?.images[filteredData?.images?.length - 1]} title={filteredData?.title || "Service Details"} subtitle='Service Details' />
            <ServiceDetailsArea serviceId={serviceId} />
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
