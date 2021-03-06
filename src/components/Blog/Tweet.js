import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ children }) => {
  useEffect(() => {
    const tw = document.createElement('script');
    tw.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tw.setAttribute('async', 'true');
    tw.setAttribute('charset', 'utf-8');
    document.head.appendChild(tw);
  }, []);

  return <blockquote className="twitter-tweet">{children}</blockquote>;
};

Tweet.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tweet;
