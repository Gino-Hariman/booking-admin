const ItemInformation = ({ Icon, title }) => {
  return (
    <div className="flex space-x-2 ">
      <span className="w-6 h-6">
        <Icon />
      </span>
      <p>{title}</p>
    </div>
  );
};

export default ItemInformation;
