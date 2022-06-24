import { Button } from '@/components/Buttons';
import generateExcelLayout from '@/helpers/generateExcelLayout';
import { useRouter } from 'next/router';
import ReactExport from 'react-data-export';
import TableTitle from './TableTitle';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const TableHeader = ({
  title,
  btnTitle,
  hasHeader,
  tableData,
  onHeaderButtonClick = () => {},
  children,
}) => {
  const router = useRouter();

  console.log(
    'tableData',
    tableData
    // generateExcelLayout(['Headings', 'Text Style', 'colors'], tableData, [
    //   'nim',
    //   'nama',
    // ])
  );

  const multiDataSet = [
    {
      xSteps: 1, // Will start putting cell with 1 empty cell on left most
      ySteps: 5, //will put space of 5 rows,
      columns: [
        { title: 'Headings', width: { wpx: 80 } }, //pixels width
        { title: 'Text Style', width: { wch: 40 } }, //char width
        { title: 'Colors', width: { wpx: 90 } },
      ],
      data: [
        [
          { value: 'H1', style: { font: { sz: '24', bold: true } } },
          { value: 'Bold', style: { font: { bold: true } } },
          {
            value: 'Red',
            style: {
              fill: { patternType: 'solid', fgColor: { rgb: 'FFFF0000' } },
            },
          },
        ],
        [
          { value: 'H2', style: { font: { sz: '18', bold: true } } },
          { value: 'underline', style: { font: { underline: true } } },
          {
            value: 'Blue',
            style: {
              fill: { patternType: 'solid', fgColor: { rgb: 'FF0000FF' } },
            },
          },
        ],
        [
          { value: 'H3', style: { font: { sz: '14', bold: true } } },
          { value: 'italic', style: { font: { italic: true } } },
          {
            value: 'Green',
            style: {
              fill: { patternType: 'solid', fgColor: { rgb: 'FF00FF00' } },
            },
          },
        ],
        [
          { value: 'H4', style: { font: { sz: '12', bold: true } } },
          { value: 'strike', style: { font: { strike: true } } },
          {
            value: 'Orange',
            style: {
              fill: { patternType: 'solid', fgColor: { rgb: 'FFF86B00' } },
            },
          },
        ],
        [
          { value: 'H5', style: { font: { sz: '10.5', bold: true } } },
          { value: 'outline', style: { font: { outline: true } } },
          {
            value: 'Yellow',
            style: {
              fill: { patternType: 'solid', fgColor: { rgb: 'FFFFFF00' } },
            },
          },
        ],
        [
          { value: 'H6', style: { font: { sz: '7.5', bold: true } } },
          { value: 'shadow', style: { font: { shadow: true } } },
          {
            value: 'Light Blue',
            style: {
              fill: { patternType: 'solid', fgColor: { rgb: 'FFCCEEFF' } },
            },
          },
        ],
      ],
    },
  ];

  return (
    <div className="flex items-center flex-wrap justify-between ">
      <TableTitle title={title} />
      <div className="flex flex-wrap items-center justify-between ">
        <div className="mr-6">{children}</div>
        {hasHeader && (
          // <ExcelFile
          //   filename={title}
          //   element={
          //     <Button outlined title={btnTitle} onClick={onHeaderButtonClick} />
          //   }
          // >
          //   <ExcelSheet data={tableData} name="Testing">
          //     <ExcelColumn label="NIM" value="nim" />
          //     <ExcelColumn label="Name" value="nama" />
          //     <ExcelColumn label="Class" value="kelas" />
          //     <ExcelColumn label="Email" value="email" />
          //     <ExcelColumn label="Major" value="program_name" />
          //   </ExcelSheet>
          //   <ExcelSheet data={tableData} name="bro">
          //     <ExcelColumn label="NIM" value="nim" />
          //     <ExcelColumn label="Major" value="program_name" />
          //   </ExcelSheet>
          // </ExcelFile>
          <ExcelFile
            element={
              <Button outlined title={btnTitle} onClick={onHeaderButtonClick} />
            }
          >
            <ExcelSheet
              dataSet={generateExcelLayout(tableData, ['id_program'])}
              name="Organization"
            />
          </ExcelFile>
        )}
      </div>
    </div>
  );
};

export default TableHeader;
