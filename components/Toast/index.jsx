import toastConfig from '@/utils/toastConfig';
import React from 'react';
import { toast } from 'react-toastify';
// import {
//   FaInfo,
//   FaCheck,
//   FaExclamationTriangle,
//   FaBug,
//   FaExclamationCircle,
// } from 'react-icons/fa';

// export const displayIcon = (type) => {
//   switch (type) {
//     case 'success':
//       return <FaCheck />;
//     case 'info':
//       return <FaInfo />;
//     case 'error':
//       return <FaExclamationCircle />;
//     case 'warning':
//       return <FaExclamationTriangle />;
//     default:
//       return <FaBug />;
//   }
// };

const Toast = ({ type, message }) => toast[type](message, toastConfig);

Toast.dismiss = toast.dismiss;

export default Toast;
