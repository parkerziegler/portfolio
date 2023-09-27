import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Octokit } from '@octokit/rest';
import type { Endpoints } from '@octokit/types';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Text from '../src/components/Shared/Text';
import Map from '../src/components/Map/PlaceMap';
import ContributionCard from '../src/components/Cards/ContributionCard';
import InlineLink from '../src/components/Shared/InlineLink';
import LangSection from '../src/components/Shared/LangSection';
import SkewBg from '../src/components/Shared/SkewBg';
import NewsList from '../src/components/News/NewsList';
import SocialIcon from '../src/components/Shared/SocialIcon';
import {
  CORE_LANGUAGES,
  TOOLS,
  CONTRIBUTION_EVENT_TYPES
} from '../src/utils/constants';
import { social } from '../src/content/social';

// Page-level information for meta tags.
const title = 'Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Parker Ziegler is a software engineer and cartographer based in Berkeley, CA. He works on next generation web technologies, with a focus on animation, graphics, and emerging programming languages.';
const MAX_ACTIVITY_COUNT = 6;

interface Props {
  contributions: Contribution[];
}

const Index: NextPage<Props> = ({ contributions }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/home/og-image.png" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@parker_ziegler" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/home/og-image.png" />
    </Head>
    <main id="main">
      <Section className="items-center">
        <div className="md:max-w-3/4 stack-lg">
          <div className="flex flex-col stack-md md:flex-row md:justify-between md:items-baseline md:stack-none">
            <SectionHeader>Hey, I&apos;m Parker.</SectionHeader>
            <div className="flex stack stack-sm-h">
              {social.map(({ href, src, alt }) => (
                <SocialIcon
                  key={src}
                  src={src}
                  alt={alt}
                  href={href}
                  variant="sm"
                />
              ))}
            </div>
          </div>
          <Text>
            I am a <em className="font-semibold">computer scientist</em>,{' '}
            <em className="font-semibold">software engineer</em>, and{' '}
            <em className="font-semibold">cartographer</em> based in Berkeley,
            CA. My passions lie at the intersection of programming languages
            (PL), human-computer interaction (HCI), data visualization, and
            geospatial technologies. I currently spend a lot of my time
            researching and working on{' '}
            <InlineLink href="https://github.com/parkerziegler">
              programming tools
            </InlineLink>{' '}
            for data journalists, Earth and climate scientists, and social
            scientists.
            <br />
            <br />I also believe <em className="font-semibold">place</em> shapes
            every part of who we are. These are the places that have shaped me.
          </Text>
        </div>
        <Map />
      </Section>
      <Section className="stack-lg sm:py-24">
        <SkewBg />
        <SectionHeader className="text-white">
          What I&apos;m Up To
        </SectionHeader>
        <Text className="text-white">
          I&apos;m currently a Ph.D. student in the Electrical Engineering and
          Computer Science department at UC Berkeley, advised by{' '}
          <InlineLink
            href="https://www2.eecs.berkeley.edu/Faculty/Homepages/schasins.html"
            type="light"
          >
            Professor Sarah Chasins
          </InlineLink>
          . My research focuses on using novel techniques from programming
          languages and human-computer interaction research to build useful and
          usable programming tools for data journalists, climate researchers,
          and social scientists. Previously, I worked with the wonderful and
          talented folks at{' '}
          <InlineLink href="https://formidable.com/" type="light">
            Formidable
          </InlineLink>
          , where I contributed to their{' '}
          <InlineLink href="https://formidable.com/open-source/" type="light">
            open source work
          </InlineLink>
          . Check out some of my recent contributions.
        </Text>
        <div className="grid grid-cols-12 gap-8">
          <NewsList className="col-span-12 lg:col-span-4" />
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 self-start z-10">
            {contributions.map(
              ({ id, repo, url, language, description, type }) => (
                <ContributionCard
                  key={id}
                  repo={repo}
                  url={url}
                  description={description}
                  language={language}
                  type={type}
                />
              )
            )}
          </div>
        </div>
      </Section>
      <Section className="items-center pt-20 sm:pt-32">
        <div className="md:max-w-3/4 stack-lg">
          <SectionHeader>Tools I Work With</SectionHeader>
          <Text>
            I love everything about the Web and spend most of my days working
            with these lovely languages and tools.
          </Text>
          <div className="flex flex-col stack-xl sm:flex-row sm:stack-none sm:justify-evenly">
            <LangSection
              title="Languages"
              langs={Object.values(CORE_LANGUAGES)}
            />
            <LangSection title="Tools" langs={Object.values(TOOLS)} />
          </div>
        </div>
      </Section>
    </main>
  </>
);

