import Link from 'next/link';
import React from 'react';

import Button, { ButtonVariant } from '@/components/document/Button';
import { LinkType } from '@/components/document/layout-config';

interface Props {
  links: LinkType[];
}

const HomeHeader = (props: Props) => {
  const { links } = props;

  const renderLink = (link: LinkType) => {
    return (
      <Link key={link.url} href={link.url}>
        <a className='text-white'>
          <div className='flex w-fit items-center justify-center'>{link.name}</div>
        </a>
      </Link>
    );
  };

  return (
    <header className='z-10 w-full pr-12'>
      <div className='flex w-full flex-row justify-between'>
        <div className='flex w-[400px] items-center justify-between font-thin'>{links.map(renderLink)}</div>
        <Button
          gradient
          variant={ButtonVariant.Rounded}
          onClick={() => {
            window.open(`${window.location.protocol}//dapp.${window.location.host}/strategies`);
          }}
        >
          Launch App
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;
