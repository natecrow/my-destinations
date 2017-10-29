import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateSong';
import TextField from './fields/TextField';
import DropdownField from './fields/DropdownField';
import { genres } from './../dropdown_values/genres';

let AddSongForm = ({ handleSubmit, pristine, submitting, reset }) => (
    <form onSubmit={handleSubmit}>
        <h1>Add Song to Playlist</h1>
        <Field name='title' type='text' component={TextField} label='Title' />
        <Field name='artist' type='text' component={TextField} label='Artist' />
        <Field name='album' type='text' component={TextField} label='Album' />
        <Field name='year' type='text' component={TextField} label='Year' />
        <Field name='genre' items={genres} component={DropdownField} label='Genre' />
        <div>
            <button type='submit' disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div>
    </form>
);

AddSongForm.propTypes = {
    handleSubmit: PropTypes.any,
    pristine: PropTypes.any,
    submitting: PropTypes.any,
    reset: PropTypes.any
}

AddSongForm = reduxForm({
    form: 'addSong', // unique ID for this form
    validate
})(AddSongForm);

export default AddSongForm;
