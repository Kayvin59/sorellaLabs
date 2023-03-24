import React, { ReactNode, useState } from 'react';

import Loading from '@/components/icons/LoadingIcon';
import TablePaginationButton from '@/components/Table/TablePaginationButton';
import TableRow from '@/components/Table/TableRow';
import { getPagesAroundPage } from '@/components/Table/utils';

export interface Row {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  url?: string;
}

export type RenderRow = (row: Row) => ReactNode[];

interface Props {
  header: Row;
  rows: Row[];
  emptyRowMessage: string;
  rowsPerPage: number;
  renderRow: RenderRow;
  renderHeader: RenderRow;
  isLoading: boolean;
  headerClassName: string;
  rowClassName: string;
  tableClassName: string;
}

const Table = (props: Props) => {
  const {
    rows,
    emptyRowMessage,
    renderRow,
    isLoading,
    header,
    rowsPerPage,
    renderHeader,
    headerClassName,
    rowClassName,
    tableClassName,
  } = props;
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const currentPageRows = rows.slice(
    currentPageNumber * rowsPerPage,
    Math.min((currentPageNumber + 1) * rowsPerPage, rows.length)
  );
  const isInvalidRow = currentPageNumber >= rows.length || currentPageNumber < 0;
  const isEmptyRow = isInvalidRow || isInvalidRow;

  return (
    <>
      <table cellPadding='3' className={`h-full w-full table-auto overflow-hidden ${tableClassName}`}>
        <thead>
          <TableRow row={header} renderRow={renderHeader} className={headerClassName} />
        </thead>
        <tbody className='text-lg' data-cy='table-body'>
          {currentPageRows.map((row, i) => (
            <TableRow key={i} row={row} renderRow={renderRow} className={rowClassName} />
          ))}
        </tbody>
      </table>
      {(isLoading || isEmptyRow) && (
        <div className=' box-border flex h-full w-full grow items-center justify-center border-b-[0.5px] border-[#474d57] py-5'>
          {isLoading ? <Loading /> : emptyRowMessage}
        </div>
      )}
      <div className='mt-6 flex w-full justify-end'>
        {getPagesAroundPage(rows.length, rowsPerPage, currentPageNumber).map((pageNumber) => (
          <TablePaginationButton
            key={pageNumber}
            pageNumber={pageNumber}
            isCurrentPageNumber={pageNumber === currentPageNumber}
            setCurrentPageNumber={setCurrentPageNumber}
          />
        ))}
      </div>
    </>
  );
};

export default Table;
