import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

const SecondParagraph = () => {
  const elementRef = useRef<HTMLInputElement>(null);
  const [hasAnimationTriggered, setHasAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimationTriggered || elementRef.current === null) {
        return;
      }

      const elementPosition = elementRef.current.getBoundingClientRect().top + 400;
      const isElementVisible = elementPosition < window.innerHeight;

      if (isElementVisible) {
        anime({
          targets: elementRef.current,
          translateY: 100,
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutQuad',
        });
        setHasAnimationTriggered(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimationTriggered]);

  return (
    <div className='my-[300px] flex w-full justify-end text-right'>
      <div
        ref={elementRef}
        className='relative flex h-full w-[35vw] justify-center text-6xl font-bold text-white opacity-0'
      >
        ad minim qui nostrud magna consectetur ullamco
      </div>
    </div>
  );
};

export default SecondParagraph;
