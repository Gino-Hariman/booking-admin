const Button = ({ title, onClick }) => {
  return (
    <button
      className="btn mt-12 self-center duration-300 text-white shadow"
      type="submit"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
