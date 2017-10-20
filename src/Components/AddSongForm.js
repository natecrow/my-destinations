import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddSongForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Song Name</label>
                <div>
                    <Field
                        name="songName"
                        component="input"
                        type="text"
                        placeholder="Song Name"
                    />
                </div>
            </div>
            <div>
                <label>Artist</label>
                <div>
                    <Field
                        name="artist"
                        component="input"
                        type="text"
                        placeholder="Artist"
                    />
                </div>
            </div>
            <div>
                <label>Album</label>
                <div>
                    <Field
                        name="album"
                        component="input"
                        type="text"
                        placeholder="Album"
                    />
                </div>
            </div>
            <div>
                <label>Year</label>
                <div>
                    <Field
                        name="year"
                        component="input"
                        type="text"
                        placeholder="Year"
                    />
                </div>
            </div>
            <div>
                <label>Genre</label>
                <div>
                    <Field name="genre" component="select">
                        <option />
                        <option value="classical">Classical</option>
                        <option value="electronic">Electronic</option>
                        <option value="folk">Folk</option>
                        <option value="metal">Metal</option>
                        <option value="rock">Rock</option>
                        <option value="soundtrack">Soundtrack</option>
                    </Field>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
        </form>
    );
};

AddSongForm = reduxForm({
    form: 'addSong', // unique ID for this form
})(AddSongForm);

export default AddSongForm;
