import React from 'react';
import AddDestinationForm from '../components/AddDestinationForm';
import axios from 'axios';

class AddDestinationContainer extends React.Component {

    submit(values) {
        axios.post('/api/destinations', values)
            .then(response => {
                console.log('Created destination: ' + JSON.stringify(response.data));
            })
            .catch(error => {
                console.log('Error creating destination: ' + error);
            })
    }

    render() {
        return (
            <AddDestinationForm onSubmit={this.submit} />
        );
    }
}

export default AddDestinationContainer;
