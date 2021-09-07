import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class PostEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedPost: this.props.body
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if( this.state.editedPost !== '' ) {
            this.props.onEditPost(this.state.editedPost, this.props.id);

            this.props.handleClickOpen(false);
        }
    }
    handleChange = (event) => {
        this.setState({editedPost: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="outlined-multiline-static"
                    value={this.state.editedPost}
                    onChange={this.handleChange}
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    style={{width:'500px'}}
                />
                <div>
                    <Button onClick={() => this.props.handleClickOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Save
                    </Button>
                </div>
            </form>
        )
    }
}

export default PostEdit;