import React from "react";
import { render, cleanup } from "@testing-library/react";
import ReplyCount from "./index";

import { commentDetails as response } from "../../constants";

afterEach(cleanup);

test("Render Reply section properly", () => {
  render(<ReplyCount type="count" count={response.numberOfReplies} />);
});

test("Render Reply section with down type", () => {
  const { getByText } = render(
    <ReplyCount type="down" count={response.downVotes} />
  );
  const downVotesText = getByText(`${response.downVotes}`);
  expect(downVotesText).toBeInTheDocument();
});

test("Render Reply section with up type", () => {
  const { getByText } = render(
    <ReplyCount type="up" count={response.upVotes} />
  );
  const upVotesText = getByText(`${response.upVotes}`);
  expect(upVotesText).toBeInTheDocument();
});

test("Taking Count snapshot", () => {
  const { container } = render(
    <ReplyCount type="count" count={response.numberOfReplies} />
  );
  expect(container).toMatchSnapshot();
});
