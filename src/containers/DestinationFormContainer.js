import React from 'react';
import DestinationForm from '../components/DestinationForm';
import axios from 'axios';

class DestinationFormContainer extends React.Component {

    submit(values) {
        console.log('Submitting destination: ' + values + '...');

        axios.post('/api/destinations', values)
            .then(response => {
                console.log('Created destination: ' + JSON.stringify(response.data));
            })
            .catch(error => {
                console.error('Error creating destination: ' + error);
            });
    }

    getDestination(id) {
        console.log('Getting destination with id ' + id + '...');

        axios.get('/api/destinations/' + id)
            .then(response => {
                console.log('Got destination: ' + JSON.stringify(response.data));
                this.setState(response.data);
            })
            .catch(error => {
                console.error('Error getting destination: ' + error);
            });
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.getDestination(id);
        }
    }

    render() {
        return (
            <DestinationForm onSubmit={this.submit} initialValues={this.state} />
        );
    }
}

export default DestinationFormContainer;
