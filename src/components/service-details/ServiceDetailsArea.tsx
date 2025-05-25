"use client";
import React, { useState } from "react";
import Image from "next/image";
import SeriveDetailsModal from "../ServiceDetailsModal/SeriveDetailsModal";
import './service-details.scss';


interface ServiceDetailsAreaProps {
  serviceId: string | string[];
}

// Import the service data
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

const ServiceDetailsArea: React.FC<ServiceDetailsAreaProps> = ({ serviceId }) => {
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  
  const service = service_data.find(item => item.id === Number(serviceId));

  if (!service) {
    return <div>Service not found</div>;
  }
  console.log(service);

  return (
    <section className="service-details">
      <h3 className="main-service-detail-title">{service?.title}</h3>
      <p className="main-service-detail-desc">{service?.description}</p>

      <div className="gallery-section">
  
        <div className="gallery-grid">
          <div className="main-image">
            <Image src={service.img} alt={service.title} width={700} height={350} />
          </div>
          <div className="thumbnail-grid">
            {service_data.slice(0, 4).map((item, i) => (
              <div key={item.id} className="thumbnail">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                {i === 3 && service_data.length > 4 && (
                  <div
                    className="overlay"
                    onClick={() => setOpenGalleryModal(true)}
                  >
                    +{service_data.length - 4}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SeriveDetailsModal
        open={openGalleryModal}
        setOpen={setOpenGalleryModal}
        images={service_data.map(item => ({ id: item.id, img: item.img }))}
      />
    </section>
  );
};

export default ServiceDetailsArea;