type GitHubPublicEvent =
  Endpoints['GET /users/{username}/events/public']['response']['data'][number] & {
    type: typeof CONTRIBUTION_EVENT_TYPES[number];
  };
type GitHubLanguage =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data']['language'];
type GitHubContribution = GitHubPublicEvent & {
  language: GitHubLanguage;
};
type Contribution = Pick<GitHubContribution, 'id' | 'language' | 'type'> & {
  repo: GitHubContribution['repo']['name'];
  url: string;
  description: string;
};

const normalizeContribution = (
  contribution: GitHubContribution
): Contribution => {
  const sharedAttributes = {
    id: contribution.id,
    repo: contribution.repo.name,
    language: contribution.language,
    type: contribution.type
  };

  let url = '';
  let description = '';

  switch (contribution.type) {
    case 'ForkEvent': {
      // GitHub's OpenAPI types are incorrect here. See relevant issues:
      // https://github.com/octokit/rest.js/issues/128
      // https://github.com/github/rest-api-description/issues/1318
      // @ts-expect-error – GitHub's OpenAPI types do not include `forkee` on `payload` for `ForkEvent`.
      url = contribution.payload.forkee.html_url;
      // @ts-expect-error – GitHub's OpenAPI types do not include `forkee` on `payload` for `ForkEvent`.
      description = `Forked ${contribution.repo.name} into ${contribution.payload.forkee.full_name}`;

      break;
    }
    case 'IssuesEvent': {
      url = contribution.payload.issue.html_url;
      description = `#${contribution.payload.issue.number}: ${contribution.payload.issue.title}`;

      break;
    }
    case 'PushEvent': {
      // @ts-expect-error – GitHub's OpenAPI types do not include `commits` on `payload` for `PushEvent`.
      url = contribution.payload.commits[0].url
        .replace('api.', '')
        .replace('/repos', '')
        .replace('commits', 'commit');
      // @ts-expect-error – GitHub's OpenAPI types do not include `commits` on `payload` for `PushEvent`.
      description = contribution.payload.commits[0].message;

      break;
    }
    case 'PullRequestEvent': {
      // @ts-expect-error - GitHub's OpenAPI types do not include `pull_request` on `payload` for `PullRequestEvent`.
      url = contribution.payload.pull_request.html_url;
      // @ts-expect-error - GitHub's OpenAPI types do not include `pull_request` on `payload` for `PullRequestEvent`.
      description = `#${contribution.payload.pull_request.number}: ${contribution.payload.pull_request.title}`;

      break;
    }
    case 'PullRequestReviewEvent': {
      // @ts-expect-error - GitHub's OpenAPI types do not include `pull_request` on `payload` for `PullRequestReviewEvent`.
      url = contribution.payload.pull_request.html_url;
      // @ts-expect-error - GitHub's OpenAPI types do not include `pull_request` on `payload` for `PullRequestReviewEvent`.
      description = `Reviewed #${contribution.payload.pull_request.number}: ${contribution.payload.pull_request.title}`;

      break;
    }
    case 'ReleaseEvent': {
      // @ts-expect-error - GitHub's OpenAPI types do not include `release` on `payload` for `ReleaseEvent`.
      url = contribution.payload.release.html_url;
      // @ts-expect-error - GitHub's OpenAPI types do not include `release` on `payload` for `ReleaseEvent`.
      description = `Released ${contribution.payload.release.tag_name} of ${contribution.repo.name}`;

      break;
    }
    default:
      break;
  }

  return {
    ...sharedAttributes,
    url,
    description
  };
};

export async function getStaticProps() {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_API_TOKEN,
      userAgent: 'parkie-doo.sh'
    });

    const { data } = await octokit.rest.activity.listPublicEventsForUser({
      username: 'parkerziegler',
      per_page: 20
    });

    let activityCount = 0;
    const activity: GitHubPublicEvent[] = [];

    for (const event of data) {
      if (activityCount === MAX_ACTIVITY_COUNT) {
        break;
      }

      if (
        CONTRIBUTION_EVENT_TYPES.includes(
          event.type as typeof CONTRIBUTION_EVENT_TYPES[number]
        )
      ) {
        activity.push(event as GitHubPublicEvent);
        activityCount++;
      }
    }

    const contributions = await Promise.all(
      activity.map(async (event) => {
        const [owner, repo] = event.repo.name.split('/');

        const {
          data: { language, parent }
        } = await octokit.rest.repos.get({
          owner,
          repo
        });

        const contribution = {
          ...event,
          language: language || parent?.language
        };

        return normalizeContribution(contribution);
      })
    );

    return {
      props: {
        contributions
      },
      revalidate: 1
    };
  } catch (error) {
    throw new Error(
      'Failed to query GitHub API for contributions. Got: ' + error
    );
  }
}

export default Index;
