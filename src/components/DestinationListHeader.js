import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DestinationListHeader = ({ name, deleteList, listId }) => (
    <div>
        <h1>{name}</h1>
        {deleteList && <Button color='secondary' onClick={() => deleteList(listId)}>Delete List</Button>}
    </div>
);

DestinationListHeader.propTypes = {
    name: PropTypes.string.isRequired,
    deleteList: PropTypes.func,
    listId: PropTypes.string
}

export default DestinationListHeader;
