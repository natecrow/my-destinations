import React from 'react';
import { PropTypes } from 'prop-types';

let DestinationList = ({ destinations, deleteDestination }) => (
    <table>
        <thead>
            <tr>
                <th>Destination</th>
                <th>Location</th>
                <th>When to Visit</th>
                <th>Website</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {destinations.map(destination =>
                <tr key={destination.id}>
                    <td><a href={'destinations/' + destination.id}>{destination.name}</a></td>
                    {!destination.city && !destination.state &&
                        <td></td>
                    }
                    {destination.city && !destination.state &&
                        <td>{destination.city}</td>
                    }
                    {destination.city && destination.state &&
                        <td>{destination.city}, {destination.state}</td>
                    }
                    <td>{destination.dateTimeToVisit}</td>
                    <td>{destination.linkToWebsite}</td>
                    <td><button onClick={() => deleteDestination(destination.id)}>Delete</button></td>
                </tr>
            )}
        </tbody>
    </table>
)

DestinationList.propTypes = {
    destinations: PropTypes.any,
    deleteDestination: PropTypes.any
}

export default DestinationList;
