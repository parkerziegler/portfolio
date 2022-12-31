import * as React from 'react';
import Image from 'next/image';
import cs from 'classnames';

export interface TagAttributes {
  tag: string;
  icon: string;
}

interface Props extends TagAttributes {
  compact?: boolean;
  className?: string;
}

const Tag: React.FC<React.PropsWithChildren<Props>> = ({
  icon,
  tag,
  compact = false,
  className
}) => {
  return (
    <div
      className={cs(
        'text-black font-mono flex items-center self-start border-primary border-solid border-2 rounded-md py-2 h-16',
        compact ? 'text-lg px-2' : 'text-xl px-4',
        className
      )}
    >
      {icon.indexOf('/') !== -1 ? (
        <Image
          src={icon}
          alt={tag}
          width={20}
          height={20}
          className="mr-2 w-8 h-8"
        />
      ) : (
        <span className="text-3xl mr-2">{icon}</span>
      )}
      {tag}
    </div>
  );
};

export default Tag;
