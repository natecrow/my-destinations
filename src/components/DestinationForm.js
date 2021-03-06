import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateDestination';
import TextField from './fields/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/Input';
import DeleteIcon from '@material-ui/icons/Delete';

let DestinationForm = ({ handleSubmit, pristine, submitting, reset, deleteDestination, initialValues, handleOpenListSelectionDialog }) => (
    <div>
        <h1>Add Destination to List</h1>
        <form onSubmit={handleSubmit}>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Field name='id' type='hidden' component={TextField} />
            </section>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Field name='name' type='text' component={TextField} label='Name' helperText='Required' />
            </section>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Field name='address.street' type='text' component={TextField} label='Street' />
                <Field name='address.city' type='text' component={TextField} label='City' />
                <Field name='address.state' type='text' component={TextField} label='State' />
                <Field name='address.zip' type='text' component={TextField} label='Zip Code' />
            </section>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Field name='cost' type='text' component={TextField} label='Cost' adornment={<InputAdornment position="start">$</InputAdornment>} />
                <Field name='linkToWebsite' type='text' component={TextField} label='Link to Website' />
                <Field name='phoneNumber' type='text' component={TextField} label='Phone Number' />
            </section>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Field name='notes' type='text' component={TextField} label='Additional Notes' />
            </section>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Field name='dateToVisit' type='date' component={TextField} label='Date to Visit' shrinkLabel={true} />
                <Field name='timeToVisit' type='time' component={TextField} label='Time to Visit' shrinkLabel={true} />
            </section>
            <section style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <Button type='button' onClick={handleOpenListSelectionDialog}>Add to Lists</Button>
            </section>
            <div>
                <Button type='submit' disabled={pristine || submitting}>Submit</Button>
                <Button type='button' disabled={pristine || submitting} onClick={reset}>Reset</Button>
                {initialValues.id &&
                    <Button color='secondary' onClick={() => deleteDestination(initialValues.id)}>
                        <DeleteIcon />
                        Delete
                    </Button>
                }
            </div>
        </form>
    </div>
);

DestinationForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    reset: PropTypes.func,
    deleteDestination: PropTypes.func,
    initialValues: PropTypes.object,
    handleOpenListSelectionDialog: PropTypes.func.isRequired,
}

DestinationForm = reduxForm({
    form: 'destination', // unique ID for this form
    validate,
    enableReinitialize: true
})(DestinationForm);

export default DestinationForm;
