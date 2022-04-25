import { Button } from '@/components/Buttons';
import { useRouter } from 'next/router';
import TableTitle from './TableTitle';

const TableHeader = ({ title, addPath, btnTitle, children }) => {
  const router = useRouter();
  const handleAdd = () => {
    router.push(addPath);
  };
  return (
    <div className="flex items-center flex-wrap justify-between">
      <TableTitle title={title} />
      <div className="flex flex-wrap items-center justify-between">
        <div className="mr-6">{children}</div>
        <Button outlined title={btnTitle} onClick={handleAdd} />
      </div>
    </div>
  );
};

export default TableHeader;
