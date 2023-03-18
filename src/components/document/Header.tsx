import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/document/Button';

import { LinkType } from './layout';

interface Props {
  links: LinkType[];
}

const Header = (props: Props) => {
  const { links } = props;
  const router = useRouter();

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
        <div className='flex w-[400px] items-center justify-between'>{links.map(renderLink)}</div>
        <Button
          onClick={() => {
            router.push('dapp');
          }}
        >
          Launch App
        </Button>
      </div>
    </header>
  );
};

export default Header;
