import { Modal } from "antd";
import React, { useRef, useState } from "react";
import "./service_details_modal.scss";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import Image from "next/image";

export default function SeriveDetailsModal({ open, setOpen, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgsRef = useRef(null);

  function handleNextImg() {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }

  function handlePrevImg() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  function handleScrollToImg(idx) {
    if (imgsRef.current?.children?.[idx]) {
      imgsRef.current.children[idx].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }

  console.log(images, images[currentIndex]);

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={800}
    >
      <div className="main_img_container">
        <Image
          className="main-img"
          src={images?.length && images[currentIndex]}
          width={700}
          height={400}
          alt="Main View"
        />
        <div className="arrows">
          <div onClick={handlePrevImg} className="left-arrow">
            <HiChevronLeft />
          </div>
          <div onClick={handleNextImg} className="right-arrow">
            <HiChevronRight />
          </div>
        </div>
      </div>

      <div ref={imgsRef} className="images-slider">
        {images.map((item, index) => {
          console.log(item);
          return (
            <div
              key={item.id}
              className={`img-container ${
                index === currentIndex ? "selected_img" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
                handleScrollToImg(index);
              }}
            >
              <Image
                className="small-img"
                src={item || item.img}
                width={200}
                height={60}
                alt={`Thumb ${index}`}
              />
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
