import Image from 'next/image';
import React from 'react';

import src from '../../../../public/images/homepage-asset.png';

const HomePageHero = () => {
  return (
    <section className='flex h-[90vh] min-h-[750px] w-full items-center justify-center'>
      <div className='relative flex h-full w-full justify-center'>
        <div className='absolute z-10 mt-24 flex h-fit flex-col items-center'>
          <div className='block h-fit bg-gradient-to-r from-[#884e90] via-[#a75090] to-[#c76b9f] bg-clip-text text-10xl leading-none text-transparent'>
            Sorella Labs
          </div>
          <div className='text-4xl text-white'>Optimised Liquidity, Coming Soon…</div>
        </div>
        <Image src={src} alt='' layout='fill' objectFit='contain' />
      </div>
    </section>
  );
};

export default HomePageHero;
