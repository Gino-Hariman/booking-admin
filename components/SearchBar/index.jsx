const SearchBar = ({ placeholder, requestSearch }) => {
  return (
    <input
      className="w-full h-full max-w-[468px] input"
      type="search"
      name="search"
      placeholder={placeholder}
      onChange={requestSearch}
    />
  );
};

export default SearchBar;
