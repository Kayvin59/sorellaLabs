import React from 'react';

import useWindowHeight from '@/hooks/useWindowHeight';

import Seo from '@/components/Seo';

const NotFoundPage = () => {
  const windowHeight = useWindowHeight();
  const offset = 170; // offset to compensate for height of header and footer
  const sectionSize = windowHeight - offset;

  return (
    <>
      <Seo templateTitle='Not Found' />
      <main className='w-full' style={{ height: `${sectionSize}px` }}>
        <section className='flex h-full w-full items-center justify-center'>
          <h1 className='text-white'>Page Not Found</h1>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
