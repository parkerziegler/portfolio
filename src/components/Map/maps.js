import React from 'react';

import InlineLink from '../Shared/InlineLink';

export const maps = [
  {
    title:
      'The Road to Vision Zero: Traffic Crashes and Poverty in New York City',
    src: '/maps/ta-vision-zero/ta-vision-zero.png',
    alt: 'Transporation Alternatives x Azavea Vision Zero Map',
    width: 2784,
    height: 1824,
    link: 'https://parkerziegler.github.io/transalt-visionzero-app/',
    code:
      'https://github.com/summer-of-maps/2016-TransAlt-TrafficCrashVisualization',
    shadow: false,
    eager: true,
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
        transportation infrastructure.
        <br />
        <br />
        This application, built on{' '}
        <InlineLink href="https://d3js.org/">D3</InlineLink>,{' '}
        <InlineLink href="https://carto.com/"> CARTO</InlineLink>,{' '}
        <InlineLink href="https://leafletjs.com/"> Leaflet</InlineLink>, and{' '}
        <InlineLink href="https://jquery.com/">jQuery</InlineLink>, attempts to
        fill this gap in the Vision Zero literature by visualizing these
        relationships both geographically and statistically in a single
        integrated interface.
      </>
    )
  },
  {
    title:
      'The Road to Vision Zero: Correlating Class, Race, and Traffic Safety in New York City',
    items: [
      {
        src: '/maps/ta-traffic-crashes-nyc/ta-traffic-crashes-nyc.png',
        alt:
          'A heat map of traffic crashes in New York City between 2013 and 2015.',
        width: 1500,
        height: 1940
      },
      {
        src: '/maps/ta-traffic-crashes-bronx/ta-traffic-crashes-bronx.png',
        alt:
          'A heat map of traffic crashes in the Bronx, New York City between 2013 and 2015.',
        width: 1500,
        height: 1940
      },
      {
        src:
          '/maps/ta-traffic-crashes-brooklyn/ta-traffic-crashes-brooklyn.png',
        alt:
          'A heat map of traffic crashes in Brooklyn, New York between 2013 and 2015.',
        width: 1500,
        height: 1940
      },
      {
        src:
          '/maps/ta-traffic-crashes-manhattan/ta-traffic-crashes-manhattan.png',
        alt:
          'A heat map of traffic crashes in Manhattan, New York City between 2013 and 2015.',
        width: 1500,
        height: 1940
      },
      {
        src: '/maps/ta-traffic-crashes-queens/ta-traffic-crashes-queens.png',
        alt:
          'A heat map of traffic crashes in Queens, New York between 2013 and 2015.',
        width: 1500,
        height: 1940
      },
      {
        src: '/maps/ta-traffic-crashes-si/ta-traffic-crashes-si.png',
        alt:
          'A heat map of traffic crashes on Staten Island, New York between 2013 and 2015.',
        width: 1500,
        height: 1940
      }
    ],
    link: '/maps/ta-vision-zero/ta-vision-zero.pdf',
    code:
      'https://github.com/summer-of-maps/2016-TransAlt-MultipleRegressionScript',
    isPortrait: true,
    children: (
      <>
        This set of maps, designed for{' '}
        <InlineLink href="https://www.transalt.org/">
          Transportation Alternatives
        </InlineLink>{' '}
        as part of{' '}
        <InlineLink href="http://www.summerofmaps.com/about/">
          Azavea&apos;s Summer of Maps fellowship
        </InlineLink>
        , seeks to 1) identify clusters of traffic crashes in New York City
        between 2013 and 2015 and 2) theorize relationships between the density
        of crashes and local measures of poverty. The results of this spatial
        analysis show a clear trend – areas with higher concentrations of
        traffic crashes tend to have higher poverty rates, lower median incomes,
        and be more densely populated.
        <br />
        <br />
        The collection includes a citywide analysis with economic profiles of
        each borough alongside analysis of vulnerable city council districts
        within each borough. To get a more holistic sense of this project, check
        out the{' '}
        <InlineLink href="https://www.summerofmaps.com/projects/2016-transportation-alternatives">
          project description on Azavea&apos;s website
        </InlineLink>
        . Special thanks to Daniel McGlone, Senior GIS Analyst at Azavea, for
        his mentorship on this project.
      </>
    )
  },
  {
    title: " Mapping Portland's Urban Canopy",
    link: '/maps/ecotrust-lidar-canopy-cover/ecotrust-lidar-canopy-cover.pdf',
    items: [
      {
        src:
          '/maps/ecotrust-lidar-canopy-cover/ecotrust-lidar-canopy-cover.png',
        alt: "A map of Portland's urban canopy captured using LiDAR in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-block-groups-canopy-cover/ecotrust-block-groups-canopy-cover.png',
        alt: "A map of Portland's urban canopy by Census Block Group in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-block-groups-targets/ecotrust-block-groups-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Census Block Group in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-neighborhoods-canopy-cover/ecotrust-neighborhoods-canopy-cover.png',
        alt: "A map of Portland's urban canopy by neighborhood in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-neighborhoods-targets/ecotrust-neighborhoods-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by neighborhood in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-zoning-res-canopy-cover/ecotrust-zoning-res-canopy-cover.png',
        alt: "A map of Portland's urban canopy by Residential Zone in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-zoning-res-targets/ecotrust-zoning-res-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Residential Zone in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-zoning-ci-canopy-cover/ecotrust-zoning-ci-canopy-cover.png',
        alt:
          "A map of Portland's urban canopy by Commercial and Industrial Zone in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src: '/maps/ecotrust-zoning-ci-targets/ecotrust-zoning-ci-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Commercial and Industrial Zone in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src:
          '/maps/ecotrust-zoning-os-canopy-cover/ecotrust-zoning-os-canopy-cover.png',
        alt: "A map of Portland's urban canopy by Open Space Zone in 2014.",
        height: 1160,
        width: 1500
      },
      {
        src: '/maps/ecotrust-zoning-os-targets/ecotrust-zoning-os-targets.png',
        alt:
          "A map of Portland's urban canopy cover compared to city targets by Open Space Zone in 2014.",
        height: 1160,
        width: 1500
      }
    ],
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
    )
  },
  {
    title: "Detecting Change in Portland's Urban Canopy",
    link:
      '/maps/ecotrust-change-detection-layout/ecotrust-change-detection-layout.pdf',
    items: [
      {
        src:
          '/maps/ecotrust-change-detection-layout/ecotrust-change-detection-layout.png',
        alt:
          "A summary report of how Portland's urban canopy has changed from 2007 to 2014.",
        width: 750,
        height: 970
      },
      {
        src:
          '/maps/ecotrust-change-detection-layout-2/ecotrust-change-detection-layout-2.png',
        alt:
          "A summary report examining the rate of growth of Portland's urban canopy at 2 year intervals between 2007 and 2014.",
        width: 1500,
        height: 1160
      },
      {
        src:
          '/maps/ecotrust-change-detection-layout-3/ecotrust-change-detection-layout-3.png',
        alt:
          "A summary report examining progress towards canopy targets in Portland's urban canopy in 2014.",
        width: 750,
        height: 970
      },
      {
        src: '/maps/ecotrust-gwr-layout/ecotrust-gwr-layout.png',
        alt:
          'A report showing the fit of a geographically weighted regression model exploring the relationship between canopy cover and various socioeconomic factors.',
        width: 750,
        height: 970
      },
      {
        src: '/maps/ecotrust-gwr-layout-2/ecotrust-gwr-layout-2.png',
        alt:
          'A series of small multiples showing geographic variation in the strength of correlations drawn between canopy cover and various socioeconomic factors.',
        width: 750,
        height: 970
      }
    ],
    isPortrait: true,
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
    )
  },
  {
    src: '/maps/child-migration/child-migration.png',
    alt:
      'Unseen, Unheard, and Forgotten: Child Migration from Central America to the United States',
    width: 2665,
    height: 4780,
    title:
      'Unseen, Unheard, and Forgotten: Child Migration from Central America to the United States',
    link: '/maps/child-migration/child-migration.pdf',
    isPortrait: true,
    children: (
      <>
        This layout, created as part of Middlebury College&apos;s 2016
        Cartographic Design seminar, takes a look at the migration of
        unaccompanied children from the Central American countries of Honduras,
        El Salvador, and Guatemala to the United States. In 2014,{' '}
        <InlineLink href="https://www.migrationpolicy.org/programs/us-immigration-policy-program/rising-child-migration-united-states">
          the number of unaccompanied child migrants attempting to make the
          passage into the U.S. hit a critical spike
        </InlineLink>
        , pushing President Obama to call the crisis a &ldquo;humanitarian
        situation.&rdquo;
        <br />
        <br />
        In this layout, I explore three different geographies of the child
        migration stream. The first map shows the number of child migrants
        apprehended along each sector of the U.S. – Mexico border in 2014, with
        orange lines representing the number of child migrants attempting to
        cross the border and red lines representing the number of U.S. Customs
        and Border Protection (CBP) staff. The second map zooms in to the border
        crossing at the Rio Grande Valley, where 73% of apprehended child
        migrants attempted the passage. The third map shows the actual migration
        paths these children take from their homes in Central America to reach
        the border. The graphics help to illustrate where these child migrants
        are coming from, as well as the fluctuations in migration patterns from
        2013 to 2015.
        <br />
        <br />
        My hope with this layout is to tell a compelling, honest story about the
        child refugees on our doorstep. In attempting to do so, I also
        acknowledge the incompleteness of this story, and the many ways in which
        this layout fails to represent the lived experiences of the many
        children who attempt this dangerous journey. These maps are dedicated to
        them.
      </>
    )
  },
  {
    src: '/maps/aasd/aasd.png',
    alt:
      'Communities in the Clouds: Landscape, Agriculture, and Access in the Peruvian Andes',
    width: 3400,
    height: 2200,
    title:
      'Communities in the Clouds: Landscape, Agriculture, and Access in the Peruvian Andes',
    link: '/maps/aasd/aasd.pdf',
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
  },
  {
    title: 'Who Has Access to Healthy Corner Stores in Philadelphia, PA?',
    src: '/maps/pa-food-access/pa-food-access.png',
    alt: 'A map exploring food access by Census tract in Philadelphia, PA.',
    width: 2550,
    height: 3300,
    link: '/maps/pa-food-access/pa-food-access.pdf',
    isPortrait: true,
    children: (
      <>
        This map, designed as part of the application process for Azavea&apos;s
        2016 Summer of Maps fellowship, takes a look at access to healthy corner
        stores in Philadelphia. Broken down by Census tracts, I used a
        combination of distance and quality metrics to pick out those tracts
        that are already well-served by healthy corner stores and those that are
        severely underserved. I then aggregated these metrics in a weighted
        access index to better quantify the data. As a community resource,
        healthy corner stores increase residents&apos; access to fresh, local,
        and sustainable food sources.{' '}
        <InlineLink href="http://thefoodtrust.org/uploads/media_items/healthy-corner-store-overview.original.pdf">
          Learn more about Philadelphia&apos;s Healthy Corner Store Initiative
        </InlineLink>
        .
      </>
    )
  },
  {
    title: 'Eviction Notices in San Francisco, CA (1997-2015)',
    src: '/maps/sf-eviction-map/sf-eviction-map.png',
    alt:
      'An interactive map depicting evictions in San Francisco from 1997 to 2015.',
    width: 2784,
    height: 1824,
    link: 'http://parkerziegler.github.io/sf-eviction-map/',
    code: 'https://github.com/parkerziegler/sf-eviction-map/',
    shadow: false,
    children: (
      <>
        This map, my first foray into the world of interactive and web-based
        cartography, combines multiple visualizations to shed light on the
        geography of eviction in San Francisco, CA. Since the northward movement
        of Big Tech began in the early 2010s, low-income residents have
        increasingly been priced out and pushed out of their homes. In
        particular, neighborhoods like the Mission, the Sunset, the Castro, and
        the Haight-Ashbury have seen rapid and violent change, with extreme
        increases in home value prices and monthly rent. The Ellis Act, a piece
        of legislation giving businesses the unrestricted right to evict tenants
        in order to &ldquo;go out of business,&rdquo; has given way to an
        arbitrary and aggressive regime of real estate speculation backed by big
        capital. For more information on San Francisco&apos;s eviction epidemic,
        check out the{' '}
        <InlineLink href="https://antievictionmap.com/">
          Anti-Eviction Mapping Project
        </InlineLink>
        . Data for this map came courtesy of{' '}
        <InlineLink href="https://data.sfgov.org/">SF Open Data</InlineLink> and
        the U.S. Census Bureau. To learn more about how this map was made and
        designed – and to access the code working behind it – check out{' '}
        <InlineLink href="/thoughts/build-a-map-of-eviction-in-san-francisco-with-cartodb-js">
          this post
        </InlineLink>{' '}
        over on my Thoughts page.
      </>
    )
  },
  {
    title:
      'Drugs, Demography, and the Police: Spatially Relating Race and Arrest Density for Drug Possesion in Chicago, IL',
    link: '/maps/chicago-drug-arrests.pdf',
    items: [
      {
        src: '/maps/chicago-drug-arrests/chicago-drug-arrests-crack.png',
        alt:
          'A map spatially correlating race and arrest density for possession of crack cocaine in Chicago, IL.',
        width: 1525,
        height: 1920
      },
      {
        src: '/maps/chicago-drug-arrests/chicago-drug-arrests-marijuana.png',
        alt:
          'A map spatially correlating race and arrest density for possession of marijuana in Chicago, IL.',
        width: 1525,
        height: 1920
      },
      {
        src: '/maps/chicago-drug-arrests/chicago-drug-arrests-cocaine.png',
        alt:
          'A map spatially correlating race and arrest density for possession of  cocaine in Chicago, IL.',
        width: 1525,
        height: 1920
      }
    ],
    isPortrait: true,
    children: (
      <>
        This map, which takes its cue from{' '}
        <InlineLink href="http://radicalcartography.net/index.html?chicagodots">
          Bill Rankin&apos;s dot density map of Chicago
        </InlineLink>
        , takes a look at the spatial relationship between race and arrest
        density for possession of three different drugs – marijuana, powder
        cocaine, and crack cocaine – in Chicago, Illinois. Similar to
        Rankin&apos;s map, I used a dot density style to show the racial
        segregation of the city; however, I altered the value of each dot to
        represent 250 people, rather than the 25 people per dot value used by
        Rankin. This allowed the choropleth layer underneath to come through.
        <br />
        <br />
        The choropleth layer represents an arrest density for possession of the
        highlighted drug for the month of October 2015, as reported by the
        Chicago Police Department. I spatially aggregated the crime data by the
        Chicago Police Department&apos;s police beats using a method known as{' '}
        <InlineLink href="/thoughts/creating-custom-geoprocessing-tools-with-python-scripts">
          areal weighted reaggregation (AWR)
        </InlineLink>
        . This allows us to see the police beats in which arrests for possession
        of these different drugs are particularly high. The South and West Side
        appear to experience the most aggressive policing for possession of
        marijuana and crack cocaine, while transitional border areas between
        Latino and white communities are more heavy policed for powder cocaine
        possession. In general, it is startling to see how closely higher
        policing rates are spatially correlated with communities of color.
        Indeed, the data provide convincing evidence that racial profiling still
        informs how the state thinks about drugs, policing, and whose behavior
        is considered &ldquo;criminal&rdquo;.
        <br />
        <br />I believe it is important to give credit where credit is due, and
        I want to recognize Professor Jeff Howarth for developing the original
        GIS workflow to make this map. Following his lead, I made several
        alterations and decisions of my own (with respect to normalization,
        symbology, drugs studied, cartographic design, and operation parameters)
        to make these maps uniquely my own. To get the data and begin mapping
        for yourself, head over to the extensive{' '}
        <InlineLink href="https://data.cityofchicago.org/">
          Chicago Data Portal
        </InlineLink>
        .
      </>
    )
  }
];
