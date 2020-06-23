import React from 'react';
import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import Map from '../src/components/Map/Map';
import { maps } from '../src/components/Map/maps';
import MapCarousel from '../src/components/Map/MapCarousel';

const Maps = () => {
  return (
    <main>
      <Section className="stack-md">
        <SectionHeader>
          <Underline>Maps</Underline>
        </SectionHeader>
        {maps.map(({ src, alt, title, items, link, children }, i) => {
          return items ? (
            <MapCarousel maps={items} title={title} before={i % 2 === 0}>
              {children}
            </MapCarousel>
          ) : (
            <Map
              key={title}
              title={title}
              src={src}
              alt={alt}
              before={i % 2 === 0}
              link={link}
            >
              {children}
            </Map>
          );
        })}
      </Section>
    </main>
  );
};

export default Maps;
