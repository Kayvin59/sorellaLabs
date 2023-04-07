import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

const ThirdParagraph = () => {
  const elementRef1 = useRef<HTMLInputElement>(null);
  const elementRef2 = useRef<HTMLInputElement>(null);
  const elementRef3 = useRef<HTMLInputElement>(null);
  const [hasAnimationTriggered, setHasAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        hasAnimationTriggered ||
        elementRef1.current === null ||
        elementRef2.current === null ||
        elementRef3.current === null
      ) {
        return;
      }

      const elementPosition1 = elementRef1.current.getBoundingClientRect().top + 400;
      const isElementVisible1 = elementPosition1 < window.innerHeight;

      if (isElementVisible1) {
        const timeline = anime.timeline({ easing: 'easeOutExpo' });
        timeline.add({
          targets: elementRef1.current,
          translateY: 100,
          opacity: [0, 1],
          duration: 1000,
        });
        timeline.add(
          {
            targets: elementRef2.current,
            translateY: 100,
            opacity: [0, 1],
            duration: 1000,
          },
          '-=700' // Start animation 700ms before previous animation ends
        );
        timeline.add(
          {
            targets: elementRef3.current,
            translateY: 100,
            opacity: [0, 1],
            duration: 1000,
          },
          '-=700' // Start animation 700ms before previous animation ends
        );

        setHasAnimationTriggered(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimationTriggered]);

  return (
    <div className='my-[300px] flex w-full flex-row justify-between text-center'>
      <div ref={elementRef1} className='w-[25vw] opacity-0'>
        <div className='relative flex justify-center text-4xl font-bold text-white'>
          ad minim qui nostrud magna consectetur ullamco
        </div>
        <div className='relative flex justify-center pt-24 text-2xl font-thin text-white/70'>
          Id officia enim Lorem cupidatat proident ad labore. Tempor ad ad eu sit enim anim nisi officia tempor magna.
          Sunt pariatur reprehenderit aute enim anim cillum. Dolore sint est nisi ipsum anim irure eu labore velit et.
          Ea ea magna consequat fugiat voluptate sit culpa ex anim.
        </div>
      </div>
      <div ref={elementRef2} className='w-[25vw] opacity-0'>
        <div className='relative flex justify-center text-4xl font-bold text-white'>
          ad minim qui nostrud magna consectetur ullamco
        </div>
        <div className='relative flex justify-center pt-24 text-2xl font-thin text-white/70'>
          Id officia enim Lorem cupidatat proident ad labore. Tempor ad ad eu sit enim anim nisi officia tempor magna.
          Sunt pariatur reprehenderit aute enim anim cillum. Dolore sint est nisi ipsum anim irure eu labore velit et.
          Ea ea magna consequat fugiat voluptate sit culpa ex anim.
        </div>
      </div>
      <div ref={elementRef3} className='w-[25vw] opacity-0'>
        <div className='relative flex justify-center text-4xl font-bold text-white'>
          ad minim qui nostrud magna consectetur ullamco
        </div>
        <div className='relative flex justify-center pt-24 text-2xl font-thin text-white/70'>
          Id officia enim Lorem cupidatat proident ad labore. Tempor ad ad eu sit enim anim nisi officia tempor magna.
          Sunt pariatur reprehenderit aute enim anim cillum. Dolore sint est nisi ipsum anim irure eu labore velit et.
          Ea ea magna consequat fugiat voluptate sit culpa ex anim.
        </div>
      </div>
    </div>
  );
};

export default ThirdParagraph;
