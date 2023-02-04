import { create } from "zustand";
import { persist } from "zustand/middleware";
import Post from "../model/Post";

interface SearchNewsParamsState {
  faves: Post[];
  query: string;
  addFaves: (post: Post) => void;
  removeFaves: (postId: string) => void;
  setQuery: (query: string) => void;
}

const addFaves = (faves: Post[], post: Post) => {
  const restFaves = faves.filter((fav) => fav.id.localeCompare(post.id) !== 0);
  return [...restFaves, post];
};

const removeFaves = (faves: Post[], postId: string) =>
  faves.filter((fave) => fave.id.localeCompare(postId) !== 0);

export const useSearchNewsParams = create(
  persist<SearchNewsParamsState>(
    (set) => ({
      query: "",
      faves: [],
      setQuery: (query: string) => set({ query }),
      addFaves: (post: Post) => {
        set((state) => ({ faves: addFaves(state.faves, post) }));
      },
      removeFaves: (postId: string) =>
        set((state) => ({ faves: removeFaves(state.faves, postId) })),
    }),
    {
      name: "food-storage", // unique name
    }
  )
);
