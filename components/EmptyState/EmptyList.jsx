import Image from 'next/image';
import ImageEmpty from '@/images/empty.png';

const EmptyList = ({ title }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center my-14">
      <div className="w-[340px] h-[340px]">
        <Image src={ImageEmpty} objectFit="contain" />
      </div>
      <p className="mt-8 text-lg-4 font-semibold text-gray-800">
        {title} is still empty
      </p>
    </div>
  );
};

export default EmptyList;
