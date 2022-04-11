const SearchBar = ({ placeholder }) => {
  return (
    <input
      className="w-full max-w-[468px] input"
      type="search"
      name="search"
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
