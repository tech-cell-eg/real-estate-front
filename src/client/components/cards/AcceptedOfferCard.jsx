import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AcceptedOfferCard = ({ offer }) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate("/client/offers/accepted-offer-details", {
      state: {
        companyName: offer.companyName,
        price: offer.price,
        description: offer.description,
      },
    });
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 h-60">
      <div className="flex justify-between items-center mb-5">
        <span className="text-gray-700 font-bold">{offer.companyName}</span>
        <button className="bg-green-500 text-white font-bold py-1 px-4 rounded-full">
          مقبول
        </button>
      </div>
      <p className="text-lg text-primary font-bold mb-3">
        {offer.price} ريال سعودي
      </p>
      <p className="text-gray-600 text-sm leading-6 line-clamp-2">
        ع{offer.description}
      </p>
      <button
        className="mt-4 bg-primary text-white font-bold py-2 px-6 rounded w-full place-self-end"
        onClick={showDetails}
      >
        عرض
      </button>
    </div>
  );
};

AcceptedOfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default AcceptedOfferCard;
