import React from 'react';
import { PropTypes } from 'prop-types';

const TextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

TextField.propTypes = {
    input: PropTypes.any,
    label: PropTypes.any,
    type: PropTypes.any,
    meta: PropTypes.any,
}

export default TextField;
