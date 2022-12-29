import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import cs from 'classnames';

import type { MapCollection } from '../../content/maps';
import Text from '../Shared/Text';

import MapTitle from './MapTitle';

interface MapThumbnailProps {
  src: StaticImageData;
  alt: string;
  selectedSrc: StaticImageData;
  onClick: (src: StaticImageData) => void;
  isPortrait?: boolean;
}

const MapThumbnail: React.FC<MapThumbnailProps> = ({
  src,
  alt,
  selectedSrc,
  onClick,
  isPortrait = false
}) => {
  const thumbnailNode = React.useRef<HTMLDivElement>(null);

  const onClickThumbnail = React.useCallback(() => {
    onClick(src);

    thumbnailNode.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }, [onClick, src]);

  return (
    <div
      className={cs(
        'h-32 md:h-64 relative object-cover saturate cursor-pointer flex-shrink-0',
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
            : '(min-width: 768px) calc(100vw / 3), (min-width: 1024px) 25vw, (min-width: 1280px) 20vw, 25vw'
        }
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        onClick={onClickThumbnail}
        placeholder="blur"
      />
    </div>
  );
};

const MapCarousel: React.FC<React.PropsWithChildren<MapCollection>> = ({
  items,
  title,
  href,
  code,
  isPortrait = false,
  children
}) => {
  const [map, setMap] = React.useState(items[0]);

  const onClickThumbnail = React.useCallback(
    (src: StaticImageData) => {
      setMap(items.find((m) => m.src === src));
    },
    [items]
  );

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
          className="shadow-lg rounded-md"
          placeholder="blur"
        />
        <nav className="flex overflow-y-hidden stack-sm-h">
          {items.map(({ src, alt }) => {
            return (
              <MapThumbnail
                key={src.src}
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
      <MapTitle title={title} href={href} code={code} isPortrait={isPortrait} />
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

export default MapCarousel;
