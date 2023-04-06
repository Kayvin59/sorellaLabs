import React from 'react';

import InfoCards from '@/components/tranche/InfoCards';
import TransactionDashboard from '@/components/tranche/TransactionDashboard';

const A = () => {
  return (
    <div className='mx-14'>
      <div className='mb-16 text-center text-5xl text-white'>Tranche A</div>
      <InfoCards />
      <div className='mt-16'>
        <TransactionDashboard />
      </div>
    </div>
  );
};

export default A;
