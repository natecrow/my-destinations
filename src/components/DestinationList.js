import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DestinationListHeader from './DestinationListHeader';

let DestinationList = ({ destinations, deleteDestination, name, deleteList, listId, openRenameListDialog }) => (
    <div>
        <DestinationListHeader name={name} deleteList={deleteList} listId={listId} openRenameListDialog={openRenameListDialog} />
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Destination</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>When to Visit</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {destinations.map(destination =>
                    <TableRow key={destination.id}>
                        <TableCell><a href={'destinations/' + destination.id}>{destination.name}</a></TableCell>
                        {!destination.city && !destination.state &&
                            <TableCell></TableCell>
                        }
                        {destination.city && !destination.state &&
                            <TableCell>{destination.city}</TableCell>
                        }
                        {!destination.city && destination.state &&
                            <TableCell>{destination.state}</TableCell>
                        }
                        {destination.city && destination.state &&
                            <TableCell>{destination.city}, {destination.state}</TableCell>
                        }
                        <TableCell>{destination.dateToVisit}</TableCell>
                        <TableCell><a href={destination.linkToWebsite}>{destination.linkToWebsite}</a></TableCell>
                        <TableCell><Button onClick={() => deleteDestination(destination.id)}>Delete</Button></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </div>
)

DestinationList.propTypes = {
    destinations: PropTypes.array.isRequired,
    deleteDestination: PropTypes.func.isRequired,
    deleteList: PropTypes.func,
    name: PropTypes.string,
    listId: PropTypes.string,
    openRenameListDialog: PropTypes.func
}

export default DestinationList;
