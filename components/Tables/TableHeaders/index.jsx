import { Button } from '@/components/Buttons';
import TableTitle from './TableTitle';

const TableHeader = ({ children }) => {
  return (
    <div className="flex items-center justify-between">
      <TableTitle title="Lounge Location" />
      <div className="flex ">
        {children}
        <Button outlined title="+ Add New Lounge Location" />
      </div>
    </div>
  );
};

export default TableHeader;
