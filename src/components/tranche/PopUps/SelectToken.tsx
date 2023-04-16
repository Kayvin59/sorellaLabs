import React from 'react';

import Button, { ButtonGradientVariant, ButtonVariant } from '@/components/document/Button';
import { getTokenLogo, Token } from '@/components/icons/IconUtils';

interface Props {
  token: Token;
  isSelected: boolean;
  toggleSelectedToken: (token: Token) => void;
}
const SelectToken = (props: Props) => {
  const { token, isSelected, toggleSelectedToken } = props;

  return (
    <div className='m-4 flex flex-col items-center'>
      <div className='text-xl'>{Token[token]}</div>
      <div
        data-testid='token-div'
        onClick={() => toggleSelectedToken(token)}
        className={`border-1 flex w-fit cursor-pointer items-center justify-center rounded-full ${
          isSelected ? 'border-transparent bg-gradient-to-r from-[#662b7c] to-[#cd307c]' : 'border-white bg-black/30'
        } bg- m-[-3px] my-2 h-20 w-20 border py-0 px-2 text-xl`}
      >
        <div className='flex h-12 w-12 text-xl'>{getTokenLogo(token)}</div>
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
      <div className=' text-center text-base font-thin text-white/70'>Available</div>
      <div className='text-center text-base font-thin text-white/70'>0.00000000</div>
    </div>
  );
};

export default SelectToken;
