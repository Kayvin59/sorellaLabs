import { renderHook } from '@testing-library/react-hooks';

import useIsMobile from '../useIsMobile';

describe('useIsMobile', () => {
  it('should return true when window.innerWidth is less than 768', () => {
    window.innerWidth = 767;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it('should return false when window.innerWidth is greater than or equal to 768', () => {
    window.innerWidth = 1024;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });
});
