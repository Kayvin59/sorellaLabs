import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import Button, { ButtonVariant } from '@/components/document/Button';
import { getTokenLogo, Token } from '@/components/icons/IconUtils';
import { Protocol, Strategy } from '@/components/strategies/strategies-config';

const TrancheCard = (props: Strategy) => {
  const { name, tokensExposure, protocolsExposure, url } = props;
  const router = useRouter();

  const renderTokenExposure = (token: Token, index: number, tokens: Token[]): ReactNode => {
    const zIndex = tokens.length - index;
    return (
      <div key={index} className={`m-[-3px] h-7 w-7 z-${zIndex}`}>
        {getTokenLogo(token)}
      </div>
    );
  };

  const renderProtocoleExposure = (protocol: Protocol, index: number, protocols: Protocol[]): ReactNode => {
    const isLastProtocole = index === protocols.length - 1;
    return (
      <div key={index} className='inline-block'>
        {protocol}
        {!isLastProtocole && <div className='mr-1 inline-block'>,</div>}
      </div>
    );
  };

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
        variant={ButtonVariant.Square}
        onClick={() => {
          router.push(url);
        }}
      >
        View
      </Button>
    </div>
  );
};

export default TrancheCard;
