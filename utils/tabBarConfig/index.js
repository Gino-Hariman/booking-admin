import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import SeatIcon from '@/icons/Outline/Seat.svg';

const tabBarConfig = [
  {
    id: 'student-request',
    student: 75,
    title: 'Student Request',
    compName: 'RequestTable',
    icon: () => <InformationCircleIcon className="w-12 text-primary-500" />,
  },
  {
    id: 'accept-student',
    student: 150,
    title: 'Accepted Students',
    compName: 'AcceptedTable',
    icon: () => <CheckCircleIcon width={48} className="text-success-500" />,
  },
  {
    id: 'reject-student',
    student: 200,
    title: 'Rejected Students',
    compName: 'RejectedTable',
    icon: () => <XCircleIcon width={48} className="text-danger-500" />,
  },
  {
    id: 'ongoing-student',
    student: 25,
    title: 'Ongoing Booking',
    compName: 'OngoingTable',
    icon: () => <XCircleIcon width={48} className="text-warning-500" />,
  },
];

export default tabBarConfig;
