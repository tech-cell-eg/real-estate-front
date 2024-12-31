import addProperty from "../../assets/client/addProperty.svg";
import done from "../../assets/client/done.png";

const AddPropertyHeader = () => {
  return (
    <div className="flex p-8 rounded-lg ">
      <img src={addProperty} alt="add property" className="w-50 h-50" />

      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-primary mb-4">
          قم بإضافة عقارك الآن
        </h2>
        <p className="text-black mb-6 font-bold">
          أدرج عقارك ب 3 خطوات سهلة وخلي الباقي علينا.
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center text-lg">
            <img src={done} alt="list" className="w-6 h-6 ml-2" />
            طلبات جادة وحقيقية
          </li>
          <li className="flex items-center text-lg">
            <img src={done} alt="list" className="w-6 h-6 ml-2" />
            بدون رسوم
          </li>
          <li className="flex items-center text-lg">
            <img src={done} alt="list" className="w-6 h-6 ml-2" />
            تجربة مُستخدم سهلة وبسيطة
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddPropertyHeader;
