import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { NEWS } from '../../content/news';

import NewsExpander from './NewsExpander';

const NewsList = ({ className }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const showMore = displayCount < NEWS.length;

  const onClickExpander = (showMore) =>
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
          <span className="italic relative flex-shrink-0 mr-8">{date}</span>
          {description}
        </li>
      ))}
      <NewsExpander more={showMore} onClick={() => onClickExpander(showMore)} />
    </ul>
  );
};

NewsList.propTypes = {
  className: PropTypes.string
};

export default NewsList;
