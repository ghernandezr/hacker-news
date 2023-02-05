import React from "react";
import { PostCard } from "../components";
import Post from "../model/Post";
import { useSearchNewsParams } from "../store/store";
import styles from "./Faves.module.css";
const Faves = () => {
  const faves = useSearchNewsParams((state) => state.faves);
  const removeFaves = useSearchNewsParams((state) => state.removeFaves);

  const handleFavesClick = (post: Post) => {
    removeFaves(post.id);
  };

  const generatePostItems = () => {
    return faves.map((post: Post) => {
      return (
        <PostCard key={post.id} post={post} onFavesClick={handleFavesClick} />
      );
    });
  };

  if (faves.length === 0) {
    return (
      <p className={styles["faves__no-data"]}>You have no favorites selected</p>
    );
  }

  return <div className={styles.faves}>{generatePostItems()}</div>;
};

export default Faves;
