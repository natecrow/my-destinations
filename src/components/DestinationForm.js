import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateDestination';
import TextField from './fields/TextField';

let DestinationForm = ({ handleSubmit, pristine, submitting, reset, deleteDestination, initialValues }) => (
    <form onSubmit={handleSubmit}>
        <h1>Add Destination to List</h1>
        <Field name='id' type='hidden' component={TextField} />
        <Field name='name' type='text' component={TextField} label='Name' />
        <Field name='cost' type='text' component={TextField} label='Cost' />
        <Field name='dateTimeToVisit' type='text' component={TextField} label='Date to Visit' />
        <Field name='linkToWebsite' type='text' component={TextField} label='Link to Website' />
        <Field name='phoneNumber' type='text' component={TextField} label='Phone Number' />
        <Field name='notes' type='text' component={TextField} label='Additional Notes' />
        <br />
        <Field name='address.street' type='text' component={TextField} label='Street' />
        <Field name='address.city' type='text' component={TextField} label='City' />
        <Field name='address.state' type='text' component={TextField} label='State' />
        <Field name='address.zip' type='text' component={TextField} label='Zip Code' />
        <div>
            <button type='submit' disabled={pristine || submitting}>Submit</button>
            <button type='button' disabled={pristine || submitting} onClick={reset}>Reset</button>
            {initialValues.id &&
                <button type='button' onClick={() => deleteDestination(initialValues.id)}>Delete</button>
            }
        </div>
    </form>
);

DestinationForm.propTypes = {
    handleSubmit: PropTypes.any,
    pristine: PropTypes.any,
    submitting: PropTypes.any,
    reset: PropTypes.any,
    deleteDestination: PropTypes.any,
    initialValues: PropTypes.any
}

DestinationForm = reduxForm({
    form: 'destination', // unique ID for this form
    validate,
    enableReinitialize: true
})(DestinationForm);

export default DestinationForm;
