import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DM_Mono, Source_Serif_Pro } from '@next/font/google';
import { MDXProvider } from '@mdx-js/react';
import cs from 'classnames';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import components from '../src/components/Blog/MDXComponents';

import '../src/styles/tailwind.css';

const dmMono = DM_Mono({ weight: ['300', '400', '500'] });
const sourceSerifPro = Source_Serif_Pro({
  style: ['italic', 'normal'],
  weight: ['400', '600', '700']
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <MDXProvider components={components}>
        <div
          className={cs(
            'w-full max-w-view mx-auto',
            dmMono.className,
            sourceSerifPro.className
          )}
        >
          <Component {...pageProps} />
        </div>
      </MDXProvider>
      <Footer />
    </>
  );
}

export default App;
