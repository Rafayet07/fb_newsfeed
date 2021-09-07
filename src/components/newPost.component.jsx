import React from "react";
import TextField from "@material-ui/core/TextField";

class PostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getToDefault();
  }
  getToDefault = () => {
    return {
      name: "",
      body: "",
    };
  };

  // handleName = (event) => {
  //   this.setState(
  //     { name: event.target.value },
  //     console.log(event.target.value)
  //   );
  // };
  handleBody = (event) => {
    this.setState(
      { body: event.target.value },
      console.log(event.target.value)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.body !== "") {
      const post = {
        userId: Math.random(),
        name: 'Akash Chowdhury',
        proPic: "https://i.ibb.co/FVvNzcr/img-1.jpg",
        body: this.state.body,
        time: 2,
        like: 23,
        isliked: false,
        share: "4 shares",
        comments: [
          {
            userId: 2,
            proPic: "https://i.ibb.co/VmbSpxH/img-2.jpg",
            id: 1,
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          },
        ],
      };
      this.setState(this.getToDefault());

      this.props.editPost(post, 0);
    }
  };

  render() {
    return (
      <div >
        <form
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
          style={{ width: "480px", display: "inline-block",'marginBottom':"5px"}}
        >
          {/* <TextField
            color="primary"
            style={{ margin: 0.5, width: "40ch" }}
            placeholder="Give name"
            onChange={this.handleName}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.name}
            variant="outlined"
          /> */}
          <TextField
            color="primary"
            style={{ margin: 0.5, width: "65ch" }}
            placeholder="What's On Your Mind,Akash?"
            onChange={this.handleBody}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.body}
            variant="outlined"
          />
        </form>
      </div>
    );
  }
}
export default PostBox;
