const LoadingModal = ({ title = 'Connecting to client...' }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-shade-FG border py-4 px-5 rounded-2 flex items-center flex-col">
        <div className="loader-dots block relative w-20 h-5 mt-2">
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"></div>
        </div>
        <div className="text-gray-500 text-xs font-medium mt-2 text-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
