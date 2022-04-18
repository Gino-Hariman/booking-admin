import classNames from '@/helpers/classNames';
import { useState } from 'react';

const TabBarButton = ({ id, student, title, activeTab, Icon, onClick }) => {
  const style = () => {
    switch (activeTab) {
      case 'Student Request':
        return 'student-request';
      case 'Accepted Students':
        return 'accept-student';
      case 'Rejected Students':
        return 'reject-student';
      case 'Ongoing Booking':
        return 'ongoing-student';
      default:
        return 'student-request';
    }
  };

  return (
    <li onClick={onClick} className={`${id === activeTab && style()} tab-btn`}>
      <div className="flex items-center">
        <div>
          <h1 className="text-xl-1 font-bold text-primary-500">{student}</h1>
          <h2 className="text-lg-1 font-medium text-primary-200">{title}</h2>
        </div>
        <span>
          <Icon />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg> */}
        </span>
      </div>
    </li>
  );
};

export default TabBarButton;
