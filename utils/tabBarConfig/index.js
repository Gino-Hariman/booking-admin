import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import SeatIcon from '@/icons/Outline/Seat.svg';
import AcceptedIcon from '@/icons/Fill/Accepted.svg';
import RequestIcon from '@/icons/Fill/Request.svg';
import OngoingIcon from '@/icons/Fill/Ongoing.svg';
import RejectedIcon from '@/icons/Fill/Rejected.svg';

const tabBarConfig = [
  {
    id: 'student-request',
    student: 75,
    title: 'Student Request',
    compName: 'RequestTable',
    icon: () => <RequestIcon width={48} />,
  },
  {
    id: 'accept-student',
    student: 150,
    title: 'Accepted Students',
    compName: 'AcceptedTable',
    icon: () => <AcceptedIcon width={48} />,
  },
  {
    id: 'reject-student',
    student: 200,
    title: 'Rejected Students',
    compName: 'RejectedTable',
    icon: () => <RejectedIcon width={48} />,
  },
  {
    id: 'ongoing-student',
    student: 25,
    title: 'Ongoing Booking',
    compName: 'OngoingTable',
    icon: () => <OngoingIcon width={48} />,
  },
];

export default tabBarConfig;
