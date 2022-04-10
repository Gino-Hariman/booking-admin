import Scan from '@/icons/Fill/Scan.svg';

import getIcon from '../getIcon';

const sidebarConfig = [
  { id: 1, title: 'Dashboard', path: '/', icon: getIcon(Scan) },
  {
    id: 2,
    title: 'Lounge Location',
    path: '/admin/lounge-location',
    icon: getIcon(Scan),
  },
  {
    id: 3,
    title: 'Student List',
    path: '/admin/student-list',
    icon: getIcon(Scan),
  },
  { id: 4, title: 'Report', path: '/admin/report', icon: getIcon(Scan) },
  { id: 5, title: 'Admin', path: '/admin/admins', icon: getIcon(Scan) },
];

export default sidebarConfig;
