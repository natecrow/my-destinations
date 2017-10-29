import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { validate } from './../validation/validateSong';
import TextField from './fields/TextField';

let AddSongForm = ({ handleSubmit, pristine, submitting }) => (
    <form onSubmit={handleSubmit}>
        <h1>Add Song to Playlist</h1>
        <Field name='title' type='text' component={TextField} label='Title' />
        <Field name='artist' type='text' component={TextField} label='Artist' />
        <Field name='album' type='text' component={TextField} label='Album' />
        <Field name='year' type='text' component={TextField} label='Year' />
        <div>
            <label>Genre</label>
            <div>
                <Field name='genre' component='select'>
                    <option />
                    <option value='classical'>Classical</option>
                    <option value='electronic'>Electronic</option>
                    <option value='folk'>Folk</option>
                    <option value='metal'>Metal</option>
                    <option value='rock'>Rock</option>
                    <option value='soundtrack'>Soundtrack</option>
                </Field>
            </div>
        </div>
        <div>
            <button type='submit' disabled={pristine || submitting}>Submit</button>
        </div>
    </form>
);

AddSongForm.propTypes = {
    handleSubmit: PropTypes.any,
    pristine: PropTypes.any,
    submitting: PropTypes.any
}

AddSongForm = reduxForm({
    form: 'addSong', // unique ID for this form
    validate
})(AddSongForm);

export default AddSongForm;
