import { useEffect, useState } from 'react';

export const useIntersection = (node, options) => {
  const [observerEntry, setObserverEntry] = useState(null);

  useEffect(() => {
    function handler(entries) {
      setObserverEntry(entries[0]);
    }

    if (node && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(handler, options);
      observer.observe(node);

      return () => {
        setObserverEntry(null);
        observer.disconnect();
      };
    }

    return () => {};
  }, [node, options]);

  return observerEntry;
};
