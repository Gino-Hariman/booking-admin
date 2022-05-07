import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

const Actions = ({ handleAcceptStudent, handleDeclineStudent }) => {
  return (
    <div className="flex">
      <CheckCircleIcon
        onClick={handleAcceptStudent}
        className="w-12 h-12 text-success-500"
      />
      <XCircleIcon
        onClick={handleDeclineStudent}
        className="w-12 h-12 text-danger-500"
      />
    </div>
  );
};

export default Actions;
