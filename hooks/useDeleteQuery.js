import instance from '@/axios/instance';
import { useMutation } from 'react-query';

const useDeleteQuery = (path = '', config) => {
  return useMutation(
    async (formData) => {
      const { data } = await instance.delete(path, formData);
      return data;
    },
    {
      ...config,
    }
  );
};

export default useDeleteQuery;
