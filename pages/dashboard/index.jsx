import ListData from '@/components/ListData';
import { useDashboardTab } from '@/context/DashboardTabContext';
import useFilter from '@/hooks/useFilter';
import AdminLayout from '@/layout/AdminLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import * as DashboardTable from '../../components/Dashboard/index';

export const getServerSideProps = ({ req }) => {
  const token = req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Dashboard = ({}) => {
  const { selectedTab, handleSelectTab } = useDashboardTab();
  const Comp = DashboardTable[selectedTab.compName];

  const {
    handleNextPage,
    handlePrevPage,
    filterState,
    handleSelectFilter,
    requestSearch,
  } = useFilter();

  return (
    <DashboardLayout selectedItem={selectedTab} handleSelect={handleSelectTab}>
      <ListData
        title={selectedTab.title}
        handleNext={handleNextPage}
        handlePrev={handlePrevPage}
        leftBtnDisabled={filterState.page === 0}
        filterState={filterState}
        handleSelectFilter={handleSelectFilter}
        requestSearch={requestSearch}
      >
        <Comp filterState={filterState} />
      </ListData>
    </DashboardLayout>
  );
};

Dashboard.layout = AdminLayout;

export default Dashboard;
