// import Scan from '@/icons/Fill/Scan.svg';
import dashboard from '@/icons/dashboard.svg';

import getIcon from '../getIcon';

const sidebarConfig = [
  { id: 1, title: 'Dashboard', path: '/', icon: getIcon(dashboard) },
  {
    id: 2,
    title: 'Lounge Location',
    path: '/admin/lounge-location',
    icon: getIcon(dashboard),
  },
  {
    id: 3,
    title: 'Student List',
    path: '/admin/student-list',
    icon: getIcon(dashboard),
  },
  { id: 4, title: 'Report', path: '/admin/report', icon: getIcon(dashboard) },
  { id: 5, title: 'Admin', path: '/admin/admins', icon: getIcon(dashboard) },
];

export default sidebarConfig;
