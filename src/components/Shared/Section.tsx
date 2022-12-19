import * as React from 'react';
import cs from 'classnames';

interface Props {
  className?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children
}) => {
  return (
    <section
      className={cs([
        'relative flex flex-col px-8 py-12 sm:py-16 sm:px-32 md:px-40',
        className
      ])}
    >
      {children}
    </section>
  );
};

export default Section;
