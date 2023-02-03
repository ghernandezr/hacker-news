import React from "react";
import { DateTime } from "luxon";
import styles from "./PostCard.module.css";
import Post from "../../model/Post";

import { ReactComponent as TimeIcon } from "../../assets/images/time.svg";
import { ReactComponent as FilledFavesIcon } from "../../assets/images/filled-faves.svg";
import { ReactComponent as EmptyFavesIcon } from "../../assets/images/empty-faves.svg";

interface PostCardProps extends React.ComponentPropsWithoutRef<"div"> {
  post: Post;
  onFavesClick?: (post: Post) => void;
}

const PostCard = (props: PostCardProps) => {
  const { post, onFavesClick } = props;

  const handleFavesClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    // TODO: Search how to configure Babel + Storybook to accept the ? opperator
    if (onFavesClick) {
      onFavesClick(post);
    }
  };

  return (
    <a
      className={styles.post__link}
      target="_blank"
      href={post.story_url.toString()}
    >
      <div className={styles.post}>
        <div className={styles.post__info}>
          <div className={styles["post__info-time"]}>
            <TimeIcon />
            <p className={styles["post__info-time-text"]}>{`${DateTime.fromISO(
              post.created_at.toString()
            ).toRelative()} by ${post.author}`}</p>
          </div>
          <p className={styles["post__info-title"]}>{post.story_title}</p>
        </div>
        <div className={styles.post__faves}>
          {post.isFaves && <FilledFavesIcon onClick={handleFavesClick} />}
          {!post.isFaves && <EmptyFavesIcon onClick={handleFavesClick} />}
        </div>
      </div>
    </a>
  );
};

export default PostCard;
