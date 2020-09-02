import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import cs from 'classnames';

import MapTitle from './MapTitle';
import Text from '../Shared/Text';

const variants = {
  visible: {
    filter: 'saturate(1)'
  },
  hidden: {
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
      className="h-32 md:h-64 object-cover saturate cursor-pointer rounded-md"
      ref={thumbnailNode}
      style={selectedSrc === src ? { filter: 'saturate(1)' } : {}}
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

const MapCarousel = ({
  maps = [],
  title,
  link,
  code,
  isPortrait,
  children
}) => {
  const [map, setMap] = useState(maps[0]);

  const onClickThumbnail = (src) => {
    setMap(maps.find((m) => m.src === src));
  };

  return (
    <div className="grid grid-cols-12 md:grid-rows-auto-2 gap-8 md:gap-12">
      <div
        className={cs(
          'col-span-12 stack-md md:row-start-1',
          isPortrait
            ? 'md:row-span-2 md:col-start-7 md:col-span-6 self-start'
            : 'md:row-span-1'
        )}
      >
        <motion.img
          key={map.src}
          src={map.src}
          alt={map.alt}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          className="block min-w-screen max-w-full scroll-snap-align-start object-cover shadow-lg rounded-md"
          loading="lazy"
        />
        <nav className="flex overflow-y-hidden stack-sm-h">
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

MapCarousel.propTypes = {
  maps: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  code: PropTypes.string,
  isPortrait: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default MapCarousel;
