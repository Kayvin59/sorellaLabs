import React, { ReactNode } from 'react';

import { RenderRow, Row } from '@/components/Table';

interface Props {
  row: Row;
  renderRow: RenderRow;
  className: string;
}

const TableRow = (props: Props) => {
  const { row, renderRow, className } = props;
  const { url } = row;

  return (
    <tr
      data-testid='table-row'
      onClick={() => url && window.open(url, '_blank')}
      className={`${url && 'hover:cursor-pointer hover:bg-[#0c0e11]'} box-border ${className} last:border-b-0`}
    >
      {renderRow(row).map((item: ReactNode, i: number) => (
        <td key={i} className='p-2 first:pl-6 last:pr-6'>
          {item}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
