import { Button } from '@/components/Buttons';
import { useRouter } from 'next/router';
import TableTitle from './TableTitle';

const TableHeader = ({
  title,
  btnTitle,
  hasHeader,
  onHeaderButtonClick = () => {},
  children,
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center flex-wrap justify-between ">
      <TableTitle title={title} />
      <div className="flex flex-wrap items-center justify-between ">
        <div className="mr-6">{children}</div>
        {hasHeader && (
          <Button outlined title={btnTitle} onClick={onHeaderButtonClick} />
        )}
      </div>
    </div>
  );
};

export default TableHeader;
