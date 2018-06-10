import React from 'react';
import {shallow} from 'enzyme';
import EmptyDestinationList from '../../components/EmptyDestinationList';

test('renders without crashing', () => {
    shallow(<EmptyDestinationList />);
});
