"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ServiceDetailsModal from "../ServiceDetailsModal/SeriveDetailsModal";
import './service-details.scss';
import { service_data } from "../service/SeerviceArea";
import { Spin } from "antd";


interface ServiceDetailsAreaProps {
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

// Import the service data
// const service_data = [
//   {
//     id: 1,
//     home: "service",
//     img: "https://www.pcl.com/content/dam/people-working/fpz_20200807_1424.jpg",
//     title: "General Contracting",
//     description:
//       "We oversee the entire construction process from start to finish, including planning, coordination, subcontractor management, materials, and compliance.",
//   },
//   {
//     id: 2,
//     home: "service",
//     img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728183/download_1_gfztxy.jpg",
//     title: "Interior Design & Decoration",
//     description:
//       "We transform interior spaces with personalized design and decoration plans that combine aesthetics and functionality.",
//   },
//   {
//     id: 3,
//     home: "service",
//     img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728177/images_1_uek7q6.jpg",
//     title: "Painting & Finishing",
//     description:
//       "Our team provides expert painting services and high-quality finishes that protect and beautify your property.",
//   },
//   {
//     id: 4,
//     home: "service",
//     img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728184/images_zdlngb.jpg",
//     title: "Renovation & Extensions",
//     description:
//       "From small updates to large extensions, we help upgrade your property to better suit your needs and lifestyle.",
//   },
//   {
//     id: 5,
//     home: "service",
//     img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747728286/download_2_uhbysa.jpg",
//     title: "Electrical & Plumbing Works",
//     description:
//       "We deliver reliable electrical and plumbing services that meet all safety standards and project requirements.",
//   },
// ];

const ServiceDetailsArea: React.FC<ServiceDetailsAreaProps> = ({ serviceId }) => {
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const [filteredData, setFilteredData] = useState<ServiceData | null>(null);

  useEffect(() => {
    const finalData = service_data?.find(item => item?.id === Number(serviceId));
    console.log(finalData);
    if (finalData) {
      setFilteredData(finalData as ServiceData);
    }
  }, [serviceId]);

  if (!filteredData) {
    return <div style={{height:"100vh" , display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Spin size="large" />
    </div>;
  }

  return (
    <section className="service-details">
      <h3 className="main-service-detail-title">{filteredData.title}</h3>
      <p className="main-service-detail-desc">{filteredData.description}</p>

      <div className="gallery-section">
        <div className="gallery-grid">
          <div className="main-image">
            <Image src={filteredData.img} alt={filteredData.title} width={700} height={350} />
          </div>
          <div className="thumbnail-grid">
            {filteredData.images?.slice(0, 4).map((item, i) => (
              <div key={i} className="thumbnail">
                <Image
                  src={item}
                  alt={"image"}
                  width={100}
                  height={100}
                />
                {i === 3 && filteredData.images && filteredData.images.length > 4 && (
                  <div
                    className="overlay"
                    onClick={() => setOpenGalleryModal(true)}
                  >
                    +{filteredData.images.length - 4}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceDetailsModal
        open={openGalleryModal}
        setOpen={setOpenGalleryModal}
        images={filteredData.images}
      />
    </section>
  );
};

export default ServiceDetailsArea;
