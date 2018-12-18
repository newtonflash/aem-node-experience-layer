// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../Button/Button.component';
import StatusIcon from '../../StatusIcon/StatusIcon.component';
import ResponsiveDiv from '../../ResponsiveDiv.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/47153546/Detail+Page+Header)
 */
class OverviewHeaderSectionHeader extends React.PureComponent {
  static propTypes = {
    subtitle: PropTypes.string,
    subtitleStatusColor: PropTypes.oneOf(['red', 'green']),
    title: PropTypes.string,
    primaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
    secondaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
  };

  static defaultProps = {
    subtitle: undefined,
    subtitleStatusColor: undefined,
    title: undefined,
    primaryAction: undefined,
    secondaryAction: undefined,
  };

  render() {
    const {
      subtitle,
      subtitleStatusColor,
      title,
      primaryAction,
      secondaryAction,
    } = this.props;
    return (
      <div className="OverviewHeaderSectionHeader">
        <div className="OverviewHeaderSectionHeader__inner">
          {subtitle && (
            <div className="OverviewHeaderSectionHeader__subtitle">
              {subtitleStatusColor && (
                <StatusIcon color={subtitleStatusColor} />
              )}
              {subtitleStatusColor && ' '}
              {subtitle}
            </div>
          )}
          {title && (
            <h1 className="OverviewHeaderSectionHeader__title">{title}</h1>
          )}
          {(primaryAction || secondaryAction) && (
            <ResponsiveDiv screen="minMd">
              {minMd => (
                <div className="OverviewHeaderSectionHeader__actions">
                  {primaryAction && (
                    <div className="OverviewHeaderSectionHeader__action">
                      <Button
                        as="a"
                        href={primaryAction.url}
                        label={primaryAction.label}
                        variant="primary"
                        size={minMd ? 'medium-padded' : 'small'}
                        fluid
                      />
                    </div>
                  )}
                  {secondaryAction && (
                    <div className="OverviewHeaderSectionHeader__action">
                      <Button
                        as="a"
                        href={secondaryAction.url}
                        label={secondaryAction.label}
                        variant="secondary"
                        size={minMd ? 'medium-padded' : 'small'}
                        fluid
                      />
                    </div>
                  )}
                </div>
              )}
            </ResponsiveDiv>
          )}
        </div>
      </div>
    );
  }
}

export default OverviewHeaderSectionHeader;
