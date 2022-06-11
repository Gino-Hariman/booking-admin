import DashboardIcon from '@/icons/Fill/Dashboard.svg';
import LocationIcon from '@/icons/Fill/Location.svg';
import StudentIcon from '@/icons/Fill/Student List.svg';
import ReportIcon from '@/icons/Fill/Report.svg';
import AdminIcon from '@/icons/Fill/Admin.svg';
import Cookies from 'js-cookie';

import getIcon from '../getIcon';

export const superAdminConfig = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
  },
  {
    id: 2,
    title: 'Lounge Location',
    path: '/lounge-location',
    icon: LocationIcon,
  },
  {
    id: 3,
    title: 'Student List',
    path: '/student-list',
    icon: StudentIcon,
  },
  {
    id: 4,
    title: 'Report',
    path: '/report',
    icon: ReportIcon,
  },
  {
    id: 5,
    title: 'Admin',
    path: '/admin',
    icon: AdminIcon,
  },
];
export const adminConfig = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
  },
];
