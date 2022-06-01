const changeRoleText = (text) => {
  switch (text) {
    case 'super':
      return 'General Affairs';
    case 'admin':
      return 'Staff UPH';
    default:
      return;
  }
};

export default changeRoleText;
