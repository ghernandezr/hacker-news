import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PostCard } from "../../components";
import Post from "../../model/Post";
import Container from "../../components/container/Container";

export default {
  title: "Components/PostCard",
  component: PostCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PostCard>;

const post: Post = {
  author: "scotteric",
  story_title: "Chinese surveillance balloon spotted over U.S., Pentagon says",
  story_url:
    "https://www.washingtonpost.com/national-security/2023/02/02/chinese-spy-balloon-pentagon/",
  created_at: "2023-02-03T01:36:40.000Z",
};

export const DefaultPostCard = () => (
  <Container style={{ margin: 40 }}>
    <PostCard post={post} />
  </Container>
);

export const FavesPostCard = () => (
  <Container style={{ margin: 40 }}>
    <PostCard post={{ ...post, isFaves: true }} />
  </Container>
);

export const IterativeFavesPostCard = () => {
  const [isFaves, setIsFaves] = React.useState(false);

  const handleOnFavesClick = (post: Post) => {
    setIsFaves(!post.isFaves);
  };

  return (
    <Container style={{ margin: 40 }}>
      <PostCard
        onFavesClick={handleOnFavesClick}
        post={{ ...post, isFaves: isFaves }}
      />
    </Container>
  );
};
