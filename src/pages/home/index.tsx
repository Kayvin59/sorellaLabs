import React from 'react';

import Seo from '@/components/Seo';

const Home = () => {
  return (
    <>
      <Seo templateTitle='Sorella Labs' />
      <main className='h-full w-full'>
        <section className='flex h-full w-full items-center justify-center'>
          <div className='flex h-full w-full justify-center'>
            <div className='mt-24 flex h-fit flex-col items-center'>
              <div className='block h-fit text-8xl text-white'>Sorella Labs</div>
              <div className='text-3xl text-white'>Experience the Future of liquidity Provision</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
