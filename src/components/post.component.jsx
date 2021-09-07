import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

import React from "react";
import Actions from "./actions.component";
import PostEdit from "./post-edit.component";
import SimpleDialog from "./simpleDialog.component";
import PostSettingMenu from "./postSettingMenu.component";
import PostDelete from "./post-delete.component";
import { Paper } from "@material-ui/core";

const Post = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [deletePost, setDeletePost] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = (value) => {
    setAnchorEl(value);
    setOpenModal(value);
    setDeletePost(value);
  };

  return (
    <>
    <Paper>
      <SimpleDialog title="Edit Post" open={Boolean(openModal)}>
        <PostEdit
          id={props.id}
          body={props.body}
          onEditPost={props.editPost}
          handleClickOpen={handleClickOpen}
        />
      </SimpleDialog>

      <SimpleDialog title="Delete Post" open={Boolean(deletePost)}>
        <PostDelete
          id={props.id}
          onDeletePost={props.onDeletePost}
          handleClickOpen={handleClickOpen}
        />
      </SimpleDialog>
      <div>
        <Container
          maxWidth="sm"
          style={{ backgroundColor: "lightgray", padding: "0.5em" }}
        >
          <Card variant="outlined">
            <CardHeader
              avatar={<Avatar alt="Avatar" src={props.proPic} />}
              action={
                <div>
                  <PostSettingMenu
                    id={props.id}
                    handleClose={handleClose}
                    handleClick={handleClick}
                    anchorEl={anchorEl}
                    onEditPost={() => setOpenModal(true)}
                    onDeletePost={() => setDeletePost(true)}
                  />
                </div>
              }
              title={props.name}
              subheader={`posted ${props.time}h ago`}
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                {props.body}
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: "10px",
                marginRight: "30px",
              }}
            >
              <Typography variant="subtitle2" color="textPrimary">
                💖😲👍Refayet and {props.like} others
              </Typography>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                style={{ color: "#a6acb3", cursor: "pointer" }}
              >
                {props.comments.length} Comments
              </Typography>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                style={{ color: "#a6acb3" }}
              >
                {props.share === null ? "" : props.share}
              </Typography>
            </div>

            <Actions
              isliked={props.isliked}
              handleLike={props.handleLike}
              id={props.id}
              proPic={props.proPic}
              userId={props.id}
              onAddthought={props.onAddthought}
              comments={props.comments}
            />
          </Card>
        </Container>
      </div>
      </Paper>
    </>
  );
};

export default Post;
