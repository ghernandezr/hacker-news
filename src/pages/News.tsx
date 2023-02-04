import React from "react";
import InfiniteScroll from "react-infinite-scroller";

import styles from "./News.module.css";

import { PostCard } from "../components";
import { SelectContainer } from "../containers";

import { useProcessPost } from "../hooks/useProcessPost";
import { useSearchByDate } from "../hooks/useSearchByDate";

import Post from "../model/Post";
import { useSearchNewsParams } from "../store/store";

const News = () => {
  const { data, fetchNextPage, hasNextPage } = useSearchByDate();
  const posts = useProcessPost(data ? data.pages : []);
  const addFaves = useSearchNewsParams((state) => state.addFaves);
  const removeFaves = useSearchNewsParams((state) => state.removeFaves);

  const handleFavesClick = (post: Post) => {
    if (post.isFaves) {
      addFaves(post);
      return;
    }
    removeFaves(post.id);
  };

  const generatePostItems = () => {
    return posts.map((post: Post, index: number) => {
      return (
        <PostCard
          key={`${post.id}-${index}`}
          post={post}
          onFavesClick={handleFavesClick}
        />
      );
    });
  };

  return (
    <div>
      <SelectContainer />
      <div>
        <InfiniteScroll
          pageStart={0}
          className={styles.news}
          loadMore={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {generatePostItems()}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default News;
