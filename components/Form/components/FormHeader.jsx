import TableTitle from '@/components/Tables/TableHeaders/TableTitle';

const FormHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between pb-10 border-b-2 border-gray-900">
      <TableTitle title={title} />
    </div>
  );
};

export default FormHeader;
