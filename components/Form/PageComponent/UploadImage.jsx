import { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/outline';

const UploadImage = ({ ref, onBlur, name, onChange, getValues, setValue }) => {
  const [preview, setPreview] = useState(null);

  const onFileChange = (event) => {
    const i = event.target.files;

    setPreview(URL.createObjectURL(i[0]));
    setValue(name, i);
  };

  return (
    <div>
      {preview ? (
        <img width={'250px'} alt="sdf" src={preview} />
      ) : (
        <div className="overflow-hidden border rounded-2 border-shade-BD relative w-[140px] h-[140px]">
          <button className="bg-indigo hover:bg-gray-100 text-gray-400 w-full h-full flex flex-col justify-center items-center">
            <VideoCameraIcon className="w-6 h-6 text-gray-500" />
            <span className=" text-md-3 font-medium">Add Phone</span>
          </button>
          <input
            ref={ref}
            onBlur={onBlur}
            name={name}
            type="file"
            onChange={onFileChange}
            className="cursor-pointer h-full opacity-0 pin-r pin-t absolute top-0  block  bg-danger-300 border border-success-400"
          />
        </div>
      )}
      {/* <button onClick={onFileUpload}>Upload!</button> */}
      {/* {fileData()} */}
    </div>
  );
};

export default UploadImage;
