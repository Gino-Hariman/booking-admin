const SearchBar = ({ placeholder }) => {
  return (
    <input
      className="w-full h-full max-w-[468px] input"
      type="search"
      name="search"
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
