import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DestinationListHeader from './DestinationListHeader';

const EmptyDestinationList = ({ name, deleteList, listId, openRenameListDialog }) => (
    <div>
        <DestinationListHeader name={name} deleteList={deleteList} listId={listId} openRenameListDialog={openRenameListDialog} />
        <p>There are no destinations yet.</p>
        <Link to='/destinations/new'>
            <Button color='primary'>
                <AddIcon />Add one here
            </Button>
        </Link>
    </div>
);

EmptyDestinationList.propTypes = {
    name: PropTypes.string,
    deleteList: PropTypes.func,
    listId: PropTypes.string,
    openRenameListDialog: PropTypes.func
}

export default EmptyDestinationList;
