import React from 'react';
import DestinationFormContainer from '../../containers/DestinationFormContainer';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    shallow(<BrowserRouter>
                <DestinationFormContainer />
            </BrowserRouter>);
});
