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

let RenameListDialog = ({ handleSubmit, pristine, submitting, closeDialog, showDialog }) => (
    <Dialog
        open={showDialog}
        onClose={closeDialog}
        aria-labelledby='form-dialog-title'
    >
        <form onSubmit={handleSubmit}>
            <DialogTitle id='form-dialog-title'>Rename List</DialogTitle>
            <DialogContent>
                <Field name='name' type='text' component={TextField} label='Name' />
            </DialogContent>
            <DialogActions>
                <Button type='submit' disabled={pristine || submitting} color='primary'>Rename</Button>
                <Button onClick={closeDialog}>Cancel</Button>
            </DialogActions>
        </form>
    </Dialog>
)

RenameListDialog.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    closeDialog: PropTypes.func.isRequired,
    showDialog: PropTypes.bool.isRequired,
    initialValues: PropTypes.object
};

RenameListDialog = reduxForm({
    form: 'renameList', // unique ID for this form
    enableReinitialize: true,
    validate
})(RenameListDialog);

export default RenameListDialog;
