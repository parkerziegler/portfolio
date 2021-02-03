import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import cs from 'classnames';

import Text from '../Shared/Text';

import MapTitle from './MapTitle';

const MapThumbnail = ({
  src,
  alt,
  selectedSrc,
  onClick,
  isPortrait = false
}) => {
  const thumbnailNode = useRef(null);
  console.log(selectedSrc === src);

  return (
    <div
      className={cs(
        'h-32 md:h-64 object-cover saturate cursor-pointer flex-shrink-0',
        isPortrait ? 'w-24 md:w-48' : 'w-40 md:w-80',
        {
          saturated: selectedSrc === src
        }
      )}
      ref={thumbnailNode}
    >
      <Image
        src={src}
        alt={alt}
        sizes={
          isPortrait
            ? '(min-width: 768px) 25vw, (min-width: 1024px) calc(100vw / 6), (min-width: 1280px) 12.5vw, 20vw'
            : '(min-width: 768px) 33vw, (min-width: 1024px) 25vw, (min-width: 1280px) 20vw, 25vw'
        }
        layout="fill"
        onClick={() => {
          onClick(src);
          thumbnailNode.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        }}
      />
    </div>
  );
};

MapThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  selectedSrc: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isPortrait: PropTypes.bool
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
        <Image
          src={map.src}
          alt={map.alt}
          sizes={
            isPortrait
              ? '(min-width: 768px) 50vw, (min-width: 1280px) 1280px, 100vw'
              : '(min-width: 1280px) 1280px, 100vw'
          }
          height={map.height}
          width={map.width}
          className="shadow-lg rounded-md"
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
                isPortrait={isPortrait}
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
