import React from 'react';
import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Map from '../components/Map/Map';
import { maps } from '../components/Map/maps';

const Maps = () => {
  return (
    <main>
      <Section className="stack-vertical">
        <SectionHeader>
          <Underline>Maps</Underline>
        </SectionHeader>
        {maps.map(({ mapSrc, mapAlt, title, children }, i) => {
          return (
            <Map
              key={title}
              mapSrc={mapSrc}
              mapAlt={mapAlt}
              title={title}
              before={i % 2 !== 0}
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
