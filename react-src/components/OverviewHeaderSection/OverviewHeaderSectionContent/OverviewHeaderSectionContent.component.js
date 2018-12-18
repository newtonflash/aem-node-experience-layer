// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../Button/Button.component';
import CustomContent from '../../CustomContent/CustomContent.component';
import ResponsiveDiv from '../../ResponsiveDiv.component';

class OverviewHeaderSectionContent extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    primaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
    }),
    secondaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
    }),
    tertiaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    title: undefined,
    content: undefined,
    primaryAction: undefined,
    secondaryAction: undefined,
    tertiaryAction: undefined,
  };

  render() {
    const {
      title,
      content,
      primaryAction,
      secondaryAction,
      tertiaryAction,
    } = this.props;
    return (
      <div className="OverviewHeaderSectionContent">
        {title && (
          <h2 className="OverviewHeaderSectionContent__title">{title}</h2>
        )}
        {content && (
          <div className="OverviewHeaderSectionContent__content">
            <ResponsiveDiv screen="minMd">
              {minMd => (
                <CustomContent
                  innerHTML={content}
                  variant={minMd ? 'large' : 'small'}
                />
              )}
            </ResponsiveDiv>
          </div>
        )}
        {(primaryAction || secondaryAction || tertiaryAction) && (
          <div className="OverviewHeaderSectionContent__actions">
            {primaryAction && (
              <div className="OverviewHeaderSectionContent__action">
                <Button
                  as="a"
                  href={primaryAction.url}
                  label={primaryAction.label}
                  variant="primary"
                  size="medium-padded"
                />
              </div>
            )}
            {secondaryAction && (
              <div className="OverviewHeaderSectionContent__action">
                <Button
                  as="a"
                  href={secondaryAction.url}
                  label={secondaryAction.label}
                  variant="secondary"
                  size="medium-padded"
                />
              </div>
            )}
            {tertiaryAction && (
              <div className="OverviewHeaderSectionContent__action">
                <Button
                  as="a"
                  href={tertiaryAction.url}
                  label={tertiaryAction.label}
                  variant="tertiary"
                  size="small"
                  iconRight="Right"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default OverviewHeaderSectionContent;
