import React from 'react';
import Head from 'next/head';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import Map from '../src/components/Map/Map';
import { maps } from '../src/components/Map/maps';
import MapCarousel from '../src/components/Map/MapCarousel';

const title = 'Maps / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Maps created by Parker Ziegler, a software engineer and cartographer based in Seattle, WA.';

const Maps = () => {
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
