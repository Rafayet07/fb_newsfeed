import { Card, Paper,CardHeader,CardContent, Avatar, Button, Divider } from "@material-ui/core";
import React from "react";
import PostBox from "./newPost.component";
import Post from "./post.component";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.newsfeed,
      expanded: false,
    };
  }
  handleLike = (i) => {
    const post = this.state.posts;
    if (post[i - 1].isliked) {
      post[i - 1].isliked = false;
      post[i - 1].like--;
    } else {
      post[i - 1].isliked = true;
      post[i - 1].like++;
    }
    this.setState({
      posts: post,
    });
  };
  handleEditPost = (editedPost, postId) => {
    const post = this.state.posts;
    post[postId - 1].body = editedPost;
    this.setState({
      posts: this.state.posts,
    });
  };
  handleDeletePost = (postId) => {
    const Posts = this.state.posts;
    delete Posts[postId - 1];

    this.setState({
      posts: this.state.posts,
    });
  };

  handleNewComment = (comment, i) => {
    const { comments } = this.state.posts[i - 1];
    comments.push(comment);
    this.setState({
      posts: this.state.posts,
    });
  };
  // useEffect(() => {
  //   this.props.editPost
  // };[this.props.newsfeed])
  

  render() {
    return (
      <> 
      <Paper elevation={0} variant="elevation" square style={{padding:'3px'}}>
      <Card varient="outlined" style={{width:"600px",marginLeft:'455px',background:'rgba(255,85,255,0.3)'}}>
      <CardHeader
      avatar={<Avatar alt="Avatar" src={'https://i.ibb.co/FVvNzcr/img-1.jpg'} />}
      title='ADD NEW POST'
      style={{height:'14px'}}
      >

      </CardHeader>
        <Divider />
      <CardContent>

        <PostBox editPost={this.props.editPost} />
        
        <div>
       <Button variant="contained" color="primary" size="small" style={{padding:'3px',marginRight:'100px'}}>📹Live Video</Button>
       <Button variant="contained" color="default" size="small" style={{padding:'3px',marginRight:'100px'}}> 📸Photo/Video</Button>
       <Button variant="contained" color="secondary" size="small" style={{padding:'3px'}}> 😊Feeling/Activity</Button>
        </div>
      </CardContent>

      </Card>

      </Paper>
       
          {this.state.posts.map(({ userId, ...others }) => (
            <Post
              key={userId}
              id={userId}
              editPost={this.handleEditPost}
              onAddthought={this.handleNewComment}
              handleLike={this.handleLike}
              onDeletePost={this.handleDeletePost}
              {...others}
            />
            
          ))}
      </>
    );
  }
}

export default Posts;
