import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { useInView } from 'react-intersection-observer';

import MapTitle from './MapTitle';
import Text from '../Shared/Text';

const Map = ({ title, src, alt, link, code, isPortrait = false, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  });

  return (
    <div className="grid grid-cols-12 grid-rows-auto-2 gap-8 md:gap-12">
      <div
        className={cs(
          'col-span-12 shadow-lg',
          isPortrait
            ? 'md:row-span-2 md:col-start-7 md:col-span-6 self-start'
            : 'md:row-span-1'
        )}
        ref={ref}
      >
        {inView ? <img src={src} alt={alt} className="rounded-md" /> : null}
      </div>
      <MapTitle title={title} link={link} code={code} isPortrait={isPortrait} />
      <Text
        className={cs(
          'col-span-12 row-start-3 md:row-start-2 bg-white',
          isPortrait ? 'md:col-span-6' : 'md:col-span-9'
        )}
      >
        {children}
      </Text>
    </div>
  );
};

Map.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
  code: PropTypes.string,
  isPortrait: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Map;
