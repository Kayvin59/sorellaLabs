import React from 'react';

import { Strategy } from '@/components/strategies/strategies-config';
import { renderProtocoleExposure, renderTokenExposure } from '@/components/strategies/utils';

const ExposureInfoCard = (props: Strategy) => {
  const { tokensExposure, protocolsExposure } = props;
  return (
    <div className='flex w-full flex-col items-center justify-start rounded-xl bg-card-background pt-2 pb-6 text-white'>
      <div className='text-2xl'>Exposure</div>
      <div className='grid grid-cols-2 gap-44 font-thin'>
        <div className='flex flex-1 flex-col items-center justify-center'>
          <div className='text-white/70'>Tokens</div>
          <div className='mt-4 flex flex-row'>{tokensExposure.map(renderTokenExposure)}</div>
        </div>
        <div className='flex flex-auto flex-col items-center justify-center'>
          <div className='text-white/70'>Protocols</div>
          <div className='mt-3 max-w-[200px] text-center text-sm font-thin text-white/70'>
            {protocolsExposure.map(renderProtocoleExposure)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposureInfoCard;
