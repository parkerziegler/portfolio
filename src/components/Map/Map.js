import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Heading from '../Shared/Heading';
import Text from '../Shared/Text';

const Map = ({ title, src, alt, before, link, children }) => {
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
        >
          <img src={src} alt={alt} />
        </a>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            'col-span-12 lg:col-span-9 lg:col-start-1 lg:row-start-1 shadow-lg',
            before && 'lg:col-start-4'
          )}
        />
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
