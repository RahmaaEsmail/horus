

import { StaticImageData } from 'next/image';
// testimonial img 
import testimonial_img_1 from '@/assets/img/testimonial/thumb-1-1.jpg'
import testimonial_img_2 from '@/assets/img/testimonial/thumb-1-2.jpg'

import testimonial_img_5_1 from '@/assets/img/testimonial/avata-1-1.png'
import testimonial_img_5_2 from '@/assets/img/testimonial/avata-1-2.png'

interface DataType {
  path: string;
  img?: StaticImageData | any;
  name: string;
  designation: string;
  description: string;
}

const testimonial_data: DataType[] = [
  // home 2
  {
    path: 'home_1',
    img: testimonial_img_1,
    name: 'Annette Black',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_1',
    img: testimonial_img_2,
    name: 'Nathanael Gonsalves',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_1',
    img: testimonial_img_1,
    name: 'Annette Black',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_1',
    img: testimonial_img_2,
    name: 'Nathanael Gonsalves',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_1',
    img: testimonial_img_1,
    name: 'Annette Black',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_1',
    img: testimonial_img_2,
    name: 'Nathanael Gonsalves',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  // home 2
  {
    path: 'home_2',
    name: 'Wade Warren',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_2',
    name: 'Julio Davis',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_2',
    name: 'Jean Macdonald',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },

  // home 5
  {
    path: 'home_5',
    img: testimonial_img_5_1,
    name: 'Esther Howard',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_5',
    img: testimonial_img_5_2,
    name: 'Cody Fisher',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_5',
    img: testimonial_img_5_1,
    name: 'Jean Macdonald',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },
  {
    path: 'home_5',
    img: testimonial_img_5_2,
    name: 'Julio Davis',
    designation: `Marketing Coordinator`,
    description: `loborti viverra laoreet matti ullamcorper posuere in viverra Aliquam eros justo, posuere lobortis non dei Aliquam eros justo, posuere loborti`,
  },



]

export default testimonial_data