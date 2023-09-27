import * as React from 'react';
import cs from 'classnames';
import format from 'date-fns/format';

import { NEWS } from '../../content/news';

import NewsExpander from './NewsExpander';

interface Props {
  className: string;
}

const NewsList: React.FC<Props> = ({ className }) => {
  const [displayCount, setDisplayCount] = React.useState(3);
  const more = displayCount < NEWS.length;

  const onClickExpander = (showMore: boolean): void =>
    setDisplayCount((prevDisplayCount) =>
      showMore ? Math.min(prevDisplayCount + 3, NEWS.length) : 3
    );

  return (
    <ul className={cs('text-white text-2xl font-serif', className)}>
      {NEWS.slice(0, displayCount).map(({ id, date, description }) => (
        <li key={id} className="flex relative pb-12 last:pb-0 timeline">
          <svg
            viewBox="0 0 16 16"
            height="16"
            width="16"
            className="flex-shrink-0"
          >
            <circle
              className="fill-white stroke-white stroke-2"
              r="2"
              cx="8"
              cy="8"
            />
            <circle
              className="fill-white stroke-white stroke-2 pulse"
              r="2"
              cx="8"
              cy="8"
              style={{ transformOrigin: '8px 8px' }}
            />
          </svg>
          <span className="italic relative flex-shrink-0 mr-8">
            {format(date, 'MMM yyyy')}
          </span>
          {description}
        </li>
      ))}
      <NewsExpander more={more} onClick={() => onClickExpander(more)} />
    </ul>
  );
};

export default NewsList;
