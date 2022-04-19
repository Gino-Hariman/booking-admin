const TableData = ({
  id,
  nim,
  location,
  studentName,
  date,
  time,
  major,
  studentClass,
  children,
}) => {
  return (
    <div className="flex flex-1 items-center justify-between border-b-2 border-black-20 py-6 px-2 flex-wrap space-y-4">
      <div className="col-span-3 space-y-2">
        <sub className="text-md-4 font-medium text-gray-700">ID : {id}</sub>
        <h1 className="text-lg-3 font-medium text-gray-900">
          {location} -
          <span className="ml-1 font-normal text-gray-800">{studentName}</span>
        </h1>
        <div className="flex text-md-3 lg:space-x-8 text-gray-700 flex-col lg:flex-row">
          <span>
            <p>{date}</p>
          </span>
          <span>
            <p>{time}</p>
          </span>
          <span>
            <p>{nim}</p>
          </span>
          <span>
            <p>{major}</p>
          </span>
          <span>
            <p>{studentClass}</p>
          </span>
        </div>
      </div>

      <div className="flex auto-cols-max justify-start lg:space-x-6">
        {/* Status Chip */}
        {children}
      </div>
    </div>
  );
};

export default TableData;
