// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export const ButtonGroupItem = ({ className, ...props }) => (
  <div className={classNames(className, 'ButtonGroup__item')} {...props} />
);

class ButtonGroup extends React.PureComponent {
  static displayName = 'ButtonGroup';

  static propTypes = {
    /**
     * - `flex`: Each button will be in a separate column. Words can't wrap, if they need to, then remaining buttons might fall onto separate row.
     * - `flex-equal`: Each button will be in a separate column, with each being forced to have equal width. Words can wrap.
     * - `blocks`: Each button will be in a separate row.
     */
    variant: PropTypes.oneOf(['flex', 'flex-equal', 'blocks']).isRequired,
    /**
     * Needs to consist of `ButtonGroup.Item`
     */
    children: PropTypes.node.isRequired,
  };

  render() {
    const { variant, children, className, ...props } = this.props;

    return (
      <div
        className={classNames('ButtonGroup', className, {
          [`ButtonGroup--variant--${variant}`]: true,
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
}

ButtonGroup.Item = ButtonGroupItem;

export default ButtonGroup;
