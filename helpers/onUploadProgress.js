const onUploadProgress = (event) => {
  const percentCompleted = Math.round((event.loaded * 100) / event.total);
  console.log('onUploadProgress', percentCompleted);
};

export default onUploadProgress;
