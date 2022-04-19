import { XIcon } from '@heroicons/react/solid';
import { Button } from '../Buttons';
import { TextInput } from '../Form/components';

const Modals = ({
  setShowModal,
  handleOpenModal,
  handleCloseModal,
  handlesSetData,
  data,
}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className=" rounded-5 shadow-lg relative flex flex-col w-[869px] bg-shade-BG">
            {/*header*/}
            <div className="flex items-start justify-between p-5">
              <h3 className="text-lg-3 text-shade-70 font-semibold">
                Add New Booking Notes
              </h3>
              <div
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold "
                onClick={handleCloseModal}
              >
                <XIcon width={24} color="#000000" />
              </div>
            </div>
            {/*body*/}
            <div className="p-12">
              <div className="relative flex-auto mb-4">
                <input
                  value={data}
                  onChange={handlesSetData}
                  className="input"
                  id="notes"
                  type="text"
                  placeholder="Write student booking notes"
                  // value={input}
                />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center">
                {/* <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button> */}
                <Button
                  // className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  // type="button"
                  title="Continue"
                  onClick={handleCloseModal}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-40 bg-shade-40"
        onClick={handleCloseModal}
      ></div>
    </>
  );
};

export default Modals;
