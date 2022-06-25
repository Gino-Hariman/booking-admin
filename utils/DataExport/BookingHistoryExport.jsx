import { Button } from '@/components/Buttons';
import ReactExport from 'react-data-export';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const BookingHistoryExport = ({ data }) => {
  return (
    <ExcelFile
      filename="Booking History"
      element={<Button outlined title={'Download Report'} />}
    >
      <ExcelSheet data={data} name="Booking History">
        <ExcelColumn label="Order ID" value="order_id" />
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="NIM" value="nim" />
        <ExcelColumn label="Major" value="program" />
        <ExcelColumn label="Class" value="class" />
        <ExcelColumn
          label="Location"
          value={(col) =>
            `${col.location.name_location} - ${col.location.spot_name}`
          }
        />
        <ExcelColumn label="Date" value="date" />
        <ExcelColumn label="Time" value="time" />
        <ExcelColumn
          label="Status"
          value={(col) =>
            `${col.status.order_status} - ${col.status.handle_by}`
          }
        />
        <ExcelColumn label="Note" value="note" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default BookingHistoryExport;
