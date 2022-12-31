import * as React from 'react';
import Image from 'next/image';
import cs from 'classnames';

interface Props {
  repoName: string;
  stars: number;
  forks: number;
  className?: string;
}

const RepositoryStats: React.FC<Props> = ({
  repoName,
  stars,
  forks,
  className
}) => {
  return (
    <>
      <div className={cs('flex flex-col items-center mr-4', className)}>
        <Image
          src="/icons/star.svg"
          alt={`${repoName} Stars on GitHub`}
          className="h-10"
          height={25}
          width={25}
        />
        <span className="text-lg">{stars}</span>
      </div>
      <div className={cs('flex flex-col items-center', className)}>
        <Image
          src="/icons/git-branch.svg"
          alt={`${repoName} Forks on GitHub`}
          className="h-10"
          height={25}
          width={25}
        />
        <span className="text-lg">{forks}</span>
      </div>
    </>
  );
};

export default RepositoryStats;
