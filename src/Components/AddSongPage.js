import React from 'react';
import AddSongForm from './AddSongForm';
import axios from 'axios';

class AddSongPage extends React.Component {

    submit(values) {
        const formData = {
            "title": values.title,
            "artist": values.artist,
            "album": values.album,
            "year": values.year,
            "genre": values.genre
        }

        console.log('Creating song: ' + JSON.stringify(formData));

        axios.post("/api/songs", formData);
    }

    render() {
        return (
            <AddSongForm onSubmit={this.submit} />
        );
    }
}

export default AddSongPage;
