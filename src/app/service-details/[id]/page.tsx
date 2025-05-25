import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Interno Service Details - Architecture & Interior Next js Template",
  description: "View detailed information about our construction and interior design services",
};

interface PageProps {
  params: {
    id: string;
  };
}

const ServiceDetailsPage = ({ params }: PageProps) => {
  return (
    <Wrapper>
      <ServiceDetails serviceId={params.id} />
    </Wrapper>
  );
};

export default ServiceDetailsPage;