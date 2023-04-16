import React, { useState } from 'react';

import Button, { ButtonGradientVariant, ButtonVariant } from '@/components/document/Button';
import { Token } from '@/components/icons/IconUtils';
import { Strategy } from '@/components/strategies/strategies-config';
import PopUpWrapper from '@/components/tranche/PopUps/PopUpWrapper';
import SelectToken from '@/components/tranche/PopUps/SelectToken';

interface Props {
  show: boolean;
  onClose: (state: any) => any;
  strategy: Strategy;
}

const DepositPopUp = (props: Props) => {
  const { strategy } = props;
  const [isDepositBalancedTokenSelected, setIsDepositBalancedTokenSelected] = useState(false);
  const [tokenSelected, setTokenSelected] = useState<{ [any: string]: boolean }>(
    strategy.tokensExposure.reduce((_, currentValue) => ({ ..._, [currentValue]: false }), {}) // [A, B, C] => {A: false, B: false, C: false}
  );

  const toggleSelectedToken = (token: Token) => {
    setTokenSelected({ ...tokenSelected, [token]: !tokenSelected[token] });
  };

  const toggleAllSelected = () => {
    setIsDepositBalancedTokenSelected(!isDepositBalancedTokenSelected);

    setTokenSelected(
      strategy.tokensExposure.reduce(
        (_, currentValue) => ({ ..._, [currentValue]: !isDepositBalancedTokenSelected }),
        {}
      )
    );
  };

  return (
    <PopUpWrapper {...props}>
      <div className='flex h-fit w-[700px] flex-col items-center rounded-3xl bg-[#322d48] p-8'>
        <div className=' text-center text-5xl font-thin text-white'>Deposit into {strategy.name}</div>
        <Button
          variant={ButtonVariant.Rounded}
          className={`border-1 w-fit ${
            isDepositBalancedTokenSelected ? 'border-transparent' : 'border-white'
          } my-12 border bg-black/10 py-0 px-2 text-xl font-thin`}
          gradient={isDepositBalancedTokenSelected ? ButtonGradientVariant.Gradient1 : undefined}
          onClick={() => {
            toggleAllSelected();
          }}
        >
          Deposit all tokens in a balanced proportion
        </Button>
        <div className='text-center text-base font-thin text-white/70'>
          Select asset(s) to deposit into {strategy.name}
        </div>
        <div className='flex w-full flex-row justify-around'>
          {strategy.tokensExposure.map((token) => (
            <SelectToken
              key={token}
              token={token}
              toggleSelectedToken={toggleSelectedToken}
              isSelected={tokenSelected[token]}
            />
          ))}
        </div>
        <Button
          className='my-12 flex h-fit px-14 pb-14 text-4xl font-thin'
          variant={ButtonVariant.Rounded}
          gradient={ButtonGradientVariant.Gradient1}
          onClick={() => {
            console.log('clicked!');
          }}
        >
          Deposit
        </Button>
      </div>
    </PopUpWrapper>
  );
};

export default DepositPopUp;
