import * as React from 'react';
import cs from 'classnames';

interface Props {
  tiltDirection?: 'forward' | 'backward';
  overflow?: 'visible' | 'hidden';
}

const SkewBg: React.FC<Props> = ({
  tiltDirection = 'backward',
  overflow = 'visible'
}) => (
  <div
    className={cs(
      'absolute w-full h-full xl:full-width-breakout top-0 -mx-8 sm:-mx-32 md:-mx-40',
      {
        'overflow-visible': overflow === 'visible',
        'overflow-hidden': overflow === 'hidden'
      }
    )}
    style={{ zIndex: -1 }}
  >
    <div
      className={cs(
        `relative h-full w-full top-0 left-0 transform`,
        { '-skew-y-3 origin-top-right': tiltDirection === 'backward' },
        { 'skew-y-3 origin-top-left': tiltDirection === 'forward' },
        {
          'md:-translate-y-8 xl:-translate-y-10 2xl:-translate-y-12':
            overflow === 'visible' && tiltDirection === 'backward'
        },
        {
          'md:translate-y-8 xl:translate-y-10 2xl:translate-y-12':
            overflow === 'visible' && tiltDirection === 'forward'
        },
        'bg-gradient-to-r from-primary to-terminal-secondary'
      )}
    />
  </div>
);

export default SkewBg;
