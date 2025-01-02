import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./photos/slider1.png",
    "./photos/slider2.png",
    "./photos/slider3.png",
    "./photos/slider4.png",
    "./photos/slider5.png",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  mx-auto p-4 overflow-hidden bg-[#F7FBF9]">
      <h2 className="text-center text-2xl font-bold mb-4">شركاؤنا بالنجاح</h2>
      <div className="flex items-center justify-between px-10">
        <button
          className=" transform -translate-y-1/2 p-3 "
          onClick={handlePrev}
        >
          <IoIosArrowForward color="rgba(194, 144, 98, 1)" size={32} />
        </button>

        <div className="flex w-full justify-center items-center ">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`w-48 h-auto transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "scale-100" : "scale-75 opacity-50"
              }`}
            />
          ))}
        </div>

        <button
          className=" transform -translate-y-1/2 p-3 "
          onClick={handleNext}
        >
          <IoIosArrowBack color="rgba(194, 144, 98, 1)" size={32} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
