import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const EmptyDestinationList = () => (
    <div>
        <p>There are no destinations yet.</p>
        <Link to='/destinations/new'>
            <Button color='primary'>
                <AddIcon />Add one here
            </Button>
        </Link>
    </div>
);

export default EmptyDestinationList;
