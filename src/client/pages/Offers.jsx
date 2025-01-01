import AcceptedOffer from "../components/cards/AcceptedOffer";
import Offer from "../components/cards/Offer";

const Offers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
      <AcceptedOffer />
      <Offer />
    </div>
  );
};

export default Offers;
