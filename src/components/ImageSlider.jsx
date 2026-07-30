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
    }, 7000);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="flex items-center">
          <button onClick={handlePrev}>{"<"}</button>

          <img className="h-100 w-60" src={images[current]} alt="" />

          <button onClick={handleNext}>{">"}</button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-[#000000ad] rounded">
          {images.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-lg ${
                current === index ? "font-bold text-white" : "text-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
