import { useEffect } from "react";
import done from "../../assets/client/done.svg";
import PropTypes from "prop-types";

const Confirmation = ({ message, onTimeout, image }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onTimeout]);
  const displayImage = image ? image : done;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
        {image && (
          <img
            src={displayImage}
            alt="Confirmation"
            className="mx-auto mb-4 w-30 h-30"
          />
        )}
        <p className="text-gray-800 text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
};

Confirmation.propTypes = {
  message: PropTypes.string.isRequired,
  onTimeout: PropTypes.func.isRequired,
  image: PropTypes.string,
};

export default Confirmation;
