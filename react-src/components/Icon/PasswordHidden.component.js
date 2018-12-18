// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';

const PasswordHidden = ({ className, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    className={className}
    fill="currentColor"
  >
    <path
      d="M8,14c4.7,0,7.7-5.3,7.9-5.5c0.2-0.3,0.2-0.7,0-1C15.7,7.3,12.7,2,8,2C3.2,2,0.3,7.3,0.1,7.5C0,7.8,0,8.2,0.1,8.5
	C0.3,8.7,3.3,14,8,14z M8,4c2.8,0,5,2.8,5.8,4c-0.8,1.2-3,4-5.8,4c-2.8,0-5-2.8-5.8-4C3,6.8,5.1,4,8,4z M8,10c1.1,0,2-0.9,2-2
	S9.1,6,8,6S6,6.9,6,8S6.9,10,8,10z"
    />
  </svg>
);

PasswordHidden.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

PasswordHidden.defaultProps = {
  className: undefined,
  width: 16,
  height: 16,
};

export default PasswordHidden;
