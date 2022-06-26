import Breadcrumbs from '@/components/Breadcrumbs';
import { LoadingModal } from '@/components/Loading';
import useGetQuery from '@/hooks/useGetQuery';
import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/router';
import EditForm from './EditForm';

export const getServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

  if (!Boolean(token)) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MAIN_HOST}/time`);

  return {
    props: { timeData: data },
  };
};

const EditLoungeLocation = ({ timeData }) => {
  const router = useRouter();
  const { data, isFetching } = useGetQuery(
    ['lounge-location', 'default'],
    `/location/detail`,
    { params: { id_location: router.query.id } }
  );

  if (isFetching) return <LoadingModal />;

  return (
    <>
      <Breadcrumbs />
      <EditForm timeData={timeData} data={data} />
    </>
  );
};

EditLoungeLocation.layout = AdminLayout;

export default EditLoungeLocation;
