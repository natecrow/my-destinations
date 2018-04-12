import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateDestination';
import TextField from './fields/TextField';
import {load as loadDestination} from '../redux/destination';
import {connect} from 'react-redux';

const data = {
    name: 'Hogwarts',
    cost: '5000',
    dateTimeToVisit: '2018-09-01',
    linkToWebsite: 'www.hogwarts.com',
    phoneNumber: '000-000-0000',
    notes: 'Senior year',
    address: {
        street: '321 Mountain Rd',
        city: 'Highlands',
        state: 'Scotland',
        zip: '00000'
    }
}

let DestinationForm = ({ handleSubmit, pristine, submitting, reset, load }) => (
    <form onSubmit={handleSubmit}>
        <h1>Add Destination to List</h1>
        <div>
            <button type="button" onClick={() => load(data)}>Load Default Destination</button>
        </div>
        <Field name='name' type='text' component={TextField} label='Name' />
        <Field name='cost' type='text' component={TextField} label='Cost' />
        <Field name='dateTimeToVisit' type='text' component={TextField} label='Date to Visit' />
        <Field name='linkToWebsite' type='text' component={TextField} label='Link to Website' />
        <Field name='phoneNumber' type='text' component={TextField} label='Phone Number' />
        <Field name='notes' type='text' component={TextField} label='Additional Notes' />
        <br/>
        <Field name='address.street' type='text' component={TextField} label='Street' />
        <Field name='address.city' type='text' component={TextField} label='City' />
        <Field name='address.state' type='text' component={TextField} label='State' />
        <Field name='address.zip' type='text' component={TextField} label='Zip Code' />
        <div>
            <button type='submit' disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
        </div>
    </form>
);

DestinationForm.propTypes = {
    handleSubmit: PropTypes.any,
    pristine: PropTypes.any,
    submitting: PropTypes.any,
    reset: PropTypes.any,
    load: PropTypes.any
}

DestinationForm = reduxForm({
    form: 'destination', // unique ID for this form
    validate
})(DestinationForm);

// Connect to destination reducer
DestinationForm = connect(
    state => ({
      initialValues: state.destination.data, // pull initial values from destination reducer
    }),
    { load: loadDestination } // bind destination loading action creator
  )(DestinationForm);

export default DestinationForm;
