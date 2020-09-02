import React from 'react';
import PropTypes from 'prop-types';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

import '../src/styles/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <>
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
