import React from 'react';
import InlineLink from '../Shared/InlineLink';

export const maps = [
  {
    title:
      'The Road to Vision Zero: Traffic Crashes and Poverty in New York City',
    src: '/maps/transalt-vision-zero-map.png',
    alt: 'Transporation Alternatives x Azavea Vision Zero Map',
    link:
      'https://summer-of-maps.github.io/2016-TransAlt-TrafficCrashVisualization/',
    children: (
      <>
        This web application, developed as part of{' '}
        <InlineLink href="https://www.summerofmaps.com/about/">
          Azavea&apos;s Summer of Maps fellowship
        </InlineLink>
        , is designed to help users explore and visualize relationships between
        traffic crashes and poverty in New York City. After significant pressure
        from community organizations, local businesses, and victims of traffic
        violence, Mayor Bill De Blasio launched the city&apos;s{' '}
        <InlineLink href="https://www1.nyc.gov/content/visionzero/pages/">
          Vision Zero campaign
        </InlineLink>{' '}
        in 2014. The campaign, based off{' '}
        <InlineLink href="https://visionzeronetwork.org/">
          Sweden&apos;s Vision Zero design initiative
        </InlineLink>
        , is based on the principle that no loss of life on our streets is
        acceptable. However, Vision Zero NYC makes no direct mention of
        exploring relationships between the density of crashes in different
        parts of the city and socioeconomic and demographic variables like
        poverty rate, median income, unemployment, or population density. This{' '}
        <InlineLink href="https://www.citylab.com/transportation/2012/05/why-elderly-children-and-poor-are-greater-risk-traffic-deaths/2011/">
          despite the fact that researchers are uncovering statistically
          significant relationships showing a higher incidence of traffic
          crashes in lower income communities of color
        </InlineLink>
        , mainly as a result of poor urban design and a lack of appropriate
        transportation infrastructure. This application, built on{' '}
        <InlineLink href="https://d3js.org/">D3</InlineLink>,{' '}
        <InlineLink href="https://carto.com/"> CARTO</InlineLink>,{' '}
        <InlineLink href="https://leafletjs.com/"> Leaflet</InlineLink>, and{' '}
        <InlineLink href="https://jquery.com/">jQuery</InlineLink>, attempts to
        fill this gap in the Vision Zero literature by visualizing these
        relationships both geographically and statistically in a single
        integrated interface. Take a look at{' '}
        <InlineLink href="https://github.com/summer-of-maps/2016-TransAlt-TrafficCrashVisualization">
          the source
        </InlineLink>{' '}
        on Github.
      </>
    ),
  },
  {
    title:
      'The Road to Vision Zero: Correlating Class, Race, and Traffic Safety in New York City',
    items: [
      {
        src: '/maps/ta-traffic-crashes-nyc.png',
        alt:
          'A heat map of traffic crashes in New York City between 2013 and 2015.',
      },
      {
        src: '/maps/ta-traffic-crashes-bronx.png',
        alt:
          'A heat map of traffic crashes in the Bronx, New York City between 2013 and 2015.',
      },
      {
        src: '/maps/ta-traffic-crashes-brooklyn.png',
        alt:
          'A heat map of traffic crashes in Brooklyn, New York between 2013 and 2015.',
      },
      {
        src: '/maps/ta-traffic-crashes-manhattan.png',
        alt:
          'A heat map of traffic crashes in Manhattan, New York City between 2013 and 2015.',
      },
      {
        src: '/maps/ta-traffic-crashes-queens.png',
        alt:
          'A heat map of traffic crashes in Queens, New York between 2013 and 2015.',
      },
      {
        src: '/maps/ta-traffic-crashes-si.png',
        alt:
          'A heat map of traffic crashes on Staten Island, New York between 2013 and 2015.',
      },
    ],
    children: (
      <div className="stack-md">
        <p>
          This set of maps, designed for{' '}
          <InlineLink href="https://www.transalt.org/">
            Transportation Alternatives
          </InlineLink>{' '}
          as part of{' '}
          <InlineLink href="http://www.summerofmaps.com/about/">
            Azavea&apos;s Summer of Maps fellowship
          </InlineLink>
          , seeks to 1) identify clusters of traffic crashes in New York City
          between 2013 and 2015 and 2) theorize relationships between the
          density of crashes and local measures of poverty. The results of this
          spatial analysis show a clear trend – areas with higher concentrations
          of traffic crashes tend to have higher poverty rates, lower median
          incomes, and be more densely populated.
        </p>
        <p>
          The collection includes a citywide analysis with economic profiles of
          each borough alongside analysis of vulnerable city council districts
          within each borough. To get a more holistic sense of this project,
          check out the{' '}
          <InlineLink href="https://www.summerofmaps.com/projects/2016-transportation-alternatives">
            project description on Azavea&apos;s website
          </InlineLink>
          . Special thanks to Daniel McGlone, Senior GIS Analyst at Azavea, for
          his mentorship on this project.
        </p>
      </div>
    ),
  },
  {
    items: [
      {
        src: '/maps/ecotrust-lidar-canopy-cover.png',
        alt: "A map of Portland's urban canopy captured using LiDAR in 2014.",
      },
      {
        src: '/maps/ecotrust-block-groups-canopy-cover.png',
        alt: "A map of Portland's urban canopy by Census Block Group in 2014.",
      },
      {
        src: '/maps/ecotrust-block-groups-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Census Block Group in 2014.",
      },
      {
        src: '/maps/ecotrust-neighborhoods-canopy-cover.png',
        alt: "A map of Portland's urban canopy by neighborhood in 2014.",
      },
      {
        src: '/maps/ecotrust-neighborhoods-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by neighborhood in 2014.",
      },
      {
        src: '/maps/ecotrust-zoning-res-canopy-cover.png',
        alt: "A map of Portland's urban canopy by Residential Zone in 2014.",
      },
      {
        src: '/maps/ecotrust-zoning-res-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Residential Zone in 2014.",
      },
      {
        src: '/maps/ecotrust-zoning-ci-canopy-cover.png',
        alt:
          "A map of Portland's urban canopy by Commercial and Industrial Zone in 2014.",
      },
      {
        src: '/maps/ecotrust-zoning-ci-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Commercial and Industrial Zone in 2014.",
      },
      {
        src: '/maps/ecotrust-zoning-os-canopy-cover.png',
        alt: "A map of Portland's urban canopy by Open Space Zone in 2014.",
      },
      {
        src: '/maps/ecotrust-zoning-os-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Open Space Zone in 2014.",
      },
    ],
    title:
      " Mapping Portland's Urban Canopy: A Collaboration Between Ecotrust and Azavea",
    children: (
      <>
        This set of maps, designed for{' '}
        <InlineLink href="https://ecotrust.org/">Ecotrust</InlineLink> and the{' '}
        <InlineLink href="https://www.portlandoregon.gov/parks/41487">
          Portland Urban Forestry Commission
        </InlineLink>{' '}
        as part of{' '}
        <InlineLink href="https://www.summerofmaps.com/">
          Azavea&apos;s Summer of Maps
        </InlineLink>{' '}
        fellowship, takes an in-depth look at the state of Portland&apos;s urban
        canopy in 2014. The maps in this series fall into two main sets. The
        first shows the percent canopy cover of different areal units across the
        city. The second set focuses on the proximity of each areal unit to
        target canopy goals set in the{' '}
        <InlineLink href="https://www.portlandoregon.gov/parks/38306?a=1846412004">
          Urban Forestry Management Plan
        </InlineLink>
        , helping to identify areas of the city that remain substantially
        underforested. Maps were generated using ArcGIS and final cartographic
        work was performed in Adobe Illustrator. To get a more holistic sense of
        this project, check out{' '}
        <InlineLink href="https://www.summerofmaps.com/projects/2016-ecotrust">
          the project description on Azavea&apos;s website
        </InlineLink>
        . Special thanks to Esther Needham, Data Analytics Project Manager at
        Azavea, for her mentorship on this project.
      </>
    ),
  },
  {
    items: [
      {
        src: '/maps/ecotrust-change-detection-layout.png',
        alt:
          "A summary report of how Portland's urban canopy has changed from 2007 to 2014.",
      },
      {
        src: '/maps/ecotrust-change-detection-layout-2.png',
        alt:
          "A summary report examining the rate of growth of Portland's urban canopy at 2 year intervals between 2007 and 2014.",
      },
      {
        src: '/maps/ecotrust-change-detection-layout-3.png',
        alt:
          "A summary report examining progress towards canopy targets in Portland's urban canopy in 2014.",
      },
    ],
    title:
      "Detecting Change in Portland's Urban Canopy: A Collaboration between Ecotrust and Azavea",
    children: (
      <>
        These two layouts, designed for{' '}
        <InlineLink href="https://ecotrust.org/">Ecotrust</InlineLink> and the{' '}
        <InlineLink href="https://www.portlandoregon.gov/parks/41487">
          Portland Urban Forestry Commission
        </InlineLink>
        as part of{' '}
        <InlineLink href="http://www.summerofmaps.com/">
          Azavea&apos;s Summer of Maps fellowship
        </InlineLink>
        , help to tell two fascinating stories about Portland&apos;s urban
        forest. The first – a result of high resolution change detection
        analysis using a combination of LiDAR and NAIP multispectral imagery –
        visualizes how Portland&apos;s urban forest has evolved at multiple
        geographic and temporal scales. The second – a result of geographically
        weighted regression – attempts to pinpoint some of the main drivers and
        correlates of canopy distribution, including race, education, home
        ownership, and population density. Maps were generated using ArcGIS,
        graphics were generated using the R statistical programming language,
        both were polished in Adobe Illustrator, and the layouts designed in
        Adobe InDesign.
      </>
    ),
  },
  {
    src: '/maps/aasd-map.jpg',
    alt:
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
    ),
  },
];
