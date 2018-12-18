// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';

const FormAlert = ({ className, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    className={className}
    fill="currentColor"
  >
    <path
      d="M32,8C18.8,8,8,18.8,8,32s10.8,24,24,24s24-10.8,24-24S45.2,8,32,8z M32,44c-1.8,0-3-1.2-3-3s1.2-3,3-3s3,1.2,3,3
	S33.8,44,32,44z M35,36.5h-6V20h6V36.5z"
    />
  </svg>
);

FormAlert.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

FormAlert.defaultProps = {
  className: undefined,
  width: 16,
  height: 16,
};

export default FormAlert;
