import React from 'react';
import PropTypes from 'prop-types';

import '../styles/tailwind.css';
import Page from '../components/Shared/Page';
import Header from '../components/Header/Header';

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
