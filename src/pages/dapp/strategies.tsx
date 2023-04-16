import Image from 'next/image';
import React from 'react';

import useWindowHeight from '@/hooks/useWindowHeight';

import Seo from '@/components/Seo';
import { STRATEGIES } from '@/components/strategies/strategies-config';
import TrancheCard from '@/components/strategies/TrancheCard';

import src from '../../../public/images/strategies-asset.png';

const Strategies = () => {
  const windowHeight = useWindowHeight();
  const offset = 170; // offset to compensate for height of header and footer
  const sectionSize = windowHeight - offset;

  return (
    <>
      <Seo templateTitle='SL - Strategies' />
      <main className='w-full' style={{ height: `${sectionSize}px` }}>
        <section className='flex h-full w-full items-center justify-center'>
          <div className='absolute z-10 mt-24 flex h-fit flex-col items-center'>
            <div className='z-10 flex h-full w-full flex-col items-center justify-center'>
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
          </div>
          <div className='absolute ml-[-20rem] mt-[-170px]  h-full w-full'>
            <Image src={src} alt='' layout='fill' objectFit='cover' />
          </div>
        </section>
      </main>
    </>
  );
};

export default Strategies;
