// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';

import OverviewSidebar, {
  OverviewSidebarSectionPropTypes,
} from '../OverviewSidebar/OverviewSidebar.component';
import OverviewHeaderSectionHeader from './OverviewHeaderSectionHeader/OverviewHeaderSectionHeader.component';
import OverviewHeaderSectionContent from './OverviewHeaderSectionContent/OverviewHeaderSectionContent.component';
import ImageSlider from '../ImageSlider/ImageSlider.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17301616/Room+Overview+Header)
 */
class OverviewHeaderSection extends React.PureComponent {
  static propTypes = {
    /** `OverviewHeaderSectionHeader` component props. */
    header: PropTypes.shape({
      subtitle: PropTypes.string,
      subtitleStatusColor: PropTypes.oneOf(['red', 'green']),
      title: PropTypes.string,
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
    }),
    heroImages: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
    ),
    /** `OverviewSidebar` component `sections` prop. */
    sidebarSections: PropTypes.arrayOf(
      PropTypes.exact(OverviewSidebarSectionPropTypes),
    ),
    main: PropTypes.shape({
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
    }),
  };

  static defaultProps = {
    header: {
      title: 'OverviewHeaderSection',
    },
    sidebarSections: [],
    heroImages: [],
    main: {},
  };

  render() {
    const { sidebarSections, header, main, heroImages } = this.props;

    return (
      <div className="OverviewHeaderSection">
        <div className="OverviewHeaderSection__header">
          <OverviewHeaderSectionHeader {...header} />
        </div>

        {heroImages.length > 0 && (
          <div className="OverviewHeaderSection__slider">
            <div className="OverviewHeaderSection__slider__inner">
              <ImageSlider images={heroImages} variant="push-bars-top" />
            </div>
          </div>
        )}

        <div className="OverviewHeaderSection__main">
          <div className="OverviewHeaderSection__content">
            <OverviewHeaderSectionContent {...main} />
          </div>
          {sidebarSections.length > 0 && (
            <div className="OverviewHeaderSection__aside">
              <OverviewSidebar sections={sidebarSections} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default OverviewHeaderSection;
