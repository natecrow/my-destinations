import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<NavigationBar />);
});
