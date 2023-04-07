import { render } from '@testing-library/react';
import anime from 'animejs';
import React from 'react';

import FirstParagraph from '../FirstParagraph';

jest.mock('animejs', () => ({ __esModule: true, default: jest.fn() }));

describe('FirstParagraph', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component without any errors', () => {
    const { container } = render(<FirstParagraph />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should trigger the animation when the component is visible in the viewport', () => {
    const originalHeight = Object.getOwnPropertyDescriptor(window, 'innerHeight');
    Object.defineProperty(window, 'innerHeight', { value: 500 });

    render(<FirstParagraph />);
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    expect(anime).toHaveBeenCalledWith(
      expect.objectContaining({
        translateY: 100,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
      })
    );

    Object.defineProperty(window, 'innerHeight', originalHeight || 0);
  });
});
