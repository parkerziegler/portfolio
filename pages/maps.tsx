import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Map from '../src/components/Map/Map';
import MapCarousel from '../src/components/Map/MapCarousel';
import { maps } from '../src/content/maps';

// Page-level information for meta tags.
const title = 'Maps / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Maps created by Parker Ziegler, a software engineer and cartographer based in Berkeley, CA.';

const Maps: NextPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/maps/og-image.png" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@parker_ziegler" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/maps/og-image.png" />
      </Head>
      <main>
        <Section className="stack-md">
          <SectionHeader>Maps</SectionHeader>
          <div className="stack-xl md:stack-xxl">
            {maps.map((map) => {
              if ('items' in map) {
                return (
                  <MapCarousel
                    key={map.title}
                    items={map.items}
                    title={map.title}
                    href={map.href}
                    code={map.code}
                    isPortrait={map.isPortrait}
                  >
                    {map.children}
                  </MapCarousel>
                );
              } else {
                return (
                  <Map
                    key={map.title}
                    title={map.title}
                    src={map.src}
                    alt={map.alt}
                    href={map.href}
                    code={map.code}
                    isPortrait={map.isPortrait}
                    shadow={map.shadow}
                    eager={map.eager}
                  >
                    {map.children}
                  </Map>
                );
              }
            })}
          </div>
        </Section>
      </main>
    </>
  );
};

export default Maps;
