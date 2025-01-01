import { useState } from "react";
import Dialog from "../Dialog";

const Offer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogStatement, setDialogStatement] = useState("");

  const handleAccept = () => {
    console.log("Offer Accepted");
    setIsDialogOpen(false);
  };

  const handleReject = () => {
    console.log("Offer Rejected");
    setIsDialogOpen(false);
  };

  const openDialog = (statement) => {
    setDialogStatement(statement);
    setIsDialogOpen(true);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700 font-bold">شركة الأحمدية</span>
        <p className="text-lg text-primary font-bold">85,000 ريال سعودي</p>
      </div>
      <p className="text-gray-600 text-sm leading-6 line-clamp-3 mb-4">
        عقار في شارع السند، حي النرجس، الرياض، منطقة الرياض تكمن في مياه صالحة
        للشرب وخزان مياه غير مرشح، مع مضخة ودورات مياه بالشبكة 18
      </p>
      <button className="bg-primary text-white font-bold py-2 px-6 rounded w-full">
        عرض
      </button>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-red-500 text-white font-bold py-2 px-6 rounded w-[40%]"
          onClick={() => openDialog("هل أنت متأكد من رفض هذا العرض؟")}
        >
          رفض
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-6 rounded w-[40%]"
          onClick={() => openDialog("هل أنت متأكد من قبول هذا العرض؟")}
        >
          قبول
        </button>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onAccept={handleAccept}
        onReject={handleReject}
        statement={dialogStatement}
      />
    </div>
  );
};

export default Offer;
