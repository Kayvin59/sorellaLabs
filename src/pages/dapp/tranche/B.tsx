import React from 'react';

import Seo from '@/components/Seo';
import { STRATEGIES } from '@/components/strategies/strategies-config';
import InfoCards from '@/components/tranche/InfoCards';
import TransactionDashboard from '@/components/tranche/TransactionDashboard';

const TrancheB = () => {
  const strategyB = STRATEGIES.B;

  return (
    <>
      <Seo templateTitle='SL - Tranche B' />
      <main className='w-full'>
        <section className='flex h-full w-full items-center justify-center'>
          <div className='mx-14 mb-[100px]'>
            <div className='mb-16 text-center text-5xl text-white'>{strategyB.name}</div>
            <InfoCards strategy={strategyB} />
            <div className='mt-16'>
              <TransactionDashboard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TrancheB;
