import React from 'react';

import Button, { ButtonVariant } from '@/components/document/Button';
import { Token } from '@/components/icons/IconUtils';
import { renderTokenExposure } from '@/components/strategies/utils';

interface Props {
  underlying: string;
  vaultTokens: Token[];
}
const PositionInfoCard = (props: Props) => {
  const { underlying, vaultTokens } = props;

  return (
    <div className='flex h-full w-full flex-col items-center justify-center rounded-xl bg-card-background py-4 px-12 text-white'>
      <div className='mb-8 text-2xl'>Position</div>
      <div className='flex flex-col items-center justify-center font-thin'>
        <div className='flex min-h-[100px] flex-col items-center justify-start'>
          <div className='text-white/70'>Underlying</div>
          <div className='mt-3 text-center text-sm font-thin text-white/70'>{underlying}</div>
        </div>
        <div className='flex min-h-[100px] flex-col items-center justify-start'>
          <div className='text-white/70'>Vault Tokens</div>
          <div className='mt-4 flex flex-row'>{vaultTokens.map(renderTokenExposure)}</div>
        </div>
        <div className='flex flex-col'>
          <Button
            variant={ButtonVariant.Square}
            gradient
            onClick={() => {
              console.log('clicked');
            }}
          >
            Deposit
          </Button>
          <Button
            className='mt-4 bg-black'
            variant={ButtonVariant.Square}
            onClick={() => {
              console.log('clicked');
            }}
          >
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PositionInfoCard;
