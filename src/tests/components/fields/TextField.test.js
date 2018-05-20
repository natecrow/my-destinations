import React from 'react';
import TextField from '../../../components/fields/TextField';
import { mount, shallow } from 'enzyme';
import { FormControl, FormHelperText } from 'material-ui';

it('renders without crashing', () => {
    // Setup
    const meta = {
        touched: false
    };

    // Render
    shallow(<TextField meta={meta} />);
});

describe('display errors and warnings', () => {
    let meta;

    beforeAll(() => {
        meta = {
            touched: true
        };
    });

    it('displays error', () => {
        // Setup
        meta = {
            ...meta,
            error: 'Required'
        }

        // Render
        const textField = mount(<TextField meta={meta} name='name' type='text' label='Name' />);

        // Expectations
        expect(textField.find(FormControl)).toHaveLength(1);
        // Label is displayed in error state
        expect(textField.find(FormControl).prop('error')).toBe(true);
        expect(textField.find(FormHelperText)).toHaveLength(1);
        // Error message is displayed
        expect(textField.find(FormHelperText).text()).toEqual(meta.error);
    });

    it('displays warning', () => {
        // Setup
        meta = {
            ...meta,
            warning: 'Required'
        }

        // Render
        const textField = mount(<TextField meta={meta} name='name' type='text' label='Name' />);

        // Expectations
        expect(textField.find(FormControl)).toHaveLength(1);
        // Label is displayed in error state
        expect(textField.find(FormControl).prop('error')).toBe(true);
        expect(textField.find(FormHelperText)).toHaveLength(1);
        // Error message is displayed
        expect(textField.find(FormHelperText).text()).toEqual(meta.warning);
    });
});

it('displays helper text', () => {
    // Setup
    const meta = {
        touched: false
    };
    const helperText = 'Required';

    // Render
    const textField = mount(<TextField helperText={helperText} meta={meta} name='name' type='text' label='Name' />);

    // Expectations
    expect(textField.find(FormControl)).toHaveLength(1);
    // Label is NOT displayed in error state
    expect(textField.find(FormControl).prop('error')).toBeUndefined();
    expect(textField.find(FormHelperText)).toHaveLength(1);
    // Helper text is displayed
    expect(textField.find(FormHelperText).text()).toEqual(helperText);
});
