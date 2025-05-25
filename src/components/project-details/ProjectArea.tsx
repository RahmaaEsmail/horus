"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";

import project_img_1 from "@/assets/img/project/details1-1.jpg";
import project_img_2 from "@/assets/img/project/details1-2.jpg";
import project_img_3 from "@/assets/img/project/details1-3.jpg";

import "./project-details.scss";
import SeriveDetailsModal from "../ServiceDetailsModal/SeriveDetailsModal";
import project_data from "@/data/project_data";
import DetailsImagesModal from "../DetailsImagesModal/DetailsImagesModal";

interface DataType {
  address: string;
  date: string;
  category: string;
  price: string;
  title: string;
  description_1: string;
  description_2: string;
  title_2: string;
  description_3: string;
  features: string[];
}

const project_content: DataType = {
  address: ` Contractin investor: Privet owner`,
  date: `Contructing date: December 2024`,
  category: `Category: DiscoverArt`,
  price: `Value: $9500.00`,
  title: `Experience with Interior Innovations`,
  description_1: `Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis`,
  description_2: `Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis viverra fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, Aliquam eros justo, posuere loborti viverra laorematullamcorpeposuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum.`,
  title_2: `Unleash Your Creativity with Interior Inspiration`,
  description_3: `Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.`,
  features: [
    `Redefine Comfort and Elegance with Interior Solutions`,
    `Make Your House a Home with Interior Perfection`,
    `Enhance Your Lifestyle with Exceptional Interior Design`,
    `Experience the Power of Thoughtful Interior Design`,
  ],
};

const projectData = 
{
  title: "Commercial Office Tower | New Capital | Delivery Q4 2025",
  location: "CBD District, New Administrative Capital, Cairo, Egypt",
  specs: {
    floors: 15,
    basementLevels: 2,
    parkingCapacity: "120+ cars",
    builtUpArea: "18,000 sqm",
    deliveryDate: "December 2025",
  },
  overview:
    "This 15-storey commercial office tower is being constructed in the heart of the CBD...",
  features: [
    "15 floors + rooftop terrace",
    "2 basement levels for parking",
    "Double-height reception lobby",
    "6 high-speed elevators",
    "Firefighting and alarm systems",
    "Energy-efficient HVAC system",
    "Raised floor and false ceiling grid",
    "Full backup generator and UPS",
    "LEED-compliant structural design",
    "Premium-quality aluminum and glass façade",
  ],
  nearbyLandmarks: [
    "2 minutes to Green River Park",
    "5 minutes to Capital International Stadium",
    "7 minutes to Government Ministries Area",
    "10 minutes to Cairo-Suez Road",
    "15 minutes to Ain Sokhna Toll Gate",
  ],
  images: [
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747819183/AdobeStock_243757261_Preview_awmvdg.jpg",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747819174/AdobeStock_275596194_Preview_trefwg.jpg",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747819173/AdobeStock_267445856_Preview_zl8zio.jpg",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747819171/AdobeStock_219424653_Preview_pvii9v.jpg",
    "https://res.cloudinary.com/dbz6ebekj/image/upload/v1747819174/AdobeStock_275596194_Preview_trefwg.jpg",
  ],
  timeline: [
    {
      date: "January 2024",
      title: "Project Initiation",
      description: "Initial planning and design phase completed",
    },
    {
      date: "March 2024",
      title: "Construction Started",
      description: "Foundation work and initial structure development",
    },
    {
      date: "June 2024",
      title: "Mid-Phase Progress",
      description: "Main structure completion and interior work begins",
    },
    {
      date: "December 2024",
      title: "Final Phase",
      description: "Finishing touches and quality assurance",
    },
  ],
  outcomes: [
    {
      value: "15",
      label: "Total Floors",
    },
    {
      value: "18,000",
      label: "Built-up Area (sqm)",
    },
    {
      value: "120+",
      label: "Parking Spaces",
    },
    {
      value: "2025",
      label: "Delivery Year",
    },
  ],
};

const {
  address,
  date,
  category,
  price,
  title,
  description_1,
  description_2,
  title_2,
  description_3,
  features,
} = project_content;

interface ProjectAreaProps {
  project_id: number;
}

const ProjectArea = ({ project_id }: ProjectAreaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgList = useRef<HTMLDivElement>(null);
  const [openModalImg, setOpenModalImg] = useState(false);
  const [filteredData, setFilteredData] = useState<any>(null);

  useEffect(() => {
    const data = project_data?.find(item => item?.id == project_id);
    setFilteredData(data);
  }, [project_id]);

  useEffect(() => {
    console.log(filteredData)
  } , [filteredData])

  return (
    <div className="tp-project-details-area pt-50 pb-120">
      <div className="project-details-container">
        <div className="container">
          <div className="project_images_grid">
            <div>
              <Image
                src={filteredData?.img}
                alt="Project Main Image"
                width={800}
                height={600}
              />
            </div>

            <div className="last_grid_img">
              {filteredData?.images?.slice(1, 5)?.map((item: string, index: number) => (
                <div key={index}>
                  <Image
                    src={item}
                    alt="Project Image Thumbnail"
                    width={400}
                    height={300}
                  />
                  {index === 3 && projectData?.images?.length > 4 && (
                    <div onClick={() => setOpenModalImg(true)} className="img_overlay">+{filteredData?.images?.length - 4}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="project-content">
            <div>
              <h3>{filteredData?.title}</h3>
              <p>Location: {filteredData?.location}</p>

              <ul>
                <li>Floors :{filteredData?.specs?.floors}</li>
                <li>Area :{filteredData?.specs?.builtUpArea}</li>
                <li>Size :{filteredData?.specs?.basementLevels}</li>
                <li>Handover Date :{filteredData?.specs?.deliveryDate}</li>
              </ul>
            </div>

            <div className="project-overview">
              <h4>Project Overview : </h4>
              <p>{filteredData?.overview}</p>
            </div>

            <div className="project-overview">
              <h4>Features : </h4>
              <ul>
                {filteredData?.features?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-overview">
              <h4>Nearby Land Marks : </h4>
              <ul>
                {filteredData?.nearbyLandmarks?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="timeline-outcome-row">
            <div className="timeline-section">
              <h4 className="section-title">Project Timeline</h4>
              <div className="timeline">
                {filteredData?.timeline?.map((item: { date: string; title: string; description: string }, index: number) => (
                  <div key={index} className="timeline-item">
                    <div className="date">{item.date}</div>
                    <h5 className="title">{item.title}</h5>
                    <p className="description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="outcome-section">
              <h4 className="section-title">Project Outcomes</h4>
              <div className="outcome-grid">
                {filteredData?.outcomes?.map((item: { value: string; label: string }, index: number) => (
                  <div key={index} className="outcome-item">
                    <div className="value">{item.value}</div>
                    <div className="label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DetailsImagesModal  open={openModalImg} setOpen={setOpenModalImg} images={filteredData?.images}/>

      {/* <SeriveDetailsModal open={openModalImg} setOpen={setOpenModalImg} images={filteredData?.images}/> */}
    </div>
  );
};

export default ProjectArea;
