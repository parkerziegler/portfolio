import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import cs from 'classnames';

import type { Map } from '../../content/maps';
import Text from '../Shared/Text';

import MapTitle from './MapTitle';

const Map: React.FC<React.PropsWithChildren<Map>> = ({
  title,
  src,
  alt,
  href,
  code,
  isPortrait = false,
  shadow = true,
  eager = false,
  children
}) => (
  <div className="grid grid-cols-12 grid-rows-auto-2 gap-8 md:gap-12">
    <div
      className={cs(
        'col-span-12',
        isPortrait
          ? 'md:row-span-2 md:col-start-7 md:col-span-6 self-start'
          : 'md:row-span-1',
        {
          'shadow-lg': shadow
        }
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes={
          isPortrait
            ? '(min-width: 768px) 50vw, (min-width: 1280px) 1280px, 100vw'
            : '(min-width: 1280px) 1280px, 100vw'
        }
        className="rounded-md h-auto"
        loading={eager ? 'eager' : 'lazy'}
        priority={eager}
        placeholder="blur"
      />
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

export default Map;
