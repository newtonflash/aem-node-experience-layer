import FooterCopyRight from './components/footer-copy-right/footer-copy-right';
import OverviewHeaderSection from './components/OverviewHeaderSection/OverviewHeaderSection.component'

const componentsList = {
    FooterCopyRight,
    OverviewHeaderSection
};

const getComponentByID = id => {
    return componentsList[id];
};

export default getComponentByID;