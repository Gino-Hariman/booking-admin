import { Button } from '@/components/Buttons';

import ReactExport from 'react-data-export';
import TableTitle from './TableTitle';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const TableHeader = ({
  title,
  btnTitle,
  hasHeader,
  downloadDataSet,
  onHeaderButtonClick = () => {},
  isNested = false,
  ExportComp,
  children,
}) => {
  console.log('downloadDataSet', downloadDataSet);

  return (
    <div className="flex items-center flex-wrap justify-between ">
      <TableTitle title={title} />
      <div className="flex flex-wrap items-center justify-between ">
        <div className="mr-6">{children}</div>

        {hasHeader && isNested ? (
          <ExportComp data={downloadDataSet} />
        ) : (
          hasHeader && (
            <ExcelFile
              filename={title}
              element={
                <Button
                  outlined
                  title={btnTitle}
                  onClick={onHeaderButtonClick}
                />
              }
            >
              <ExcelSheet dataSet={downloadDataSet} name={title} />
            </ExcelFile>
          )
        )}
      </div>
    </div>
  );
};

export default TableHeader;
