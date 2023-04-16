import { fireEvent } from '@testing-library/dom';
import { act, renderHook } from '@testing-library/react-hooks';

import useWindowHeight from '../useWindowHeight';

describe('useWindowHeight', () => {
  beforeEach(() => {
    // Set the initial window height
    window.innerHeight = 600;
  });

  it('should return initial window height', () => {
    const { result } = renderHook(() => useWindowHeight());
    expect(result.current).toBe(600);
  });

  it('should update window height when the window is resized', () => {
    const { result } = renderHook(() => useWindowHeight());

    act(() => {
      // Simulate a window resize event
      window.innerHeight = 800;
      fireEvent(window, new Event('resize'));
    });

    expect(result.current).toBe(800);
  });

  it('should cleanup event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useWindowHeight());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
