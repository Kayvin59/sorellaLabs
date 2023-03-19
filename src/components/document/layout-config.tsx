export interface LinkType {
  url: string;
  name: string;
}

export const HOME_HEADER_LINKS: LinkType[] = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/about',
    name: 'About',
  },
  {
    url: '/faq',
    name: 'FAQ',
  },
  {
    url: '/team',
    name: 'Team',
  },
];

export const DAPP_HEADER_LINKS: LinkType[] = [
  {
    url: '/strategies',
    name: 'Strategies',
  },
];

export const FOOTER_LINKS: LinkType[] = [
  {
    url: '/docs',
    name: 'Docs',
  },
  {
    url: '/policy',
    name: 'Policy',
  },
  {
    url: '/contract',
    name: 'Contract',
  },
];
