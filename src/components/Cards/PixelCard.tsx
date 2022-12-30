import * as React from 'react';
import { motion } from 'framer-motion';
import cs from 'classnames';

import { FragmentType, useFragment, graphql } from '../../generated';
import {
  translateUpRight,
  appearChildVariants,
  transitionRelaxed
} from '../../utils/animation';

const RepoInfoFragment = graphql(`
  fragment repoInfo on Repository {
    name
    description
    primaryLanguage {
      name
      color
    }
    stargazers {
      totalCount
    }
    forkCount
    repositoryTopics(first: 6) {
      edges {
        node {
          topic {
            name
          }
        }
      }
    }
    url
  }
`);

interface Props {
  repository: FragmentType<typeof RepoInfoFragment>;
}

const PixelCard: React.FC<Props> = ({ repository }) => {
  const repoInfo = useFragment(RepoInfoFragment, repository);

  return (
    <motion.a
      href={repoInfo.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={appearChildVariants}
      className="font-mono col-span-12 lg:col-span-4 flex flex-col bg-radial bg-radial--primary p-8 stack-md rounded-lg shadow-md"
      whileHover={translateUpRight}
      transition={transitionRelaxed}
    >
      <div className="bg-white p-2 stack-sm">
        <p className="text-3xl">{repoInfo.name}</p>
        <p className="text-xl">{repoInfo.description}</p>
      </div>
      <div className="flex flex-auto items-end">
        {repoInfo.primaryLanguage ? (
          <div className="bg-white mr-auto px-2 py-4">
            <span
              className={cs(
                'text-xl font-mono p-2 rounded-md',
                repoInfo.primaryLanguage.name === 'JavaScript'
                  ? 'text-black'
                  : 'text-white'
              )}
              style={{ background: repoInfo.primaryLanguage.color }}
            >
              {repoInfo.primaryLanguage.name}
            </span>
          </div>
        ) : null}
        <div className="flex flex-col items-center mr-4 p-2 bg-white">
          <img
            src="/icons/star.svg"
            alt={`${repoInfo.name} Stars on GitHub`}
            className="h-10"
          />
          <span className="text-lg">{repoInfo.stargazers.totalCount}</span>
        </div>
        <div className="flex flex-col items-center p-2 bg-white">
          <img
            src="/icons/git-branch.svg"
            alt={`${repoInfo.name} Forks on GitHub`}
            className="h-10"
          />
          <span className="text-lg">{repoInfo.forkCount}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default PixelCard;
