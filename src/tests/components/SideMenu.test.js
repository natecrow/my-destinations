import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from '../../components/SideMenu';

it('renders without crashing', () => {
    shallow(<SideMenu handleMenuToggle={() => {}} mobileOpen={true} />);
});
