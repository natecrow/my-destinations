import React from 'react';
import DestinationForm from '../components/DestinationForm';
import axios from 'axios';

class DestinationFormContainer extends React.Component {

    submit(values) {
        console.log('Submitting destination: ' + values);

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
            <DestinationForm onSubmit={this.submit} />
        );
    }
}

export default DestinationFormContainer;
