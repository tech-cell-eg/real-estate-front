import { useState } from "react";
import Dialog from "../Dialog";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Confirmation from "../Confirmation";

const OfferCard = ({ offer }) => {
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isAcceptDialogOpen, setIsAcceptDialogOpen] = useState(false);
  const [dialogStatement, setDialogStatement] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  const handleAccept = () => {
    console.log("Offer Accepted");
    setIsAcceptDialogOpen(false);
    navigate("/client/offers/accepted-offer-details", {
      state: {
        companyName: offer.companyName,
      },
    });
  };

  const handleReject = () => {
    console.log("Offer Rejected");
    setIsRejectDialogOpen(false);
    setShowConfirmation(true);
  };

  const openAcceptDialog = () => {
    setDialogStatement("هل أنت متأكد من قبول هذا العرض؟");
    setIsAcceptDialogOpen(true);
  };

  const openRejectDialog = () => {
    setDialogStatement("هل أنت متأكد من رفض هذا العرض؟");
    setIsRejectDialogOpen(true);
  };

  const navigateToDetails = () => {
    navigate(`/client/offers/details`, {
      state: {
        id: offer.id,
        companyName: offer.companyName,
        price: offer.price,
        address: offer.address,
        description: offer.description,
      },
    });
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 h-60">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700 font-bold">{offer.companyName}</span>
          <p className="text-lg text-primary font-bold">
            {offer.price} ريال سعودي
          </p>
        </div>
        <p className="text-black text-s font-bold leading-6 mb-4 line-clamp-1">
          {offer.address}
        </p>
        <p className="text-gray-600 text-sm leading-6 line-clamp-3 mb-4 line-clamp-1">
          {offer.description}
        </p>
        <button
          className="bg-primary text-white font-bold py-2 px-6 rounded w-full"
          onClick={navigateToDetails}
        >
          عرض
        </button>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-red-500 text-white font-bold py-2 px-6 rounded w-[40%]"
            onClick={openRejectDialog}
          >
            رفض
          </button>
          <button
            className="bg-green-500 text-white font-bold py-2 px-6 rounded w-[40%]"
            onClick={openAcceptDialog}
          >
            قبول
          </button>
        </div>
        {/* Reject Dialog */}
        <Dialog
          isOpen={isRejectDialogOpen}
          onAccept={handleReject}
          onReject={() => setIsRejectDialogOpen(false)}
          statement={dialogStatement}
        />
        {/* Accept Dialog */}
        <Dialog
          isOpen={isAcceptDialogOpen}
          onAccept={handleAccept}
          onReject={() => setIsAcceptDialogOpen(false)}
          statement={dialogStatement}
        />
      </div>

      {showConfirmation && (
        <Confirmation
          message="تمت عملية الرفض بنجاح"
          onTimeout={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
};
export default OfferCard;
