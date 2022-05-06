// import instance from '@/axios/instance';
import instance from '@/axios/instance';
import { useQuery } from 'react-query';

const useGetQuery = (queryId = '1', path = '', config) => {
  return useQuery(
    queryId,
    async () => {
      const { data } = await instance.get(path);
      return data;
    },
    {
      // select: filter,
      ...config,
    }
  );
};

export default useGetQuery;
