import { useSearchNewsParams } from "../store/store";

/**
 * Process all the pages and filter the post with all params filled
 * @param pages Pages from the server
 * @returns
 */
export const useProcessPost = (pages: any) => {
  const faves = useSearchNewsParams((state) => state.faves);

  const postFilter = (post: any) =>
    post.author && post.created_at && post.story_title && post.story_url;

  const posts = pages.map((page: any) => page.hits).flat(Infinity);

  return posts.filter(postFilter).map((post: any) => {
    const favesIndex = faves.findIndex(
      (fav) => fav.id.localeCompare(`${post.objectID}`) === 0
    );
    return {
      id: `${post.objectID}`,
      author: post.author,
      storyTitle: post.story_title,
      storyUrl: post.story_url,
      createdAt: post.created_at,
      isFaves: favesIndex !== -1,
    };
  });
};
