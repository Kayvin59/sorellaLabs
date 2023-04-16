import React, { useState } from 'react';

import Button, { ButtonGradientVariant, ButtonVariant } from '@/components/document/Button';
import { Strategy } from '@/components/strategies/strategies-config';
import { renderTokenExposure } from '@/components/strategies/utils';
import DepositPopUp from '@/components/tranche/PopUps/DepositPopUp';
import WithdrawPopUp from '@/components/tranche/PopUps/WithdrawPopUp';

interface Props {
  underlying: string;
  strategy: Strategy;
}
const PositionInfoCard = (props: Props) => {
  const { underlying, strategy } = props;
  const [isDepositPopUpOpen, setIsDepositPopUpOpen] = useState(false);
  const [isWithdrawPopUpOpen, setIsWithdrawPopUpOpen] = useState(false);

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
          <div className='mt-4 flex flex-row'>{strategy.tokensExposure.map(renderTokenExposure)}</div>
        </div>
        <div className='flex flex-col'>
          <Button
            variant={ButtonVariant.Square}
            gradient={ButtonGradientVariant.Gradient1}
            onClick={() => {
              setIsDepositPopUpOpen(true);
            }}
          >
            Deposit
          </Button>
          <Button
            className='mt-4 bg-black'
            variant={ButtonVariant.Square}
            onClick={() => {
              setIsWithdrawPopUpOpen(true);
            }}
          >
            Withdraw
          </Button>
        </div>
      </div>
      <DepositPopUp strategy={strategy} show={isDepositPopUpOpen} onClose={() => setIsDepositPopUpOpen(false)} />
      <WithdrawPopUp strategy={strategy} show={isWithdrawPopUpOpen} onClose={() => setIsWithdrawPopUpOpen(false)} />
    </div>
  );
};

export default PositionInfoCard;
