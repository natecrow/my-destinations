import React from 'react';
import { PropTypes } from 'prop-types';

let DestinationList = ({ destinations }) => (
    <table>
        <thead>
            <tr>
                <th>Destination</th>
                <th>Location</th>
                <th>When to Visit</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {destinations.map(destination =>
                <tr key={destination.id}>
                    <td>{destination.name}</td>
                    <td>{destination.address.city}, {destination.address.state}</td>
                    <td>{destination.dateTimeToVisit}</td>
                    <td>{destination.linkToWebsite}</td>
                </tr>
            )}
        </tbody>
    </table>
)

DestinationList.propTypes = {
    destinations: PropTypes.any
}

export default DestinationList;
