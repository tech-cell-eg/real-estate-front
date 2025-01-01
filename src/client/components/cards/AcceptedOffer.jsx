

const AcceptedOffer = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700 font-bold">شركة الأحمدية</span>
        <button className="bg-green-500 text-white font-bold py-1 px-4 rounded-full">
          مقبول
        </button>
      </div>
      <p className="text-lg text-primary font-bold mb-3">
        85,000 ريال سعودي
      </p>
      <p className="text-gray-600 text-sm leading-6 line-clamp-3">
        عقار في شارع السند، حي النرجس، الرياض، منطقة الرياض تكمن في مياه صالحة
        للشرب وخزان مياه غير مرشح، مع مضخة ودورات مياه بالشبكة 18...
      </p>
      <button className="mt-4 bg-primary text-white font-bold py-2 px-6 rounded w-full">
        عرض
      </button>
    </div>
  );
};

export default AcceptedOffer;
