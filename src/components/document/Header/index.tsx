import React from 'react';

import HomeHeader from '@/components/document/Header/HomeHeader';
import { LinkType } from '@/components/document/layout-config';

interface Props {
  links: LinkType[];
}

const Header = (props: Props) => {
  const { links } = props;

  return <HomeHeader links={links} />;
};

export default Header;
