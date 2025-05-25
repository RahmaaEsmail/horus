"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import './service-details.scss';
import { service_data } from "../service/SeerviceArea";
import { Spin } from "antd";
import DetailsImagesModal from '../DetailsImagesModal/DetailsImagesModal';

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
      <h3 className="main-service-detail-title">{filteredData?.title}</h3>
      <p className="main-service-detail-desc">{filteredData?.description}</p>

      <div className="gallery-section">
        <div className="gallery-grid">
          <div className="main-image">
            <Image src={filteredData?.img} alt={filteredData?.title} width={700} height={350} />
          </div>
          <div className="thumbnail-grid">
            {filteredData?.images?.slice(0, 4).map((item, i) => (
              <div key={i} className="thumbnail">
                <Image
                  src={item}
                  alt={"image"}
                  width={100}
                  height={100}
                />
                {i === 3 && filteredData?.images && filteredData?.images?.length > 4 && (
                  <div
                    className="overlay"
                    onClick={() => setOpenGalleryModal(true)}
                  >
                    +{filteredData?.images?.length - 4}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <DetailsImagesModal  open={openGalleryModal} setOpen={setOpenGalleryModal} images={filteredData?.images}/>
      {/* <ServiceDetailsModal
        open={openGalleryModal}
        setOpen={setOpenGalleryModal}
        images={filteredData?.images || []}
      /> */}
    </section>
  );
};

export default ServiceDetailsArea;
