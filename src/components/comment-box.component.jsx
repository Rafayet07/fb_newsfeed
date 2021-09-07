import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";
import Button from '@material-ui/core/Button';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getToDefault();
  }
  getToDefault = () => {
    return{
      comments: ""
    }
  };
  handleChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.comments !== "") {
      const comment = {
        userId: this.props.userId,
        id: Math.random(),
        proPic: this.props.proPic,
        body: this.state.comments,
      };
      this.setState(this.getToDefault());
      
      this.props.onAddthought(comment,this.props.userId);

      }

    }
  

  render() {
    return (
      <div>
        <div style={{ display: "flex", margin: "10px" }}>
          <Avatar
            alt="Avatar"
            src={this.props.proPic}
            style={{ margin: "5px" }}
          />
          <form
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
            style={{ width: "480px", display: "flex" }}
          >
            <TextField
              color="primary"
              style={{ margin: .5,width:'40ch' }}
              placeholder="Give Your Thoughts"
              onChange={this.handleChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.comments}
              variant="outlined"
            />
            <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        endIcon={<SendIcon style={{fontSize: '30px'}} />}
                        type='submit'
                        style={{
                            marginLeft: '10px',
                            backgroundColor: '#4685b3'
                        }}
                    />
          </form>
        </div>
      </div>
    );
  }
}
export default CommentBox;
