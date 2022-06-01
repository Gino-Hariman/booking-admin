import classNames from '@/helpers/classNames';
import { useState } from 'react';

const TabBarButton = ({ id, student, title, activeTab, Icon, onClick }) => {
  console.log('activeTab', activeTab);
  const style = () => {
    switch (activeTab) {
      case 'Student Request':
        return 'student-request';
      case 'Accepted Student':
        return 'accept-student';
      case 'Rejected Student':
        return 'reject-student';
      case 'Ongoing Booking':
        return 'ongoing-student';
      default:
        return 'student-request';
    }
  };

  return (
    <li onClick={onClick} className={`${id === activeTab && style()} tab-btn`}>
      <div className="flex w-full px-10 2xl:px-14 justify-between items-center">
        <div>
          <h1 className="text-xl-1 font-bold text-primary-500">{student}</h1>
          <h2 className="text-lg-1 font-medium text-primary-200">{title}</h2>
        </div>
        <Icon />
      </div>
    </li>
  );
};

export default TabBarButton;
