import Chip from '../Chip';

const TableData = ({ isOngoingBooking }) => {
  return (
    <div className="flex flex-1 items-center justify-between border-b-2 border-black-20 py-6 px-2 flex-wrap space-y-4">
      <div className="space-y-2">
        <sub className="text-md-4 font-medium text-gray-700">ID : 0080122</sub>
        <h1 className="text-lg-3 font-medium text-gray-900">
          Aryaduta Lounge -
          <span className="font-normal text-gray-800"> Gino Hariman</span>
        </h1>
        <div className="flex text-md-3 md:space-x-8 text-gray-700 flex-col md:flex-row">
          <span>
            <p>03 Jan 2022</p>
          </span>
          <span>
            <p>10.00 - 12.00</p>
          </span>
          <span>
            <p>03082180015</p>
          </span>
          <span>
            <p>Informatics</p>
          </span>
          <span>
            <p>18 TI 2</p>
          </span>
        </div>
      </div>
      <div className="flex space-x-6">
        <Chip title="Accept" width="w-[160px]" />
        <Chip title="Rejected" width="w-[160px]" />
      </div>
    </div>
  );
};

export default TableData;
