const onUploadProgress = (event) => {
  const percentCompleted = Math.round((event.loaded * 100) / event.total);
};

export default onUploadProgress;
