import React from 'react';
import { shallow } from 'enzyme';
import TopBar from '../../components/TopBar';

it('renders without crashing', () => {
    shallow(<TopBar handleMenuToggle={() => {}} />);
});
