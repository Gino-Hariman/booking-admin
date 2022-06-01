import { useRouter } from 'next/router';
import { Button } from '../Buttons';

const ErrorState = ({ message }) => {
  const router = useRouter();

  const handleReload = () => router.reload();

  return (
    <div className="flex flex-col w-full items-center justify-center my-14">
      <p className="mt-2 error-text">{message}</p>
      <div className="mt-8 text-lg-4 font-semibold text-gray-800">
        <Button outlined onClick={handleReload} title="reload the page" />
      </div>
    </div>
  );
};

export default ErrorState;
