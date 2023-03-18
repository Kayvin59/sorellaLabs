import { DAppProvider } from '@usedapp/core';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/document/Layout';

import { currentDappConfig } from '@/config';

function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={currentDappConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  );
}
export default App;
