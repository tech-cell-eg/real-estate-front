import PropTypes from "prop-types";
import { useState, useRef } from "react";

const notifications = [
  {
    image: "https://via.placeholder.com/40",
    title: "تم ارسال تقرير التقييم",
    subtitle: "طلب لتعيين ,مبني سكني مكون من ثلاث طوابق",
    time: "قبل دقيقتين",
  },
  {
    image: "https://via.placeholder.com/40",
    title: "تم سداد رسوم المعاين",
    subtitle: "طلب لتعيين ,مبني سكني مكون من ثلاث طوابق",
    time: "قبل ساعة",
  },
];

const Notification = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useState(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative flex  text-xl text-primary hover:text-white focus:outline-none"
      >
        {label}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg z-50"
          dir="rtl"
        >
          {/* <div className="p-4 border-b">
            <span className="font-bold text-gray-800">الإشعارات</span>
          </div> */}

          <div className="max-h-60 overflow-y-auto">
            {notifications?.length > 0 ? (
              notifications?.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={notification.image}
                    alt="Notification"
                    className="w-10 h-10 rounded-full"
                  />

                  <div className="flex flex-col">
                    <span className="text-s font-semibold text-black">
                      {notification.title}
                    </span>
                    <span className="text-sm text-gray-800">
                      {notification.subtitle}
                    </span>
                    <span className="text-xs text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-3 text-sm text-gray-500 text-center">
                لا توجد إشعارات
              </div>
            )}
          </div>

          {/* <div className="p-3 border-t text-center">
            <button className="text-sm text-primary hover:underline">
              عرض كل الإشعارات
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Notification;
