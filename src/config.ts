import { Chain, Config, MoonbaseAlpha, Moonbeam, Moonriver } from '@usedapp/core';

import { isDev, isProd } from '@/constants/env';

export const smartCountractAdminAddresses = ['0x3D9F8E1602a0b0A5A398a75d6A9DaF6007530357'];

export const LocalhostChain: Chain = {
  chainId: 1281,
  chainName: 'Moonbeam Localhost',
  isTestChain: true,
  isLocalChain: true,
  multicallAddress: '0x0000000000000000000000000000000000000000',
  getExplorerAddressLink: (address: string) => `https://tutorialchain.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://tutorialchain.etherscan.io/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: 'http://127.0.0.1:9933',
  blockExplorerUrl: 'https://tutorialchain.etherscan.io',
  nativeCurrency: {
    name: 'GLMR',
    symbol: 'GLMR',
    decimals: 18,
  },
};

export const LocalhostConfig: Config = {
  networks: [LocalhostChain],
  readOnlyChainId: LocalhostChain.chainId,
  readOnlyUrls: {
    [LocalhostChain.chainId]: 'http://127.0.0.1:9933',
  },
};

export const chains: { [key: number]: Chain } = {
  [LocalhostChain.chainId]: LocalhostChain,
};


export const getDefaultChainId = (): number => {
  if (isProd || isDev) {
    return Moonbeam.chainId;
  }
  return LocalhostChain.chainId;
};

export const currentDappConfig: Config = {
  networks: [MoonbaseAlpha, Moonriver, Moonbeam],
  readOnlyChainId: getDefaultChainId(),
};

export const getDefaultChain = (): Chain => {
  return chains[getDefaultChainId()];
};

// eslint-disable-next-line no-console
console.log({
  NODE_ENV: process.env.NODE_ENV,
  currentNetwork: getDefaultChain().chainName,
});
