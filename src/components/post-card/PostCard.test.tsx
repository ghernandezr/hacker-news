import React from "react";
import { render } from "@testing-library/react";
import PostCard from "./PostCard";
import Post from "../../model/Post";

const post: Post = {
  id: "1",
  author: "scotteric",
  storyTitle: "Chinese surveillance balloon spotted over U.S., Pentagon says",
  storyUrl:
    "https://www.washingtonpost.com/national-security/2023/02/02/chinese-spy-balloon-pentagon/",
  createdAt: "2023-02-03T01:36:40.000Z",
};

test("renders PostCard component to have time icon", () => {
  const { getByTestId } = render(<PostCard post={post} />);

  const TimeIcon = getByTestId("time-icon");
  expect(TimeIcon).toBeInTheDocument();
});

test("renders PostCard component to not have filled icon", () => {
  const { queryByTestId } = render(<PostCard post={post} />);

  const FilledIcon = queryByTestId("filled-icon");
  expect(FilledIcon).not.toBeInTheDocument();
});

test("renders PostCard component to have empty icon", () => {
  const { getByTestId } = render(<PostCard post={post} />);

  const EmptyIcon = getByTestId("empty-icon");
  expect(EmptyIcon).toBeInTheDocument();
});

test("renders PostCard component to have the author info", () => {
  const { getByTestId } = render(<PostCard post={post} />);

  const PostInfo = getByTestId("post-info");
  expect(PostInfo.innerHTML).toContain(`by ${post.author}`);
});

test("renders PostCard component to have the post title info", () => {
  const { getByTestId } = render(<PostCard post={post} />);

  const PostTitle = getByTestId("post-title");
  expect(PostTitle.innerHTML).toContain(post.storyTitle);
});
