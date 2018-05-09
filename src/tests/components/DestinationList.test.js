import React from 'react';
import DestinationList from '../../components/DestinationList';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<DestinationList />);
});
