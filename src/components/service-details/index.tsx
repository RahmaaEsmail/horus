import HeaderFive from '@/layouts/headers/HeaderFive';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterThree from '@/layouts/footers/FooterThree';
import ServiceBenefits from './ServiceBenefits';
import ServiceAsk from './ServiceAsk';
import ServiceDetailsFormQuote  from './serviceDetailsFormQuote';

interface ServiceDetailsProps {
  serviceId: string | string[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  return (
    <>
      <HeaderOne onePageHomeThree={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title='Service Details' subtitle='Service Details' />
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