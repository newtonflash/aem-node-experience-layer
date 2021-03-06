// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Instagram = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className={className}
  >
    <defs>
      <path
        id="instagram"
        d="M20 8c3.259 0 3.668.014 4.948.072 1.95.089 3.663.567 5.038 1.942 1.375 1.375 1.853 3.088 1.942 5.038.058 1.28.072 1.689.072 4.948 0 3.259-.014 3.668-.072 4.948-.089 1.95-.567 3.663-1.942 5.038-1.375 1.375-3.088 1.853-5.038 1.942-1.28.058-1.689.072-4.948.072-3.259 0-3.668-.014-4.948-.072-1.95-.089-3.663-.567-5.038-1.942-1.375-1.375-1.853-3.088-1.942-5.038C8.014 23.668 8 23.259 8 20c0-3.259.014-3.668.072-4.948.089-1.95.567-3.663 1.942-5.038 1.375-1.375 3.088-1.853 5.038-1.942C16.332 8.014 16.741 8 20 8zm0 2.162c-3.204 0-3.584.012-4.849.07-1.366.062-2.633.336-3.608 1.311-.975.975-1.249 2.242-1.311 3.608-.058 1.265-.07 1.645-.07 4.849s.012 3.584.07 4.849c.062 1.366.336 2.633 1.311 3.608.975.975 2.242 1.249 3.608 1.311 1.265.058 1.645.07 4.849.07s3.584-.012 4.849-.07c1.366-.062 2.633-.336 3.608-1.311.975-.975 1.249-2.242 1.311-3.608.058-1.265.07-1.645.07-4.849s-.012-3.584-.07-4.849c-.062-1.366-.336-2.633-1.311-3.608-.975-.975-2.242-1.249-3.608-1.311-1.265-.058-1.645-.07-4.849-.07zm6.406 4.872a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88zM20 13.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM20 24a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mask-instagram" fill="#fff">
        <use xlinkHref="#instagram" />
      </mask>
      <use fill="currentColor" xlinkHref="#instagram" />
      <g fill="currentColor" mask="url(#mask-instagram)">
        <path d="M0 0h40v40H0z" />
      </g>
    </g>
  </svg>
);

Instagram.propTypes = {
  className: PropTypes.string,
};

Instagram.defaultProps = {
  className: null,
};

export default Instagram;
