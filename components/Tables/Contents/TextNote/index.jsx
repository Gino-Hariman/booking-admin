const TextNote = ({ value }) => {
  return (
    <p className="line-clamp-3 text-left text-gray-500 font-medium text-md-4">
      {value ? value : '-'}
    </p>
  );
};

export default TextNote;
