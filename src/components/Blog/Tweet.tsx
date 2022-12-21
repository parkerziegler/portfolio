import * as React from 'react';

const Tweet: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    const tw = document.createElement('script');
    tw.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tw.setAttribute('async', 'true');
    tw.setAttribute('charset', 'utf-8');
    document.head.appendChild(tw);
  }, []);

  return <blockquote className="twitter-tweet">{children}</blockquote>;
};

export default Tweet;
