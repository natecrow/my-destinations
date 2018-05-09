import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import DestinationListContainer from '../../containers/DestinationListContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const DestinationListContainerTest = class extends DestinationListContainer {
        componentWillMount() {
            // do nothing
        }
    };
    const component = ReactTestUtils.renderIntoDocument(<DestinationListContainerTest />);
    shallow(<component />);
});
