import React from "react";
import CommentBox from "./comment-box.component";
import Comment from "./comment.component";

const Comments = (props) => {
  return(
    <div>
      <div>
        {props.comments.map((comment) => (
          <Comment
            key={comment.id}
            proPic={comment.proPic}
            body={comment.body}
          />
        ))}
      </div>
      <div>
        <CommentBox
          onAddthought={props.onAddthought}
          proPic={props.proPic}
          userId={props.userId}
        />
      </div>
    </div>
  );
};
export default Comments;
