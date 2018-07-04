import React from 'react';
import DestinationList from '../components/DestinationList';
import axios from 'axios';
import DestinationMapper from '../utils/DestinationMapper';
import EmptyDestinationList from '../components/EmptyDestinationList';

class DestinationListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            destinations: []
        };

        this.deleteDestination = this.deleteDestination.bind(this);
    }

    async deleteDestination(id) {
        try {
            const response = await axios.delete('/api/destinations/' + id);

            // Remove the deleted destination from the state
            if (response) {
                const destinations = this.state.destinations.filter(destination => destination.id !== id);
                this.setState({ destinations: destinations });
            }
        } catch (error) {
            console.error('Error deleting destination with ID ' + id + ': ' + error);
        }
    }

    async getAllDestinations() {
        try {
            const response = await axios.get('/api/destinations');

            // Store destinations from response in the state
            const destinationsFromResponse = response.data._embedded.destinations.map(destination => {
                return DestinationMapper.mapDestinationToList(destination);
            });
            this.setState({ destinations: destinationsFromResponse });
        } catch (error) {
            console.log('Error getting destinations: ' + error);
        }
    }

    componentDidMount() {
        this.getAllDestinations();
    }

    render() {
        if (this.state.destinations === undefined || this.state.destinations.length === 0) {
            return <EmptyDestinationList />;
        } else {
            return (
                <DestinationList destinations={this.state.destinations}
                    deleteDestination={this.deleteDestination} />
            );
        }
    }
}

export default DestinationListContainer;
