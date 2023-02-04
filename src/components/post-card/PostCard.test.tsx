import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
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

describe("PostCard", () => {
  test("displays post details and has a button to mark as favorite", () => {
    const { getByTestId, queryByTestId } = render(<PostCard post={post} />);

    const TimeIcon = getByTestId("time-icon");
    expect(TimeIcon).toBeInTheDocument();

    const FilledIcon = queryByTestId("filled-icon");
    expect(FilledIcon).not.toBeInTheDocument();

    const EmptyIcon = getByTestId("empty-icon");
    expect(EmptyIcon).toBeInTheDocument();

    const PostInfo = getByTestId("post-info");
    expect(PostInfo.innerHTML).toContain(`by ${post.author}`);

    const PostTitle = getByTestId("post-title");
    expect(PostTitle.innerHTML).toContain(post.storyTitle);
  });

  test("mark the post as favorite", () => {
    const { getByTestId, queryByTestId } = render(<PostCard post={post} />);

    //Get the empty icon button
    const EmptyIcon = getByTestId("empty-icon");
    expect(EmptyIcon).toBeInTheDocument();

    //Fire click on EmptyIcon to mark as favorite
    fireEvent.click(EmptyIcon);

    //Check if FilledIcon appears
    const FilledIcon = queryByTestId("filled-icon");
    expect(FilledIcon).toBeInTheDocument();

    //Check that the EmptyIcon hidde
    expect(EmptyIcon).not.toBeInTheDocument();
  });

  test("remove the post from favorite", async () => {
    const { queryByTestId } = render(<PostCard post={post} />);

    //Get the empty icon button
    let EmptyIcon = queryByTestId("empty-icon");
    expect(EmptyIcon).toBeInTheDocument();

    //Fire click on EmptyIcon to mark as favorite
    fireEvent.click(EmptyIcon!);

    //Check if FilledIcon appears
    const FilledIcon = queryByTestId("filled-icon");
    expect(FilledIcon).toBeInTheDocument();

    //Check that the EmptyIcon hidde
    expect(EmptyIcon).not.toBeInTheDocument();

    //Fire click on FilledIcon to remove as favorite
    fireEvent.click(FilledIcon!);

    //Check if the buttons switch correctly
    expect(FilledIcon).not.toBeInTheDocument();

    //Check that EmptyIcon is present
    EmptyIcon = queryByTestId("empty-icon");
    expect(EmptyIcon).toBeInTheDocument();
  });
});
