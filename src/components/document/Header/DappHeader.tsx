import Link from 'next/link';
import React from 'react';

import Button, { ButtonVariant } from '@/components/document/Button';
import { LinkType } from '@/components/document/layout-config';

interface Props {
  links: LinkType[];
}

const DappHeader = (props: Props) => {
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

  const getHomeUrl = () => {
    return `${window.location.protocol}//${window.location.host.replace('dapp.', '')}/`;
  };

  return (
    <header className='z-10 w-full pr-12'>
      <div className='flex w-full flex-row items-start justify-between'>
        <div className='text-8xl font-bold text-white'>
          <Link href={getHomeUrl()}>
            <a data-testid='sorella-labs-logo' className='text-white'>
              <div className='flex w-fit items-center justify-center'>S</div>
            </a>
          </Link>
        </div>
        <div className='flex flex-row items-center justify-end'>
          <div className='flex items-center justify-end pr-10 font-bold'>{links.map(renderLink)}</div>
          <Button
            gradient
            variant={ButtonVariant.Rounded}
            onClick={() => {
              console.log('Clicked');
            }}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DappHeader;
