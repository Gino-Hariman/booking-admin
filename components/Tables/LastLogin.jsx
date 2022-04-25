import CalendarIcon from '@/icons/Outline/Calendar.svg';
import TimeIcon from '@/icons/Outline/Time.svg';

const Item = ({ Icon, title }) => {
  return (
    <div className="flex w-[160px] items-center space-x-2">
      <Icon className="w-6 h-6 text-gray-700" />
      <p className="text-md-3 text-gray-700">{title}</p>
    </div>
  );
};

const LastLogin = ({ date, time }) => {
  return (
    <div className={'flex flex-col space-y-1'}>
      <Item Icon={CalendarIcon} title={date} />
      <Item Icon={TimeIcon} title={time} />
    </div>
  );
};

export default LastLogin;
