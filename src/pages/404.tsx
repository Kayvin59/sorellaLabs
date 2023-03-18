import React from 'react';

import Seo from '@/components/Seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo templateTitle='Not Found' />
      <main className='h-full w-full'>
        <section className='flex h-full w-full items-center justify-center'>
          <h1 className='text-white'>Page Not Found</h1>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
