import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Tag = ({ icon, className, children }) => {
  return (
    <div
      className={cn(
        'flex items-center text-white rounded-md text-xl py-2 px-4 bg-purple font-mono self-stretch',
        className
      )}
    >
      {icon.indexOf('/') !== -1 ? (
        <img src={icon} alt={children} className="h-12 mr-2" />
      ) : (
        <span className="text-3xl mr-2">{icon}</span>
      )}
      {children}
    </div>
  );
};

Tag.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tag;
