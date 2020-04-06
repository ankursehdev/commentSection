import React from "react";

const ReplyCount = ({ type, count, onClick }) => {
  //check if the key is present but value is 0.
  if (typeof count !== "undefined") {
    switch (type) {
      case "up":
        return (
          <button className="vote-up" onClick={onClick}>
            {count}
          </button>
        );
      case "down":
        return (
          <button className="vote-down" onClick={onClick}>
            {count}
          </button>
        );
      case "count":
        return (
          <button onClick={onClick}>
            <span className="reply-count">{count}</span> Replies
          </button>
        );
      default:
        return null;
    }
  }
  return null;
};

ReplyCount.defaultProps = {
  onClick: () => {
    console.log("default function");
  },
};

export default ReplyCount;
