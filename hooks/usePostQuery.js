import instance from '@/axios/instance';
import { useMutation } from 'react-query';

const usePostQuery = (path = '', config) => {
  return useMutation(
    async (formData) => {
      const { data } = await instance.post(path, formData);
      return data;
    },
    {
      ...config,
    }
  );
};

export default usePostQuery;
