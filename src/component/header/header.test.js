import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./index";

import { commentDetails as response } from "../../constants";

afterEach(cleanup);

test("Render Header", () => {
  render(<Header authorName="ankur" author="Author" time="10 minutes ago" />);
});

test("Render Header with props", () => {
  const { getByText } = render(
    <Header authorName="Ankur" author="Author" time="10 minutes ago" />
  );
  const authorName = getByText("Ankur");
  const authorTag = getByText("Author");
  const time = getByText("10 minutes ago");
  expect(authorName && authorTag && time).toBeInTheDocument();
});

test("Render Header with props from response", () => {
  const { getByText } = render(
    <Header
      authorName={response.authorName}
      author={response.author}
      time={response.time}
    />
  );
  const authorName = getByText(response.authorName);
  const authorTag = getByText(response.author);
  const time = getByText(response.time);
  expect(authorName && authorTag && time).toBeInTheDocument();
});
