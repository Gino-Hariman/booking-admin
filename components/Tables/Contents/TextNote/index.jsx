const TextNote = ({ title }) => {
  return (
    <p className="text-left text-gray-500 font-medium text-md-4">
      {title ? title : '-'}
    </p>
  );
};

export default TextNote;
