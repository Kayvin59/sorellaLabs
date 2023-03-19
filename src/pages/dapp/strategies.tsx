import React from 'react';

import Seo from '@/components/Seo';
import { STRATEGIES } from '@/components/strategies/strategies-config';
import TrancheCard from '@/components/strategies/TrancheCard';

const Strategies = () => {
  return (
    <>
      <Seo templateTitle='Strategies' />
      <main className='h-full w-full'>
        <section className='flex h-full w-full items-center justify-center'>
          <div className='flex h-full w-full flex-col items-center justify-center'>
            <div className='flex h-fit flex-col items-center'>
              <div className='mt-[-20%] block h-fit text-6xl text-white'>Strategies Dashboard</div>
              <div className='mt-6 text-[1.4em] text-white'>
                With Sorella, you never have to compromise compatibility and efficiency.
              </div>
            </div>
            <div className='mt-20 flex w-[1100px] flex-row justify-between'>
              <TrancheCard {...STRATEGIES[0]} />
              <TrancheCard {...STRATEGIES[1]} />
              <TrancheCard {...STRATEGIES[2]} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Strategies;
