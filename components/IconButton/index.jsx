const IconButton = ({ children, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
    >
      {children}
      <span>{title}</span>
    </button>
  );
};

export default IconButton;
