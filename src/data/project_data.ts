

import { StaticImageData } from "next/image";
import project_img_1 from "@/assets/img/project/project-6-1.jpg";
import project_img_2 from "@/assets/img/project/project-6-2.jpg";
import project_img_3 from "@/assets/img/project/project-6-3.jpg";
import project_img_4 from "@/assets/img/project/project-6-4.jpg";

// home 2
import project_img_5 from "@/assets/img/project/project-2-1.jpg";
import project_img_6 from "@/assets/img/project/project-2-2.jpg";
import project_img_7 from "@/assets/img/project/project-2-3.jpg";


// home 3
import project_img_8 from "@/assets/img/project/project-3-1.jpg";
import project_img_9 from "@/assets/img/project/project-3-2.jpg";
import project_img_10 from "@/assets/img/project/project-3-3.jpg";
import project_img_11 from "@/assets/img/project/project-3-4.jpg";
import project_img_12 from "@/assets/img/project/project-3-5.jpg";

// home 5
import project_img_13 from "@/assets/img/project/project-5-1.jpg";
import project_img_14 from "@/assets/img/project/project-5-2.jpg";
import project_img_15 from "@/assets/img/project/project-5-3.jpg";
import project_img_16 from "@/assets/img/project/project-5-4.jpg";
import project_img_17 from "@/assets/img/project/project-5-5.jpg";

// project 
import project_img_18 from "@/assets/img/project/project-4-1.jpg";
import project_img_19 from "@/assets/img/project/project-4-2.jpg";
import project_img_20 from "@/assets/img/project/project-4-3.jpg";
import project_img_21 from "@/assets/img/project/project-4-4.jpg";
import project_img_22 from "@/assets/img/project/project-4-5.jpg";
import project_img_23 from "@/assets/img/project/project-4-6.jpg";

// shop details 
import project_img_24 from "@/assets/img/product/thumb-1-1.jpg";
import project_img_25 from "@/assets/img/product/thumb-1-2.jpg";
import project_img_26 from "@/assets/img/product/thumb-1-3.jpg";
import project_img_27 from "@/assets/img/product/thumb-1-4.jpg";





interface DataType {
  id:number,
  service:string,
  path: string;
  price?: number;
  category?: string | any;
  img: StaticImageData;
  title: string;
  description?: string;
}


const project_data: DataType[] = [
  // 🏢 Commercial Projects
  {
    id:1,
    service:"General COntracting",
    path: "commercial",
    category: "Office",
    title: "Downtown Corporate Plaza",
    img: project_img_1,
    description: "Modern office space development with energy-efficient design.",
  },
  {
    id:2,
    service:"Interior Design & Decoration",
    path: "commercial",
    category: "Retail",
    title: "Metro Mall Extension",
    img: project_img_2,
    description: "Expansion of a high-traffic retail mall with smart parking.",
  },

  // 🏠 Residential Projects
  {
    id:3,
    service:"Painting & Finishing",
    path: "residential",
    category: "Villas",
    title: "Sunset Hills Residences",
    img: project_img_3,
    description: "Luxury villas with private pools and smart home integration.",
  },
  {
    id:4,
    service:"Renovation & Extensions",
    path: "residential",
    category: "Apartments",
    title: "CityView Apartments",
    img: project_img_4,
    description: "High-rise family apartments with stunning skyline views.",
  },

  // 🏗️ Industrial Constructions
  {
    id:5,
    service:"Electerical & Plumbing Work",
    path: "industrial",
    category: "Warehouse",
    title: "LogiHub Facility",
    img: project_img_5,
    description: "Advanced warehousing system with automated loading bays.",
  },
  {
    id:6,
    service:"General COntracting",
    path: "industrial",
    category: "Manufacturing",
    title: "NovaTech Plant",
    img: project_img_6,
    description: "Turnkey factory project including internal logistics.",
  },

  // 🌆 Urban & Mixed Use
  {
    id:7,
    service:"Electerical & Plumbing Work",
    path: "urban",
    category: "Mixed Use",
    title: "Greenbelt Urban Center",
    img: project_img_7,
    description: "Retail, office, and residential combined into one smart zone.",
  },
  {
    id:8,
    service:"Renovation & Extensions",
    path: "urban",
    category: "Skyscraper",
    title: "Azure Tower",
    img: project_img_8,
    description: "Iconic skyscraper with luxury residences and rooftop helipad.",
  },

  // 🏕️ Country Retreats
  {
    id:9,
    service:"Painting & Finishing",
    path: "country",
    category: "Cottages",
    title: "Willow Creek Escape",
    img: project_img_9,
    description: "Nature-based retreat cottages built with local stone & timber.",
  },
  {
    id:10,
    service:"Interior Design & Decoration",
    path: "country",
    category: "Farmhouses",
    title: "Golden Fields Estate",
    img: project_img_10,
    description: "Renovated countryside farmhouses with modern amenities.",
  },
];


export default project_data