import Link from 'next/link';
import React from 'react';

import { LinkType } from '@/components/document/layout';

interface Props {
  links: LinkType[];
}

const Footer = (props: Props) => {
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
    <footer className='z-10 w-full pr-12'>
      <div className='flex w-full flex-row justify-between '>
        <div className='text-white/20'>&copy; {new Date().getFullYear()} Sorella Labs&#8482;. All Rights Reserved.</div>
        <div className='flex w-[300px] items-center justify-between'>{links.map(renderLink)}</div>
      </div>
    </footer>
  );
};

export default Footer;
