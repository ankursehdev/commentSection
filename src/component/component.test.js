import React from "react";
import { render, cleanup } from "@testing-library/react";
import { commentDetails } from "../constants";

import Comment from "./index";
afterEach(cleanup);

test("matches snapshot", () => {
  const { asFragment } = render(<Comment commentDetails={commentDetails} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Checking the comment text", () => {
  const { getByTestId } = render(<Comment commentDetails={commentDetails} />);

  const commentText = getByTestId("comment-text");
  expect(commentText).toBeInTheDocument();
});
