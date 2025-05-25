import { Modal, Spin } from "antd";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import './style.scss';

export default function DetailsImagesModal({ open, setOpen, images = [] }) {
  console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const imgsRef = useRef(null);

  useEffect(() => {
    if (open && images.length > 0) {
      setCurrentIndex(0);
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [open, images]);

  const handleNextImg = () => {
    if (!images.length) return;
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImg = () => {
    if (!images.length) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleScrollToImg = (idx) => {
    const child = imgsRef.current?.children?.[idx];
    if (!child) return;

    try {
      child.scrollIntoView({ behavior: "smooth", inline: "center" });
    } catch (error) {
      console.error("Error scrolling to image:", error);
    }
  };

  const currentImage = images[currentIndex];

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={800}
      destroyOnClose
    >
      <div className="main_img_container">
        {isLoading && (
          <div className="loading-container">
            <Spin size="large" />
          </div>
        )}

        {currentImage ? (
          <Image
            className="main-img"
            src={currentImage}
            width={700}
            height={400}
            alt="Main View"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              console.error("Image load error:", currentImage);
            }}
          />
        ) : (
          <div className="loading-container">
            <Spin size="large" />
            <p>No images available</p>
          </div>
        )}

        {images.length > 1 && (
          <div className="arrows">
            <div onClick={handlePrevImg} className="left-arrow">
              <HiChevronLeft />
            </div>
            <div onClick={handleNextImg} className="right-arrow">
              <HiChevronRight />
            </div>
          </div>
        )}
      </div>

      {images.length > 0 ? (
        <div ref={imgsRef} className="images-slider">
          {images.map((item, index) => (
            <div
              key={`thumb-${index}`}
              className={`img-container ${index === currentIndex ? "selected_img" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                handleScrollToImg(index);
              }}
            >
              <Image
                className="small-img"
                src={item}
                width={200}
                height={60}
                alt={`Thumbnail ${index + 1}`}
                onError={() => console.warn("Thumbnail failed to load:", item)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-images-message">
          <Spin size="large" />
          <p>Loading images...</p>
        </div>
      )}
    </Modal>
  );
}
