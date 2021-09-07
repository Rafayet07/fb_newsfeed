import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PostDelete = (props) => {
    const {id, onDeletePost, handleClickOpen } = props;

    return (
        <div>
            <Typography variant="body1" color="textPrimary" component="p">
                Do you really want to delete this post? This action will delete this post permanently.
            </Typography>
            <div>
                <Button onClick={() => handleClickOpen(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => onDeletePost(id)} color="secondary">
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default PostDelete;