import useTables from '@/hooks/useTable';
import EmptyList from '../EmptyState/EmptyList';

import Pagination from '../ListData/Pagination';
import TableHeader from './TableHeaders';

const TableList = ({
  tableTitle,
  columns,
  data,
  pageNumber,
  addPath,
  btnTitle,
  tableHeaderChild,
  handleChangeStatus = () => {},
  hasHeader = true,
  handleNextPage,
  handlePrevPage,
  emptyTitle,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTables(columns, data);
  return (
    <div className="mt-4 rounded-6 shadow bg-shade-FG p-12 flex flex-col">
      <TableHeader
        hasHeader={hasHeader}
        title={tableTitle}
        btnTitle={btnTitle}
        addPath={addPath}
      >
        {tableHeaderChild}
      </TableHeader>
      {Boolean(data.length) ? (
        <div className="-my-2 mt-6 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="border-b-2 border-gray-900">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className="group px-2 py-3 text-left text-lg-1 font-medium text-gray-700 first-letter:uppercase  tracking-wider"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {page.map((row, i) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr
                        className="even:bg-shade-40 even:bg-opacity-5"
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-2 py-10 text-md-4 font-medium text-gray-600"
                              role="cell"
                            >
                              {cell.column.Cell.name === 'defaultRenderer' ? (
                                <p className="line-clamp-2">
                                  {cell.render('Cell')}
                                </p>
                              ) : (
                                cell.render('Cell')
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <EmptyList title={emptyTitle} />
      )}
      <Pagination
        isDisabled={pageNumber === 0}
        handleNext={handleNextPage}
        handlePrev={handlePrevPage}
      />
    </div>
  );
};

export default TableList;
