import React from "react";

const CommentHeader = ({ authorName, author, time }) => {
  return (
    <header className="content-section-header" data-header="header">
      {authorName && <h4 className="author-name">{authorName}</h4>}
      {author && <span className="commentor">{author}</span>}
      {time && (
        <time className="time">
          <small>&#9679;</small> {time}
        </time>
      )}
    </header>
  );
};

export default CommentHeader;
