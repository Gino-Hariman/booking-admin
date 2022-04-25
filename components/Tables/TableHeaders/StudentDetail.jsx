import NimIcon from '@/icons/Outline/Nim.svg';
import MajorIcon from '@/icons/Outline/Major.svg';
import ClassIcon from '@/icons/Outline/Class.svg';

const DetailItem = ({ Icon, title }) => {
  return (
    <div className="flex w-[160px] items-center space-x-2">
      <Icon className="w-6 h-6 text-gray-700" />
      <p className="text-md-3 text-gray-700">{title}</p>
    </div>
  );
};

const StudentDetail = ({ nim, major, kelas }) => {
  return (
    <div className="flex w-full flex-col lg:flex-row justify-end space-y-2 lg:space-y-0 lg:space-x-14">
      <DetailItem Icon={NimIcon} title={nim} />
      <DetailItem Icon={MajorIcon} title={major} />
      <DetailItem Icon={ClassIcon} title={kelas} />
    </div>
  );
};

export default StudentDetail;
