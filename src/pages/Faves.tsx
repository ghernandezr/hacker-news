import React from "react";
import { PostCard } from "../components";
import Post from "../model/Post";
import { useSearchNewsParams } from "../store/store";
import styles from "./Faves.module.css";
const Faves = () => {
  const faves = useSearchNewsParams((state) => state.faves);
  const removeFromFaves = useSearchNewsParams((state) => state.removeFromFaves);

  const handleFavesClick = (post: Post) => {
    removeFromFaves(post.id);
  };

  const generatePostItems = () => {
    return faves.map((post: Post) => {
      return (
        <PostCard key={post.id} post={post} onFavesClick={handleFavesClick} />
      );
    });
  };

  return <div className={styles.faves}>{generatePostItems()}</div>;
};

export default Faves;
