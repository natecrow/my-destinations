import React from 'react';
import AddSongForm from './AddSongForm';

class AddSongPage extends React.Component {

    submit(values) {
        console.log(values);
    }

    render() {
        return (
            <AddSongForm onSubmit={this.submit} />
        );
    }
}

export default AddSongPage;
