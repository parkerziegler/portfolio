import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import components from '../src/components/Blog/MDXComponents';

import '../src/styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <MDXProvider components={components}>
        <div className="w-full max-w-view mx-auto">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
      <Footer />
    </>
  );
}

export default App;
