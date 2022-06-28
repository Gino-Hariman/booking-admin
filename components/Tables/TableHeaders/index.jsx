import { Button } from '@/components/Buttons';
import fs from 'fs';

import { toExcel } from 'to-excel';
import TableTitle from './TableTitle';

const TableHeader = ({
  title,
  btnTitle,
  hasHeader,
  downloadDataSet,
  ExportComp,
  children,
}) => {
  const handleDownload = () => {
    var content = toExcel.exportXLS(ExportComp, downloadDataSet, title);
    // in node you must open or save the content
    fs.writeFileSync(`${title}.xls`, content);
  };

  return (
    <div className="flex items-center flex-wrap justify-between ">
      <TableTitle title={title} />
      <div className="flex flex-wrap items-center justify-between ">
        <div className="mr-6">{children}</div>
        {hasHeader && (
          <Button outlined title={btnTitle} onClick={handleDownload} />
        )}
      </div>
    </div>
  );
};

export default TableHeader;
