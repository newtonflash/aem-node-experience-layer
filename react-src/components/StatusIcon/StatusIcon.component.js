// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const backgroundColors = {
  red: 'red',
  green: '#00e8a4',
  smaltBlue: '#547487',
};
const textColors = {
  red: undefined,
  green: undefined,
  smaltBlue: '#fff',
};

class StatusIcon extends React.PureComponent {
  static displayName = 'StatusIcon';

  static propTypes = {
    variant: PropTypes.oneOf(['small', 'medium']),
    color: PropTypes.oneOf(Object.keys(backgroundColors)),
    text: PropTypes.string,
  };

  static defaultProps = {
    variant: 'small',
    color: 'red',
    text: undefined,
  };

  render() {
    const {
      variant,
      color,
      text,
      className = '',
      style = {},
      ...props
    } = this.props;
    return (
      <div
        className={classNames('StatusIcon', className, {
          [`StatusIcon--variant-${variant}`]: true,
          'StatusIcon--with-text': !!text,
        })}
        style={{
          backgroundColor: backgroundColors[color],
          color: textColors[color],
          ...style,
        }}
        {...props}
      >
        {text}
      </div>
    );
  }
}

export default StatusIcon;
