import { Token } from '@/components/icons/IconUtils';

export enum Protocol {
  UniswapV2 = 'Uniswap V2',
  UniswapV3 = 'Uniswap V3',
  Curve = 'Curve',
  BalancerV2 = 'Balancer V2',
  BancorV2 = 'Bancor V2',
  BancorV3 = 'Bancor V3',
  SushiSwap = 'SushiSwap',
  KiberSwap = 'KiberSwap',
}

export interface Strategy {
  name: string;
  tokensExposure: Token[];
  protocolsExposure: Protocol[];
  url: string;
}

export const STRATEGIES: { [any: string]: Strategy } = {
  A: {
    name: 'Tranche A',
    tokensExposure: [Token.USDC, Token.USDT, Token.DAI],
    protocolsExposure: [Protocol.UniswapV2, Protocol.UniswapV3, Protocol.Curve],
    url: 'tranche/A',
  },
  B: {
    name: 'Tranche B',
    tokensExposure: [Token.USDC, Token.USDT, Token.DAI],
    protocolsExposure: [
      Protocol.UniswapV2,
      Protocol.UniswapV3,
      Protocol.Curve,
      Protocol.BalancerV2,
      Protocol.BancorV2,
      Protocol.BancorV3,
    ],
    url: 'tranche/B',
  },
  C: {
    name: 'Tranche C',
    tokensExposure: [Token.USDC, Token.USDT, Token.DAI],
    protocolsExposure: [
      Protocol.UniswapV2,
      Protocol.UniswapV3,
      Protocol.Curve,
      Protocol.BalancerV2,
      Protocol.BancorV2,
      Protocol.BancorV3,
      Protocol.SushiSwap,
      Protocol.KiberSwap,
    ],
    url: 'tranche/C',
  },
};
