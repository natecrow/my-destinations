import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { validate } from './../validation/validateDestinationList';
import TextField from './fields/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

let ListFormDialog = ({ handleSubmit, pristine, submitting, handleListFormClose, showListFormDialog }) => (
    <Dialog
        open={showListFormDialog}
        onClose={handleListFormClose}
        aria-labelledby='form-dialog-title'
    >
        <form onSubmit={handleSubmit}>
            <DialogTitle id='form-dialog-title'>Create List of Destinations</DialogTitle>
            <DialogContent>
                <Field name='name' type='text' component={TextField} label='Name' />
            </DialogContent>
            <DialogActions>
                <Button type='submit' disabled={pristine || submitting} color='primary'>Submit</Button>
                <Button onClick={handleListFormClose}>Cancel</Button>
            </DialogActions>
        </form>
    </Dialog>
)

ListFormDialog.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    handleListFormClose: PropTypes.func.isRequired,
    showListFormDialog: PropTypes.bool.isRequired,
};

ListFormDialog = reduxForm({
    form: 'destinationsList', // unique ID for this form
    validate
})(ListFormDialog);

export default ListFormDialog;
