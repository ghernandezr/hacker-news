import React from "react";
import { DateTime } from "luxon";

import styles from "./PostCard.module.css";

import { ReactComponent as TimeIcon } from "../../assets/images/time.svg";
import { ReactComponent as FilledFavesIcon } from "../../assets/images/filled-faves.svg";
import { ReactComponent as EmptyFavesIcon } from "../../assets/images/empty-faves.svg";

import Post from "../../model/Post";

interface PostCardProps extends React.ComponentPropsWithoutRef<"div"> {
  post: Post;
  onFavesClick?: (post: Post) => void;
}

const PostCard = (props: PostCardProps) => {
  const { post, onFavesClick } = props;
  const [isFaves, setIsFaves] = React.useState(post.isFaves);

  const handleFavesClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFaves(!isFaves);
    // TODO: Search how to configure Babel + Storybook to accept the ? opperator
    if (onFavesClick) {
      onFavesClick({ ...post, isFaves: !isFaves });
    }
  };

  return (
    <a className={styles.post__link} target="_blank" href={post.storyUrl}>
      <div className={styles.post}>
        <div className={styles.post__info}>
          <div className={styles["post__info-time"]} data-testid="post-info">
            <TimeIcon data-testid="time-icon" />
            <p className={styles["post__info-time-text"]}>{`${DateTime.fromISO(
              post.createdAt
            ).toRelative()} by ${post.author}`}</p>
          </div>
          <p className={styles["post__info-title"]} data-testid="post-title">
            {post.storyTitle}
          </p>
        </div>
        <div className={styles.post__faves}>
          {isFaves && (
            <FilledFavesIcon
              data-testid="filled-icon"
              onClick={handleFavesClick}
            />
          )}
          {!isFaves && (
            <EmptyFavesIcon
              data-testid="empty-icon"
              onClick={handleFavesClick}
            />
          )}
        </div>
      </div>
    </a>
  );
};

export default PostCard;
