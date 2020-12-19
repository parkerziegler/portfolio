import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ children }) => (
  <>
    <blockquote className="twitter-tweet">{children}</blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    ></script>
  </>
);

Tweet.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tweet;
