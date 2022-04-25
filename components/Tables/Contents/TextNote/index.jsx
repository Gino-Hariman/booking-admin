const TextNote = ({ value }) => {
  return (
    <p className="text-left text-gray-500 font-medium text-md-4">
      {value ? value : '-'}
    </p>
  );
};

export default TextNote;
