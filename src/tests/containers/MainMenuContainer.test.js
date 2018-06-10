import React from 'react';
import { shallow } from 'enzyme';
import MainMenuContainer from '../../containers/MainMenuContainer';

it('renders without crashing', () => {
    shallow(<MainMenuContainer />);
});

describe('Handle menu toggle tests', () => {
    let mainMenuContainer;

    beforeAll(() => {
        mainMenuContainer = shallow(<MainMenuContainer />);
    });

    it('sets flag to open the menu', () => {
        // call function under test
        mainMenuContainer.instance().handleMenuToggle();

        // expectations
        expect(mainMenuContainer.instance().state.mobileOpen).toEqual(true);
    });

    it('sets flag to close the menu', () => {
        // setup
        mainMenuContainer.instance().state.mobileOpen = true;

        // call function under test
        mainMenuContainer.instance().handleMenuToggle();

        // expectations
        expect(mainMenuContainer.instance().state.mobileOpen).toEqual(false);

    });
});
