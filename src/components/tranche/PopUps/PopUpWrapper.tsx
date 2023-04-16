import anime from 'animejs';
import Image from 'next/image';
import React, { ReactNode, useEffect, useRef } from 'react';

import src from '../../../../public/images/tranche-popup-asset.png';

interface Props {
  show: boolean;
  onClose: (state: any) => any;
  children: ReactNode;
}

const PopUpWrapper = (props: Props) => {
  const { show, onClose, children } = props;
  const popupRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!popupRef.current) {
      return;
    }

    if (show) {
      anime({
        targets: popupRef.current,
        opacity: [0, 1],
        duration: 300,
        begin: () => {
          if (popupRef.current) popupRef.current.style.display = 'flex';
        },
        easing: 'easeInOutQuad',
      });
    } else {
      anime({
        targets: popupRef.current,
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInOutQuad',
        complete: () => {
          if (popupRef.current) popupRef.current.style.display = 'none';
        },
      });
    }
  }, [show]);

  return (
    <div
      data-testid='popup-wrapper'
      ref={popupRef}
      className='fixed inset-0 z-40 hidden items-center justify-center bg-black bg-opacity-80'
    >
      <button className='absolute top-4 right-4 z-50' onClick={onClose}>
        Close
      </button>
      <div className='z-50'>{children}</div>
      <Image src={src} alt='' layout='fill' objectFit='fill' />
    </div>
  );
};

export default PopUpWrapper;
