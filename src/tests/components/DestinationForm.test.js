import React from 'react';
import DestinationForm from '../../components/DestinationForm';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<DestinationForm />);
});
