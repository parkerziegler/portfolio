import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Heading from '../Shared/Heading';
import Text from '../Shared/Text';

const Map = ({ title, mapSrc, mapAlt, before, children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-8">
      <div
        className={cn(
          'col-span-12 lg:col-span-4 flex items-center justify-center self-center bg-dotted-purple shadow-purple p-8 mb-4 lg:mb-0',
          !before && 'lg:col-start-9 lg:shadow-purple--reverse'
        )}
      >
        <Heading
          tag="h2"
          className="text-3xl lg:text-4xl font-sans bg-white p-4"
        >
          <strong>{title}</strong>
        </Heading>
      </div>
      <img
        src={mapSrc}
        alt={mapAlt}
        className={cn(
          'col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-1',
          before && 'lg:col-start-5'
        )}
      />
      <Text className="col-span-10 col-start-2 bg-white p-4 text-gray-800">
        {children}
      </Text>
    </div>
  );
};

Map.propTypes = {
  title: PropTypes.string.isRequired,
  mapSrc: PropTypes.string.isRequired,
  mapAlt: PropTypes.string.isRequired,
  before: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Map;
