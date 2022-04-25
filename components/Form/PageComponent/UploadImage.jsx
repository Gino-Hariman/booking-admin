import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import toastConfig from '@/utils/toastConfig';
import { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/outline';

const UploadImage = ({ ref, onBlur, name, onChange, getValues, setValue }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileChange = (event) => {
    const i = event.target.files[0];
    // setSelectedFile(i);
    setPreview(URL.createObjectURL(i));
    setValue(name, i, {
      shouldValidate: true,
      shouldDirty: true,
    });
    // onChange({
    //   selectedFile: i,
    //   preview: URL.createObjectURL(i),
    // });
  };

  // const uploadToServer = async (event) => {
  //   const body = new FormData();
  //   body.append('file', preview);
  //   const response = await fetch('/api/file', {
  //     method: 'POST',
  //     body,
  //   });
  // };

  // const onFileUpload = () => {
  //   const formData = new FromData();
  //   formData.append('myFile', selectedFile, selectedFile.name);
  //   const readerData = new FileReader();
  //   const url = (readerData = readerData.readAsDataURL(file));
  //   console.log('selectedFile', selectedFile);
  //   readerData.onloadend = function (e) {
  //     setImageUrl({
  //       imgSrc: [readerData.result],
  //     });
  //   };
  //   console.log('url', url);

  //   mutation.mutate(formData, {
  //     onSuccess: (res) => {
  //       toast.success(`Success!!`, toastConfig);
  //     },
  //     onError: () => toast.error(`error `, toastConfig),
  //   });
  // };

  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const fileData = () => {
  //   if (getValues(name)) {
  //     console.log('selectedFile', selectedFile);
  //     return (
  //       <div>
  //         <h2>File Details:</h2>

  //         <p>File Name: {selectedFile.name}</p>

  //         <p>File Type: {selectedFile.type}</p>

  //         <p>Last Modified: {selectedFile.lastModifiedDate}</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <br />
  //         <h4>Choose before Pressing the Upload button</h4>
  //       </div>
  //     );
  //   }
  // };

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
