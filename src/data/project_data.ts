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
  id: number;
  service: string;
  path: string;
  price?: number;
  category?: string | any;
  img: string | StaticImageData;
  title: string;
  description?: string;
  images: any;
  location?: string;
  specs?: {
    floors?: number;
    basementLevels?: number;
    parkingCapacity?: string;
    builtUpArea?: string;
    deliveryDate?: string;
  };
  overview?: string;
  features?: string[];
  nearbyLandmarks?: string[];
  timeline?: {
    date: string;
    title: string;
    description: string;
  }[];
  outcomes?: {
    value: string;
    label: string;
  }[];
}

const project_data: DataType[] = [
  {
    id: 1,
    service: "General Contracting",
    path: "commercial",
    category: "Restaurant",
    title: "Nour Maison",
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748247479/download_b1l96d_zrow8y.jpg",
    description:
      "Modern restaurant space with contemporary design and premium dining experience.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748247970/download_cmgnkv_cy0uwj.jpg",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748247970/465984384_1590238098232979_2569484348972359367_n_lndhof_ei7ooq.jpg",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748247970/zexptzvrvwxbsvi8pqho_ejayft.webp",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748247969/466253647_534065926272992_1731520913535440885_n_lccww5_x2bil4.jpg",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748247479/download_b1l96d_zrow8y.jpg",
    ],
    location: "149 Grafton Gate, Milton Keynes MK9 1AE, UK",
    specs: {
      floors: 2,
      basementLevels: 1,
      parkingCapacity: "50+ cars",
      builtUpArea: "500 sqm",
      deliveryDate: "Q4 2024",
    },
    overview:
      "A premium dining establishment featuring modern architecture, state-of-the-art kitchen facilities, and elegant dining spaces.",
    features: [
      "Modern kitchen equipment",
      "Indoor and outdoor seating",
      "Private dining rooms",
      "Bar and lounge area",
      "Smart reservation system",
    ],
    nearbyLandmarks: [
      "5 minutes to Milton Keynes Central",
      "10 minutes to Shopping Centre",
      "15 minutes to Business District",
    ],
    timeline: [
      {
        date: "January 2023",
        title: "Project Initiation",
        description: "Design and planning phase",
      },
      {
        date: "June 2023",
        title: "Construction Started",
        description: "Interior renovation and kitchen installation",
      },
    ],
    outcomes: [
      {
        value: "200",
        label: "Seating Capacity",
      },
      {
        value: "500",
        label: "Built-up Area (sqm)",
      },
    ],
  },
  // 🏢 Commercial Projects
  {
    id: 1,
    service: "General Contracting",
    path: "commercial",
    category: "Office",
    title: "Downtown Corporate Plaza",
    img: project_img_1,
    description:
      "Modern office space development with energy-efficient design.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Downtown Business District",
    specs: {
      floors: 20,
      basementLevels: 2,
      parkingCapacity: "200+ cars",
      builtUpArea: "25,000 sqm",
      deliveryDate: "Q4 2024",
    },
    overview:
      "A state-of-the-art commercial complex featuring modern office spaces, retail areas, and premium amenities.",
    features: [
      "Smart building management system",
      "Green building certification",
      "Premium office spaces",
      "Underground parking",
      "24/7 security",
    ],
    nearbyLandmarks: [
      "5 minutes to Central Station",
      "10 minutes to International Airport",
      "15 minutes to Shopping District",
    ],
    timeline: [
      {
        date: "January 2023",
        title: "Project Initiation",
        description: "Planning and design phase",
      },
      {
        date: "June 2023",
        title: "Construction Started",
        description: "Foundation work completed",
      },
    ],
    outcomes: [
      {
        value: "20",
        label: "Total Floors",
      },
      {
        value: "25,000",
        label: "Built-up Area (sqm)",
      },
    ],
  },
  {
    id: 2,
    service: "Interior Design & Decoration",
    path: "commercial",
    category: "Retail",
    title: "Metro Mall Extension",
    img: project_img_2,
    description: "Expansion of a high-traffic retail mall with smart parking.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Metro Business District",
    specs: {
      floors: 5,
      basementLevels: 2,
      parkingCapacity: "500+ cars",
      builtUpArea: "50,000 sqm",
      deliveryDate: "Q2 2024",
    },
    overview:
      "A modern retail expansion project featuring premium shopping spaces and entertainment zones.",
    features: [
      "Smart parking system",
      "Premium retail spaces",
      "Food court",
      "Entertainment zone",
      "24/7 security",
    ],
    nearbyLandmarks: [
      "2 minutes to Metro Station",
      "5 minutes to Business District",
      "10 minutes to Residential Area",
    ],
  },

  // 🏠 Residential Projects
  {
    id: 3,
    service: "Painting & Finishing",
    path: "residential",
    category: "Villas",
    title: "Sunset Hills Residences",
    img: project_img_3,
    description: "Luxury villas with private pools and smart home integration.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Sunset Hills District",
    specs: {
      floors: 2,
      basementLevels: 1,
      parkingCapacity: "4 cars per villa",
      builtUpArea: "400 sqm per villa",
      deliveryDate: "Q3 2024",
    },
    overview:
      "Luxury residential development featuring modern villas with premium amenities.",
    features: [
      "Smart home integration",
      "Private pools",
      "Landscaped gardens",
      "Security system",
      "Premium finishes",
    ],
  },
  {
    id: 4,
    service: "Renovation & Extensions",
    path: "residential",
    category: "Apartments",
    title: "CityView Apartments",
    img: project_img_4,
    description: "High-rise family apartments with stunning skyline views.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Downtown Area",
    specs: {
      floors: 25,
      basementLevels: 2,
      parkingCapacity: "300+ cars",
      builtUpArea: "30,000 sqm",
      deliveryDate: "Q1 2025",
    },
    overview:
      "Premium high-rise residential project offering panoramic city views.",
    features: [
      "Skyline views",
      "Rooftop amenities",
      "Fitness center",
      "Swimming pool",
      "24/7 concierge",
    ],
  },

  // 🏗️ Industrial Constructions
  {
    id: 5,
    service: "Electerical & Plumbing Work",
    path: "industrial",
    category: "Warehouse",
    title: "LogiHub Facility",
    img: project_img_5,
    description: "Advanced warehousing system with automated loading bays.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Industrial Zone",
    specs: {
      floors: 1,
      basementLevels: 0,
      parkingCapacity: "50+ trucks",
      builtUpArea: "15,000 sqm",
      deliveryDate: "Q4 2024",
    },
    overview:
      "State-of-the-art logistics facility with advanced automation systems.",
    features: [
      "Automated loading bays",
      "Smart inventory system",
      "Security monitoring",
      "Fire safety systems",
      "Employee facilities",
    ],
  },
  {
    id: 6,
    service: "General COntracting",
    path: "industrial",
    category: "Manufacturing",
    title: "NovaTech Plant",
    img: project_img_6,
    description: "Turnkey factory project including internal logistics.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Industrial Park",
    specs: {
      floors: 2,
      basementLevels: 1,
      parkingCapacity: "100+ cars",
      builtUpArea: "20,000 sqm",
      deliveryDate: "Q2 2025",
    },
    overview:
      "Modern manufacturing facility with integrated logistics systems.",
    features: [
      "Automated production lines",
      "Quality control labs",
      "Employee facilities",
      "Security systems",
      "Environmental controls",
    ],
  },

  // 🌆 Urban & Mixed Use
  {
    id: 7,
    service: "Electerical & Plumbing Work",
    path: "urban",
    category: "Mixed Use",
    title: "Greenbelt Urban Center",
    img: project_img_7,
    description:
      "Retail, office, and residential combined into one smart zone.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Urban District",
    specs: {
      floors: 15,
      basementLevels: 3,
      parkingCapacity: "400+ cars",
      builtUpArea: "45,000 sqm",
      deliveryDate: "Q3 2025",
    },
    overview:
      "Integrated mixed-use development combining retail, office, and residential spaces.",
    features: [
      "Smart building systems",
      "Green spaces",
      "Retail zones",
      "Office spaces",
      "Residential units",
    ],
  },
  {
    id: 8,
    service: "Renovation & Extensions",
    path: "urban",
    category: "Skyscraper",
    title: "Azure Tower",
    img: project_img_8,
    description:
      "Iconic skyscraper with luxury residences and rooftop helipad.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Business District",
    specs: {
      floors: 40,
      basementLevels: 4,
      parkingCapacity: "300+ cars",
      builtUpArea: "60,000 sqm",
      deliveryDate: "Q4 2025",
    },
    overview:
      "Iconic skyscraper featuring luxury residences and premium amenities.",
    features: [
      "Rooftop helipad",
      "Luxury residences",
      "Premium amenities",
      "Smart systems",
      "Security features",
    ],
  },

  // 🏕️ Country Retreats
  {
    id: 9,
    service: "Painting & Finishing",
    path: "country",
    category: "Cottages",
    title: "Willow Creek Escape",
    img: project_img_9,
    description:
      "Nature-based retreat cottages built with local stone & timber.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Countryside",
    specs: {
      floors: 2,
      basementLevels: 0,
      parkingCapacity: "2 cars per cottage",
      builtUpArea: "200 sqm per cottage",
      deliveryDate: "Q1 2025",
    },
    overview:
      "Eco-friendly retreat featuring sustainable cottages in natural surroundings.",
    features: [
      "Local materials",
      "Sustainable design",
      "Natural landscaping",
      "Solar power",
      "Water conservation",
    ],
  },
  {
    id: 10,
    service: "Interior Design & Decoration",
    path: "country",
    category: "Farmhouses",
    title: "Golden Fields Estate",
    img: project_img_10,
    description: "Renovated countryside farmhouses with modern amenities.",
    images: [
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163516/51_gn5y1c.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/41_yuq7ub.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163306/44_rqxx1w.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163022/35_opgm3g.png",
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1748163021/27_b9fhgv.png",
    ],
    location: "Rural Area",
    specs: {
      floors: 2,
      basementLevels: 1,
      parkingCapacity: "3 cars per farmhouse",
      builtUpArea: "300 sqm per farmhouse",
      deliveryDate: "Q2 2025",
    },
    overview:
      "Modernized farmhouses combining traditional charm with contemporary comfort.",
    features: [
      "Modern amenities",
      "Traditional architecture",
      "Landscaped gardens",
      "Smart home features",
      "Sustainable systems",
    ],
  },
];

export default project_data;
