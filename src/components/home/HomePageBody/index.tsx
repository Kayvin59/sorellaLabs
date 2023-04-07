import React from 'react';

import FirstParagraph from '@/components/home/HomePageBody/FirstParagraph';
import SecondParagraph from '@/components/home/HomePageBody/SecondParagraph';
import TeamSection from '@/components/home/HomePageBody/TeamSection';
import ThirdParagraph from '@/components/home/HomePageBody/ThirdParagraph';

const HomePageBody = () => {
  return (
    <section className='mt-20 flex h-max w-full flex-col items-center justify-center overflow-y-auto'>
      {/* Left aligned text */}
      <FirstParagraph />
      {/* Right aligned text */}
      <SecondParagraph />
      {/* 3 vertical text boxes */}
      <ThirdParagraph />
      <TeamSection />
    </section>
  );
};

export default HomePageBody;
