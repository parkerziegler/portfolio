import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import cn from 'classnames';
import Heading from '../Shared/Heading';
import Text from '../Shared/Text';

const variants = {
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    filter: 'saturate(1)'
  },
  hidden: {
    transform: 'scale(0.5)',
    opacity: 0,
    filter: 'saturate(0)'
  }
};

const MapThumbnail = ({ src, alt, selectedSrc, onClick }) => {
  const thumbnailNode = useRef(null);

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      onClick={() => {
        onClick(src);
        thumbnailNode.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }}
      className="h-64 object-cover saturate cursor-pointer"
      ref={thumbnailNode}
      style={
        selectedSrc === src
          ? { filter: 'saturate(1)', transform: 'scale(1.05)' }
          : {}
      }
    />
  );
};

MapThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  selectedSrc: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

const MapCarousel = ({ maps = [], title, before, children }) => {
  const [map, setMap] = useState(maps[0]);

  const onClickThumbnail = (src) => {
    setMap(maps.find((m) => m.src === src));
  };

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-8">
      <div
        className={cn(
          'col-span-12 lg:col-span-4 flex items-center justify-center self-end bg-dotted-purple shadow-purple p-8',
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
      <div
        className={cn(
          'carousel grid gap-4 lg:gap-8 col-span-12 lg:col-span-8 lg:row-start-1 lg:row-span-2 self-start',
          before && 'lg:col-start-5'
        )}
      >
        <motion.img
          key={map.src}
          src={map.src}
          alt={map.alt}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.3 }}
          className="block min-w-screen max-w-full scroll-snap-align-start object-cover shadow-lg"
        />
        <nav className="flex overflow-y-hidden stack-horizontal">
          {maps.map(({ src, alt }) => {
            return (
              <MapThumbnail
                key={src}
                src={src}
                alt={alt}
                selectedSrc={map.src}
                onClick={onClickThumbnail}
              />
            );
          })}
        </nav>
      </div>
      <Text
        className={cn(
          'col-span-12 lg:col-span-4 bg-white p-4 text-gray-800 self-start',
          !before && 'lg:col-start-9'
        )}
      >
        {children}
      </Text>
    </div>
  );
};

MapCarousel.propTypes = {
  maps: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string.isRequired,
  before: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default MapCarousel;
