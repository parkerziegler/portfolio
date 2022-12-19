import * as React from 'react';
import cs from 'classnames';

import Heading from '../Shared/Heading';

interface Props {
  title: string;
  link?: string;
  code?: string;
  isPortrait?: boolean;
}

const MapTitle: React.FC<Props> = ({
  title,
  link,
  code,
  isPortrait = false
}) => {
  return (
    <div
      className={cs(
        'col-start-1 col-span-12 row-span-1 flex md:flex-col items-start stack-md-h md:stack-none-h md:stack-lg',
        isPortrait
          ? 'md:col-span-6 md:row-start-1'
          : 'md:col-span-3 md:row-start-2 md:items-end'
      )}
    >
      <Heading
        tag="h2"
        className={cs(
          'text-3xl md:text-4xl font-sans font-medium bg-white',
          isPortrait ? 'md:text-left' : 'md:text-right'
        )}
      >
        {title}
      </Heading>
      <aside>
        <ul className="text-2xl md:text-3xl text-primary font-mono flex flex-col md:flex-row stack-sm md:stack-none md:stack-md-h">
          {link ? (
            <li className="flex items-center with-map justify-end">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </li>
          ) : null}
          {code ? (
            <li className="flex items-center with-code justify-end">
              <a href={code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </li>
          ) : null}
        </ul>
      </aside>
    </div>
  );
};

export default MapTitle;
