import { render } from '@testing-library/react';
import anime from 'animejs';
import React from 'react';

import TeamSection from '../TeamSection';

jest.mock('animejs', () => ({
  ...jest.requireActual('animejs'),
  timeline: jest.fn().mockReturnValue({ add: jest.fn() }),
}));

describe('TeamSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component without any errors', () => {
    const { container } = render(<TeamSection />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should trigger the animation when the component is visible in the viewport', () => {
    const originalHeight = Object.getOwnPropertyDescriptor(window, 'innerHeight');
    Object.defineProperty(window, 'innerHeight', { value: 500 });

    render(<TeamSection />);
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    expect(anime.timeline).toHaveBeenCalledWith(expect.objectContaining({ easing: 'easeOutExpo' }));
    expect(anime.timeline().add).toHaveBeenCalledWith(
      expect.objectContaining({
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 2000,
      })
    );

    Object.defineProperty(window, 'innerHeight', originalHeight || 0);
  });
});
