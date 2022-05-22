const { useRouter } = require('next/router');

const useTableButton = () => {
  const router = useRouter();

  const handleAdd = (path) => {
    router.push(path);
  };

  const handleDownload = () => {
    console.log('downloading');
  };

  return { handleAdd, handleDownload };
};

export default useTableButton;
