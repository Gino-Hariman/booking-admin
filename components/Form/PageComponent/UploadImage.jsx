import { useEffect, useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/outline';

const UploadImage = ({ ref, onBlur, name, setValue, previewURL }) => {
  const [preview, setPreview] = useState(previewURL);
  const [file, setFile] = useState();

  useEffect(() => {
    // create the preview
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const onFileChange = (event) => {
    const i = event.target.files;

    setFile(i[0]);
    setValue(name, i, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div>
      {preview ? (
        <div className="overflow-hidden rounded-2 relative w-[140px] h-[140px]">
          <button className="bg-indigo hover:bg-gray-100 text-gray-400 w-full h-full flex flex-col justify-center items-center">
            <img className="max-w-[140px] h-[140px] " alt="sdf" src={preview} />
          </button>
          <input
            ref={ref}
            onBlur={onBlur}
            name={name}
            type="file"
            onChange={onFileChange}
            className="cursor-pointer h-full opacity-0 pin-r pin-t absolute top-0  block  bg-shade-FG"
          />
        </div>
      ) : (
        <div className="overflow-hidden border rounded-2 border-shade-BD relative w-[140px] h-[140px]">
          <button className="bg-indigo hover:bg-gray-100 text-gray-400 w-full h-full flex flex-col justify-center items-center">
            <VideoCameraIcon className="w-6 h-6 text-gray-500" />
            <span className=" text-md-3 font-medium">Add Photo</span>
          </button>
          <input
            ref={ref}
            onBlur={onBlur}
            name={name}
            type="file"
            onChange={onFileChange}
            className="cursor-pointer h-full opacity-0 pin-r pin-t absolute top-0  block  bg-shade-FG border border-shade-BD"
          />
        </div>
      )}
      {/* <button onClick={onFileUpload}>Upload!</button> */}
      {/* {fileData()} */}
    </div>
  );
};

export default UploadImage;
