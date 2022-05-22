const Badge = ({ title }) => {
  return (
    <span className="px-7 py-3 leading-tight text-green-700 bg-primary-50 rounded-full text-primary-300 text-md-3 font-semibold">
      {title}
    </span>
  );
};

export default Badge;
