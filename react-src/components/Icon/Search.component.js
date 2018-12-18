// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ className }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="currentColor"
      d="M16.4,17.1c-1.7,1.5-3.9,2.4-6.4,2.4c-5.2,0-9.5-4.3-9.5-9.5S4.8,0.5,10,0.5s9.5,4.3,9.5,9.5c0,2.4-0.9,4.7-2.4,6.4l6.3,6.3
	c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L16.4,17.1z M10,18.5c4.7,0,8.5-3.8,8.5-8.5S14.7,1.5,10,1.5S1.5,5.3,1.5,10
	S5.3,18.5,10,18.5z"
    />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: null,
};

export default Search;
