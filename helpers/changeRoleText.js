const changeRoleText = (text) => {
  switch (text) {
    case 'super':
      return 'Super Admin';
    case '':
      return 'Admin';
    default:
      return;
  }
};

export default changeRoleText;
