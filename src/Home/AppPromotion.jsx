import React from "react";

const AppPromotion = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f9f5ee] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Content Wrapper */}
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Phone Image */}
        <div className="flex justify-center">
          <img
            src="./photos/mobile.png" // Replace with the actual image src
            alt="Phone showing QAIM app"
            className="w-40 sm:w-48 lg:w-56"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
          يمكنك تحميل تطبيق <span className="text-orange-500">قيم - QAIM</span>{" "}
          الآن!
        </h2>

        {/* Rating */}
        <div className="flex justify-center items-center space-x-1 mt-4">
          <span className="text-yellow-500 text-xl">&#9733;</span>
          <span className="text-yellow-500 text-xl">&#9733;</span>
          <span className="text-yellow-500 text-xl">&#9733;</span>
          <span className="text-yellow-500 text-xl">&#9733;</span>
          <span className="text-yellow-500 text-xl">&#9733;</span>
        </div>

        {/* Downloads Text */}
        <p className="text-center text-gray-700 mt-2">
          أكثر من 20,000 عملية تنزيل حتى الآن
        </p>

        {/* App Store and Google Play */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="block">
            <img
              src="./photos/apple.png"
              alt="Download on Google Play"
              className="w-32"
            />
          </a>
          <a href="#" className="block">
            <img
              src="./photos/google.png"
              alt="Download on App Store"
              className="w-32"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
