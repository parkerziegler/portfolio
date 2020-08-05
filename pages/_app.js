import React from 'react';
import PropTypes from 'prop-types';

import Page from '../src/components/Shared/Page';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

import '../src/styles/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Page>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};
