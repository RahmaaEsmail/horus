import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ScrollspyNav from "react-scrollspy-nav";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";
import demo_img_4 from "@/assets/img/menu/home-4.jpg";
import demo_img_5 from "@/assets/img/menu/home-5.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown: boolean;
  // sub_menus: {
  //   link: string;
  //   title: string;
  //   one_page_link: string;
  //   demo_img: StaticImageData;
  // }[];
}
[];
const on_page_menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    img_dropdown: true,
    // sub_menus: [
    //   { link: "/", title: "Home 01", one_page_link: "/home-1-one-page", demo_img: demo_img_1, },
    //   { link: "/home-2", title: "Home 02", one_page_link: "/home-2-one-page", demo_img: demo_img_2, },
    //   { link: "/home-3", title: "Home 03", one_page_link: "/home-3-one-page", demo_img: demo_img_3, },
    //   { link: "/home-4", title: "Home 04", one_page_link: "/home-4-one-page", demo_img: demo_img_4, },
    //   { link: "/home-5", title: "Home 05", one_page_link: "/home-5-one-page", demo_img: demo_img_5, },
    // ],
  },
  {
    id: 2,
    title: "Services",
    link: "/service",
    img_dropdown:false,
  },
  {
    id: 3,
    title: "About Us",
    link: "/about-us",
    img_dropdown:false,
  },
  {
    id:4,
    title:"Projects",
    link:"/projects",
    img_dropdown:false,
  },
  // {
  //   id: 5,
  //   title: "Gallery",
  //   link: "/service",
  //   img_dropdown:false,
  // },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact",
    img_dropdown:false,
  },
  // {
  //   id: 7,
  //   title: "Product",
  //   link: "/service",
  //   img_dropdown:false,
  // },
  // {
  //   id: 8,
  //   title: "Blog",
  //   link: "/blog-classic",
  //   img_dropdown:false,
  // }
];

type styleType = {
  onePageHomeOne?: any;
  onePageHomeTwo?: any;
  onePageHomeThree?: any;
  onePageHomeFour?: any;
  onePageHomeFive?: any;
  style_2?: any;
};
const OnPageMenu = ({
  onePageHomeOne,
  onePageHomeTwo,
  onePageHomeThree,
  onePageHomeFour,
  onePageHomeFive,
  style_2,
}: styleType) => {
  return (
    <>
      <ul className="flex flex-col space-y-2">
        {on_page_menu_data.map((item, i) => (
          <li key={i} className="relative group">
            <Link className="text-gray-800 transition-colors hover:text-blue-600" href={item.link}>
              {item.title}
            </Link>
          </li>
        ))}



        {/* {onePageHomeThree && (
          <ScrollspyNav
            scrollTargetIds={[
              "Service",
              "About",
              "Gallery",
              "Team",
              "Product",
              "Blog",
            ]}
            offset={10}
            scrollDuration="1000"
            headerBackground="true"
          >
            <li>
              <Link href="/service" className="text-gray-800 transition-colors hover:text-blue-600">Services</Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-800 transition-colors hover:text-blue-600">About Us</Link>
            </li>
            <li>
              <a href="#gallery-one-page" className="text-gray-800 transition-colors hover:text-blue-600">Gallery</a>
            </li>
            <li>
              <a href="#team-one-page" className="text-gray-800 transition-colors hover:text-blue-600">Team</a>
            </li>
            <li>
              <a href="#product-one-page" className="text-gray-800 transition-colors hover:text-blue-600">Product</a>
            </li>
            <li>
              <a href="#blog-one-page" className="text-gray-800 transition-colors hover:text-blue-600">Blog</a>
            </li>
          </ScrollspyNav>
        )} */}
      </ul>
    </>
  );
};

export default OnPageMenu;
