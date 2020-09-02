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
        <div className="stack-xl md:stack-xxl">
          {maps.map(
            ({ src, alt, title, items, link, code, isPortrait, children }) => {
              return items ? (
                <MapCarousel
                  maps={items}
                  title={title}
                  link={link}
                  code={code}
                  isPortrait={isPortrait}
                >
                  {children}
                </MapCarousel>
              ) : (
                <Map
                  key={title}
                  title={title}
                  src={src}
                  alt={alt}
                  link={link}
                  code={code}
                  isPortrait={isPortrait}
                >
                  {children}
                </Map>
              );
            }
          )}
        </div>
      </Section>
    </main>
  );
};

export default Maps;
