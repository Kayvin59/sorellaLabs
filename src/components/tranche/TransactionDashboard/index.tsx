import React, { ReactNode } from 'react';

import Table, { RenderRow, Row } from '@/components/Table';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const header: Row = { items: ['Block Number', 'Time', 'Transaction Hash', 'Tranche', 'Swaps', 'Deposit', 'Withdraw'] };
const rows: Row[] = Array.from({ length: 30 }, (_, i) => {
  return {
    items: [
      i,
      new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleString('en-GB'),
      '0x1b9...5df6',
      '0',
      'Display Swaps',
      'Display Deposits',
      'Display Withdraw',
    ],
  };
});

const renderRows: RenderRow = (row: Row): ReactNode[] => {
  return row.items.map((item, i) => {
    switch (i) {
      case 0:
        return (
          <div className='flex text-base text-white/70' key={i}>
            {item}
          </div>
        );
      case 1:
        return (
          <div className='flex text-base text-white/70' key={i}>
            {item}
          </div>
        );
      case 2:
        return (
          <div className='flex text-base text-[#A736E4]' key={i}>
            {item}
          </div>
        );
      case 3:
        return (
          <div className='flex text-base text-white/70' key={i}>
            {item}
          </div>
        );
      default:
        return (
          <div className='flex text-base text-white/70' key={i}>
            {item}
          </div>
        );
    }
  });
};

const renderHeader: RenderRow = (row: Row): ReactNode[] => {
  return row.items.map((item, i) => {
    switch (i) {
      case 0:
        return (
          <div className='flex text-white' key={i}>
            {item}
          </div>
        );
      case 1:
        return (
          <div className='flex text-white' key={i}>
            {item}
          </div>
        );
      case 2:
        return (
          <div className='flex text-white' key={i}>
            {item}
          </div>
        );
      case 3:
        return (
          <div className='flex text-white' key={i}>
            {item}
          </div>
        );
      default:
        return (
          <div className='flex text-white' key={i}>
            {item}
          </div>
        );
    }
  });
};

const TransactionDashboard = (props: Props) => {
  return (
    <div className='flex w-full flex-col items-center justify-center rounded-xl bg-card-background py-8'>
      <div className='mb-2 text-3xl text-white'>Transaction Dashboard</div>
      <div className='mb-10 text-base font-thin text-white/70'>
        A continuously updated table of transactions. To view more details for a specific transaction, click the
        transaction hash to visit its etherscan page
      </div>
      <Table
        tableClassName='border-collapse rounded overflow-hidden'
        headerClassName='h-[40px] uppercase p-10 text-center bg-gradient-to-r from-gradient-purple to-gradient-pink text-xs'
        rowClassName='h-[60px] p-10 border-b-[0.5px] border-white/50 text-center bg-table-background-grey font-light'
        header={header}
        rows={rows}
        emptyRowMessage='No data.'
        rowsPerPage={6}
        renderRow={renderRows}
        renderHeader={renderHeader}
        isLoading={false}
      />
    </div>
  );
};

export default TransactionDashboard;
