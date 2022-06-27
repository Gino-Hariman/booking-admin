const Badge = ({ title }) => {
  return (
    <div className="w-min h-full px-7 py-2 bg-primary-50 rounded-full">
      <p className="w-full leading-tight text-green-700  text-primary-300 text-md-3 font-semibold capitalize text-ellipsis line-clamp-1">
        {title?.split('@') ? title?.split('@')[0] : title}
      </p>
    </div>
  );
};

export default Badge;
