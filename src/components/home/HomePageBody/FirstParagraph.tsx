import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

const FirstParagraph = () => {
  const elementRef = useRef<HTMLInputElement>(null);
  const [hasAnimationTriggered, setHasAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimationTriggered || elementRef.current === null) {
        return;
      }

      const elementPosition = elementRef.current.getBoundingClientRect().top + 400;
      const isElementVisible = elementPosition < window.innerHeight;

      if (isElementVisible && !hasAnimationTriggered) {
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
    <div className='my-[300px] flex w-full justify-start'>
      <div
        ref={elementRef}
        className='relative flex h-full w-[60vw] justify-center text-4xl font-light text-white opacity-0'
      >
        Nulla enim anim aliquip ea sint voluptate officia qui id proident cillum amet Lorem laborum. Do reprehenderit
        est id aute tempor officia ullamco incididunt consectetur occaecat nulla eiusmod dolore. Minim aliquip anim in
        adipisicing aliquip reprehenderit consectetur nisi pariatur cillum. Nulla nisi laboris deserunt nostrud occaecat
        laboris ut culpa sit est consequat officia. Exercitation sint consectetur fugiat commodo et laborum nulla
        eiusmod sit pariatur consectetur eu. Anim occaecat consequat cillum deserunt. Duis deserunt fugiat ipsum irure
        mollit ut.
      </div>
    </div>
  );
};

export default FirstParagraph;
