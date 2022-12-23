import * as React from 'react';

export const useScrollToTop = () => {
  React.useEffect(() => {
    if (window.pageYOffset !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);
};
