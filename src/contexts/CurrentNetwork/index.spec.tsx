import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Chain, useEthers } from '@usedapp/core';

import { LocalhostChain } from '@/config';

import { CurrentNetworkProvider, useCurrentNetworkContext } from './index';
import { getCurrentNetworkState } from './utils';

const mockNewChainId = 1885;
const mockNewNetwork: Chain = { ...LocalhostChain, chainId: mockNewChainId };

jest.mock('@usedapp/core', () => ({
  useEthers: jest.fn().mockReturnValue({
    switchNetwork: jest.fn().mockResolvedValue(undefined),
    chainId: 1281,
  }),
}));

jest.mock('@/contexts/CurrentNetwork/utils', () => ({
  getNetwork: jest.fn().mockReturnValue(LocalhostChain),
  getCurrentNetworkState: jest.fn().mockReturnValue({
    network: LocalhostChain,
    rpcUrl: LocalhostChain.rpcUrl,
  }),
}));

describe('CurrentNetworkContext', () => {
  it('should provide the correct context value', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CurrentNetworkProvider>{children}</CurrentNetworkProvider>
    );

    const { result } = renderHook(() => useCurrentNetworkContext(), { wrapper });

    expect(result.current.currentNetwork.network).toBe(LocalhostChain);
    expect(typeof result.current.changeNetwork).toBe('function');
  });

  it('should switch network and update the current network state when changeNetwork is called', async () => {
    (getCurrentNetworkState as jest.Mock).mockReturnValueOnce({
      network: mockNewNetwork,
      rpcUrl: mockNewNetwork.rpcUrl,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CurrentNetworkProvider>{children}</CurrentNetworkProvider>
    );
    const { result } = renderHook(() => useCurrentNetworkContext(), { wrapper });

    await result.current.changeNetwork(mockNewChainId);

    expect(result.current.currentNetwork.network).toBe(mockNewNetwork);
    expect(getCurrentNetworkState).toHaveBeenCalledWith(mockNewChainId);
  });

  // TODO: fix this test
  xit('should update the current network state when chainId changes', async () => {
    const mockedSwitchNetwork = jest.fn();
    const mockedUseEthers = useEthers as jest.Mock;
    mockedUseEthers.mockReturnValueOnce({ switchNetwork: mockedSwitchNetwork, chainId: 1 });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CurrentNetworkProvider>{children}</CurrentNetworkProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useCurrentNetworkContext(), {
      wrapper,
    });

    expect(result.current.currentNetwork.network.chainId).toBe(LocalhostChain.chainId);

    mockedUseEthers.mockReturnValueOnce({ switchNetwork: mockedSwitchNetwork, chainId: 2 });
    fireEvent(window, new Event('chainChanged'));
    await waitForNextUpdate();

    expect(mockedSwitchNetwork).toHaveBeenCalledWith(2);
    expect(result.current.currentNetwork.network.chainId).toBe(2);
  });
});
