import Toast from '@/components/Toast';
import toastConfig from '@/utils/toastConfig';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

const useToast = () => {
  const notify = useCallback((type, message) => {
    return toast[type](message, toastConfig);
  }, []);

  return { notify };
};

export default useToast;
