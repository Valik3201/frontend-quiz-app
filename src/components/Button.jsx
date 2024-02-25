import PropTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-center text-[1.12rem] lg:text-xl font-medium p-4 lg:p-6 mt-4 md:mt-6 w-full cursor-pointer bg-purple text-pure-white rounded-xl lg:rounded-3xl transition duration-300 ease-in-out transform shadow-light dark:shadow-dark hover:opacity-75"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
