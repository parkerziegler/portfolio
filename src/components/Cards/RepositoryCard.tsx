import * as React from 'react';
import { motion } from 'framer-motion';

import { FragmentType, useFragment, graphql } from '../../generated';
import {
  boxShadow,
  translateUpRight,
  appearChildVariants,
  transitionRelaxed
} from '../../utils/animation';
import { repoToBadgePath } from '../../content/projects';

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

const RepositoryCard: React.FC<Props> = ({ repository }) => {
  const repoInfo = useFragment(RepoInfoFragment, repository);

  return (
    <motion.a
      href={repoInfo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-12 lg:col-span-4 self-stretch rounded-lg"
      variants={appearChildVariants}
      whileHover={{ ...boxShadow, ...translateUpRight }}
      transition={transitionRelaxed}
    >
      <div className="bg-gradient-to-r from-primary to-secondary flex p-2 m-auto rounded-lg font-mono shadow-lg h-full">
        <div className="flex flex-col items-center stack-sm p-4 rounded-md bg-white flex-auto overflow-auto">
          <h2 className="text-4xl text-center">{repoInfo.name}</h2>
          <img
            src={repoToBadgePath[repoInfo.name]}
            alt={`${repoInfo.name} Badge`}
            className="h-64"
            height="160"
            width="160"
          />
          <p className="text-xl">{repoInfo.description}</p>
          <div className="flex flex-wrap">
            {repoInfo.repositoryTopics.edges.map(({ node }) => {
              return (
                <span
                  key={node.topic.name}
                  className="bg-primary text-white p-2 m-2 ml-0 rounded-md text-lg"
                >
                  {node.topic.name}
                </span>
              );
            })}
          </div>
          <div
            className="flex self-stretch items-center"
            style={{ marginTop: 'auto' }}
          >
            <span
              className="text-white text-xl rounded-md mr-auto p-2"
              style={{ background: repoInfo.primaryLanguage.color }}
            >
              {repoInfo.primaryLanguage.name}
            </span>
            <div className="flex flex-col items-center mr-4">
              <img
                src="/icons/star.svg"
                alt={`${repoInfo.name} Stars on GitHub`}
                className="h-10"
                height="25"
                width="25"
              />
              <span className="text-lg">{repoInfo.stargazers.totalCount}</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/git-branch.svg"
                alt={`${repoInfo.name} Forks on GitHub`}
                className="h-10"
                height="25"
                width="25"
              />
              <span className="text-lg">{repoInfo.forkCount}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default RepositoryCard;
