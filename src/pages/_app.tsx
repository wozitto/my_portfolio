import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
