import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled at all
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('./photos/Hero.jfif')` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-90 z-0"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-4 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-[rgba(209,232,226,0.2)] text-white "
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the right */}
          <img src="./photos/logo.png" alt="Logo" className="h-20 w-36" />

          {/* Tabs in the middle */}
          <div className="hidden md:flex gap-8">
            <a
              href="#home"
              className={` hover:underline focus:underline focus:text-[rgba(194,144,98,1)] ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              الرئيسية{" "}
            </a>
            <a
              href="#about"
              className={` hover:underline focus:underline focus:text-[rgba(194,144,98,1)] ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              من نحن
            </a>
            <a
              href="#contact"
              className={` hover:underline focus:underline focus:text-[rgba(194,144,98,1)] ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              تواصل معنا
            </a>
            <a
              href="#"
              className={` hover:underline focus:underline focus:text-[rgba(194,144,98,1)] ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              المساعدة
            </a>
          </div>

          {/* Button on the left */}
          <Link to="login">
            <button className="flex items-center justify-center gap-2 px-6 py-2 bg-[rgba(194,144,98,1)] text-white rounded-full hover:bg-opacity-80 transition">
              <BsFillPersonFill size={28} />
              تسجيل دخول
            </button>
          </Link>

          {/* Burger menu for small screens */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile menu (shown on small screens) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-[rgba(209,232,226,0.9)] p-4">
            <a href="#about" className="block text-black hover:underline">
              من نحن
            </a>
            <a href="#contact" className="block text-black hover:underline">
              تواصل معنا
            </a>
            <a href="#help" className="block text-black hover:underline">
              المساعدة
            </a>
            <a href="#home" className="block text-black hover:underline">
              الرئيسية
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="h-full flex gap-96 items-center justify-center text-center text-white p-20 relative z-10">
        {/* Photos */}
        <div className="flex relative gap-10">
          <img
            src="./photos/1.jfif"
            alt="Image 1"
            className="relative w-60 h-80 object-cover border-4 border-white top-32 rounded-2xl"
          />
          <img
            src="./photos/3.jfif"
            alt="Image 2"
            className="relative w-80 h-60 object-cover border-4 border-white top-40  rounded-2xl"
          />
          <img
            src="./photos/2.jfif"
            alt="Image 3"
            className="absolute top-[20px] left-[10%] w-80 h-60 object-cover border-4 border-white z-[-10] rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-1/2">
          <div className="w-[80%]">
            <h1 className="text-4xl font-bold mb-4 text-right text-[rgba(194,144,98,1)]">
              <span>منصة قيم</span>
              <span>-QAIM</span>
            </h1>
            <h2 className="text-xl mb-8 text-right">
              اكبر منصة بالشرق الاوسط لحلول إدارة الاملاك العقارية
            </h2>
            <p className="text-right text-lg text-[rgba(139,148,198,1)]">
              تقنيات عقارية تمكن المكاتب والشركات العقارية من اتمة عمليات الشراء
              للوحدات والمرافق العقارية . تتوافق وترتبط بالخدمات الحكومية ومزودة
              بأنظمة محاسبية ألية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
