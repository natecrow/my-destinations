import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DestinationListHeader = ({ name, deleteList, listId, openRenameListDialog }) => (
    <div>
        <h1>{name}</h1>
        {deleteList && <Button color='secondary' onClick={() => deleteList(listId)}>Delete List</Button>}
        {openRenameListDialog && <Button color='primary' onClick={() => openRenameListDialog()}>Rename List</Button>}
    </div>
);

DestinationListHeader.propTypes = {
    name: PropTypes.string,
    deleteList: PropTypes.func,
    listId: PropTypes.string,
    openRenameListDialog: PropTypes.func,
}

export default DestinationListHeader;
