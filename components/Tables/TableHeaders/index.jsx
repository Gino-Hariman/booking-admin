import { Button } from '@/components/Buttons';
import { useRouter } from 'next/router';
import TableTitle from './TableTitle';

const TableHeader = ({ addPath, children }) => {
  const router = useRouter();
  const handleAdd = () => {
    router.push(addPath);
  };
  return (
    <div className="flex items-center justify-between">
      <TableTitle title="Lounge Location" />
      <div className="flex ">
        {children}
        <Button
          outlined
          title="+ Add New Lounge Location"
          onClick={handleAdd}
        />
      </div>
    </div>
  );
};

export default TableHeader;
