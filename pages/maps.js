import React from 'react';
import Head from 'next/head';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import Map from '../src/components/Map/Map';
import { maps } from '../src/components/Map/maps';
import MapCarousel from '../src/components/Map/MapCarousel';

const Maps = () => {
  return (
    <>
      <Head>
        <title>
          Maps / Parker Ziegler / Software Engineer and Cartographer
        </title>
        <meta
          name="description"
          content="Maps created by Parker Ziegler, a software engineer and cartographer based in Seattle, WA."
        />
      </Head>
      <main>
        <Section className="stack-md">
          <SectionHeader>
            <Underline>Maps</Underline>
          </SectionHeader>
          <div className="stack-xl md:stack-xxl">
            {maps.map(
              ({
                src,
                alt,
                width,
                height,
                title,
                items,
                link,
                code,
                isPortrait,
                shadow,
                children
              }) => {
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
                    width={width}
                    height={height}
                    link={link}
                    code={code}
                    isPortrait={isPortrait}
                    shadow={shadow}
                  >
                    {children}
                  </Map>
                );
              }
            )}
          </div>
        </Section>
      </main>
    </>
  );
};

export default Maps;
