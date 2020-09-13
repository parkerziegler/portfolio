import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

import '../src/styles/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="w-full max-w-view mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};
