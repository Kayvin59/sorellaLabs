import React from 'react';

import Button, { ButtonGradientVariant, ButtonVariant } from '@/components/document/Button';
import { Strategy } from '@/components/strategies/strategies-config';
import { renderProtocoleExposure, renderTokenExposure } from '@/components/strategies/utils';

const TrancheCard = (props: Strategy) => {
  const { name, tokensExposure, protocolsExposure, url } = props;

  return (
    <div
      data-testid='tranche-card'
      className='strategy-card-background flex w-[330px] flex-col items-center justify-center rounded-xl px-10 py-8 text-white'
    >
      <div className='text-2xl'>{name}</div>
      <div className='mt-8 flex flex-col items-center justify-center'>
        <div className=''>Tokens Exposure</div>
        <div className='mt-4 flex flex-row'>{tokensExposure.map(renderTokenExposure)}</div>
      </div>
      <div className='mt-16 flex flex-col items-center justify-center'>
        <div className=''>Protocols Exposure</div>
        <div className='mt-3 h-24 text-center text-sm font-thin text-white/70'>
          {protocolsExposure.map(renderProtocoleExposure)}
        </div>
      </div>
      <Button
        gradient={ButtonGradientVariant.Gradient1}
        variant={ButtonVariant.Square}
        onClick={() => {
          window.open(url, '_self');
        }}
      >
        View
      </Button>
    </div>
  );
};

export default TrancheCard;
