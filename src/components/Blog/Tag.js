import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Tag = ({ icon, className, children }) => {
  return (
    <div
      className={cs(
        'text-black font-mono flex items-center self-stretch border-purple border-solid border-2 rounded-md text-xl py-2 px-4 ',
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
  children: PropTypes.node.isRequired
};

export default Tag;
