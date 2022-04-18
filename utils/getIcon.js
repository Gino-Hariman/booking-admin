const getIcon = (Icon, size = 20, isActive) => {
  return (
    <Icon width={size} height={size} fill={isActive ? '#E8E9EF' : '#D2D3DF'} />
  );
};

export default getIcon;
