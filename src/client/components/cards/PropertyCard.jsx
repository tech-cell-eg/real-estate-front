import Button from "../Button";
import cancel from "../../../assets/client/cancel.png";
import edit from "../../../assets/client/edit.png";
import PropTypes from "prop-types";

const PropertyCard = ({ property, index }) => {
  const defaultImage = "https://newstart-eg.com/static/images/placeholder.jpg";

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative h-40">
        <img
          src={property.images[0] || defaultImage}
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-primary text-white text-sm px-3 py-1 rounded">
          عرض: {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2">
          {property.address}
        </h3>
        <p className="text-black font-bold text-sm mb-1">
          {property.area}, {property.city}, {property.region}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button
            icon={edit}
            label="تعديل"
            onClick={() => console.log("Edit clicked")}
            className="px-5 py-1"
          />
          <Button
            icon={cancel}
            label="إنهاء"
            onClick={() => console.log("Delete clicked")}
            className="px-5 py-1"
          />
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    area: PropTypes.string,
    city: PropTypes.string,
    region: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired, 
};

export default PropertyCard;
