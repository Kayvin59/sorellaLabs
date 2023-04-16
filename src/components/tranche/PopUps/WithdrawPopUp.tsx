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

const WithdrawPopUp = (props: Props) => {
  const { strategy } = props;
  const [isDepositBalancedTokenSelected, setIsDepositBalancedTokenSelected] = useState(false);
  const [tokenSelected, setTokenSelected] = useState<{ [any: string]: boolean }>(
    strategy.tokensExposure.reduce((_, currentValue) => ({ ..._, [currentValue]: false }), {}) // [A, B, C] => {A: false, B: false, C: false}
  );

  const [isSelected, setIsSelected] = useState(2);

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
        <div className=' text-center text-5xl font-thin text-white'>Withdraw from {strategy.name}</div>
        <div className='flex w-[600px] justify-around'>
          <Button
            className={`border-1 flex w-fit cursor-pointer items-center justify-center rounded-full ${
              isSelected == 0
                ? 'border-transparent bg-gradient-to-r from-[#662b7c] to-[#cd307c]'
                : 'border-white bg-black/30'
            }  my-2 w-[150px] border py-0 px-4`}
            variant={ButtonVariant.Rounded}
            onClick={() => {
              setIsSelected(0);
            }}
          >
            Single Token
          </Button>
          <Button
            className={`border-1 flex w-fit cursor-pointer items-center justify-center rounded-full ${
              isSelected == 1
                ? 'border-transparent bg-gradient-to-r from-[#662b7c] to-[#cd307c]'
                : 'border-white bg-black/30'
            }  my-2 w-[150px] border py-0 px-4`}
            variant={ButtonVariant.Rounded}
            onClick={() => {
              setIsSelected(1);
            }}
          >
            Balanced
          </Button>
          <Button
            className={`border-1 flex w-fit cursor-pointer items-center justify-center rounded-full ${
              isSelected == 2
                ? 'border-transparent bg-gradient-to-r from-[#662b7c] to-[#cd307c]'
                : 'border-white bg-black/30'
            }  my-2 w-[150px] border py-0 px-4`}
            variant={ButtonVariant.Rounded}
            onClick={() => {
              setIsSelected(2);
            }}
          >
            Custom
          </Button>
        </div>
        <div className='mt-12'>
          <input
            type='text'
            id='large-input'
            placeholder='0.00'
            className='block w-full rounded-lg border-none bg-card-background p-4 text-right text-xl text-white focus:border-sorella-pink focus:ring-sorella-pink'
          />
        </div>
        <Button
          variant={ButtonVariant.Rounded}
          className='my-8 w-fit cursor-pointer py-0 px-6 text-base font-thin uppercase'
          gradient={ButtonGradientVariant.Gradient2}
          onClick={() => {
            console.log('clicked!');
          }}
        >
          Max
        </Button>
        <div className='text-center text-base font-thin text-white/70'>
          Select asset(s) to withdraw from {strategy.name}
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
          Withdraw
        </Button>
      </div>
    </PopUpWrapper>
  );
};

export default WithdrawPopUp;
