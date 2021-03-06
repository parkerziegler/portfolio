import { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ tag = 'h1', children, ...rest }) =>
  createElement(tag, { ...rest }, children);

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired
};

export default Heading;
