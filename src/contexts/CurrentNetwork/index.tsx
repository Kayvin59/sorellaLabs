import { useEthers } from '@usedapp/core';
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import logger from '@/lib/logger';

import { CurrentNetworkStateType, getCurrentNetworkState, getNetwork } from '@/contexts/CurrentNetwork/utils';

export interface CurrentNetworkContextType {
  currentNetwork: CurrentNetworkStateType;
  changeNetwork: (chainId: number) => Promise<void>;
}

const CurrentNetworkContext = createContext<CurrentNetworkContextType>({} as CurrentNetworkContextType);

/*
 * Context provider that keep tracks of network dependent variables andd facilitates switching networks
 * @param children - The react children components that consume the CurrentNetworkContext
 */
export const CurrentNetworkProvider = ({ children }: { children: ReactNode }) => {
  const { switchNetwork, chainId } = useEthers();

  const [currentNetworkState, setCurrentNetworkState] = useState<CurrentNetworkStateType>({
    network: getNetwork(),
    rpcUrl: getNetwork().rpcUrl || 'ERROR',
  });

  const changeNetwork = useCallback(
    async (_chainId: number) => {
      logger({ chainName: getNetwork(_chainId).chainName }, 'Switching network');

      await switchNetwork(_chainId);

      setCurrentNetworkState(getCurrentNetworkState(_chainId));
    },
    [switchNetwork]
  );

  useEffect(() => {
    if (chainId !== undefined && chainId !== currentNetworkState.network.chainId) {
      setCurrentNetworkState(getCurrentNetworkState(chainId));
    }
  }, [chainId, currentNetworkState.network.chainId]);

  return (
    <CurrentNetworkContext.Provider value={{ currentNetwork: currentNetworkState, changeNetwork }}>
      {children}
    </CurrentNetworkContext.Provider>
  );
};

export const useCurrentNetworkContext = () => useContext(CurrentNetworkContext);

export default CurrentNetworkContext;
