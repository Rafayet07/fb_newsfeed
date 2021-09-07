import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const SimpleDialog = (props) => {
    const { title, children, open } = props;

    return (
        <Dialog open={open} aria-labelledby="form-dialog-title" maxWidth="md">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default SimpleDialog;