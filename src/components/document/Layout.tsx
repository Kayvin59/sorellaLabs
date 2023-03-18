import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from '@/components/document/Footer';

import { CurrentNetworkProvider } from '@/contexts/CurrentNetwork';

import Header from './Header';
import { FOOTER_LINKS, HEADER_LINKS } from './layout-config';

export interface LinkType {
  url: string;
  name: string;
}

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <CurrentNetworkProvider>
      <div className='flex h-full w-full flex-col py-4 px-6'>
        <Header links={HEADER_LINKS} />
        <div className='h-max w-full flex-auto overflow-y-scroll pt-12'>{children}</div>
        <ToastContainer
          position='bottom-right'
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={5}
          draggable
          pauseOnHover
        />
        <Footer links={FOOTER_LINKS} />
      </div>
    </CurrentNetworkProvider>
  );
};

export default Layout;
