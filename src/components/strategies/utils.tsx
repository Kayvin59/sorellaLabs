import { ReactNode } from 'react';

import { getTokenLogo, Token } from '@/components/icons/IconUtils';
import { Protocol } from '@/components/strategies/strategies-config';

export const renderTokenExposure = (token: Token, index: number, tokens: Token[]): ReactNode => {
  const zIndex = tokens.length - index;
  return (
    <div key={index} className={`m-[-3px] h-7 w-7 z-${zIndex}`}>
      {getTokenLogo(token)}
    </div>
  );
};

export const renderProtocoleExposure = (protocol: Protocol, index: number, protocols: Protocol[]): ReactNode => {
  const isLastProtocole = index === protocols.length - 1;
  return (
    <div key={index} className='inline-block'>
      {protocol}
      {!isLastProtocole && <div className='mr-1 inline-block'>,</div>}
    </div>
  );
};
