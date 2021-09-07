import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";
import React from "react";
import Comments from "./comments.component";

const Actions = (props) => {
  const btnColor = props.isliked === true ? "blue" : "";
  const btnBackground = props.isliked === true ? "rgba(12, 74, 133,0.3)" : "";

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardActions disableSpacing>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div>
            <IconButton
              aria-label="like"
              style={{
                borderRadius: 0,
                padding: "10px 30px",
                display: "flex",
                background: `${btnBackground}`,
              }}
              onClick={() => props.handleLike(props.id)}
            >
              <ThumbUpAltTwoToneIcon style={{ color: `${btnColor}` }} />
              <Typography
                style={{ marginLeft: "5px", color: `${btnColor}` }}
                color="textPrimary"
                component="p"
              >
                {props.isliked === false ? "Like" : "Unlike"}
              </Typography>
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show comments"
              style={{ borderRadius: 0, padding: "10px 30px", display: "flex" }}
            >
              <ChatBubbleOutlineIcon />
              <Typography
                style={{ marginLeft: "5px" }}
                color="textPrimary"
                component="p"
              >
                Comment
              </Typography>
            </IconButton>
          </div>

          <div>
            <IconButton
              aria-label="share"
              style={{ borderRadius: 0, padding: "10px 50px" }}
            >
              <ShareIcon />
              <Typography
                style={{ marginLeft: "5px" }}
                color="textPrimary"
                component="p"
              >
                Share
              </Typography>
            </IconButton>
          </div>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider variant="middle" />
          <Comments
            proPic={props.proPic}
            userId={props.userId}
            onAddthought={props.onAddthought}
            comments={props.comments}
          />
        </CardContent>
      </Collapse>
    </>
  );
};

export default Actions;
