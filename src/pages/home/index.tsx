import React from 'react';

import HomePageBody from '@/components/home/HomePageBody';
import HomePageHero from '@/components/home/HomePageHero';
import Seo from '@/components/Seo';

const Home = () => {
  return (
    <>
      <Seo templateTitle='Sorella Labs' />
      <main className='h-full w-full'>
        <HomePageHero />
        <HomePageBody />
      </main>
    </>
  );
};

export default Home;
