import React from 'react';
import { shallow } from 'enzyme';
import SideMenuList from '../../components/SideMenuList';

it('renders without crashing', () => {
    shallow(<SideMenuList />);
});
