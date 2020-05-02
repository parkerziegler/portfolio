import React from 'react';
import InlineLink from '../Shared/InlineLink';

export const maps = [
  {
    title:
      'The Road to Vision Zero: Traffic Crashes and Poverty in New York City',
    mapSrc: '/maps/transalt-vision-zero-map.png',
    mapAlt: 'Transporation Alternatives x Azavea Vision Zero Map',
    children: (
      <>
        This web application, developed as part of{' '}
        <InlineLink href="https://www.summerofmaps.com/about/">
          Azavea & apos; s Summer of Maps fellowship
        </InlineLink>
        , is designed to help users explore and visualize relationships between
        traffic crashes and poverty in New York City.After significant pressure
        from community organizations, local businesses, and victims of traffic
        violence, Mayor Bill De Blasio launched the city & apos; s{' '}
        <InlineLink href="https://www1.nyc.gov/content/visionzero/pages/">
          Vision Zero campaign
        </InlineLink>{' '}
        in 2014. The campaign, based off{' '}
        <InlineLink href="https://visionzeronetwork.org/">
          Sweden&apos;s Vision Zero design initiative
        </InlineLink>
        , is based on the principle that no loss of life on our streets is
        acceptable.However, Vision Zero NYC makes no direct mention of exploring
        relationships between the density of crashes in different parts of the
        city and socioeconomic and demographic variables like poverty rate,
        median income, unemployment, or population density.This{' '}
        <InlineLink href="https://www.citylab.com/transportation/2012/05/why-elderly-children-and-poor-are-greater-risk-traffic-deaths/2011/">
          despite the fact that researchers are uncovering statistically
          significant relationships showing a higher incidence of traffic
          crashes in lower income communities of color
        </InlineLink>
        , mainly as a result of poor urban design and a lack of appropriate
        transportation infrastructure.This application, built on{' '}
        <InlineLink href="https://d3js.org/">D3</InlineLink>,{' '}
        <InlineLink href="https://carto.com/"> CARTO</InlineLink>,{' '}
        <InlineLink href="https://leafletjs.com/"> Leaflet</InlineLink>, and{' '}
        <InlineLink href="https://jquery.com/">jQuery</InlineLink>, attempts to
        fill this gap in the Vision Zero literature by visualizing these
        relationships both geographically and statistically in a single
        integrated interface.Take a look at{' '}
        <InlineLink href="https://github.com/summer-of-maps/2016-TransAlt-TrafficCrashVisualization">
          the source
        </InlineLink>{' '}
        on Github.
      </>
    )
  },
  {
    mapSrc: '/maps/aasd-map.jpg',
    mapAlt:
      'Communities in the Clouds: Landscape, Agriculture, and Access in the Peruvian Andes',
    title:
      'Communities in the Clouds: Landscape, Agriculture, and Access in the Peruvian Andes',
    children: (
      <>
        This layout, made as part of Middlebury College&apos;s 2016 Cartographic
        Design seminar, brings together several advanced cartographic techniques
        to tell a unique story about the indigenous communities of the southern
        Peruvian Andes. Working in collaboration with the Andean Alliance for
        Sustainable Development (AASD), I designed this layout to discuss the
        challenges these communities face with respect to agriculture and social
        service access. I also sought to highlight some of the ways AASD is
        helping local farmers to integrate their indigenous knowledge with high
        altitude growing practices to create a more stable agricultural system
        in the region.
        <br />
        <br />
        The shaded relief I created for this layout draws inspiration from the
        work of two marvelous cartographers –{' '}
        <InlineLink href="http://www.reliefshading.com/cartographers/imhof/">
          Eduard Imhof
        </InlineLink>{' '}
        and{' '}
        <InlineLink href="http://www.shadedrelief.com/">
          Tom Patterson
        </InlineLink>
        . Imhof&apos;s work, particularly his thoughts on slope illumination and
        aerial perspective, formed the design basis for this piece.
        Patterson&apos;s{' '}
        <InlineLink href="http://www.shadedrelief.com/tutorials.html">
          shaded relief tutorials
        </InlineLink>{' '}
        were my technical guides to achieving these effects – and quite
        wonderful guides they were.
      </>
    )
  }
];
