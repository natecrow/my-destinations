import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateDestination';
import TextField from './fields/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { InputAdornment } from 'material-ui/Input';

const styles = () => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

let DestinationForm = ({ handleSubmit, pristine, submitting, reset, deleteDestination, initialValues }, classes) => (
    <form onSubmit={handleSubmit} className={classes.container}>
        <h1>Add Destination to List</h1>
        <Field name='id' type='hidden' component={TextField} />
        <Field name='name' type='text' component={TextField} label='Name' helperText='Required' />
        <Field name='cost' type='text' component={TextField} label='Cost' adornment={<InputAdornment position="start">$</InputAdornment>} />
        <Field name='dateToVisit' type='date' component={TextField} label='Date to Visit' shrinkLabel='true'/>
        <Field name='timeToVisit' type='time' component={TextField} label='Time to Visit' shrinkLabel='true'/>
        <Field name='linkToWebsite' type='text' component={TextField} label='Link to Website' />
        <Field name='phoneNumber' type='text' component={TextField} label='Phone Number' />
        <Field name='notes' type='text' component={TextField} label='Additional Notes' />
        <br />
        <Field name='address.street' type='text' component={TextField} label='Street' />
        <Field name='address.city' type='text' component={TextField} label='City' />
        <Field name='address.state' type='text' component={TextField} label='State' />
        <Field name='address.zip' type='text' component={TextField} label='Zip Code' />
        <div>
            <Button type='submit' disabled={pristine || submitting}>Submit</Button>
            <Button type='button' disabled={pristine || submitting} onClick={reset}>Reset</Button>
            {initialValues.id &&
                <Button type='button' onClick={() => deleteDestination(initialValues.id)}>Delete</Button>
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

export default withStyles(styles)(DestinationForm);
