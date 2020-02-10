import React from 'react';
import PropTypes from 'prop-types';

import '../styles/tailwind.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};
