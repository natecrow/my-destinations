import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateDestination';
import TextField from './fields/TextField';
import {load as loadDestination} from '../redux/destination';
import {connect} from 'react-redux';
import axios from 'axios';

class DestinationForm extends React.Component {

    static propTypes = {
        handleSubmit: PropTypes.any,
        pristine: PropTypes.any,
        submitting: PropTypes.any,
        reset: PropTypes.any,
        id: PropTypes.any
    };

    getDestination(id) {
        console.log('Getting destination with id ' + id + '...');
        
        axios.get('/api/destinations/' + id)
            .then(response => {
                console.log('Got destination: ' + JSON.stringify(response.data));
                this.props.load(response.data);
            })
            .catch(error => {
                console.log('Error getting destination: ' + error);
            });
    }

    componentWillMount() {
        this.getDestination(this.props.id);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h1>Add Destination to List</h1>
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
                    <button type='submit' disabled={this.props.pristine || this.props.submitting}>Submit</button>
                    <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Reset</button>
                </div>
            </form>
        )
    }
}

DestinationForm = reduxForm({
    form: 'destination', // unique ID for this form
    validate,
    enableReinitialize: true
})(DestinationForm);

// Connect to destination reducer
DestinationForm = connect(
    state => ({
      initialValues: state.destination.data, // pull initial values from destination reducer
    }),
    { load: loadDestination } // bind destination loading action creator
  )(DestinationForm);

export default DestinationForm;
