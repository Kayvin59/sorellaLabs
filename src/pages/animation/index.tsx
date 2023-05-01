import React from 'react';

import AnimatedWaves from '@/components/waves/AnimatedWaves';

const index = () => {
  return (
    <div className='w-[full h-[400px]'>
      <AnimatedWaves
        svgPaths={[
          'M 0 0 C 1 1.6667 -1 4 3 5 C 6 5 9 11 11 8 C 13 4 19 5 20 2 C 22 -2 19.3333 -4 19 -7 C 19 -10 14 -10 13 -12 C 11 -14 8 -13 5 -12 C 3 -10 -1 -11 -1 -8 C -1 -6 -3 -5 -2 -3 C -2 -2 -1 -1 0 0',
          'M -1 1 C 1 1.6667 -1 4 2 7 C 5 10 9 11 13 10 C 17 7 21 6 21 2 C 22 -2 20 -4 20 -7 C 18 -11 14 -10 13 -12 C 11 -14 8 -16 4 -14 C 2 -11 -1 -11 -1 -8 C -1 -6 -3 -5 -3 -3 C -3 -2 -2 -1 -1 1',
          'M -4 1 C -1 2 -1 4 0 8 C 2 11 9 15 18 12 C 21 12 26 5 24 -4 C 24 -9 22 -8 20 -12 C 18 -15 14 -14 13 -15 C 11 -16 8 -18 5 -17 C 0 -16 -3 -13 -3 -10 C -1 -6 -5 -7 -5 -4 C -4 -2 -5 -1 -4 1',
        ]}
      />
    </div>
  );
};

export default index;
