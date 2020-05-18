import React from 'react';
import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Map from '../components/Map/Map';
import { maps } from '../components/Map/maps';
import MapCarousel from '../components/Map/MapCarousel';

const Maps = () => {
  return (
    <main>
      <Section className="stack-vertical">
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
