import PropTypes from "prop-types";

const Button = ({ label, onClick, type = "button", className, icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-primary to-orange-900 rounded shadow transition ${className}`}
    >
      {label}
      {icon && <img src={icon} alt="" className="w-5 h-5" />}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
