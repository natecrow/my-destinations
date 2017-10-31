import React from 'react';
import AddSongForm from '../components/AddSongForm';
import axios from 'axios';

class AddSongPage extends React.Component {

    submit(values) {
        console.log('Creating song: ' + JSON.stringify(values));

        axios.post('/api/songs', values)
            .then(response => {
                console.log('Created song: ' + response.data);
            })
            .catch(error => {
                console.log('Error creating song: ' + error);
            })
    }

    render() {
        return (
            <AddSongForm onSubmit={this.submit} />
        );
    }
}

export default AddSongPage;
