import React from 'react';
import PropTypes from 'prop-types';

import Page from '../src/components/Shared/Page';
import Header from '../src/components/Header/Header';

import '../src/styles/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
    </Page>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
