// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';

const PasswordVisible = ({ className, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    className={className}
    fill="currentColor"
  >
    <path
      d="M14.6,5.7c0.8,1,1.3,1.8,1.3,1.8c0.2,0.3,0.2,0.7,0,1C15.7,8.7,12.7,14,8,14c-0.5,0-1.1-0.1-1.6-0.2L8.3,12
	c2.7-0.2,4.8-2.9,5.6-4c-0.2-0.2-0.4-0.6-0.7-0.9L14.6,5.7z M0.3,15.7c-0.4-0.4-0.4-1,0-1.4l2.5-2.5c-1.6-1.5-2.6-3.2-2.7-3.3
	C0,8.2,0,7.8,0.1,7.5C0.3,7.3,3.2,2,8,2c1.3,0,2.5,0.4,3.5,1l2.7-2.7c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-14,14C1.5,15.9,1.3,16,1,16
	S0.5,15.9,0.3,15.7z M2.2,8c0.4,0.6,1.1,1.5,2.1,2.3l1.8-1.8C6,8.3,6,8.2,6,8c0-1.1,0.9-2,2-2c0.2,0,0.3,0,0.5,0.1l1.6-1.6
	C9.4,4.2,8.7,4,8,4C5.1,4,3,6.8,2.2,8z"
    />
  </svg>
);

PasswordVisible.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

PasswordVisible.defaultProps = {
  className: undefined,
  width: 16,
  height: 16,
};

export default PasswordVisible;
