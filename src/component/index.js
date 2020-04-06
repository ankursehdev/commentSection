import React from "react";
import "./Index.scss";

import Header from "./header";
import ReplyCount from "./replySection";

const Comment = ({
  commentDetails: {
    commentText,
    authorName,
    author,
    time,
    numberOfReplies,
    upVotes,
    downVotes,
  },
}) => {
  return (
    <div className="comment-wrapper">
      <section className="comment-section">
        <figure className="avatar">
          <img
            src="https://cdn-images-1.medium.com/fit/c/72/72/0*B0gTOtTQdksop1vG."
            className="avatar-image"
            alt="Profile"
          />
        </figure>

        <section className="content-section">
          <Header authorName={authorName} author={author} time={time} />

          {commentText && (
            <div className="comment-body">
              <p data-testid="comment-text">{commentText}</p>
            </div>
          )}

          <div className="actions">
            <button onClick={() => alert("clicked")}>Reply</button>
            <ReplyCount
              type="count"
              count={numberOfReplies}
              onClick={() => alert("Number of replies clicked")}
            />
            <ReplyCount
              type="up"
              count={upVotes}
              onClick={() => alert("up clicked")}
            />
            <ReplyCount
              type="down"
              count={downVotes}
              onClick={() => alert("down clicked")}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Comment;
