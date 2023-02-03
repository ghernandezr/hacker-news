interface Post {
  id: string;
  author: string;
  storyTitle: string;
  storyUrl: string;
  createdAt: string;
  isFaves?: boolean;
}

export default Post;
