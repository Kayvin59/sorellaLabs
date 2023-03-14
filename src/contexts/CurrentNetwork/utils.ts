import { Chain } from '@usedapp/core';

import { chains, getDefaultChainId } from '@/config';

export interface CurrentNetworkStateType {
  network: Chain;
  rpcUrl: string;
}

export const getNetwork = (chainId?: number): Chain => {
  if (!chainId || !chains[chainId]) {
    return chains[getDefaultChainId()];
  }
  return chains[chainId];
};

export const getCurrentNetworkState = (chainId?: number): CurrentNetworkStateType => {
  return {
    network: getNetwork(chainId),
    rpcUrl: getNetwork(chainId).rpcUrl || 'ERROR',
  };
};
