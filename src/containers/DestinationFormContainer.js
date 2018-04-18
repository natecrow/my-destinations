import React from 'react';
import DestinationForm from '../components/DestinationForm';
import axios from 'axios';

class DestinationFormContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            destination: {}
        }

        this.submit = this.submit.bind(this);
        this.deleteDestination = this.deleteDestination.bind(this);
    }

    submit(values) {
        console.log('Submitting destination: ' + JSON.stringify(values) + '...');

        if (values.id) {
            axios.put('/api/destinations/' + values.id, values)
                .then(response => {
                    if (response) {
                        console.log('Updated destination with ID ' + values.id);
                        this.setState({
                            destination: {}
                        });
                        this.props.history.push('/destinations');
                    }
                })
                .catch(error => {
                    console.error('Error updating destination: ' + error);
                });
        } else {
            axios.post('/api/destinations', values)
                .then(response => {
                    console.log('Created destination: ' + JSON.stringify(response.data));
                    this.setState({
                        destination: {}
                    });
                    this.props.history.push('/destinations');
                })
                .catch(error => {
                    console.error('Error creating destination: ' + error);
                });
        }
    }

    deleteDestination(id) {
        if (id) {
            axios.delete('/api/destinations/' + id)
                .then(response => {
                    if (response) {
                        console.log('Deleted destination with ID ' + id);
                        this.setState({
                            destination: {}
                        });
                        this.props.history.push('/destinations');
                    }
                })
                .catch(error => {
                    console.error('Error deleting destination with ID ' + id + ': ' + error);
                })
        }
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
            <DestinationForm onSubmit={this.submit} initialValues={this.state}
                deleteDestination={this.deleteDestination} />
        );
    }
}

export default DestinationFormContainer;
