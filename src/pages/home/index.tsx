import Image from 'next/image';
import React from 'react';

import Seo from '@/components/Seo';

import src from '../../../public/images/homepage-asset.png';

const Home = () => {
  return (
    <>
      <Seo templateTitle='Sorella Labs' />
      <main className='h-full w-full'>
        <section className='flex h-full w-full items-center justify-center'>
          <div className='relative flex h-full w-full justify-center'>
            <div className='absolute z-10 mt-24 flex h-fit flex-col items-center'>
              <div className='block h-fit bg-gradient-to-r from-[#884e90] to-[#c76b9f] bg-clip-text text-10xl leading-none text-transparent'>
                Sorella Labs
              </div>
              <div className='text-4xl font-thin text-white'>Optimised Liquidity, Coming Soon…</div>
            </div>
            <Image src={src} alt='' layout='fill' objectFit='contain' />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
