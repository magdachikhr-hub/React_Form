import React, { useEffect, useState } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
  }, []);

  return (
    <>
      <img className="h-100" src={images[current]} alt="" />
    </>
  );
}

export default ImageSlider;
