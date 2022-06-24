const ImageContent = ({ value, column, row }) => {
  return (
    <div className="aspect-w-4 aspect-h-3">
      <img src={value} className="w-16 h-16" alt="preview lounge photo" />
    </div>
  );
};

export default ImageContent;
