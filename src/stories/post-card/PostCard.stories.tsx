import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Container, PostCard } from "../../components";
import Post from "../../model/Post";

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

const bigTitle =
  "En la actualidad, vivimos en un mundo cada vez más digital y conectado, lo que significa que el aprendizaje también ha evolucionado y cambiado. La tecnología ha abierto nuevas posibilidades para la educación, pero también presenta nuevos desafíos. Es importante tener en cuenta que el aprendizaje en la era digital es fundamental para garantizar que los estudiantes estén preparados para enfrentar los retos del futuro.";

export const FavesPostCardBigTitle = () => (
  <Container style={{ margin: 40 }}>
    <PostCard post={{ ...post, story_title: bigTitle, isFaves: true }} />
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
