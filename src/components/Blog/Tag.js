import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Tag = ({ icon, compact = false, className, children }) => {
  return (
    <div
      className={cs(
        'text-black font-mono flex items-center self-start border-primary border-solid border-2 rounded-md py-2 h-16',
        compact ? 'text-lg px-2' : 'text-xl px-4',
        className
      )}
    >
      {icon.indexOf('/') !== -1 ? (
        <img
          src={icon}
          alt={children}
          className={cs('mr-2', compact ? 'h-8' : 'h-12')}
        />
      ) : (
        <span className="text-3xl mr-2">{icon}</span>
      )}
      {children}
    </div>
  );
};

Tag.propTypes = {
  icon: PropTypes.string.isRequired,
  compact: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Tag;
