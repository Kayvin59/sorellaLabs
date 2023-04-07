import { render } from '@testing-library/react';
import anime from 'animejs';
import React from 'react';

import ThirdParagraph from '../ThirdParagraph';

jest.mock('animejs', () => ({
  ...jest.requireActual('animejs'),
  timeline: jest.fn().mockReturnValue({ add: jest.fn() }),
}));

describe('ThirdParagraph', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component without any errors', () => {
    const { container } = render(<ThirdParagraph />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should trigger the animation when the component is visible in the viewport', () => {
    const originalHeight = Object.getOwnPropertyDescriptor(window, 'innerHeight');
    Object.defineProperty(window, 'innerHeight', { value: 500 });

    render(<ThirdParagraph />);
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    expect(anime.timeline).toHaveBeenCalledWith(expect.objectContaining({ easing: 'easeOutExpo' }));
    expect(anime.timeline().add).toHaveBeenCalledWith(
      expect.objectContaining({
        translateY: 100,
        opacity: [0, 1],
        duration: 1000,
      })
    );

    Object.defineProperty(window, 'innerHeight', originalHeight || 0);
  });
});
