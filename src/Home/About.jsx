const About = () => {
  return (
    <div className="px-4 py-10 bg-[#F7FBF9] text-center">
      {/* Title Section */}
      <h1 className="text-3xl font-bold">
        <span className="text-[#464646]">ما هي منصة</span>{" "}
        <span className="text-[#D19A5F]">قيم - QAIM؟</span>
      </h1>
      <p className="text-[rgba(194,144,98,1)] mt-4 text-base max-w-2xl mx-auto">
        نتيح لطالبي خدمة التقييم من الوصول إلى جميع شركات التقييم الموجودة في
        منطقتهم بالإضافة إلى تقديم الشركات أو مكاتب التقييم عرض السعر لتنفيذ هذه
        الخدمة وبالتالي يتيح لكم اختيار الأفضل سعراً وأكثر كفاءة.
      </p>

      {/* Cards Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-28 justify-center px-16">
        {/* Card 1 */}
        <div className="group flex-col w-[20%] items-center justify-center bg-[rgba(209,232,226,1)] shadow-xl rounded-t-full rounded-b-full p-6 hover:bg-gradient-to-b hover:from-[rgba(194,144,98,1)] hover:to-black transition-all duration-300">
          <div className="w-44 h-44 mt-4 flex-col mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-md">
            {/* Image Icon */}
            <img src="./photos/per.png" alt="Icon 1" className="w-16 h-16" />
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-[rgba(194,144,98,1)]  mt-14 mb-12 transition-all duration-300">
            إنجاز العمل بدقة
          </h3>
          <p className="mt-2 text-sm w-[90%] mb-4 text-center mx-auto group-hover:text-white transition-all duration-300">
            يمكن ايضا اشتراك المعاينين العقارين المعتمدين حسب المتطلبات المهنية
            المتبعة في ذلك دوليًا ولدى الهيئة السعودية وبذلك تكتمل منظومة
            التقييم
          </p>
        </div>

        {/* Card 2 */}
        <div className="group flex-col w-[20%] bg-[rgba(209,232,226,1)] shadow-xl rounded-t-full rounded-b-full p-6 hover:bg-gradient-to-b hover:from-[rgba(194,144,98,1)] hover:to-black transition-all duration-300">
          <div className="w-44 h-44 mt-4 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-md">
            {/* Image Icon */}
            <img
              src="./photos/location.png"
              alt="Icon 2"
              className="w-16 h-16"
            />
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-[rgba(194,144,98,1)]  mt-14 mb-12 transition-all duration-300">
            سهولة الوصول
          </h3>
          <p className="mt-2 text-sm w-[90%] mb-4 text-center mx-auto group-hover:text-white transition-all duration-300">
            سهولة الوصول إلى جميع شركات التقييم الموجودة في منطقتك بالإضافة إلى
          </p>
        </div>

        {/* Card 3 */}
        <div className="group flex-col w-[20%] bg-[rgba(209,232,226,1)] shadow-xl rounded-t-full rounded-b-full p-6 hover:bg-gradient-to-b hover:from-[rgba(194,144,98,1)] hover:to-black transition-all duration-300">
          <div className="w-44 h-44 mt-4 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-md">
            {/* Image Icon */}
            <img src="./photos/chat.png" alt="Icon 3" className="w-16 h-16" />
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-[rgba(194,144,98,1)] transition-all duration-300 mt-14 mb-12">
            سهولة التواصل
          </h3>
          <p className="mt-2 text-sm w-[90%] mb-4 text-center mx-auto group-hover:text-white transition-all duration-300">
            يتيح التطبيق للشركات او المكاتب العقارية التواصل بين اعضاء الفريق
            لسرعة انجاز العمل.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
