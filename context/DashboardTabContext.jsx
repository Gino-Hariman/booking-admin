const { createContext, useState, useContext } = require('react');

const DashboardTabContext = createContext();

const DashboardTabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState({
    title: 'Student Request',
    compName: 'RequestTable',
  });

  const handleSelectTab = (id) => {
    return setSelectedTab(id);
  };

  return (
    <DashboardTabContext.Provider
      value={{
        selectedTab,
        handleSelectTab,
      }}
    >
      {children}
    </DashboardTabContext.Provider>
  );
};

export default DashboardTabProvider;
export const useDashboardTab = () => useContext(DashboardTabContext);
