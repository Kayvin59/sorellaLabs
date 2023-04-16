import React from 'react';

import { Strategy } from '@/components/strategies/strategies-config';
import DescriptionInfoCard from '@/components/tranche/InfoCards/DescriptionInfoCard';
import ExposureInfoCard from '@/components/tranche/InfoCards/ExposureInfoCard';
import PositionInfoCard from '@/components/tranche/InfoCards/PositionInfoCard';

interface Props {
  strategy: Strategy;
}

const index = (props: Props) => {
  const { strategy } = props;

  return (
    <div className='grid-rows grid grid-flow-col gap-16'>
      <div className='col-span-2'>
        <ExposureInfoCard {...strategy} />
      </div>
      <div className='col-span-2 row-span-2'>
        <DescriptionInfoCard description='' />
      </div>
      <div className='row-span-3'>
        <PositionInfoCard underlying='' vaultTokens={strategy.tokensExposure} />
      </div>
    </div>
  );
};

export default index;
