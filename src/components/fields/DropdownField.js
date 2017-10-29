import React from 'react';
import { PropTypes } from 'prop-types';

const DropdownField = ({ items, input, label, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <select {...input}>
                <option />
                {items.map(item =>
                    <option key={item} value={item}>{item}</option>)
                }
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </select>
        </div>
    </div>
)

DropdownField.propTypes = {
    items: PropTypes.any,
    input: PropTypes.any,
    label: PropTypes.any,
    meta: PropTypes.any,
}

export default DropdownField;
