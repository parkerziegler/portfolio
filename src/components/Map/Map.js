import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import Heading from '../Shared/Heading';
import Text from '../Shared/Text';

const Map = ({ title, src, alt, before, link, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  });

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-8">
      <div
        className={cn(
          'col-span-12 lg:col-span-3 flex items-center justify-center self-center bg-radial bg-radial--purple shadow-purple p-8 mb-4 lg:mb-0',
          !before && 'lg:col-start-10 lg:shadow-purple--reverse'
        )}
      >
        <Heading
          tag="h2"
          className="text-3xl lg:text-4xl font-sans bg-white p-4"
        >
          <strong>{title}</strong>
        </Heading>
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'col-span-12 lg:col-span-9 lg:col-start-1 lg:row-start-1',
            before && 'lg:col-start-4'
          )}
          ref={ref}
        >
          {inView ? <img src={src} alt={alt} loading="lazy" /> : null}
        </a>
      ) : (
        <div
          className={cn(
            'col-span-12 lg:col-span-9 lg:col-start-1 lg:row-start-1 shadow-lg',
            before && 'lg:col-start-4'
          )}
          ref={ref}
        >
          {inView ? <img src={src} alt={alt} loading="lazy" /> : null}
        </div>
      )}
      <Text className="col-span-12 col-start-1 bg-white p-4">{children}</Text>
    </div>
  );
};

Map.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  before: PropTypes.bool.isRequired,
  link: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Map;
