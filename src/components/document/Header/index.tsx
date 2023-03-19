import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import DappHeader from '@/components/document/Header/DappHeader';
import HomeHeader from '@/components/document/Header/HomeHeader';
import { DAPP_HEADER_LINKS, HOME_HEADER_LINKS } from '@/components/document/layout-config';

const Header = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDomainDapp = typeof window !== undefined && window.location.href.includes('dapp');
  const isDapp = isDomainDapp || DAPP_HEADER_LINKS.map((link) => link.url).includes(router.asPath);

  return isDapp ? <DappHeader links={DAPP_HEADER_LINKS} /> : <HomeHeader links={HOME_HEADER_LINKS} />;
};

export default Header;
