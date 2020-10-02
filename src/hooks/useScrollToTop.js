import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    if (window.pageYOffset !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);
};
