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
    count_id: 'order_count',
    student: 75,
    title: 'Student Request',
    compName: 'RequestTable',
    icon: () => <RequestIcon width={48} />,
  },
  {
    count_id: 'accept_count',
    student: 150,
    title: 'Accepted Student',
    compName: 'AcceptedTable',
    icon: () => <AcceptedIcon width={48} />,
  },
  {
    count_id: 'decline_count',
    student: 200,
    title: 'Rejected Student',
    compName: 'RejectedTable',
    icon: () => <RejectedIcon width={48} />,
  },
  {
    count_id: 'on_going_count',
    student: 25,
    title: 'Ongoing Booking',
    compName: 'OngoingTable',
    icon: () => <OngoingIcon width={48} />,
  },
];

export default tabBarConfig;
