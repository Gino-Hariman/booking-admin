const IconButton = ({ children, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
    >
      {children}
      <span>{title}</span>
    </div>
  );
};

export default IconButton;
