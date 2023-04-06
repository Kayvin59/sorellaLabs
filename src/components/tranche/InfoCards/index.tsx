import React from 'react';

import { STRATEGIES } from '@/components/strategies/strategies-config';
import DescriptionInfoCard from '@/components/tranche/InfoCards/DescriptionInfoCard';
import ExposureInfoCard from '@/components/tranche/InfoCards/ExposureInfoCard';
import PositionInfoCard from '@/components/tranche/InfoCards/PositionInfoCard';

const index = () => {
  return (
    <div className='grid-rows grid grid-flow-col gap-16'>
      <div className='col-span-2'>
        <ExposureInfoCard {...STRATEGIES[0]} />
      </div>
      <div className='col-span-2 row-span-2'>
        <DescriptionInfoCard description='' />
      </div>
      <div className='row-span-3'>
        <PositionInfoCard underlying='' vaultTokens={STRATEGIES[0].tokensExposure} />
      </div>
    </div>
  );
};

export default index;
