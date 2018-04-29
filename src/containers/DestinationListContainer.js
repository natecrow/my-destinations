import React from 'react';
import DestinationList from './../components/DestinationList';
import axios from 'axios';

let destinations = [];

class DestinationListContainer extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            destinations
        }

        this.deleteDestination = this.deleteDestination.bind(this);
    }

    deleteDestination(id) {
        axios.delete('/api/destinations/' + id)
            .then(response => {
                if (response) {
                    console.log('Deleted destination with ID ' + id);
                    destinations = destinations.filter(destination => destination.id !== id);
                    this.setState({ destinations: destinations });
                }
            })
            .catch(error => {
                console.error('Error deleting destination with ID ' + id + ': ' + error);
            })
    }

    componentWillMount() {
        axios.get('/api/destinations')
            .then(response => {
                if (response) {
                    // Store destinations from backend in the state
                    destinations = response.data._embedded.destinations.map(destination => {
                        let city = null;
                        let state = null;
                        let dateToVisit = null;
                        let linkToWebsite = null;
                        if (destination.address != null) {
                            if (destination.address.city != null) {
                                city = destination.address.city;
                            }
                            if (destination.address.state != null) {
                                state = destination.address.state;
                            }
                        }
                        if (destination.dateToVisit != null) {
                            dateToVisit = destination.dateToVisit;
                        }
                        if (destination.linkToWebsite != null) {
                            linkToWebsite = destination.linkToWebsite;
                        }

                        return {
                            id: destination.id,
                            name: destination.name,
                            city: city,
                            state: state,
                            dateToVisit: dateToVisit,
                            linkToWebsite: linkToWebsite
                        };
                    });
                    this.setState({ destinations: destinations });
                    console.log(this.state);
                }
            })
            .catch(error => {
                console.log('Error getting destinations: ' + error);
            });
    }

    render() {
        return (
            <DestinationList destinations={this.state.destinations}
                deleteDestination={this.deleteDestination} />
        );
    }
}

export default DestinationListContainer;
