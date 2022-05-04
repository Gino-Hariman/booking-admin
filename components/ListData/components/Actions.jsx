import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

const Actions = ({ handleOpenModal, setIsAccept }) => {
  const handleClick = (data) => {
    setIsAccept(data);
  };
  return (
    <div className="flex">
      <CheckCircleIcon
        onClick={() => handleClick(1)}
        className="w-12 h-12 text-success-500"
      />
      <XCircleIcon
        onClick={() => {
          handleClick(0);
          handleOpenModal();
        }}
        className="w-12 h-12 text-danger-500"
      />
    </div>
  );
};

export default Actions;
