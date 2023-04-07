import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

import { TEAM_MEMBERS } from '@/components/home/HomePageBody/team-section-config';

const TeamSection = () => {
  const elementRef = useRef<HTMLInputElement>(null);

  const [hasAnimationTriggered, setHasAnimationTriggered] = useState(false);
  const teamMemberClassNameIdentificator = 'team-member';
  const renderTeamMember = () => {
    return TEAM_MEMBERS.map((teamMember) => (
      <div key={teamMember.lastName} className={`flex ${teamMemberClassNameIdentificator} opacity-0`}>
        <div className='mr-10 mb-20 h-[240px] w-[240px] bg-card-background'></div>
        <div className='flex max-w-[600px] flex-col items-start justify-start text-4xl font-bold'>
          <div className='pb-10'>
            {teamMember.firstName} {teamMember.lastName}
          </div>
          <div className='text-left text-2xl font-thin text-white/70'>{teamMember.description}</div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimationTriggered || elementRef.current === null) {
        return;
      }

      const elementPosition = elementRef.current.getBoundingClientRect().top + 400;
      const isElementVisible = elementPosition < window.innerHeight;

      if (isElementVisible) {
        const timeline = anime.timeline({ easing: 'easeOutExpo' });
        timeline.add({
          targets: `.${teamMemberClassNameIdentificator}`,
          translateX: [300, 0],
          opacity: [0, 1],
          duration: 2000,
          delay: (_, i) => 150 * i,
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
    <div ref={elementRef} className='my-[300px] flex w-full flex-col justify-between text-center text-white '>
      <div className='mb-24 text-6xl uppercase'>Team</div>
      <div className='flex flex-col items-end'>{renderTeamMember()}</div>
    </div>
  );
};

export default TeamSection;
