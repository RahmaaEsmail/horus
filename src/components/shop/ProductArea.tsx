
'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import shop_data from '@/data/shop_data';
import shop_sm_img_1 from "@/assets/img/blog/details-sm-1-1.jpg";
import shop_sm_img_2 from "@/assets/img/blog/details-sm-1-2.jpg";
import shop_sm_img_3 from "@/assets/img/blog/details-sm-1-3.jpg";
import UseProducts from '@/hooks/UseProducts';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { selectProducts } from '@/redux/features/productSlice';
import ReactPaginate from 'react-paginate';
import InputRange from '@/ui/InputRange';


interface DataType {
  product_title: string;
  categorys: string[];
  filter_title: string;
  latest_title: string;
  latest_products: {
    img: StaticImageData;
    price: number;
    title: string;
  }[];
}

const shop_content: DataType = {
  product_title: `Product Category`,
  categorys: [
    `Home Deco`,
    `Lighting`,
    `Furniture`,
    `Flooring`,
    `Wall Art`,
  ],
  filter_title: `Price Filter`,
  latest_title: `Our Latest Product`,
  latest_products: [
    {
      img: shop_sm_img_1,
      price: 19,
      title: `White Armchair`,
    },
    {
      img: shop_sm_img_2,
      price: 22,
      title: `Center Table`,
    },
    {
      img: shop_sm_img_3,
      price: 25,
      title: `Center Table`,
    },
  ]
}

const {
  product_title,
  categorys,
  filter_title,
  latest_title,
  latest_products
} = shop_content

const ProductArea = () => {



  let all_data = shop_data
  const { products, setProducts } = UseProducts();

  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    // scoll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dispatch = useDispatch()
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  // all products 
  const allProducts = useSelector(selectProducts);



  const productCategory = useSelector(selectProducts).map(product => product.category);
  // allCategory
  const allCategory = ['All Category', ...new Set(productCategory)];
  // select category
  const [selected, setSelected] = useState('All Category');
  

  const maxPrice = all_data.reduce((max, item) => {
    return item.price > max ? item.price : max;
  }, 0);
  const [priceValue, setPriceValue] = useState([0, maxPrice]);

  useEffect(() => {
    let filterPrice = all_data.filter((j) => j.price >= priceValue[0] && j.price <= priceValue[1]);
    setProducts(filterPrice)
  }, [priceValue])

  const handleChanges = (val: number[]) => {
    setSelected(val.toString())
    setPriceValue(val)
  }
  //handle Category 
  const handleCategory = (category: string) => {
    setSelected(category)  
    if (category === 'All Category') {
      setProducts(allProducts)
      setPriceValue([0, maxPrice])
    }
    else {
      const all_course = allProducts.filter(course => course.category === category); 
      setProducts(all_course)
    }
  }




  return (
    <>
      <div className="tp-product-2-area tp-product-2-style-3  tp-product-2-style-4 fix pt-150 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="row">

                {currentItems.map((item, i) => (
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-product-2-item">
                      <div className="tp-product-2-thumb-box fix p-relative">
                        <div className="tp-product-2-thumb">
                          <Image className="w-100" style={{ objectFit: "cover" }} src={item?.img} alt="image-here" />
                        </div>
                        <div className="tp-product-2-btn">
                          <button onClick={() => handleAddToCart(item)} className="tp-btn-black">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="tp-product-2-content d-flex justify-content-between align-items-center">
                        <h4 className="tp-product-2-title mb-0">
                          <Link href="/shop-details">
                            <span dangerouslySetInnerHTML={{ __html: item?.title }}></span>
                          </Link>
                        </h4>
                        <div className="tp-product-2-rate-2">
                          <span>${item?.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-xl-12">
                  <div className="basic-pagination mt-30">

                    {currentItems.length ?
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={9}
                        pageCount={pageCount}
                        previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                        renderOnZeroPageCount={null}
                      />
                      :
                      <h3> No Products Found </h3>
                    }

                  </div>
                </div>

              </div>

            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar-wrap">
                <div className="tp-shop-sidebar-widget">
                  <h4 className="tp-shop-sidebar-widget-title">{product_title}</h4>
                  <div className="tp-shop-sidebar-widget-content pb-65">

                    <ul>
                      {allCategory.map((item, i) => (
                        <li key={i} onClick={() => handleCategory(item)} className={`${item === selected ? 'active' : ''}`}>
                          <Link href="/shop"><i className="fa-solid fa-angle-right"></i>{item}</Link>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
                <div className="tp-shop-sidebar-widget">
                  <h4 className="tp-shop-sidebar-widget-title title-border">{filter_title}</h4>
                  <div className="tp-shop-sidebar-widget-content">
                    <div className="tp-shop-widget-filter mb-50">
                      <div className="tp-shop-widget-filter-info">

                        <span className="input-range" onChange={() => handleChanges}>
                          ${priceValue[0]} - ${priceValue[1]}
                        </span>

                      </div>
                      <div id="slider-range" className="mb-10 mt-20">
                        <InputRange
                          MAX={maxPrice}
                          MIN={0}
                          STEP={1}
                          values={priceValue}
                          handleChanges={handleChanges}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget">
                  <h3 className="tp-shop-sidebar-widget-title title-border">{latest_title}</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      {latest_products.map((item, i) => (
                        <div key={i} className={`rc__post d-flex align-items-center ${i === 2 ? '' : 'mb-25'}`}>
                          <div className="rc__post-thumb mr-20">
                            <Link href="/shop-details">
                              <Image src={item.img} alt="image-here" />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>${item.price}</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link href="/shop-details">{item.title}</Link>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductArea;