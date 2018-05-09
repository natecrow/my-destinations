import React from 'react';
import TextField from '../../../components/fields/TextField';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const meta = {
        touched: false
    }
    shallow(<TextField meta={meta} />);
});
