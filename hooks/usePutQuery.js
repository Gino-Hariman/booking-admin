import instance from '@/axios/instance';
import { useMutation } from 'react-query';

const usePutQuery = (path = '', config) => {
  return useMutation(
    async (formData) => {
      const { data } = await instance.put(path, formData);
      return data;
    },
    {
      ...config,
    }
  );
};

export default usePutQuery;
